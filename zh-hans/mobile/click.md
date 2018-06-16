# Click 延迟

## 问题

Mobile 默认浏览器（Mobile Safari 或 Mobile Chrome）click 事件有 300ms+ 延时。

<p data-height="265" data-theme-id="0" data-slug-hash="aKLRRV" data-default-tab="js,result" data-user="luics" data-embed-version="2" data-pen-title="click-delay" class="codepen">See the Pen <a href="https://codepen.io/luics/pen/aKLRRV/">click-delay</a> by luics (<a href="https://codepen.io/luics">@luics</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

在手机浏览器中访问这个页面：

<img src="https://ws4.sinaimg.cn/large/006tNc79ly1fscubjkfglj307s07s742.jpg" width="200" ali="qr">


通常使用 touch 事件模拟点击来减少延迟：

<p data-height="265" data-theme-id="0" data-slug-hash="qNEzVE" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/qNEzVE/">qNEzVE</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

touch 事件带来副作用：“点击穿透”，解决方案见：

* ***[zepto tab event](http://zeptojs.com/#Touch events)***
* [hammer.js](https://github.com/hammerjs/hammer.js) 最初也是以完善解决点击延迟和丰富的手势封装而著称的。 





