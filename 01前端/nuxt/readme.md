## Nuxt 是什么?

Nuxt.js 是一个基于 Vue.js 的通用应用框架。

通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 **UI 渲染**。

我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。

Nuxt.js 预设了利用 Vue.js 开发**服务端渲染**的应用所需要的各种配置。

除此之外，我们还提供了一种命令叫：`nuxt generate` ，为基于 Vue.js 的应用提供生成对应的静态站点的功能。

我们相信这个命令所提供的功能，是向开发集成各种微服务（Microservices）的 Web 应用迈开的新一步。

作为框架，Nuxt.js 为 `客户端/服务端` 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。



## 目录结构

Nuxt.js 的默认应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用。当然，你也可以根据自己的偏好组织应用代码。
### pages目录
Nuxt.js 会依据 pages 目录中的所有 *.vue 文件生成应用的[路由](#路由)配置

### 资源(assets)目录
资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。

### 组件(components)目录
组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。

### 布局(layouts)目录

布局目录 layouts 用于组织应用的布局组件。
若无额外配置，该目录不能被重命名

默认的布局文件是 layouts/default.vue

布局文件中,使用  `<Nuxt />`可以看成 vue-router 的占位,把路由匹配到页面组件放到的该位置

[404页面](#配置404页面)

### 中间件目录(middleware)目录
middleware 目录用于存放应用的中间件。

### 插件(plugins)目录
插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。

### 静态文件(static)目录
静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

举个例子: /static/robots.txt 映射至 /robots.txt

### Store 目录
store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

### nuxt.config.js 文件
nuxt.config.js 文件用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置。

### package.json 文件
package.json 文件用于描述应用的依赖关系和对外暴露的脚本接口。

### 别名
别名	目录
~ 或 @	srcDir
~~ 或 @@	rootDir
默认情况下，srcDir 和 rootDir 相同。

提示: 在您的 vue 模板中, 如果你需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png方式。

## 路由

*Nuxt.js 依据* `pages` *目录结构自动生成* [vue-router](https://github.com/vuejs/vue-router) *模块的路由配置。*

:::tip

要在页面之间使用路由，我们建议使用[`nuxt-link`](https://www.nuxtjs.cn/api/components-nuxt-link) 标签。

:::

### 基础路由

假设 `pages` 的目录结构如下：

```bash
pages/
--| user/
-----| index.vue
-----| _id.vue
--| index.vue
```

那么，Nuxt.js 自动生成的路由配置如下：

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/?id',
      component: 'pages/user/_id.vue'
    }
  ]
}
```



### 路由传参

很多时候我们需要在路由上传参数，路由上的参数有两种

- 路径参数：/about/100
- 查询参数: /about?id=100&name=李四

##### 方式1：查询参数

| 路径                       | 对应文件        | 页面中接受                           |
| -------------------------- | --------------- | ------------------------------------ |
| /about?hello=100           | pages/about.vue | $route.query.hello                   |
| /about/?hello=123&jack=456 | pages/about.vue | $route.query.hello/$route.query.jack |

##### 方式2：路径参数

| 路径           | 对应文件           | 页面中接受                          |
| -------------- | ------------------ | ----------------------------------- |
| /about/123     | /goods/_id.vue     | $route.params.id                    |
| /goods/100     | /goods/_i.vue      | $route.params.i                     |
| /goods/100/200 | /goods/\_cid/\_gid | $route.params.cid/$route.params.gid |



![1](https://gitee.com/qianshilei/test/raw/master/img/1-1633339749177.gif)



目录结构

```bash
├─pages
|   ├─index.vue
|   ├─user.vue
|   ├─user
|   |  ├─child1.vue
|   |  └child2.vue
|   ├─about
|   |   ├─_id.vue
|   |   ├─_cid
|   |   |  └_gid.vue
├─layouts
|    └default.vue
```

pages/about/_.id.vue

```vue
<template>
  <div>
    <h1>查询参数</h1>
    <h2>{{ $route.query.hello }}</h2>
    <h2>{{ $route.query.jack }}</h2>
    <h1>路径参数</h1>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>
```

pages/about/*_*cid/*_*gid.vue

```vue
<template>
  <div>
    <h1>路径参数</h1>
    <h2>{{ $route.params.cid }}</h2>
    <h2>{{ $route.params.gid }}</h2>
  </div>
</template>
```

layouts/default.vue

```vue
<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/user">user</nuxt-link>
    <br />
    <nuxt-link to="/about/123">路径参数/about/123</nuxt-link>
    <nuxt-link to="/about/123/456">路径参数/about/123/456</nuxt-link>
    <nuxt-link to="/about/?hello=123&jack=456"
      >查询参数/about/?hello=123&jack=456</nuxt-link
    >
    <!-- 显示 pages/index.vue -->
    <Nuxt></Nuxt>
  </div>
</template>
```





##### 总结：

   使用区别：

- 查询参数?  不利于SEO,  百度再抓取我们页面时，如果用?  只会抓取一个页面 
  - content/?id=1
  - content/?id=2
  - content/?id=3
- 推荐使用路径参数 

### 路由参数校验

Nuxt.js 可以让你在动态路由组件中定义参数校验方法。

pages/users/_id.vue

```js
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
```

如果校验方法返回的值不为 `true`或`Promise`中 resolve 解析为`false`或抛出 Error ， Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。

[页面校验 API](https://www.nuxtjs.cn/api/pages-validate)。



```vue
// pages/index.vue
<template>
  <div>
    <h1>home</h1>
    <nuxt-link to="/user/123">/user/123</nuxt-link>
  </div>
</template>

// pages/user/_id.vue
<template>
  <div>
    <h1>传过来的参数{{ $route.params.id }}</h1>
  </div>
</template>
```

### 嵌套路由

你可以通过 vue-router 的子路由创建 Nuxt.js 应用的嵌套路由。

创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个**与该文件同名**的目录用来存放子视图组件。

:::warning

别忘了在父组件(`.vue`文件) 内增加 `<nuxt-child/>` 用于显示子视图内容。

:::

一个小案例

![1](https://gitee.com/qianshilei/test/raw/master/img/1.gif)

目录结构
```bash
├─pages
|   ├─index.vue
|   ├─user.vue
|   ├─user
|   |  ├─child1.vue
|   |  └child2.vue
├─layouts
|    └default.vue
```



pages/index.vue

```vue
<template>
  <div>
    <h1>index首页</h1>
  </div>
</template>
```

pages/user.vue

```vue
<template>
  <div>
    <h1>user</h1>
    <nuxt-link to="/user/child1">child1</nuxt-link>
    <nuxt-link to="/user/child2">child2</nuxt-link>
    <!-- 注意父级 user 写上 nuxt-child 虽然 user/index.vue 也能匹配路由 /user 但是需要 user.vue 在父级才可以使用 nuxt-child -->
    <nuxt-child></nuxt-child>
  </div>
</template>
```

pages/child1.vue  pages/child2.vue

```vue
<template>
  <div><h1>child1</h1></div>
</template>
```

layouts/default.vue

```vue
<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/user">user</nuxt-link>
    <!-- 显示 pages/index.vue -->
    <Nuxt></Nuxt>
  </div>
</template>

<style>
html,
body {
  text-align: center;
}
</style>
```



###  未知嵌套深度的动态嵌套路由

如果您不知道 URL 结构的深度，您可以使用`_.vue`动态匹配嵌套路径。这将处理与*更具体*请求不匹配的情况。

| 路由       | 文件             |
| ---------- | ---------------- |
| /          | index.vue        |
| /people    | people/index.vue |
| /about/132 | about/_id.vue    |
| /any       | _.vue            |
| /any/woc   | _.vue            |

处理 404 页面，现在符合`_.vue`页面的逻辑



## 脚手架配置

nuxt.config.js

```js
  components:true   // 自动在页面组件中导入components目录下的组件
```

## 配置404页面

在 layouts 目录下创建 error.vue 文件即可匹配不存在的路由





## 参考

[Nuxt.js - Vue.js 通用应用框架 | Nuxt.js 中文网 (nuxtjs.cn)](https://www.nuxtjs.cn/)

[Nuxt.js 中文教程_w3cschool](https://www.w3cschool.cn/nuxtjs/)