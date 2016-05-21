# Closure

有一段对闭包的精辟注解：

> A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.  (from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Closure))

闭包是一个特殊的对象，包含了一个 function 以及创建它的环境。换句话说，**闭包中的函数可以“记住”创建它的环境**。

先看一个例子：

<p data-height="300" data-theme-id="0" data-slug-hash="LNKVLR" data-default-tab="js" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/LNKVLR/">closure-1</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 原理

### 作用域链

基础示例

<p data-height="265" data-theme-id="0" data-slug-hash="jqjoBv" data-default-tab="result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/jqjoBv/">closure-basic</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


基础示例 (event)

<p data-height="265" data-theme-id="0" data-slug-hash="VaJOaa" data-default-tab="result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/VaJOaa/">closure-func</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

时间绑定

<p data-height="265" data-theme-id="0" data-slug-hash="KzjLvr" data-default-tab="result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/KzjLvr/">closure-error</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 应用
