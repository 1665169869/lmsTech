<!--
 * @Author: 白羽
 * @Date: 2023-04-21 14:32:53
 * @LastEditors: 白羽
 * @LastEditTime: 2023-04-24 13:20:26
 * @FilePath: \lmsTech\README.md
 * @Description: 
-->
# 国开自动刷课（不答题考试）

国开（国家开放大学）自动刷课（不答题考试） 支持自动访问线上链接、查看资料附件、观看视频、自动查看页面、自动参与发帖回帖。

## 功能列表

- 自动播放视频【完成】
- 自动查看页面【完成】
- 自动观看资料附件【完成】
- 自动点击线上链接【完成】
- 自动回帖发帖【完成】
- 答题或考试【不支持】

## 如何安装？

### 半自动（模拟鼠标操作进行刷课）

[脚本猫](https://scriptcat.org/script-show-page/740/)

[greasyfork](https://greasyfork.org/zh-CN/scripts/464459-%E5%9B%BD%E5%BC%80%E8%87%AA%E5%8A%A8%E5%88%B7%E8%AF%BE-%E4%B8%8D%E7%AD%94%E9%A2%98%E8%80%83%E8%AF%95)

*ps:半自动脚本有BUG，可能会停止更新半自动脚本，建议转移至全自动脚本。*

### 全自动 （直接调用API进行刷课）

*参考了一个GitHub项目 [点我跳转](https://github.com/windfgg/TestPuppeteerSharp)*

**安装地址**

[脚本猫](https://scriptcat.org/script-show-page/986/)

[greasyfork](https://greasyfork.org/zh-CN/scripts/464733-%E8%B0%83%E7%94%A8%E5%9B%BD%E5%BC%80api%E8%87%AA%E5%8A%A8%E5%88%B7%E8%AF%BE-%E4%B8%8D%E7%AD%94%E9%A2%98%E8%80%83%E8%AF%95)


## 使用方法

打开国开课程网址【lms.ouchn.cn】后，选择【我的课程】

选择你要刷的课程如：【国家开放大学学习指南】后等待脚本自动运行即可。

【lms.ouchn.cn】=>【我的课程】=>【国家开放大学学习指南】

### 开源协议

[GPL-3.0开源协议](https://www.gnu.org/licenses/gpl-3.0)使用脚本照成的后果原作者不承担任何责任，仅供学习交流。


### 作者的话

目前已经修复多个课程附件不会完成任务的BUG

目前发现半自动脚本多个课程附件会无法完成任务的BUG（没有技术修复）

目前无法知道是否有多个外部链接的任务，如果有麻烦来人反馈下。

用脚本盈利的我不阻止帮别人刷课，但我拒绝copy这份源码不进行任何更改后

去引流到自己的联系方式盈利，脚本中可以通过二次开发进行答题部分的开发

我没做答题部分的代码，因为我没相对应的题库

如果你使用了这个脚本进行二次开发，请使用相同的协议进行开源。