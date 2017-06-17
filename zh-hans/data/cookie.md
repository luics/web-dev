# Cookie

***请不要滥用 Cookie, 除非确实理解 Cookie 存在的意义***

## Stateless HTTP

在任意页面中执行如下代码:

```js
document.cookie = 'id=1';
```

刷新页面, 通过 Dev Tools Network 或抓包软件 (Windows Fiddler, Mac Charles) 获取到的 HTTP Request 类似:

```bash
GET /index.html HTTP/1.1
Host: 127.0.0.1:3001
Cookie: id=1
```

`Cookie: id=1` 出现在了请求 HEADER 中, 同时也出现在了 Response 中, 继续刷新页面 `Cookie: id=1` 仍然存在; 换个角度理解: `Cookie: id=1` 好比是 HTTP 通信过程中的一个状态数据, 比如 `id=1` 可以标记一个用户或一台设备。Cookie 为无状态的 (Stateless) HTTP 添加了状态, 这就是 Cookie 存在的意义。


<div class="mermaid">
sequenceDiagram
    Browser->>Server: Cookie: id=1
    Server-->>Browser: Cookie: id=1
</div>
<script src="../common/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

使用 Cookie 来存储数据并不常见, 通常是针对非登录用户的, 如购物类站点存储购物车中的商品列表。但是更多的场景下我们并不使用 Cookie 来存储数据, 原因是:
 
 0. Cookie 存储容量是有上限的, 不同浏览器有差异, 典型值是 4KB, 容量非常小
 0. Cookie 在其生命周期内总是被添加到 HTTP 请求和响应中(HTML/JS/CSS/IMG 等), 这会增大请求的数据量。如果按照每天 10 亿 pv 计算，1 byte cookie 大约会增加 5.590 G 的流量，1 KB cookie 就 会增加 5.590 T 流量。 ***Cookie 不适合作为存储载体***
 
尽管如此, Cookie 用来存储必要的状态数据仍然是被广泛应用的, 比如用户的登录状态(ID, Nickname 等)。

## Cookie API

Cookie 写入和读取方式非常"原始":

代码 - Cookie 写入完整版  
```js
document.cookie = 'id=1;path=/;domain=127.0.0.1;max-age={max-age};expires={expires};secure';
```

`id=1`是数据部分, 通过 `;` 分割数据和参数, 所有参数细节可以查看[文档](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)。

但是, 更为可怕的是 Cookie 读取操作:

代码 - Cookie 读取完整版  
```js
document.cookie; // "id=1;name=luics;cart=1%7C2%7C3%7C4%7C5;other=%20%20sdsd%20-%20%2B%20sd"
```

这就是读取 Cookie 的唯一接口了, 所以为了读取某个值, 通常会这么写:

代码 - Cookie 读取单个值  
```js
document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1"); // "1"
```

由于原生 Cookie API 非常繁琐, 这里提供了一个简单的 Cookie 库, 简化存取操作。

代码 - Cookie 基础封装
> [cookie.js](../../examples/data/cookie.js)

```js
(function() {
  /**
   * Cookie
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Syntax
   */
  var Cookie = window.Cookie = {
    /**
     * @param key {String}
     * @returns {String}
     *
     */
    getItem: function(key) {
      var pattern = '(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$';
      return decodeURIComponent(document.cookie.replace(new RegExp(pattern), "$1"));
    },
    /**
     * @param key {String}
     */
    removeItem: function(key) {
      Cookie.setItem(key, '', {maxAge: -1});
    },
    /**
     * @param key {String}
     * @param value {String}
     * @param [opt] {Object}
     * @param [opt.path] {String}
     * @param [opt.domain] {String}
     * @param [opt.maxAge] {Number} unit is second
     * @param [opt.expires] {Date}
     * @param [opt.secure] {Boolean}
     */
    setItem: function(key, value, opt) {
      opt = opt || {};
      var buf = [key, '=', encodeURIComponent(value)];
      if (opt.path) buf.push(';path=' + opt.path);
      if (opt.domain) buf.push(';domain=' + opt.domain);
      if (opt.maxAge) buf.push(';max-age=' + opt.maxAge);
      if (opt.expires) buf.push(';expires=' + opt.expires.toUTCString());
      if (opt.secure) buf.push(';secure');

      var str = buf.join('');
      document.cookie = str;
      return str;
    }
  };
})();
```

正则表达式请参考[此处](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)。 

## 改造 TodoMVC

详见[代码](https://github.com/luics/web-dev/blob/master/examples/data/TodoMVC-cookie.html)。

