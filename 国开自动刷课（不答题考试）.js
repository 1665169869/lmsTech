// ==UserScript==
// @name             国开自动刷课（不答题考试）
// @namespace        http://ibaiyu.top/
// @version          1.4.5
// @description      国开（国家开放大学）自动刷课（不答题考试） 支持自动访问线上链接、查看资料附件、观看视频、自动查看页面、自动参与发帖回帖。
// @author           蜜桃加乌龙
// @icon             data:image/png;base64,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
// @include          *://lms.ouchn.cn/course/*
// @original-author  蜜桃加乌龙
// @original-license GPL-3.0
// @original-script  https://scriptcat.org/script-show-page/740
// @license          GPL-3.0
// @source           https://scriptcat.org/script-show-page/740
// @grant            GM_info
// @grant            GM_getValue
// @grant            GM_setValue
// ==/UserScript==

const courseId = document.URL.match(/https:\/\/lms.ouchn.cn\/course\/(\d+)\//)[1];
function guokai(content = "脚本状态", html = false) {
    this.info = (content = "", html = false) => {
        if (html) {
            this.dom_scriptTop.html = content;
        } else {
            this.dom_scriptTop.textContent = content;
        }
        console.info(`content: ${content}; html: ${html}`);
    }
    document.addEventListener('readystatechange', () => {
        if (document.readyState == 'complete') { }
        const txt = '<div id="scriptTop" style="z-index: 1000000001; position: fixed;left: 20px;bottom: 10px;padding: 10px;text-align: center;background-color: rgb(71, 71, 71);border-radius: 8px;color: #fff;">脚本状态</div>';
        $('body').append(txt);
        this.dom_scriptTop = document.querySelector('#scriptTop');
        this.info(content, html);
    })

}

(function (window, document) {
    const playbackRate = 1.5; // 视频倍数 建议最大2倍数，不然会卡。
    // ==/UserScript==
    const gk = new guokai();
    function gk_pageback(time) { // 返回课程列表
        let _time = time / 1000;
        let timeid = setInterval(() => {
            gk.info(`${_time}秒后返回上一页`);
            if (_time == 0) {
                clearInterval(timeid);
            }
            _time--;
        }, 1000);
        setTimeout(function () {
            document.querySelector(".return-link > a").click();
        }, time ? time : 2000)
    }
    function onVideo() {
        // 定义一个定时器，时间间隔为2000毫秒
        let myval = setInterval(function () {
            // 获取网页上的视频和音频元素
            let video = document.querySelector("video");
            let audio = document.querySelector("audio");
            if (video) {  // 当视频元素存在时
                gk.info("播放视频中");
                // 设置视频播放速率
                video.playbackRate = playbackRate;
                // 监听视频速率的变化并对其重新设置
                video.addEventListener('ratechange', function () {
                    video.playbackRate = playbackRate;
                });
                // 当视频播放结束时，回调函数gk_pageback会被调用
                video.addEventListener('ended', gk_pageback);
                // 判断当前视频是否已经播放完毕，如果是，则重新开始播放
                try {
                    const playStart = document.querySelector(".mvp-time-display span:first-child");
                    const playEnd = document.querySelector(".mvp-time-display span:last-child");
                    if (parseInt(video.duration) === parseInt(video.currentTime) ||
                        playStart.textContent === playEnd.textContent) {
                        video.currentTime = 0;
                    }
                } catch (error) {
                    console.log(`这里有一个异常，这是它的异常对象: ${error}`);
                }
                // 开始一个Promise流程，该部分功能为进行静音设置并开始播放的过程
                new Promise(function (resolve) {
                    setTimeout(function () {
                        // 静音视频
                        video.volume = 0;
                        // 视频播放
                        let timeid = setInterval(() => {
                            const el = document.querySelector(".mvp-toggle-play.mvp-first-btn-margin");
                            if (el != null) {
                                el.click();
                                resolve();
                                clearInterval(timeid);
                            }
                        }, 2000)
                        // 3秒后执行下一步Then部分
                    }, 3000);
                }).then(function () {
                    setInterval(() => {
                        // 每隔2秒将视频音量设为0并重新播放视频
                        video.volume = 0;
                        if (document.querySelector("i.mvp-fonts.mvp-fonts-play")) {
                            document.querySelector("i.mvp-fonts.mvp-fonts-play").click();
                        }
                    }, 2000);
                });
                // 终止计时器
                clearInterval(myval);
            } else if (audio) {  // 当音频元素存在时
                gk.info("播放音频中");
                // 判断当前音频是否已经播放完毕，如果是，则从头开始播放
                if (parseInt(audio.duration) === parseInt(audio.currentTime) || document.querySelector("span.current.ng-binding").textContent === document.querySelector("div.duration span.ng-binding").textContent) {
                    audio.currentTime = 0;
                }
                // 开始一个Promise流程，该部分功能为进行静音设置并开始播放的过程
                new Promise(function (resolve) {
                    setTimeout(function () {
                        // 静音音频
                        audio.volume = 0;
                        // 音频播放
                        if (document.querySelector("i.font.font-audio-play")) {
                            document.querySelector("i.font.font-audio-play").click();
                        }
                        resolve();
                        // 3秒后执行下一步Then部分
                    }, 3000);
                }).then(function () {
                    setInterval(() => {
                        // 当音频播放完毕时，回调函数gk_pageback会被调用；否则继续播放，并期间每隔5秒将音频音量设为0
                        if (parseInt(audio.duration) === parseInt(audio.currentTime) || document.querySelector("span.current.ng-binding").textContent === document.querySelector("div.duration span.ng-binding").textContent) {
                            gk_pageback();
                        } else {
                            if (document.querySelector("i.font.font-audio-play")) {
                                document.querySelector("i.font.font-audio-play").click();
                            }
                        }
                    }, 5000);
                });
                // 终止定时器
                clearInterval(myval);
            }
        }, 2000);
    }
    document.addEventListener('readystatechange', () => {
        if (document.readyState == 'complete') {
            // 页面加载完毕
            (function () {
                if (/https:\/\/lms.ouchn.cn\/course\/\d+\/ng.*#\//m.test(document.URL)) { // 判断是否在课程首页
                    setInterval(function () {
                        gk.info("正在获取加载的课程~");
                        if (document.getElementsByClassName("icon font font-toggle-all-collapsed").length > 0) {
                            document.getElementsByClassName("icon font font-toggle-all-collapsed")[0].click();
                        }
                        // let alllearning = $(".learning-activity");
                        // const alllearning = $('.learning-activity .clickable-area .activity-icon.ng-scope i.font[original-title]');
                        const elements = document.querySelectorAll('.learning-activity .clickable-area');
                        for (let i = 0; i < elements.length; i++) {
                            const type = $(elements[i].querySelector('i.font[original-title]')).attr('original-title'); // 获取该课程任务的类型
                            const status = $(elements[i].querySelector('span.item-status')).text(); // 获取该课程任务是否进行中
                            const completes = $(elements[i].querySelector('div.completeness[tipsy-literal]')).attr('tipsy-literal').match(/^<b>(\W+)<\/b>/)[1] === "已完成" ? true : false;
                            if (status !== "进行中") {
                                continue;
                            }
                            function getTypeEum(type) {
                                switch (type) {
                                    case "页面":
                                        return 1;
                                    case "音视频教材":
                                        return 2;
                                    case "线上链接":
                                        return 3;
                                    case "讨论":
                                        return 4;
                                    case "参考资料":
                                        return 5;
                                    case "测试":
                                        return 6;
                                    case "作业":
                                        return 7;
                                    default:
                                        return -1;
                                }
                            }
                            const typeEum = getTypeEum(type);
                            if (!(completes) && typeEum != -1) {
                                gk.info("发现未完成的课程~");
                                GM_setValue(`typeEum-${courseId}`, typeEum);
                                if (typeEum <= 5) {
                                    $(elements[i]).click();
                                    break;
                                }
                            }
                        }
                    }, 5000);
                } else if (/https:\/\/lms.ouchn.cn\/course\/\d+\/learning-activity\/full-screen#\/\d+/m.test(document.URL)) {
                    let timeId;
                    switch (parseInt(GM_getValue(`typeEum-${courseId}`, -1))) {
                        case 1:
                            gk.info("正在查看页面。");
                            gk_pageback(3000);
                            break;
                        case 2:
                            onVideo();
                            break;
                        case 3:
                            gk.info("正在点击外部链接~");
                            timeId = setInterval(() => {
                                let str = document.querySelector(".open-link-button");
                                str.target = "_self";
                                str.href = "javascript:void(0);";
                                if (str !== null) {
                                    str.click();
                                    gk.info("点击完成！");
                                    gk_pageback(2000);
                                    clearInterval(timeId);
                                }
                            }, 5000);
                            break;
                        case 4:
                            gk.info("发帖中！");
                            timeId = setInterval(function () {
                                let str = document.querySelector(".embeded-new-topic>i");
                                if (str !== undefined && str !== null) {
                                    str.click();
                                    $("#add-topic-popup > div > div.topic-form-section.main-area > form > div:nth-child(1) > div.field > input").val("好好学习").trigger('change');
                                    document.querySelector('#add-topic-popup > div > div.topic-form-section.main-area .simditor-body.needsclick[contenteditable]').innerHTML = "<p>好好学习，天天向上。</p>";
                                    setTimeout(function () {
                                        document.querySelector("#add-topic-popup > div > div.popup-footer > div > button.button.button-green.medium").click()
                                        gk_pageback(3000);
                                    }, 1000);
                                    clearInterval(timeId);
                                }
                            }, 3000);
                            break;
                        case 5:
                            gk.info("正在点击课件捏");
                            timeId = setInterval(() => {
                                // let str = document.querySelector(".attachment-row.preview-able");
                                // if (str !== null) {
                                //     str.click();
                                //     gk_pageback(2000);
                                //     clearInterval(timeId);
                                // }
                                const elements = $('.attachment-operations a[tipsy-literal="下载"]');
                                if (elements.length != 0) {
                                    for (let i = 0; i < elements.length; i++) {
                                        const item = elements[i];
                                        gk.info(`正在点击第${i + 1}个课件捏`);
                                        item.href = "javascript:void(0);";
                                        item.target = "_self";
                                        $(item).attr("ng-href", item.href);
                                        item.click();
                                        if ((i + 1) === elements.length) {
                                            gk_pageback(2000);
                                            clearInterval(timeId);
                                        }
                                    }
                                }
                            }, 3000);
                            break;
                        default:
                            gk_pageback(2000);
                            break;
                    }
                }
            })()
        }
    });

}(window, document))
