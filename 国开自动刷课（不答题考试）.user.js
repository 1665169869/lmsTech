// ==UserScript==
// @name             国开自动刷课（不答题考试）
// @namespace        http://ibaiyu.top/
// @version          1.5.4
// @description      国开（国家开放大学）自动刷课（不答题考试） 支持自动访问线上链接、查看资料附件、观看视频、自动查看页面、自动参与发帖回帖。
// @note             1.5.4: 优化了下代码，并让它更加易读了。同时修复了发帖的时候轮询没被clear的问题。
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


// 设置视频播放速度 建议最大4-8倍速 不然可能会卡 没有最大值
const playbackRate = 2;

// 设置各种不同类型的课程任务之间的时间延迟，以便脚本在进行自动化学习时可以更好地模拟人类操作。
const interval = {
    loadCourse: 3000, // 加载课程列表的延迟时间
    viewPage: 3000, // 查看页面类型课程的延迟时间
    onlineVideo: 3000, // 播放在线视频课程的延迟时间
    webLink: 3000, // 点击线上链接类型课程的延迟时间
    forum: 3000, // 发帖子给论坛课程的延迟时间
    material: 3000, // 查看附件类型课程的延迟时间
    other: 3000 // 处理其他未知类型课程的延迟时间
};

(function (window, document) {
    // 运行
    main();

    // 使用正则表达式从当前 URL 中提取出课程 ID。
    const courseId = document.URL.match(/https:\/\/lms.ouchn.cn\/course\/(\d+)\//)[1];

    // 创建返回到课程列表页面的函数。
    function returnCoursePage() {
        document.querySelector(".return-link > a").click();
    }

    // 将中文类型名称转换为英文枚举值。
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

    /**
     * 等待指定元素出现
     * 返回一个Promise对象，对document.querySelector封装了一下
     * @param selector dom选择器,像document.querySelector一样
     * @param waitTime 等待时间 单位: ms
     */
    async function waitForElement(selector, waitTime = 500) {
        return new Promise(resolve => {
            let timeId = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(timeId);
                    resolve(element);
                }
            }, waitTime);
        });
    }

    /**
     * 等待多个指定元素出现
     * 返回一个Promise对象，对document.querySelectorAll封装了一下
     * @param selector dom选择器,像document.querySelectorAll一样
     * @param waitTime 等待时间 单位: ms
     */
    async function waitForElements(selector, waitTime = 500) {
        return new Promise(resolve => {
            let timeId = setInterval(() => {
                const element = document.querySelectorAll(selector);
                if (element) {
                    clearInterval(timeId);
                    resolve(element);
                }
            }, waitTime);
        });
    }

    // 等待指定时间
    function wait(ms) {
        return new Promise(resolve => { setTimeout(resolve, ms); });
    }

    // 打开并播放在线视频课程。
    async function openOnlineVideo() {
        // 等待 video 或 audio 元素加载完成
        const [videoElem, audioElem] = await new Promise(resolve => {
            let timeId = setInterval(() => {
                const video = document.querySelector("video");
                const audio = document.querySelector("audio");
                if (video || audio) {
                    clearInterval(timeId);
                    resolve([video, audio]);
                };
            }, interval.onlineVideo);
        });

        if (videoElem) {
            // 处理视频元素
            console.log("正在播放视频中...");

            // 设置播放速率
            videoElem.playbackRate = playbackRate;

            // 监听播放速率变化事件并重新设置播放速率
            videoElem.addEventListener('ratechange', function () {
                videoElem.playbackRate = playbackRate;
            });

            // 监听视频播放结束事件
            videoElem.addEventListener('ended', returnCoursePage);

            // 延迟一会儿以等待视频加载
            await wait(interval.onlineVideo);

            // // 每隔一段时间检查是否暂停，并模拟点击继续播放并设置声音音量为0
            elementVideo.volume = 0;
            setInterval(() => {
                elementVideo.volume = 0;
                if (document.querySelector("i.mvp-fonts.mvp-fonts-play")) {
                    document.querySelector("i.mvp-fonts.mvp-fonts-play").click();
                }
            }, interval.onlineVideo);

        } else if (audioElem) {
            // 处理音频元素
            console.log("正在播放音频中...");

            // 监听音频播放结束事件
            audioElem.addEventListener("ended", returnCoursePage);

            // 延迟一会儿以等待音频加载
            await wait(interval.onlineVideo);

            // 每隔一段时间检查是否暂停，并模拟点击继续播放
            setInterval(() => {
                elementAudio.volume = 0;
                if (document.querySelector("i.font.font-audio-play")) {
                    document.querySelector("i.font.font-audio-play").click();
                }
            }, interval.onlineVideo);
        }
    }

    // 打开并查看页面类型课程。
    function openViewPage() {
        // 当页面被加载完毕后延迟一会直接返回课程首页
        document.addEventListener('readystatechange', () => {
            if (document.readyState == 'complete') {
                setTimeout(returnCoursePage, interval.viewPage);
            }
        })
    }

    // 打开并点击线上链接类型课程。
    async function openWebLink() {
        // 等待获取open-link-button元素
        const ElementOpenLinkButton = await waitForElement(".open-link-button", interval.webLink);

        // 设置元素属性让它不会弹出新标签并设置href为空并模拟点击
        ElementOpenLinkButton.target = "_self";
        ElementOpenLinkButton.href = "javascript:void(0);";
        ElementOpenLinkButton.click();

        // 等待一段时间后执行returnCoursePage函数
        setTimeout(returnCoursePage, interval.webLink);
    }
    function openApiMaterial() { // 用API去完成查看附件
        const id = document.URL.match(/.*\/\/lms.ouchn.cn\/course\/[0-9]+\/learning-activity\/full-screen.+\/([0-9]+)/)[1];
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

    // 打开课程任务并发布帖子。
    async function openForum() {
        // 使用 waitForElement 函数等待 .embeded-new-topic>i 元素出现，并赋值给 topicElement 变量
        const topicElement = await waitForElement(".embeded-new-topic>i", interval.forum);

        // 点击话题元素并等待一段时间
        topicElement.click();
        await wait(interval.forum);

        // 获取标题、内容和提交按钮元素
        const titleElem = $("#add-topic-popup > div > div.topic-form-section.main-area > form > div:nth-child(1) > div.field > input");
        const contentElem = document.querySelector('#add-topic-popup > div > div.topic-form-section.main-area .simditor-body.needsclick[contenteditable]');
        const submitElem = document.querySelector("#add-topic-popup > div > div.popup-footer > div > button.button.button-green.medium");

        // 设置标题和内容
        titleElem.val("好好学习").trigger('change');

        // 点击提交按钮并延迟一段时间后返回课程页面
        contentElem.innerHTML = "<p>好好学习，天天向上。</p>";
        submitElem.click();

        // 等待一段时间后执行returnCoursePage函数
        setTimeout(returnCoursePage, interval.forum);
    }

    // 课程首页处理
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
        const courseElements = await waitForElements('.learning-activity .clickable-area', interval.loadCourse);


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

    function main() {
        if (/https:\/\/lms.ouchn.cn\/course\/\d+\/ng.*#\//m.test(document.URL)) {
            // 判断是否在课程首页
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
    }
})(window, document);