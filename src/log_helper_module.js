export function LogHelper() {
    if (document.querySelector('container-element') == null) {
        $('.wrapper').append(this.el_text);
        const odiv = document.querySelector("container-element");

        //给需要移动的元素添加onmousedown事件
        odiv.onmousedown = function (ev) {
            let event = window.event || ev;
            // 获取屏幕中可视化的宽高的坐标
            let dx = event.clientX - odiv.offsetLeft;
            let dy = event.clientY - odiv.offsetTop;
            console.log(event);
            console.log(dy)
            //实时改变目标元素odiv的位置
            document.onmousemove = function (ev) {
                let event = window.event || ev;
                odiv.style.left = event.clientX - dx + 'px';
                odiv.style.top = event.clientY - dy + 'px';
            }

            //抬起停止拖动
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;

            }
        }

    };
}
LogHelper.prototype = {
    constructor: LogHelper,
    el_text:
        `
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
  `,
    /**
     * 写入日志输出 返回dom元素
     * @param {*} htmlContent 输入内容 支持html
     * @param {*} alignCenter 是否居中
     * @param {*} border border css
     * @returns 返回输出的dom元素
     */
    WriteHtmlLine: (htmlContent, alignCenter = false, border = { borderTop: false, borderBottom: false }) => {
        const document = globalThis.document;
        if (typeof document === "undefined") throw new Error("document = undefined error!");
        const el = document.createElement('div');
        const container = document.querySelector('container-element');
        el.classList.add('item');
        if (alignCenter) {
            el.style.textAlign = "center";
        };
        if (border.borderTop) {
            el.style.borderTop = "1px solid #767676";
        }
        if (border.borderBottom) {
            el.style.borderBottom = "1px solid #767676";
        }
        const body = container.querySelector('.body');
        const logEl = container.querySelector('.console');
        logEl.appendChild(el);
        el.innerHTML = htmlContent;

        const result = [...htmlContent.matchAll(/<span class=\"(.+)\">(.+)<\/span>/g)][0];

        if (result === undefined) {
            console.log("\n" + htmlContent);
        } else {
            htmlContent = htmlContent.replace(/<span class=\"(.+)\">(.+)<\/span>/g, `<br> <span class="${result[1]}">${result[2]}</span>`);
            el.innerHTML = htmlContent;

            htmlContent = htmlContent.replace(/<span class=\"(.+)\">(.+)<\/span>/gm, "%c" + result[2])
            htmlContent = htmlContent.replace(/<br>/gm, "\n");
            let color = "#757575";
            switch (result[1]) {
                case "info":
                    color = "#2196f3a3";
                    break;
                case "warn":
                    color = "#ffc107db";
                    break;
                case "error":
                    color = "#f36c71cc";
                    break;
                case "debug":
                    color = "#9e9e9ec4";
                    break;
                case "log":
                    color = "#9e9e9ec4";
            }

            body.scrollTop = body.scrollHeight;
            logEl.scrollTop = logEl.scrollHeight;
            console.log("\n" + htmlContent, `color: #fff; background: ${color}; padding: 3px 2px; border-radius: 3px;`);
        }
        return el;
    }

};
