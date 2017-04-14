# TodoMVC

<img src="http://gtms03.alicdn.com/tps/i3/TB1agKNJFXXXXbQXpXX5wG_NXXX-607-538.gif" width="600" />  
图 - TodoMVC

[TodoMVC](http://todomvc.com/) 是一个开源项目，实现了一个 Todo Application，广泛用于 `MV*` 框架的选择，大量一线的框架、语言（编译为JS）实现了自己的 TodoMVC 版本：
* 框架类：ReactJS、AngularJS、Backbone、VueJS ...
* 语言类：Elm、Dart、GWT、TypeScript ...

此外，还有大量框架的下一代版本和一些实验性框架也实现了 TodoMVC，在 [github repo](https://github.com/tastejs/todomvc/tree/master/examples) 中能看到大量 demo。

<img src="http://gtms04.alicdn.com/tps/i4/TB1NsYGJFXXXXXcXXXXBkGNGpXX-700-327.png" width="600" />  
图 - 部分实现了 TodoMVC 的 JS lib

## 为什么是 TodoMVC?

选择 TodoMVC 有几个原因:

* **功能**，对应数据库表中记录的增删查改操作（CRUD），TodoMVC 功能是完备的，同时还有表单编辑（edit）功能，过滤（filter）功能等。
* **扩展**，TodoMVC 本身没有实现网络，本地数据存储，路由等功能，教学过程中可以很方便地扩展这些功能，让学生对所学功能有一个更全面的认识；这个过程很有趣，因为你在通过所学知识逐渐让 TodoMVC 变得更加实用。
* **实用**，大量框架和语言实现了 TodoMVC，这带来了一个额外的优势: 一旦熟悉了 TodoMVC，今后熟悉一门新框架（或语言、工具）的成本就更低了，而且不同语言的异同点也会更加直观。


## 如何实现 TodoMVC?

0. 需求
    0. 列出功能大纲
    0. 核心功能给出详细说明
0. 设计
    0. 逐个设计
    0. 重点突破
0. 开发
    0. 原型: 先专注于部分核心功能，快速给出原型
    0. 渐进增强: 逐渐完成所有功能级样式
        0. 先考虑整体布局
        0. 分解模块

更为一般的项目开发流程会稍复杂一些，比如会有交互、视觉评审、技术设计评审、测试等，但“需求-设计-开发”真的也就是大部分项目的核心流程了。