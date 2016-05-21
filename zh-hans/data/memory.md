# 改造 TodoMVC

## 改造 TodoMVC 基础版

* 使用`items`保存所有 Todo item 的数据，每个 item 数据格式是 `{msg:'', completed:false}`
* 改变 item 状态或删除 item 时均对数据进行，然后触发`update`

<p data-height="500" data-theme-id="0" data-slug-hash="LNawRV" data-default-tab="js,result" data-user="luics" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/luics/pen/LNawRV/">data-memory</a> by luics (<a href="http://codepen.io/luics">@luics</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 改造 TodoMVC 完整版

详见[代码](https://github.com/luics/web-dev/blob/master/examples/data/TodoMVC-memory.html)。

引入 `model` 层统一数据层, 不同的 `provider` (localStorage, database 等)实现 `model` 中的 `provider` 接口(init, flush)。  

代码 - model
```js
window.model = {
  data: {
    items: [
      // {msg:'', completed: false}
    ],
    msg: '',
    filter: 'All'
  },
  TOKEN: 'TodoMVC'
  
  // data provider interface
  // init: null
  // flush: null
};
```

代码 - memory provider
```js
(function() {
  var model = window.model;
  Object.assign(model, {
    init: function(callback) {
      // do nothing
      if (callback) callback();
    },
    flush: function(callback) {
      // do nothing
      if (callback) callback();
    }
  });
})();
```

 