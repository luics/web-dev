# 需求 & 设计

## 需求

对 TodoMVC 的核心功能进行简单地拆解:

<img src="http://gtms02.alicdn.com/tps/i2/TB15D1RJFXXXXaEXFXX6QFS3VXX-1430-814.png" width="607" height="" />

0. Add
    0. 输入 todo item（以下简称 item）信息
0. List
    0. 显示 items
    0. 显示 active（完成中的） items 数量
    0. 过滤显示 all/active/completed（已完成） items
0. Delete
    0. 删除单个 item
    0. 删除所有 completed items
0. Update
    0. 完成单个 item
    0. 完成所有 items
    0. 编辑单个 item

## 设计

需求分析的结果让我们清晰地看到:

0. TodoMVC 的核心功能之间存在一个渐进依存的关系，可以依次开发: Add、List、Delete、Update
0. 部分复杂的功能（如过滤功能）可以稍晚开发

因为还不涉及网络交互，本地数据存储，也未考虑更复杂的功能，已经可以着手原型开发了。

## 开发

0. [基础版](./basic.html)
0. [完整版](./full.html)