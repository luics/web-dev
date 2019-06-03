# 闭包

有一段对闭包（Closure）的精辟注解：

> A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.  (from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Closure))
> （闭包是一个特殊的对象，包含了一个 function 以及创建它的环境。）

换句话说，**闭包中的函数可以“记住”创建它的环境**。

## 原理

### 词法作用域

<p data-height="300" data-theme-id="0" data-slug-hash="qjWLeW" data-default-tab="js,result" data-user="luics" data-embed-version="2" data-pen-title="closure-lexical" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/qjWLeW/">closure-lexical</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

通过这个例子，可以将词法作用域理解为：JS 中作用域范围为函数，"词法"强调作用域和源码的对应关系，表现为嵌套的函数可以访问外层函数中的变量。

<img src="http://ww4.sinaimg.cn/large/006tNc79ly1g3o37fyinoj30nw05sdge.jpg" width="356">  

图 - 例子中的词法作用域链 

多个词法作用域之间形成一个链条，也称作词法作用域链或作用域链。

### 闭包


对上一个例子做微调：

<p data-height="360" data-theme-id="0" data-slug-hash="LNKVLR" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/LNKVLR/">closure-1</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

将`displayName()`函数作为返回值，这事：


再看一个例子：

<p data-height="360" data-theme-id="0" data-slug-hash="KqPbRy" data-default-tab="js" data-user="luics" data-embed-version="2" data-pen-title="closure-adder" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/KqPbRy/">closure-adder</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

这里的`makeAdder`是一个函数工厂（function factory），`add5`、`add10`是两个闭包（再次回顾文章开头对闭包的定义），他们共享函数体，但是具有不同的词法环境。

<img src="http://ww3.sinaimg.cn/large/006tNc79ly1g3o37m1dzrj30nk0a4t9m.jpg" width="496">  

图 - 本例中的闭包

### 练习

* 练习 1

<p data-height="400" data-theme-id="0" data-slug-hash="jqjoBv" data-default-tab="js" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/jqjoBv/">closure-basic</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

* 练习 2

<p data-height="300" data-theme-id="0" data-slug-hash="MogLEx" data-default-tab="js,result" data-user="luics" data-embed-version="2" data-pen-title="closure-error-binding" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/MogLEx/">closure-error-binding</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="340" data-theme-id="0" data-slug-hash="KzjLvr" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/KzjLvr/">closure-error</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>



<!--
TODO ES6 解释
 
http://ryanmorr.com/understanding-scope-and-context-in-javascript/
https://johnresig.com/apps/learn/#53
## 应用

### 私有成员

### 模块
-->