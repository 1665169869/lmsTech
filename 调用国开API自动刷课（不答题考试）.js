// ==UserScript==
// @name             调用国开API自动刷课（不答题考试）
// @namespace        http://ibaiyu.top/
// @version          1.1.2
// @description      调用国开API自动刷课（不答题考试） 支持自动访问线上链接、查看资料附件、观看视频、自动查看页面、自动参与发帖回帖。调用API接口实现！
// @author           蜜桃加乌龙
// @icon             data:image/png;base64,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
// @match          *://lms.ouchn.cn/course/*
// @license          GPL-3.0
// @source           https://scriptcat.org/script-show-page/986/
// @original-author  蜜桃加乌龙
// @original-license GPL-3.0
// @original-script  https://scriptcat.org/script-show-page/986/
// ==/UserScript==
function LogHelper() {
    const el_text = `
    <container-element class="normal"
        style="left: 10px; top: 50px; font: 14px Menlo, Monaco, Consolas, 'Courier New', monospace;">
        <style>
            /** 默认字体 */
            /** 输入框默认边距 */
            ul,
            ol {
                padding-left: 16px;
                margin: 0px;
            }

            a {
                color: #1890ff;
            }

            hr {
                border-style: solid;
                border-color: #63636346;
                border-width: 0px;
                border-bottom: 1px solid #63636346;
                margin-block-start: 1em;
                margin-block-end: 1em;
            }

            container-element.close {
                display: none;
            }

            container-element.minimize {
                min-width: unset;
            }

            container-element {
                position: fixed;
                top: 10%;
                left: 10%;
                z-index: 9999999999;
                text-align: left;
                min-width: 300px;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #636363;
                box-shadow: 0 0 24px -12px #3f3f3f;
                border-radius: 8px;
            }

            container-element .header {
                display: flex;
                align-items: center;
                background-color: white;
                border-radius: 8px 8px 0px 0px;
                user-select: none;
                padding: 4px;
                color: #000;
                line-height: normal;
                height: auto;
                position: static;
            }

            container-element .header .profile {
                flex: 1;
                cursor: move;
            }

            container-element .header .switch:hover,
            container-element .header .dropdown:hover {
                background-color: #f3f3f3;
            }

            container-element .header .close:hover {
                background-color: #ff000038;
            }

            container-element .header .switch,
            container-element .header .close {
                cursor: pointer;
            }

            container-element .header .dropdown {
                line-height: 24px;
            }

            container-element .header .switch,
            container-element .header .close,
            container-element .header .profile {
                display: inline-flex;
                align-items: center;
                padding: 0px 8px;
            }

            container-element .logo {
                width: 18px;
                height: 18px;
                cursor: pointer;
            }



            container-element .body {
                overflow: auto;
                width: auto;
                height: 100%;
            }

            script-panel-element {
                display: block;
                background-color: white;
                border-radius: 0px 0px 8px 8px;
                padding: 0px 8px 12px 8px;
                resize: vertical;
                overflow: auto;

            }

            script-panel-element .script-panel-body {
                padding: 0px 8px;
            }

            script-panel-element+script-panel-element {
                margin-top: 12px;
            }

            container-element .card+.card {
                margin-top: 12px;
            }


            container-element .card {
                background-color: white;
                border-radius: 2px;
                padding: 0px 8px;
                border: none;
            }

            container-element .separator {
                display: flex;
                align-items: center;
                text-align: center;
                padding-bottom: 4px;
            }

            container-element .separator::before,
            container-element .separator::after {
                content: '';
                flex: 1;
                border-bottom: 1px solid #63636346;
            }


            container-element .console {
                max-height: 300px;
                max-width: 400px;
                overflow: auto;
                background-color: #292929;
                padding: 12px 6px;
                color: #ececec;
                font-size: 12px;
            }

            container-element .console .item {
                padding: 3px 0px;
                border-radius: 2px;
            }

            container-element .console .item .time {
                color: #757575;
            }

            container-element .console .item .info {
                background-color: #2196f3a3;
            }

            container-element .console .item .warn {
                background-color: #ffc107db;
            }

            container-element .console .item .error {
                background-color: #f36c71cc;
            }

            container-element .console .item .debug,
            container-element .console .item .log {
                background-color: #9e9e9ec4;
            }

            container-element .console *::selection {
                background-color: #ffffff6b;
            }

            /* 设置滚动条的样式 */
            container-element ::-webkit-scrollbar {
                width: 10px;
                height: 10px;
            }

            /* 滚动槽 */
            container-element ::-webkit-scrollbar-track {
                background: #ffffffd8;
                border-radius: 4px;
                margin: 4px;
            }

            /* 滚动条滑块 */
            container-element ::-webkit-scrollbar-thumb {
                border-radius: 4px;
                background: rgba(0, 0, 0, 0.253);
                box-shadow: inset006pxrgba(0, 0, 0, 0.3);
            }
            .footer {
                text-align: center;
            }
            .footer a {
                text-decoration: none;
            }
        </style>
        <div class="message-container"></div><header-element class="header" data-title="菜单栏-可拖动区域">
            <div class="profile" data-title="菜单栏（可拖动区域）">日志输出</div>
        </header-element>
        <div class="body" style="max-height: 294px; max-width: 1870px;"><script-panel-element>
                <div class="separator">📄 日志输出</div>
                <div class="notes card"></div>
                <div class="configs card">
                    <div class="configs-body"></div>
                </div>
                <div class="script-panel-body">
                    <div class="card console">

                    </div>
                </div>
            </script-panel-element></div>
        <div class="footer">
            <a id="startTech" href="javascript:void(0);">点我开始</a>
        </div>
    </container-element>
    `;
    $('.wrapper').append(el_text);
    this.WriteHtmlLine = (htmlContent, alignCenter = false, border = { borderTop: false, borderBottom: false }) => {
        const el = document.createElement('div');
        container = document.querySelector('container-element');
        el.classList.add('item');
        el.innerHTML = htmlContent;
        if (alignCenter) {
            el.style.textAlign = "center";
        };
        if (border.borderTop) {
            el.style.borderTop = "1px solid #767676";
        }
        if (border.borderBottom) {
            el.style.borderBottom = "1px solid #767676";
        }
        console.log(htmlContent);
        const body = container.querySelector('.body');
        const logEl = container.querySelector('.console');
        body.scrollTop = body.scrollHeight;
        logEl.appendChild(el);
        logEl.scrollTop = logEl.scrollHeight;
    }
}

