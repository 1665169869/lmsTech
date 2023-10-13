const path = require("path");
const scriptCatWebpackPlugin = require('scriptcat-webpack-plugin');


const d = new Date();

const filename = '调用国开API自动刷课（不答题考试）.user.js';

const scriptConfigs = {
  license: "GPL-3.0",
  author: "i白羽(蜜桃加乌龙)",
  scriptSource: "https://scriptcat.org/script-show-page/986/",
  description: "调用国开API自动刷课（不答题考试） 支持自动访问线上链接、查看资料附件、观看视频、自动查看页面、自动参与发帖回帖。调用API接口实现！",
  namespace: "https://github.com/1665169869/lmsTech",
  version: `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}${d.getHours()}${d.getMinutes()}`,
  match: [
    "*://lms.ouchn.cn/course/*"
  ],
  notes: [
    "1.2.1：脚本无任何更新，主要是为了更新版本号",
    "1.2.2：修复无法使用的BUG",
    "1.2.3：修复发帖功能无法使用的BUG",
    "1.3.0: 本次更新将会调用学习分析的API请求 这回在学习分析也可以看到学习记录啦!!",
    "1.3.1: 更新版本号",
    "1.3.2: 更新控制台输出颜色",
    "1.3.3: 更新控制台输出背景颜色",
    "1.3.4: 优化部分速度和代码",
    "202310132049: 优化代码，几乎等于重构一次 使用webpack打包，修复部分bug"
  ]
}

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new scriptCatWebpackPlugin({
      file: filename,
      name: "调用国开API自动刷课（不答题考试）",
      namespace: scriptConfigs.namespace,
      author: scriptConfigs.author,
      description: scriptConfigs.description,
      version: scriptConfigs.version,
      metadata: {
        icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEUAAADVHiPaHx3YHyDYHx7YHyDXHx7ZHyHbHyHeIBvfITjaHyDaHyHZHyDZHyDaHyDZHx3NHADaHyDaHx7kIi/aHyDbHyHZHyDYHyDZHx7YHyHaHyDXHx7aHyDaHyDYHyLrIiTRHRjYHx7aHyHaHyHXHyH/JgDWHiHYHyHZHyDNHSrXHyDaHyHZHyHSHh3YIUL/JgDYHyDYHyDYHyDYHyDYHyHaHyHVHiDfICTNHSraHyDdICDXHyDaHyLZHyDaHyDZHyHXHyDVHiDZHx3WHhnFHC/YHyDZHyHYHxjbHx7aHx7ZHyDZHyDVHiPZHyDVHiT/JgDaHxHZHyDZHyDaHyHaHyDVHhW7GADYHyDWHyrYHyDaHyDaHx7ZHyHYHyDXHyDZHyDYHyDVHiPiIBjYHyzYHyHWHh7YHxvYHyGUEQDZHyHYHyHVHh3YHyHYHx7XHh3YHhPaHxndICfZHyDaHyDXHyEAAADYHx7cHx3YHyD/JgDFGgDXHyDYHyDbICTZHyDXHyDYHx7XHyDXHx7fIBnYHx7aHyDYHyTaHx3XHyDYHyDYHyDVHiPaHx7ZHxvZHyDZHyDWHh7WHh3aHx7aHyHZHyDNIFHoIirTHiTZHx7XHyDcHx3YHyDYHx7ZHyDYHyHYHyDXHyDfICHYHx7YHx7ZHyLbHyHYHyHYHyHaHyDVHiDVHhvZHyDZHyDXHx7bHyDZHyDcICHYHx7XHx7aHyDaHx7YHx7bHyDaHyHVHiHcHx3ZHx7ZHyDXHyHaHx7ZHx7aHyDUHh7ZHx7aHyDYHyHWHhnYHx7YHyHVHhvYHyDcICDaHyHcICHYHyHbHyDaHyHZHx7XHx7aHyHXHyDZHyDZHyDbHx7VHh7aHyDXHyHWHh7aHyDaHyDYHyDZHyDaHyHYHx7aHyDaHyHYHyDYHyDZHyDZHx7aHyDXHh3hISLVHh3bHx3XHyHYHyHbHyDcICHaHyDdICHeICHYHyDZHyDhISHkISLgICHfICHjISLbHyHiISH////ipcfUAAAA7nRSTlMAHE6Xvsm8i0YXBlOy6+erTATDPweH+ffXsp+bp8vifQkNqdyBMQEdZFEIq/qJFgUEh9Tj+/DsURIQPv23L9PYV7BHODAHwu8ZcxUpUkxHJQIQcKzwfA4DnBjuyTVN5M/FqxMNDwo/Ix4Cdr4h3H5YDyURj91FAfsseQMH2dUbmV1qrcYM5uE3beOvkCZJLvj7NVfAWEgECAnVegvN0Ziq08DeiItC9uR48jQu9mZs/fH3VZ7kIF/o408h57snleWNIFb8rhhzRhdy/ccybffviUnZrGU9Kyo0WWmG6P795JIfa7n5+b5yIhNMV08U6fjR/AAAAAFiS0dE/DwOo38AAAAHdElNRQfnARUIMQfLGMwuAAACTUlEQVQ4y2NgQABGJmYWVjZ2Dk4GbICLm4f33fsPHz58/MDHLyCIIc8h9O7Th89A8OXdp6/fvgsJo0qLiIp9BMl+/vBJXEJSSlpGVk5eAUleUekHRPcnZRVVsISauoamFsJ67a8g2S/vdHT1ELr0DeBMQyPjj5/fmZiamSNba2EJY1lZ29jafbV3cHRCcZezC5Th6vbD3YPR08vbhwE78P3w4YcfkPYPQJMIDFIH08E/Q0LDgO4OR9dpEaEKoiKjomMY8IHY93HxCYlJ4cmYUilcqUAy4v2HXx9/pKVnYMhnZmXnAKlcUBj+yMsv8CpEU1BUXFJaxsBQDgrjd0YRDBWVSJJJVQwM1RYumUBmDTgWPrExpNfWIRRY1Xs1NEKYTe9ACt43q7W0yiBCIqm17XM7hNkBjucPnRYMXb+7U+Eqenr91CCsvv4voKicMJFh0sePk/1cgUJapVOmZjBMC5sOVjBjJtiOT7MYZs/5+P7zXJl58xd8fv9poVfzosUQM5b8ACn4JZHKsHTZhy/vP/349OvL5w/LV/xYuQpix+o1YH98XMvAsG79r89QYLJh4yaYezaDjfiwZSsDw7btkLT3+cOPHTvhDt61G+KKPS0MDHv38X348ePHh/0HDiIF26HDkMA6AkpkR/0ajzUeP4Ea6idPQVScPoMrzs+eew926PkLW2FC+qgqLl4Cu+7DD97LV65eu37j5q2taGbo3b7z6eMHYAB8+vHu7r37D3IwrXn46PH+J79+fHza+uz5CxxOeWn76vUb1bcoYgCeKT7ATWdIygAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMS0yMVQwODo0OTowNyswMDowMEs6/xcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDEtMjFUMDg6NDk6MDcrMDA6MDA6Z0erAAAAAElFTkSuQmCC`,
        match: scriptConfigs.match,
        "original-author": scriptConfigs.author,
        "original-license": scriptConfigs.license,
        "original-script": scriptConfigs.scriptSource,
        license: scriptConfigs.license,
        source: scriptConfigs.scriptSource,
        note: scriptConfigs.notes
      }
    })
  ]
}