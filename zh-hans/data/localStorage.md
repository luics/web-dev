# localStorage

## localStorage 基础

<p data-height="200" data-theme-id="0" data-slug-hash="mPgbyx" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/mPgbyx/">data-localStorage-basic</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

DevTools 中可以看到类似的变化:

<img src="http://gtms02.alicdn.com/tps/i2/TB1cKQ3JVXXXXX5XFXXI5W7JFXX-1246-278.png" width="623">

## localStorage 完整

* **`getItem()`**
* **`setItem()`**
* `length`
* `key()`
* `removeItem()`
* `clear()`

[查看 localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)。

<p data-height="300" data-theme-id="0" data-slug-hash="BKEByq" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/BKEByq/">data-localStorage-full</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 练习

写一个 Demo，验证 localStorage 的存储上限。这个 Demo 要注意规避大字符串拼接或 LocalStorage 高频读写.

（请尽量独立完成，如有困难再[参考示例](https://codepen.io/luics/pen/EXKgEP)。）

## 改造 TodoMVC

详见[代码](https://github.com/luics/web-dev/blob/master/examples/data/TodoMVC-localStorage.html)。
