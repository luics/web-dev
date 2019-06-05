# 开发环境

## 安装开发环境

1. 安装 [Chrome](https://www.google.cn/intl/zh-CN/chrome/)。
1. 安装 [VSCode](https://code.visualstudio.com/)（或任何 IDE）。
1. 安装 [node](https://nodejs.org)。 
1. 安装 HTTP 服务器：
    ```bash
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install -g serve
    serve ./
    ```
1. 安装[课程资源](../toolkit)。

## 练习 - 本地的页面

请在本地新建一个页面：

1. 页面包含的 html、js 如下所示。
1. 打开命令行，切换该文件所在目录，运行`serve .`。
1. 浏览器中打开该页面`http://localhost:5000/xxx.html`。
1. 打开 DevTools，熟悉 Elements、Console。
1. DevTools 切换到 Sources，设置断点并单步执行。

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="luics" data-slug-hash="pmBKgG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="env-1">
  <span>See the Pen <a href="https://codepen.io/luics/pen/pmBKgG/">
  env-1</a> by luics (<a href="https://codepen.io/luics">@luics</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 练习 - Polyfill

写一个 Polyfill 实现 `String.prototype.startsWith` 的功能。

1. 通过 [MDN](http://developer.mozilla.org) 了解 `startsWith`。
1. 试着写一个类似的 `startsWith` 方法，尽可能覆盖各种边界场景。
1. 写一单元测试用例，可不依赖测试框架，也可以尝试 [mocha](https://mochajs.org) 等框架。