(function () {
    const Log = new LogHelper();
    const notificationTypesAndText = {
        "material": "参考资料",
        "web_link": "线上链接",
        "online_video": "音视频教材",
        "slide": "微课",
        "lesson": "录播教材",
        "homework": "作业",
        "forum": "讨论区",
        "chatroom": "iSlide 直播",
        "questionnaire": "调查问卷",
        "page": "页面",
        "course_invite": "課程邀請",
        "scorm": "SCORM"
    };
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
            let sleep = parseInt((Math.random() * (15 - 8) + 8) * 1000); // 取8000 - 15000之间的毫秒随机数
            await new Promise(resolve => setTimeout(resolve, sleep));
            Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name}(${CoursesModulesModel.id}) 当前进度${StrartCompleteness}% 随机延迟: <span class="time">${sleep}毫秒</span>`, true, { borderBottom: true });
            // 日志输出
            const LearnActivitieData = await new Promise(resolve => $.get(`https://lms.ouchn.cn/api/course/${courseId}/all-activities?module_ids=[${CoursesModulesModel.id}]&activity_types=learning_activities,exams,classrooms`, (data, status, xhr) => status === "success" ? resolve(data) : { learning_activities: [] }));
            const { learning_activities: LearnActivitieModels } = LearnActivitieData;
            try {
                for (let LearnActivitieModel of LearnActivitieModels) {
                    const { completion_criterion, type, title, id, uploads } = LearnActivitieModel;
                    if (CompletedCourseModels.indexOf(parseInt(id)) !== -1) {
                        Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name} 模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)}(${id}) <span class="info">已完成 跳过</span>`, false, { borderBottom: true });
                        continue;
                    } else {
                        await new Promise(resolve => setTimeout(resolve, sleep));
                        Log.WriteHtmlLine(`课程模块：${CoursesModulesModel.name} 模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)}(${id}) 任务开始`, false, { borderBottom: true });
                    }
                    switch (type) {
                        case "page":
                            await new Promise(resolve => $.post(`https://lms.ouchn.cn/api/course/activities-read/${id}`, {}, resolve));
                            Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`);
                            break;
                        case "online_video":
                            for (let VideoUploadModel of uploads) {
                                await new Promise(resolve => $.post(`https://lms.ouchn.cn/api/course/activities-read/${id}`, {}, resolve)); // 第一次的请求默认为没有参数。
                                for (let item of VideoUploadModel.videos) {
                                    await new Promise(resolve => setTimeout(resolve, sleep));
                                    await new Promise(resolve => $.ajax({
                                        type: "POST",
                                        url: `https://lms.ouchn.cn/api/course/activities-read/${id}`,
                                        contentType: "application/json",
                                        dataType: "JSON",
                                        data: JSON.stringify({ start: 0, end: item.duration }),
                                        success: resolve,
                                        error: resolve
                                    }));
                                }
                                Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`);
                            }
                            break;
                        case "material":
                            for (let uploadModel of uploads) {
                                await new Promise(resolve => $.ajax({
                                    type: "POST",
                                    url: `https://lms.ouchn.cn/api/course/activities-read/${id}`,
                                    contentType: "application/json",
                                    dataType: "JSON",
                                    data: JSON.stringify({ upload_id: uploadModel.id }),
                                    success: resolve
                                }));
                                Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`);
                            }
                            break;
                        case "forum":
                            if (title === "课程答疑讨论区") {
                                const { topic_category: { id: CategoryId } } = await new Promise(resolve => $.get(`https://lms.ouchn.cn/api/forum/${id}/category?fields=id`, {}, resolve));
                                await new Promise(resolve => $.ajax({
                                    type: "POST",
                                    url: `https://lms.ouchn.cn/api/topics`,
                                    contentType: "application/json",
                                    dataType: "JSON",
                                    data: JSON.stringify({
                                        title: "好好学习",
                                        content: "<p>好好学习，天天向上。</p>",
                                        category_id: CategoryId,
                                        uploads: []
                                    }),
                                    success: resolve,
                                    error: resolve
                                }));
                                Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`);
                            } else {
                                Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} 不需要发帖 <span class="info">完成</span>`);
                            }
                            break;
                        case "web_link":
                            Log.WriteHtmlLine(`模块标题：${title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} <span class="info">完成</span>`);
                            await new Promise(resolve => $.post(`https://lms.ouchn.cn/api/course/activities-read/${id}`, {}, resolve));
                            break;
                        default:
                            Log.WriteHtmlLine(`模块标题：${LearnActivitieModel.title}(${notificationTypesAndText[type]}) 完成标准：${getCriterion(completion_criterion)} <span class="warn">未完成</span> <br> 该任务无法完成。`);
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
})();