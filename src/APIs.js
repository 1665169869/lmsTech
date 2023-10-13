import { GlobalData } from "./global_config";

const globalData = new GlobalData();

export function addLearningBehavior(activity_id, activity_type) {
    const duration = Math.ceil(Math.random() * 300 + 40);
    const data = JSON.stringify({
        activity_id,
        activity_type,
        browser: 'chrome',
        course_id: globalData.course.id,
        course_code: globalData.course.courseCode,
        course_name: globalData.course.name,
        org_id: globalData.course.orgId,
        org_name: globalData.user.orgName,
        org_code: globalData.user.orgCode,
        dep_id: globalData.dept.id,
        dep_name: globalData.dept.name,
        dep_code: globalData.dept.code,
        user_agent: window.navigator.userAgent,
        user_id: globalData.user.id,
        user_name: globalData.user.name,
        user_no: globalData.user.userNo,
        visit_duration: duration
    });
    const url = 'https://lms.ouchn.cn/statistics/api/user-visits';
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            data,
            type: "POST",
            cache: false,
            contentType: "text/plain;charset=UTF-8",
            complete: resolve,
            error: reject
        });
    });
}

export function addVideoLearningRecords({ start_at, end_at, syllabus_id, activity_id, upload_id }) {
    const url = "https://lms.ouchn.cn/statistics/api/online-videos";
    const duration = Math.ceil(Math.random() * 300 + 40);
    const data = JSON.stringify({
        syllabus_id,
        activity_id,
        upload_id,
        start_at,
        end_at,
        duration,
        "user_id": globalData.user.id,
        "org_id": globalData.user.orgId,
        "course_id": globalData.course.id,
        "is_teacher": false,
        "is_student": true,
        "ts": Date.now(),
        "user_agent": window.navigator.userAgent,
        "meeting_type": "online_video",
        "org_name": globalData.user.orgName,
        "org_code": globalData.course.orgCode,
        "user_no": globalData.user.userNo,
        "user_name": globalData.user.name,
        "course_code": globalData.course.courseCode,
        "course_name": globalData.course.name,
    });
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            data,
            type: "POST",
            cache: false,
            contentType: "text/plain;charset=UTF-8",
            complete: resolve
        });
    });
}
export function postLearningActiVities({ activity_id, activity_type, is_open, activity_name = null }) {
    const url = `https://lms.ouchn.cn/statistics/api/learning-activity`;
    const data = JSON.stringify({
        "org_id": globalData.user.orgId,
        "user_id": globalData.user.id,
        "course_id": globalData.course.id,
        "enrollment_role": globalData.courseRoles[0],
        "is_teacher": false, // ?未知
        "activity_id": activity_id,
        "activity_type": activity_type,
        "activity_name": activity_name,
        "module": null,
        "action": is_open ? "open" : "close",
        "ts": new Date().getTime(),
        "user_agent": typeof window === undefined ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36" : window.navigator.userAgent,
        "mode": "normal",
        "channel": "web",
        "target_info": {},
        "master_course_id": globalData.course.id,
        "org_name": globalData.user.name,
        "org_code": globalData.user.orgCode,
        "user_no": globalData.user.userNo,
        "user_name": globalData.user.name,
        "course_code": globalData.course.courseCode,
        "course_name": globalData.course.name,
        "dep_id": globalData.dept.id,
        "dep_name": globalData.dept.name,
        "dep_code": globalData.dept.code
    });
    return new Promise((resolve, reject) => $.ajax({
        url,
        data,
        type: "POST",
        contentType: "application/json",
        dataType: "JSON",
        success: resolve,
        error: reject,
    }));
}

// 未知作用 待确定
export function getActivityReadsForUser() {
    const url = "https://lms.ouchn.cn/api/course/104181/activity-reads-for-user";

    return new Promise((resolve, reject) => $.ajax({
        url,
        type: "GET"
    }));
}

export function postForum(
    CategoryId,
    { title, content } = {
        title: `好好学习${Date.now()}`,
        content: `<p>好好学习，天天向上。${Date.now()}</p>`
    }
) {
    return new Promise((resolve, reject) => $.ajax({
        type: "POST",
        url: `https://lms.ouchn.cn/api/topics`,
        contentType: "application/json",
        dataType: "JSON",
        data: JSON.stringify({
            title,
            content,
            category_id: CategoryId,
            uploads: []
        }),
        success: resolve,
        error: reject
    }));
}

export function postActivitiesRead(id, data = {}) {
    return new Promise((resolve, reject) => $.ajax({
        type: "POST",
        url: `https://lms.ouchn.cn/api/course/activities-read/${id}`,
        contentType: "application/json",
        dataType: "JSON",
        data: JSON.stringify(data),
        success: resolve,
        error: reject
    }));
}

export function getCategoryId(id) {
    return new Promise(resolve => $.get(`https://lms.ouchn.cn/api/forum/${id}/category?fields=id`, {}, resolve));
}

export function getActivities(id) {
    const url = `https://lms.ouchn.cn/api/activities/${id}`;
    return new Promise((resolve, reject) => $.ajax({
        url,
        type: "GET",
        success: resolve,
        error: reject,
    }));
}