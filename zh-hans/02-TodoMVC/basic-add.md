# Basic TodoMVC - Add

features:
0. input todo msg

<p data-height="266" data-theme-id="0" data-slug-hash="wGRoXz" data-default-tab="html,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/wGRoXz/">TodoMVC-basic-add</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Code analysis:

* input
  * `type="text"`, input 有众多类型, 如 radio, checkbox, datetime, email...
  * `id="todo"`, 通过 `document.getElementById('todo')` 获取 dom node 
  * `placeholder=""`, 占位信息 
  * [更多 input 信息](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
* button
  * 普通按钮, 触发 `click` 事件