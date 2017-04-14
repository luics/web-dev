# Server

可能大家会有疑惑: Server 为什么出现在了这一章?

笔者习惯将 Server 看做是一种"数据源", 这种"数据源"在数据的增删改查上和 localStorage, Cookie, IndexedDB 没有本质区别, 只不过多了网络通信(AJAX, JSONP)的过程。当然, 真实世界的 Server 端远比数据的增删改查要复杂得多, 在这个特殊的视角下, 将 Server 看做一种数据源是合适的抽象。

## 改造 TodoMVC

详见[代码](https://github.com/luics/web-dev/blob/master/examples/data/TodoMVC-server.html)。