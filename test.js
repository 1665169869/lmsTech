/*
 * @Author: 白羽
 * @Date: 2023-04-23 13:21:03
 * @LastEditors: 白羽
 * @LastEditTime: 2023-04-24 10:59:27
 * @FilePath: \lmsTech\test.js
 * @Description: 
 */
var a = Math.ceil(499.199 / 60);

for (let i = 1; i <= a; i++) {
    StartDuration = i === a ? 499.199 : i * 60;
    console.log(i, StartDuration);
}