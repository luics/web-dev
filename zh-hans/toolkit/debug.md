# 调试
<style>img{border:1px solid #232323 !important;}</style>

和所有语言一样，调试在 Web 开发过程中也是必不可少的。Web 开发中调试过程中主要的行为有：

1. 打印日志。
1. 样式微调。
1. JS 断点、单步等。
1. 性能优化。

Chrome 内置的 DevTools 是一组常用开发工具的合集，涵盖了上节提到的调试行为，并且提供了更多能力。

可以通过快捷键打开 DevTools，Windows `Ctrl+Shift+J`，Mac `Command+Option+J`。

也可以通过菜单打开 DevTools：
![DevTools menu](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224344.png)

## Elements - 元素
核心能力：HTML+CSS 展现、查找、变更。
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224431.png)
`examples/web-dev/box.html`

## Console - 日志
核心能力：日志、交互式命令行。
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224456.png)
`examples/web-dev/devtools.html`

## Sources - 源码
核心能力：所有 JS 源码，断点调试。
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224511.png)
`examples/web-dev/devtools.html`

## Network - 网络
核心能力：监控网络加载，常用于加载性能优化。
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224522.png)
`examples/web-dev/devtools.html`

## Application - 应用程序
核心能力：查询 Cookie、LocalStorage、DB 等应用资源分配情况。

在`Console`中运行`localStorage.testData = 1`，然后查看`Application`面板：
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224534.png)
`examples/web-dev/devtools.html`

## Performance - CPU 性能
核心能力：监控CPU资源分配，查找性能热点。
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224546.png)
`examples/web-dev/performance.html`

## Memory - 内存性能
核心能力：监控内存资源分配，查找性能热点。
![](https://luics-image.oss-cn-hangzhou.aliyuncs.com/20200515224605.png)
`examples/web-dev/memory.html`