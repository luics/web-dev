# 闭包

有一段对闭包(Closure)的精辟注解：

> A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.  (from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Closure))

闭包是一个特殊的对象，包含了一个 function 以及创建它的环境。换句话说，**闭包中的函数可以“记住”创建它的环境**。

先看一个例子：

<p data-height="300" data-theme-id="0" data-slug-hash="LNKVLR" data-default-tab="js" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/LNKVLR/">closure-1</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 原理

### Execution Context

TODO

http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/


### Scope Chain

TODO

http://dmitrysoshnikov.com/ecmascript/chapter-4-scope-chain/

### 实例分析

TODO

实例 1

<p data-height="265" data-theme-id="0" data-slug-hash="jqjoBv" data-default-tab="js" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/jqjoBv/">closure-basic</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


TODO

实例 2

<p data-height="265" data-theme-id="0" data-slug-hash="VaJOaa" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/VaJOaa/">closure-func</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


TODO

常见错误

<p data-height="265" data-theme-id="0" data-slug-hash="KzjLvr" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/KzjLvr/">closure-error</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 应用

### 模块

### 私有成员
