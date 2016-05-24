# AJAX

## ***AJAX == HTTP Request***

AJAX (Asynchronous JavaScript and XML) 就是 HTTP 网络请求。早年 Web 没有 AJAX 时, 通常是整体刷新页面的, 局部刷新需要通过 iframe 等 tricky 方式实现。AJAX 出现后以 Gmail 为代表的站点触发了大规模的页面体验改造 (史称"Web 2.0")。

代码 - AJAX 简易封装
```js
(function() {
  var GET = 'get';
  var Ajax = window.Ajax = {
    get: function(url, onSuccess, onFailure) {
      Ajax.io({method: GET, url: url, onSuccess: onSuccess, onFailure: onFailure});
    },
    io: function(opt) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status >= 200 && request.status < 400) {
            if (opt.onSuccess) opt.onSuccess(request.responseText);
          }
          else {
            if (opt.onFailure) opt.onFailure();
          }
        }
      };

      request.open(opt.method, opt.url, true);
      request.send(null);
    }
  }
})();
```

## 跨域与 CORS

浏览器中的[同源策略](https://www.w3.org/Security/wiki/Same_Origin_Policy)是一种安全手段, 网络请求, 数据存取 等多个方面都能看到同源策略的影子。同源的判断条件是 hostname 和 port 都必须相同, 比如: 

* `example.com` 和 `example.com:3000` 不同源, 因为 port 不同
* `example.com` 和 `blog.example.com` 不同源, 因为 hostname 不同

浏览器会阻止 AJAX 请求非同源资源, 除非服务端给出合适的 CORS (Cross Origin Resource Sharing) Header, 比如:

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, GET
```

完整的 CORS 设置可以参考[文档](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#The_HTTP_response_headers)。

主流框架(如 JQuery, Zepto) 都提供了 AJAX 支持, 很多时候无需写原生的 AJAX 请求, 但是仍然应该了解它的工作原理。另一种通用的跨域方案是 [JSONP](./jsonp.html)。