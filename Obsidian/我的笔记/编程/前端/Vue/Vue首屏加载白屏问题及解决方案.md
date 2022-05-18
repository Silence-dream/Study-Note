---
tags : 
- Vue
---

首先说一下首页加载为什么会白屏?

先说下 `SPA` 单页面的加载过程

首先就是 html ,也就是 `FP` 阶段

> **FP（全称“First Paint”，翻译为“首次绘制”）** 是时间线上的第一个“时间点”，它代表浏览器第一次向屏幕传输像素的时间，也就是页面在屏幕上首次发生视觉变化的时间。
> 
> 注意：FP不包含默认背景绘制，但包含非默认的背景绘制。

```
<div id="app"></div> 
复制代码
```

> 页面在导航后首次呈现出不同于导航前内容的时间点,有一个东西回来渲染在页面上了

然后是静态资源css，js，之后解析js，生成HTML,也就是 `FCP` 阶段，css,js资源加载下来了，首次的内容绘制，有一个大结构了

> **FCP（全称“First Contentful Paint”，翻译为“首次内容绘制”）** ，顾名思义，它代表浏览器第一次向屏幕绘制 **“内容”** 。
> 
> 注意：只有首次绘制文本、图片（包含背景图）、非白色的 canvas 或SVG时才被算作FCP。

###### FP 与 FCP 的区别

> FP 与 FCP 这两个指标之间的主要区别是：FP是当浏览器开始绘制内容到屏幕上的时候，只要在视觉上开始发生变化，无论是什么内容触发的视觉变化，在这一刻，这个时间点，叫做FP。
> 
> 相比之下，FCP指的是浏览器首次绘制来自DOM的内容。例如：文本，图片，SVG，canvas元素等，这个时间点叫FCP。

```
<div id="app">
  <div class="header"></div>
</div>
复制代码
```

> 比如app根目录里面有一个header,div

到最后,就是 `FMP` ,ajax请求数据之后,首次有效绘制,就是页面加载差不多了，但是可能图片还没加载出来

> **FMP（全称“First Meaningful Paint”，翻译为“首次有效绘制”）** 表示页面的“主要内容”开始出现在屏幕上的时间点。它是我们测量用户加载体验的主要指标。
> 
> FMP本质上是通过一个算法来猜测某个时间点可能是FMP，所以有时候不准。
> 
> 想详细了解FMP及它的原理可以看这篇文章：[《捕获FMP的原理》](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fgithub.com%2Fberwin%2FBlog%2Fissues%2F42 "https://link.zhihu.com/?target=https%3A//github.com/berwin/Blog/issues/42")

**总结:**

从FP到FMP这个过程全是白屏，可能你的header如果有啥大背景色啊，这个背景色或许会出来,ajax之后，才会真正去解析我们的数据,把数据放入我们的html标签中

  
如下图所示: ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e5b1ee452de4fa4a35a19bb038baff5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

> 得说解决首屏加载慢的办法了，我总结了10种！

## 1.预渲染

预渲染就是webpack打包时候渲染,通过无头浏览器

> 无头浏览器,打包的时候，可以把你index.html的内容放入你这个浏览器，但是你这个浏览器是空白的，然后当你进入页面时候直接加载这个index.html，但是没ajax请求

获取到预渲染的页面html内容,然后再放入index.html,再到CDN，直接请求html(相当于FMP提前到了FP),其实更像另外一种骨架屏，少了ajax请求

但是由于这样做我们只能添加死数据，而不能把ajax请求的数据渲染到首页上，怎么解决呢?

我们可以在app.vue中

```
<div id="header"></div>
复制代码
```

> 比如要在这个header标签里面加ajax请求

直接在script中请求给它添加数据即可

```
document.querySelector('#header').html('...')
复制代码
```

## 2.同构

何为同构渲染，就是一套代码多端使用

现在有一些框架，Next，Nuxt，类似于渲染就是vue ->json ->vue-server-renderer ->html

## 3.SSR

服务端渲染也可以解决首屏加载慢这个问题，因为服务端会把所有数据全部渲染完成再返回给客户端

> ssr =>请求->node->解析 ->吐回给客户端(带请求数据)

但是有一个大问题，重要的是node层，高并发的解决

## 4.路由懒加载

可以通过plugin-syntax-dynamic-import 这个插件

```
Vue.component('async-component',(resolve)=>{
  import('./AsyncComponent.js')
  .then((AsyncComponent)=>{
    resolve(AsyncComponent.default)
  })
})
复制代码
```

但是现在好像直接可以通过箭头函数实现路由懒加载

```
const app = () =>import('')
复制代码
```

## 5.quicklink

quicklink就是在浏览器空闲的时候去指定需要加载的数据,这个是谷歌开源的，可以去看看

## 6.使用Gzip压缩，减少文件体积,加快首屏页面打开速度

前提是服务器那边得开启gzip

前端需要做的事

```
npm i compression-webpack-plugin -D
复制代码
```

vue.config.js

```
const CompressionPlugin = require("compression-webpack-plugin")
​
module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /.js$|.html$|.css$|.jpg$|.jpeg$|.png/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
            deleteOriginalAssets: false, // 是否删除原文件
            minRatio: 0.8
          })
        ]
      }
    }
  }
}
复制代码
```

## 7.外链CSS,JS文件

很多时候我们在main.js中直接import一些ui库或者css文件啥的，以后可以在index.html，通过script外链引入，这样就不会通过我们的webpack打包

## 8.webpack entry

这个就是将单页改成多页应用,比如一些组件中，vue.js vue-router等插件已经在某个页面使用了，然后给它缓存起来，下次就无需加载

## 9.骨架屏

骨架屏就是在进入项目的FP阶段，给它来一个类似轮廓的东西，当我们的页面加载完成之后就消失，这个也很好做的，很多ui库都有这个东西，可以参考一下

## 10.loading

首页加一个loading或许是最原始的方法了，在index.html里加一个loadingcss效果，当页面加载完成消失

## 参考文章

[Vue首屏加载白屏问题及解决方案 - 掘金](https://juejin.cn/post/6995455015972241444)

[Vue首页加载白屏原因以及解决的10种方法_进阶的巨人001的博客-CSDN博客_vue首次加载白屏](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fweixin_45389051%2Farticle%2Fdetails%2F109188392 "https://blog.csdn.net/weixin_45389051/article/details/109188392")

[Web性能领域常见的专业术语 - 知乎 (zhihu.com)](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F98880815 "https://zhuanlan.zhihu.com/p/98880815")

