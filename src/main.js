import { LogHelper } from "./log_helper_module";

const APIs = require("./APIs")

const { notificationTypesAndText } = require("./global_config");



const Log = new LogHelper();

const wait = async (sleep) => new Promise(async resolve => {
  const el = Log.WriteHtmlLine(`随机延迟: ${parseInt(sleep / 1000)} 秒  剩余: ${parseInt(sleep / 1000)} 秒`, true);
  let i = 0;
  setTimeout(resolve, sleep);
  let timeId = setInterval(() => {
    i++;
    el.innerHTML = `随机延迟: ${parseInt(sleep / 1000)} 秒  剩余: ${(parseInt(sleep / 1000)) - i} 秒`;
    if (i >= parseInt(sleep / 1000)) {
      clearInterval(timeId);
    }

  }, 1000);
});


async function LearnCourseId(courseId) {
  Log.WriteHtmlLine("===== 初始化中 =====", true, { borderBottom: true });
  const getCriterion = completion_criterion => completion_criterion == undefined || completion_criterion == "" ? "无" : completion_criterion;
  const StartTime = performance.now(); // 代码开始时间
  const StartCompletenessData = await new Promise(resolve => $.get(`https://lms.ouchn.cn/api/course/${courseId}/my-completeness`, (data, status, xhr) => status === "success" ? resolve(data) : { study_completeness: undefined }));
  const { study_completeness: StrartCompleteness } = StartCompletenessData;
  const CoursesModulesData = await new Promise(resolve => $.get(`https://lms.ouchn.cn/api/courses/${courseId}/modules`, (data, status, xhr) => status === "success" ? resolve(data) : { modules: [] }));
  const { modules: CoursesModulesModels } = CoursesModulesData;
  const CompletedCourseData = StartCompletenessData;
  const CompletedCourseModels = CompletedCourseData.completed_result.completed.learning_activity;
  for (let CoursesModulesModel of CoursesModulesModels) {
    let sleep = parseInt((Math.random() * (13 - 8) + 8) * 1000); // 取8000 - 13000之间的毫秒随机数
    await wait(sleep);
    Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name}(${CoursesModulesModel.id}) 当前进度${StrartCompleteness}% 随机延迟: <span class="time">${sleep}毫秒</span>`, true, { borderBottom: true });
    // 日志输出
    const LearnActivitieData = await new Promise(resolve => $.get(`https://lms.ouchn.cn/api/course/${courseId}/all-activities?module_ids=[${CoursesModulesModel.id}]&activity_types=learning_activities,exams,classrooms`, (data, status, xhr) => status === "success" ? resolve(data) : { learning_activities: [] }));
    const { learning_activities: LearnActivitieModels } = LearnActivitieData;
    try {
      for (const LearnActivitieModel of LearnActivitieModels) {
        const {
          completion_criterion,
          title,
          id, // activity_id
          uploads, // uploads[x].id
          syllabus_id,
          is_open, // is_open
          type: activityType, // activity_type
        } = LearnActivitieModel;
        if (CompletedCourseModels.indexOf(parseInt(id)) !== -1) {
          Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name} 模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)}(${id}) <span class="info">已完成 跳过</span>`, false, { borderBottom: true });
          continue;
        } else {
          Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name} 模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)}(${id}) <span class="log">任务开始</span>`, false, { borderBottom: true });
        }

        if (activityType === "online_video") {
          await wait(sleep);
        } else {
          await wait(3000);
        }

        await APIs.postLearningActiVities(id, activityType, is_open);
        await wait(sleep / 2);

        switch (activityType) {
          case "page":
            APIs.postActivitiesRead(id)
              .then(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`))
              .catch(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="error">失败</span>`));
            break;
          case "online_video":
            for (const VideoUploadModel of uploads) {
              for (const item of VideoUploadModel) {
                await Promise.all([
                  APIs.postActivitiesRead(id),
                  APIs.addVideoLearningRecords({
                    syllabus_id,
                    activity_id: id,
                    upload_id: VideoUploadModel.id,
                    start_at: 0,
                    end_at: item.duration
                  }),
                  APIs.postActivitiesRead(id, { start: 0, end: item.duration })
                ]).then(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`))
                  .catch(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="error">失败</span>`));
              };
            };
            break;
          case "material":
            for (const uploadModel of uploads) {
              APIs.postActivitiesRead(id, { upload_id: uploadModel.id })
                .then(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`))
                .catch(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="error">失败</span>`));
            }
            break;
          case "forum":
            const { topic_category: { id: CategoryId } } = await APIs.getCategoryId(id);
            APIs.postForum(CategoryId)
              .then(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`))
              .catch(() => Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="error">失败</span>`));
            debugger
            break;
          case "web_link":
            Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`);
            await APIs.postActivitiesRead(id);
            break;
          default:
            Log.WriteHtmlLine(`模块标题：${LearnActivitieModel.title}(${notificationTypesAndText[activityType]}) 完成标准：${getCriterion(completion_criterion)} <span class="warn">未完成</span> <br> 该任务无法完成。`);
            break;
        }
      }
    } catch (error) {
      Log.WriteHtmlLine(`<span class="error">代码出现了异常 按F12在控制台查看错误。</span>`, true, { borderBottom: true });
      console.error(error);
      await new Promise(resolve => setTimeout(resolve, sleep));
    }
    Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name}(${CoursesModulesModel.id}) 随机延迟: <span class="time">${sleep}毫秒</span>`, true, { borderBottom: true });
  }
  const EndCompletenessData = await new Promise(resolve => $.get(`https://lms.ouchn.cn/api/course/${courseId}/my-completeness`, (data, status, xhr) => status === "success" ? resolve(data) : { study_completeness: undefined }));
  const { study_completeness: EndCompleteness } = EndCompletenessData;
  const EndTime = performance.now(); // 代码结束时间
  Log.WriteHtmlLine(`学习前进度:${StrartCompleteness}% 学习后进度:${EndCompleteness}% 耗时: <span class="time">${((EndTime - StartTime) / 1000).toFixed(2)}秒</span>`);
}

$('#startTech').on({
  click: function () {
    const courseId = document.querySelector("#courseId").value;
    LearnCourseId(courseId);
    this.onclick = null;
    this.style.cursor = "no-drop";
    this.style.color = "#ccc";
  }
})