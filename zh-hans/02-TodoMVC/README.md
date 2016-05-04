# TodoMVC

[TodoMVC](http://todomvc.com/) 是一个开源项目，实现了一个Todo Application，广泛用于 `MV*` 框架的选择，大量一线框架、语言（编译为JS）实现了自己的 TodoMVC 版本：
* 框架类：ReactJS、AngularJS、Backbone、VueJS 等
* 语言类：Elm、Dart、GWT、TypeScript 等

此外，还有大量框架的下一代版本和一些实验性框架也实现了 TodoMVC，在 [github repo ](https://github.com/tastejs/todomvc/tree/master/examples)中能看到大量 demo。

下图展示了 TodoMVC 的基本功能：

<img src="http://gtms03.alicdn.com/tps/i3/TB1agKNJFXXXXbQXpXX5wG_NXXX-607-538.gif" />  
图 - TodoMVC

## Why TodoMVC?

选择 TodoMVC 有几个原因:

* **功能**，对应数据库表中记录的增删查改操作（CRUD），TodoMVC 功能是完备的，同时还有表单编辑（edit）功能，过滤（filter）功能等。
* **扩展**，TodoMVC 本身没有实现网络，本地数据存储，路由等功能，教学过程中可以很方便地扩展这些功能，让学生对所学功能有一个更全面的认识；这个过程是很有趣，因为你在通过自己的所学逐渐让 TodoMVC 变得更加实用。
* **实用**，大量框架和语言实现了 TodoMVC，这带来了一个额外的优势: 一旦熟悉了 TodoMVC，今后开发中熟悉一门新框架（或语言，工具）的成本就更低了。

## Features

0. Add
  0. input todo item msg
0. List
  0. display items
  0. display quantity of active items
  0. display all/active/completed items
0. Delete
  0. delete single item
  0. delete completed items
0. Update
  0. complete single item
  0. complete all items
  0. edit an item msg

## Development Course

0. 需求
  0. 列出功能大纲
  0. 核心功能给出详细说明
0. 设计
  0. 分解功能
  0. 逐个设计，重点突破
0. 开发
  0. 先专注于部分核心功能，快速给出原型
  0. 完成所有功能级样式
    0. 先考虑整体布局
    0. 分解模块
