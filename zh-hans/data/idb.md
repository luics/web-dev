# IndexedDB

## IndexedDB

几个[重要概念](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#concepts):

0. IndexedDB 数据库存储键值对(k-v pairs), 并且是对象数据库(不同于 mysql 这类关系数据库)
0. 几乎所有操作都在 transaction(事务)中执行。
    * 事务: 就是将一组操作看做原子操作, 要么全部成功, 否则如有一个失败则整体失败, 这对数据的完备性很重要
0. 大部分 API 都是异步的
0. 遵守同源策略, 不能从其他源存取数据

详见[使用文档](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB), 以及[所有 API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。

TODO 一个完整的例子

<p data-height="500" data-theme-id="0" data-slug-hash="KzOGaR" data-default-tab="js" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/KzOGaR/">data-idb</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 改造 TodoMVC

详见[代码](https://github.com/luics/web-dev/blob/master/examples/data/TodoMVC-idb.html)。