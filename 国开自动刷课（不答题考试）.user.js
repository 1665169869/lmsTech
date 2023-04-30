// ==UserScript==
// @name             国开自动刷课（不答题考试）
// @namespace        http://ibaiyu.top/
// @version          1.5.1
// @description      国开（国家开放大学）自动刷课（不答题考试） 支持自动访问线上链接、查看资料附件、观看视频、自动查看页面、自动参与发帖回帖。
// @author           蜜桃加乌龙
// @icon             data:image/png;base64,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
// @match          *://lms.ouchn.cn/course/*
// @original-author  蜜桃加乌龙
// @original-license GPL-3.0
// @original-script  https://scriptcat.org/script-show-page/740
// @license          GPL-3.0
// @source           https://scriptcat.org/script-show-page/740
// @grant            GM_info
// @grant            GM_getValue
// @grant            GM_setValue
// ==/UserScript==
const playbackRate = 1.5 // 视频倍数 建议最大2倍数，不然会卡。
const interval = { // 定时器的延迟，别乱改！！单位为毫秒
    loadCourse: 3000,
    viewPage: 3000,
    onlineVideo: 3000,
    webLink: 3000,
    forum: 3000,
    material: 3000,
    other: 3000
}


(function (window, document) {
    const courseId = document.URL.match(/https:\/\/lms.ouchn.cn\/course\/(\d+)\//)[1];
    function returnCoursePage() {
        document.querySelector(".return-link > a").click();
    }
    function getTypeEum(type) {
        switch (type) {
            case "页面":
                return "page";
            case "音视频教材":
                return "online_video";
            case "线上链接":
                return "web_link";
            case "讨论":
                return "forum";
            case "参考资料":
                return "material";
            default:
                return null;
        }
    }
    async function openOnlineVideo() {
        const [elementVideo, elementAudio] = await new Promise(resolve => {
            let timeId = setInterval(() => {
                let video = document.querySelector("video");
                let audio = document.querySelector("audio");
                if (video || audio) {
                    clearInterval(timeId);
                    resolve([video, audio]);
                };
            }, interval.onlineVideo);
        });
        if (elementVideo) {
            console.log("播放视频中");
            elementVideo.playbackRate = playbackRate;
            // 监听视频速率的变化并对其重新设置
            elementVideo.addEventListener('ratechange', function () {
                elementVideo.playbackRate = playbackRate;
            });
            elementVideo.addEventListener('ended', returnCoursePage);
            // 延迟一会
            await new Promise(resolve => setTimeout(resolve, interval.onlineVideo));
            elementVideo.volume = 0;
            setInterval(() => {
                // 每隔一会将视频音量设为0并且如果视频被暂停就自动切换到继续播放视频
                elementVideo.volume = 0;
                if (document.querySelector("i.mvp-fonts.mvp-fonts-play")) {
                    document.querySelector("i.mvp-fonts.mvp-fonts-play").click();
                }
            }, interval.onlineVideo);
        } else if (elementAudio) {
            console.log("播放音频中");
            elementAudio.addEventListener("ended", returnCoursePage);
            await new Promise(resolve => setTimeout(resolve, interval.onlineVideo));
            setInterval(() => {
                elementAudio.volume = 0;
                if (document.querySelector("i.font.font-audio-play")) {
                    document.querySelector("i.font.font-audio-play").click();
                }
            }, interval.onlineVideo);
        }
    }
    function openViewPage() {
        document.addEventListener('readystatechange', () => {
            if (document.readyState == 'complete') {
                setTimeout(returnCoursePage, interval.viewPage);
            }
        })
    }
    async function openWebLink() {
        const ElementOpenLinkButton = await new Promise(resolve => {
            let timeId = setInterval(() => {
                const ElementOpenLinkButton = document.querySelector(".open-link-button");
                if (ElementOpenLinkButton) {
                    clearInterval(timeId);
                    resolve(ElementOpenLinkButton);
                };
            }, interval.webLink);
        });
        ElementOpenLinkButton.target = "_self";
        ElementOpenLinkButton.href = "javascript:void(0);";
        ElementOpenLinkButton.click();
        setTimeout(returnCoursePage, interval.webLink);
    }
    function openApiMaterial() { // 用API去完成查看附件
        const id = window.location.href.match(/.*\/\/lms.ouchn.cn\/course\/[0-9]+\/learning-activity\/full-screen.+\/([0-9]+)/)[1];
        new Promise((resolve, reject) => {
            $.ajax({
                url: `https://lms.ouchn.cn/api/activities/${id}`,
                type: "GET",
                success: resolve,
                error: reject
            })
        }).then(({ uploadsModels }) => {
            uploadsModels.forEach(async ({ uploadId }) => {
                await new Promise(resolve => setTimeout(resolve, interval.material));
                await new Promise(resolve => $.ajax({
                    url: `https://lms.ouchn.cn/api/course/activities-read/${uploadId}`,
                    type: "POST",
                    contentType: "application/json",
                    dataType: "JSON",
                    success: resolve,
                    error: resolve
                }));
            });
        }).catch((xhr, status, error) => {
            console.log(`这里出现了一个异常 | status: ${status}`);
            console.error(error);
        });
    
    }
    async function openForum() {
        const topicElement = await new Promise(resolve => {
            let timeId = setInterval(() => {
                const topicElement = document.querySelector(".embeded-new-topic>i");
                if (topicElement) resolve(topicElement);
            }, interval.forum);
        });
        topicElement.click();
        await new Promise(resolve => setTimeout(resolve, interval.forum));
        $("#add-topic-popup > div > div.topic-form-section.main-area > form > div:nth-child(1) > div.field > input").val("好好学习").trigger('change');
        document.querySelector('#add-topic-popup > div > div.topic-form-section.main-area .simditor-body.needsclick[contenteditable]').innerHTML = "<p>好好学习，天天向上。</p>";
        document.querySelector("#add-topic-popup > div > div.popup-footer > div > button.button.button-green.medium").click();
        setTimeout(returnCoursePage, interval.forum);
    }
    
    async function courseIndex() {
        await new Promise(resolve => {
            console.log("正在获取加载的课程~");
            let timeId = setInterval(() => {
                if ($("i.icon.font.font-toggle-all-expanded").length > 0) {
                    clearInterval(timeId);
                    resolve();
                }
                if (document.getElementsByClassName("icon font font-toggle-all-collapsed").length > 0) {
                    document.getElementsByClassName("icon font font-toggle-all-collapsed")[0].click();
                    clearInterval(timeId);
                    resolve();
                }
            }, interval.loadCourse);
        });
        const courseElements = await new Promise(resolve => {
            let timeId = setInterval(() => {
                const elements = document.querySelectorAll('.learning-activity .clickable-area');
                if (elements) {
                    clearInterval(timeId);
                    resolve(elements);
                }
            }, interval.loadCourse);
        })
        for (let i = 0; i < courseElements.length; i++) {
            const type = $(courseElements[i].querySelector('i.font[original-title]')).attr('original-title'); // 获取该课程任务的类型
            const status = $(courseElements[i].querySelector('span.item-status')).text(); // 获取该课程任务是否进行中
            const completes = $(courseElements[i].querySelector('div.completeness[tipsy-literal]')).attr('tipsy-literal').match(/^<b>(\W+)<\/b>/)[1] === "已完成" ? true : false;
            if (status !== "进行中") {
                continue;
            }
            const typeEum = getTypeEum(type);
            if (!(completes) && typeEum != null) {
                console.log("发现未完成的课程~");
                GM_setValue(`typeEum-${courseId}`, typeEum);
                $(courseElements[i]).click();
                reutrn;
            }
        }
    }
    if (/https:\/\/lms.ouchn.cn\/course\/\d+\/ng.*#\//m.test(document.URL)) { // 判断是否在课程首页
        courseIndex();
    } else if (/https:\/\/lms.ouchn.cn\/course\/\d+\/learning-activity\/full-screen#\/\d+/m.test(document.URL)) {
        let timeId = 0;
        const typeEum = GM_getValue(`typeEum-${courseId}`, null);
        switch (typeEum) {
            case "page":
                console.log("正在查看页面。");
                openViewPage();
                return;
            case "online_video":
                openOnlineVideo();
                return;
            case "web_link":
                console.log("正在点击外部链接~");
                openWebLink();
                return;
            case "forum":
                console.log("发帖中！");
                openForum();
                return;
            case "material":
                console.log("正在给课件发送已阅读状态");
                openApiMaterial();
                return;
            default:
                setTimeout(returnCoursePage, interval.other);
                return;
        }
    }
}(window, document));
