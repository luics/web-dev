# Basic TodoMVC

## Add

features:
0. input todo msg

[source code](https://github.com/luics/web-dev/tree/master/examples/TodoMVC/add.html)

Code analysis:

* input
  * `type="text"`, input 有众多类型, 如 radio, checkbox, datetime, email...
  * `id="todo"`, 通过 `document.getElementById('todo')` 获取 dom node 
  * `placeholder=""`, 占位信息 
  * [更多 input 信息](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
* button
  * 普通按钮, 触发 `click` 事件

## List

features:
0. display items
0. display quantity of active items

[source code](https://github.com/luics/web-dev/tree/master/examples/TodoMVC/list.html)

## Delete

features:
0. delete single item

[source code](https://github.com/luics/web-dev/tree/master/examples/TodoMVC/list.html)

## Update

features:
0. complete single item
0. complete all items

[source code](https://github.com/luics/web-dev/tree/master/examples/TodoMVC/update.html)

