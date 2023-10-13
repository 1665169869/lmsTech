// 如果注释前面跟着?代表未知 后面的注释全靠猜测而写

export class GlobalData {
    course = {                                  // 这里的org*指的是课程归属的哪个学校
        id: 9999,                               // 课程id
        name: "课程名称",                        // 课程昵称
        orgId: 0,                               // 开放大学的id
        orgName: "xx开发大学",                   // 开放大学名字
        orgCode: "000",                         // 开放大学代码
        courseCode: "999",                      // 课程代码
        endDate: "None",                        // ?截止时间
        enableFaceService: "",                  // ?启用人脸服务
        isSimulatingInstructor: false,          // ?是否虚拟讲师
        isInstructorView: false,                // ?直译: 是否讲师视图 猜测是否开启讲师视图
        isMaster: false,                        // ?直译: 是否主人
    }

    user = {                                  // 这里的org*指的是用户归属的哪个学校
        id: 99999,                            // 你的用户id
        name: "马牛逼",                        // 你的姓名
        userNo: "224499999999",               // 你的用户账号
        orgId: 0,                             // 归属哪个学校id
        mobile: "12345678910",                // 你的手机号
        orgName: "xx开放大学",                 // 开放大学名字
        orgCode: "000",                       // 开放大学代码
        isCourseAdmin: false                  // ?是否课程管理员
    }

    dept = {                                 // 分部
        id: "9999",                          // 学院id
        name: "xx技师分校",                   // 学院昵称
        code: "1231234"                      // 学校代码
    }
    isOpenUniversity = true                 // 是否开放大学
    courseRoles = [
        "student"
    ]
    deliveryOrg = "ouchn"
    useSinglePage = true
    expandActivityInfo = false

    constructor() {
        this.course = globalThis.globalData.course;
        this.user = globalThis.globalData.user;
        this.dept = globalThis.globalData.dept;
        this.isOpenUniversity = globalThis.globalData.isOpenUniversity;
        this.courseRoles = globalThis.globalData.courseRoles;
        this.deliveryOrg = globalThis.globalData.deliveryOrg;
        this.useSinglePage = globalThis.globalData.useSinglePage;
        this.expandActivityInfo = globalThis.globalData.expandActivityInfo;
    }
}


export const notificationTypesAndText = {
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
