# 开发工具

## 浏览器

随着微软转向 [Chromium 开源项目](https://blogs.windows.com/msedgedev/2019/04/08/microsoft-edge-preview-channel-details)，市场中占绝大部分流量都在 Chrome 内核上，兼容性问题比起十多年前(2005年)已有了根本性的变化。本课程所有代码均可在 Chrome 浏览器中运行。

## IDE

市场上适合 Web 开发的优秀 IDE 越来越多，这里仅罗列数个笔者使用过的 IDE：

1. [VSCode](https://code.visualstudio.com/)，免费，开源，性能卓越，功能丰富，推荐。
1. [Atom](https://atom.io/)，免费，开源，性能较好，功能较丰富。
1. [Sublime Text 2](http://www.sublimetext.com/)，免费，性能卓越，功能配置较复杂。
1. [WebStorm](http://www.jetbrains.com/webstorm/)，付费，性能卓越，功能丰富。

## node

[node](https://nodejs.org) 全称是 nodejs，原作者给 Chrome 浏览器的 V8 JS 引擎编写了 OS 桥阶层，让 node JS 代码具备了文件 IO、网络 IO、进程管理 等 OS 资源调度能力，从而极大扩展了 JS 的应用范围。

Node 能做什么?
1. 开发工具
1. 开发服务端
1. 写应用程序（如 ChromeOS 中）
1. 写 OS

在本地运行（请确保已下载了[课程资源](../toolkit)）：

```bash
node examples/web-dev/multiply.js
```

### NPM

NPM 全称是 Node Package Manager，是 node 包管理器，可类比 Maven（Java）、Cocoapods(iOS)、GEM(Ruby)、PIP(Python)。我们会接触到 npm 命令和 npm 站点。

![npm](http://ww3.sinaimg.cn/large/006tNc79ly1g3q529oyn4j30pu06uq3j.jpg)

![npmjs.org](http://ww4.sinaimg.cn/large/006tNc79ly1g3q545w9tzj31qf0u0ahi.jpg)  
*[npmjs.org](http://npmjs.org) 20190605*


## 开发手册

### MDN - API 手册

[MDN](http://developer.mozilla.org) 全称 Mozilla Development Network，也是专业且活跃的 Web 技术社区。

![MDN](http://ww3.sinaimg.cn/large/006tNc79ly1g3p0lmh5tmj325k0u0k0e.jpg)
*[MDN](http://developer.mozilla.org) 20190605*

### caniuse.com - 兼容手册

查询HTML、CSS、JS 特性在不同浏览器版本上的兼容性。

![caniuse.com](http://ww1.sinaimg.cn/large/006tNc79ly1g3q59cphtrj31v50u0dsm.jpg)

*[caniuse.com](https://caniuse.com/#search=indexedDB) 20190605*