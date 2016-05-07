# 需求分解

## 需求

对 TodoMVC 的核心功能进行简单地拆解:

<img src="http://gtms02.alicdn.com/tps/i2/TB15D1RJFXXXXaEXFXX6QFS3VXX-1430-814.png" width="607" height="" />

0. Add
    0. input todo item msg
0. List
    0. display items
    0. [left] display quantity of active items
    0. [filter] display all/active/completed items
0. Delete
    0. delete single item
    0. [clear] delete completed items
0. Update
    0. complete single item
    0. [all] complete all items
    0. [edit] edit an item msg

## 设计

需求分析的结果让我们清晰地看到:

0. TodoMVC 的核心功能之间存在一个渐进依存的关系，可以依次开发: Add，List，Delete，Update 中的核心功能
0. 部分复杂的功能（如`[filter]`）可以稍晚开发

因为还不涉及网络交互，本地数据存储，也未考虑更复杂的功能，这个简单的设计已经足够支撑开发一个基本版的 TodoMVC。

## 开发

0. [开发基础版](./basic.html)
0. [开发完整版](./full.html)
