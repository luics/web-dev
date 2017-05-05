# Basic TodoMVC - Add

功能：

0. 输入 todo item 信息

<p data-height="266" data-theme-id="0" data-slug-hash="wGRoXz" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/wGRoXz/">TodoMVC-basic-add</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

代码分析:

* input
    * `type="text"`, input 有众多类型, 如 radio, checkbox, datetime, email...
    * `id="todo"`, 通过 `document.getElementById('todo')` 获取 dom node 
    * `placeholder=""`, 占位信息
    * `autofocus`, 自动聚焦
    * [更多文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)  
* button
    * 普通按钮, 触发 `click` 事件
    * [更多文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)  

## CodePen

[CodePen](https://codepen.io) 是高效的代码展示平台，易于编写、演示和分享，本书 Demo 默认都放在 CodePen。

## 调试

上节课介绍了 Devtools 调试工具，现在我们将在这个 Demo 中实践一下调试。

0. `Elements`：查看页面结构、CSS
0. `console.log`：查看开发日志
0. `Breakpoint`：设置断点

