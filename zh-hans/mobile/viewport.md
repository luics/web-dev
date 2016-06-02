# Viewport

## Meta

```html
<meta content="width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1" name="viewport"/>
```

上面的例子是Mobile页面使用Viewport的通用方式。大意是：页面 CSS 计算时使用的宽度（`width`）根据设备给定值（`device-width`）、初始不缩放（`initial-scale=1`）、不允许用户缩放（`user-scalable=no`）、最大缩放因子为1（`maximum-scale=1`）。 

Viewport最初是iOS Safari的私有属性，以下属性定义摘自[iOS Developer Library](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)。

1. `width`：控制Viewport的大小，单位是px，可以指定一个数值或常量`device-width`；iOS Safari上默认值为980，取值范围为200～10000。
2. `height`：和width相对应，常量为`device-height`；iOS Safari取值范围为223～10000。
3. `initial-scale`：初始缩放比例。
4. `maximum-scale`：允许用户缩放到的最大比例。
5. `minimum-scale`：允许用户缩放到的最小比例。
6. `user-scalable`：用户是否可以手动缩放。

### 动态载入

某些场景下会需要动态载入 Viewport，以便让页面能够更好地呈现在 Mobile 浏览器或 WebView 中:

[import](../../examples/mobile/viewport-load.html) 

这里做了 2000ms 的延时加载，可以看到界面中文案和按钮的明显变化：

<img style="box-shadow: 0 0 5px #ddd;" src="http://gw.alicdn.com/tps/TB1k9vTKXXXXXbbXXXXXXXXXXXX-764-580.png" height="290"> <img style="box-shadow: 0 0 5px #ddd;" src="http://gw.alicdn.com/tps/TB1oB2pKXXXXXb2XVXXXXXXXXXX-764-580.png" height="290">

### width

Viewport 中可以设置`width`为固定值：

[import](../../examples/mobile/viewport-width.html)

在不同的设备上（用横竖屏模拟）切换后可以看到明显的差异：

<img style="box-shadow: 0 0 5px #ddd;" src="https://gw.alicdn.com/tps/TB1upvfKXXXXXctaXXXXXXXXXXX-1080-1920.png" width="240"> <img style="box-shadow: 0 0 5px #ddd;" src="https://gw.alicdn.com/tps/TB1QCTTKXXXXXbOXXXXXXXXXXXX-1920-1080.png" height="240">

`width`更为常用的值是`device-width`：

[import](../../examples/mobile/viewport-device-width.html)

横竖屏切换后：

<img style="box-shadow: 0 0 5px #ddd;" src="https://gw.alicdn.com/tps/TB1V66MKXXXXXa7XpXXXXXXXXXX-1080-1920.png" width="240"> <img style="box-shadow: 0 0 5px #ddd;" src="https://gw.alicdn.com/tps/TB1VezmKXXXXXX_aXXXXXXXXXXX-1920-1080.png" height="240">



