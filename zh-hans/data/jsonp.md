# JSONP

## 跨域

参见[此处](./ajax.html#跨域与-cors)。

## JSONP

浏览器对于请求并执行跨域JS脚本并没有限制，比如正在浏览器的页面是 `http://example.com/a.html`，页面中如下JS引用是有效的：
  
```html
<script src="http://other.site.com/b.js"></script>
```

利用这一点，配合 Server 端的特殊响应结果（执行函数）就可以做到跨域请求：

TODO 给出 JSONP 通信过程

代码 - JSONP 基础封装
[import](../../examples/data/jsonp.js)

主流框架(如 JQuery，Zepto) 都提供了 JSONP 支持，很多时候无需写原生的 JSONP 请求，但是仍然应该了解它的工作原理，否则你会对“JSONP 只支持 GET 请求”这类问题感到费解。
