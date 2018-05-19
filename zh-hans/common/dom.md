# DOM

DOM（Document Object Model）在 Web 环境中用于描述页面结构（Tree），并提供了一组操作（增删改查）DOM 节点（Node）的方法。通过 DOM Node属性和方法、以及 DOM 操作，可以自由改变页面的结构、样式及内容。DOM 操作频繁出现在实际的前端项目中，即使只使用 MVVM 框架（如 React、Angular，封装了大部分 DOM 操作提供上层数据驱动的开发方式），也应该了解 DOM。

DOM 是独立于 JS 的一套规范，在 HTML、XML、SVG 中都有 DOM API 的实现。

![](https://gw.alicdn.com/tfs/TB1LTh.QVXXXXbxXXXXXXXXXXXX-1598-588.png)
图 - DOM Tree 和 HTML

## Node 

以上文例子中的 `body` 节点为例，这是一个`HTMLBodyElement`，它的继承链路是：[`HTMLBodyElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)->[`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)->[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)->[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)->[`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)。从下图可以看到`HTMLElement`同时还实现了`TouchEventHandlers`、`GlobalEventHandlers`，`Node`同时还实现了`ParentNode`。下图是 DOM 相关接口的简化版继承图谱，只列出了核心的属性和方法。

JS 也是一门面向对象（OOP）语言，在接口、继承这些概念上是相通的，JS 中一个接口可以实现多个接口。一个`HTMLHeadElement`本身虽然没有任何属性和方法，但是这条继承链显示出它具有诸如`id`、`style`、`innerHTML`这样的常用属性，它们分布在`HTMLElement`和`Element`中的；它具有诸如`click()`、`appendChild()`、`querySelector()`这样的常用方法，它们分布在`HTMLElement`、`Node`、`ParentNode`中。

<img src="https://gw.alicdn.com/tfs/TB14wx9QVXXXXbSXXXXXXXXXXXX-1824-1052.png" />

图 - Node 继承链（加亮部分是常用属性或方法）

### 练习

<p data-height="300" data-theme-id="0" data-slug-hash="JvwKMb" data-default-tab="result" data-user="luics" data-embed-version="2" data-pen-title="dom-basic-exercise" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/JvwKMb/">dom-basic-exercise</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Node 属性

以 `body` 节点为例，来看一下 Node 常用属性。

<img src="https://gw.alicdn.com/tfs/TB1ww5MRXXXXXccXFXXXXXXXXXX-1156-616.png" height="297" />

图 - Node 属性

在本地运行以下 demo，打开 Console 查看运行结果。

```html
<html>
<head>
    <title>DOM Node</title>
</head>
<body>
<input id="todo" type="text" placeholder="to do something">
<button id="add" type="button">Add Todo Item</button>
<script>
    var body = document.body;
    console.log('body.nodeName', body.nodeName);
    console.log('body.nodeType', body.nodeType);
    console.log('body.firstChild', body.firstChild);
    console.log('body.lastChild', body.lastChild);
    console.log('body.childNodes', body.childNodes);
    var textNode = document.getElementById('add').firstChild;
    console.log('textNode', textNode);
    console.log('textNode.nodeName', textNode.nodeName);
    console.log('textNode.nodeType', textNode.nodeType);
    console.log('body.parentNode', body.parentNode);
    console.log('body.previousSibling', body.previousSibling);

    /***************************************************************/
    var add = document.getElementById('add');
    add.addEventListener('click', function() {
        var todo = document.getElementById('todo');
        console.log(todo.value);
        alert(todo.value);
    }, false);
</script>
</body>
</html>
```

### 练习

请使用 node 相关属性获取所有车门玻璃`Glass`节点，并将文字颜色设置为红色。初始的`car`对象请参见 js 代码：

<p data-height="520" data-theme-id="0" data-slug-hash="erbzNw" data-default-tab="html,result" data-user="luics" data-embed-version="2" data-pen-title="dom-exercise" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/erbzNw/">dom-exercise</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## DOM 方法（Method）

0. 查
    0. `document.getElementById`
    1. `document.getElementsByTagName`
    2. `document.querySelectorAll`
    3. `document.querySelector`
1. 改
    0. `node.insertBefore`
    1. `node.appendChild`
2. 增
    0. `document.createElement`
3. 删
    0. `node.removeChild`

<p data-height="600" data-theme-id="0" data-slug-hash="zwrGXN" data-default-tab="js,result" data-user="luics" data-embed-version="2" data-pen-title="DOM" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/zwrGXN/">DOM</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### 练习

请将所有`Wheel`文字颜色设置为红色。

请使用以上 DOM 方法获取所有车门玻璃`Glass`节点，并将文字颜色设置为红色。初始的`car`对象请参见 js 代码：

<p data-height="520" data-theme-id="0" data-slug-hash="erbzNw" data-default-tab="html,result" data-user="luics" data-embed-version="2" data-pen-title="dom-exercise" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/erbzNw/">dom-exercise</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<!--
## `document`

TODO
-->