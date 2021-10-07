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

1. assets目录，会被webpack打包
2. 访问路径，~/assets/路径
3. 最终是使用require(路径)

```vue
<template>
  <div>
    <img src="~assets/img/芭芭拉.gif" alt="" />
    <img src="~/assets/img/芭芭拉.gif" alt="" />
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
    </div>
    <div class="inline" :style="keli"></div>
  </div>
</template>

<script>
const keli = require(`~/assets/img/可莉.gif`)
export default {
  data() {
    return {
      keli:`background: url(${keli}) no-repeat;`
    }
  },
}
</script>

<style>
img {
  width: 200px;
}
.box1 {
  display: inline-block;
  width: 200px;
  height: 200px;
  background: url(~assets/img/甘雨.gif) no-repeat;
  background-size: contain;
}
.box2 {
  display: inline-block;
  width: 200px;
  height: 200px;
  background: url(~/assets/img/甘雨.gif) no-repeat;
  background-size: contain;
}
.inline {
  width: 200px;
  height: 200px;
  background-size: contain !important;
}
</style>
```



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

1. 该目录下的文件，不会被webpack打包
2. 访问时直接写static目录下的文件路径， (譬如) /imgs/xxx 
3. 无论是assets还是static 使用行内样式加载图片资源时，全部统一写法： require(~/静态资源目录/路径)

```vue
<template>
  <div>
    <img src="/img/芭芭拉.gif" alt="" />
    <img src="/img/芭芭拉.gif" alt="" />
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
    </div>
    <div class="inline" :style="keli"></div>
  </div>
</template>

<script>
// const keli = require(`~img/可莉.gif`)
// 尽量使用英文文件名
const keli = require('~/static/img/1.gif')
export default {
  data() {
    return {
      keli: `background: url(${keli}) no-repeat;`,
    }
  },
}
</script>

<style>
img {
  width: 200px;
}
.box1 {
  display: inline-block;
  width: 200px;
  height: 200px;
  background: url(/img/甘雨.gif) no-repeat;
  background-size: contain;
}
.box2 {
  display: inline-block;
  width: 200px;
  height: 200px;
  background: url(/img/甘雨.gif) no-repeat;
  background-size: contain;
}
.inline {
  width: 200px;
  height: 200px;
  background-size: contain !important;
}
</style>
```



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

### 预处理器配置

[Nuxt - Configuration (nuxtjs.org)](https://nuxtjs.org/docs/features/configuration#pre-processors)

### 全局 css 变量

```shell
yarn add @nuxtjs/style-resources
```

```js

buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
     less:['~/assets/less/xxx.less']   // 全局变量
  }
```



## 配置404页面

在 layouts 目录下创建 error.vue 文件即可匹配不存在的路由

## asyncData 处理异步数据

此方法会在服务端获取并渲染数据

**asyncData** 方法会在组件(pages组件)每次加载之前被调用

在这个方法被调用的时候，第一个参数被设定为当前页面的**上下文对象**，你可以利用 `asyncData`方法来获取数据并返回给当前组件。

```vue
<template>
  <div>
    <h1>{{ip}}</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    const ip = await context.$axios.$get('http://icanhazip.com')
    const { data } = await context.$axios.$get('https://cnodejs.org/api/v1/topics', {
      params: {
        page: 1,
        tab: 'ask',
      },
    })
    console.log(context)
    // console.log(data)
    return { ip,data }
  },
})
</script>

<style lang="scss">
$red: red;
div {
  color: $red;
}
</style>
```

## 动画 transition

Nuxt.js 使用 Vue.js 的 [transition](http://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components)组件来实现路由切换时的过渡动效。默认类目是.page开通

### 过渡类名

```css
.page-enter, .page-leave-to {   }
.page-enter-active, .page-leave-active {   }
```

layouts/default.vue
```vue
<<template>
  <div class="box">
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    <nuxt-link to="/user">user</nuxt-link>
    <Nuxt></Nuxt>
  </div>
</template>

<style>
html,body{
  text-align: center;
}
a{
  padding: 0 20px;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.8s;
}
</style>
```

### 动画类名

1.   使用transtion属性在页面组件指定自定义动画名称
2.   在布局文件

```css
xxx-enter-active,xxx-leave-active  {    }
```

layouts/default.vue

```vue
<<template>
  <div class="box">
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    <nuxt-link to="/user">user</nuxt-link>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,body{
  text-align: center;
}
a{
  padding: 0 20px;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.8s;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(0);
  }
}
</style>
```

pages/user.vue

```vue
<template>
  <h1>hi user</h1>
</template>

<script>
export default {
  // 使用动画
  transition: "bounce"
}
</script>
```

[API: transition 属性 - NuxtJS | Nuxt.js 中文网](https://www.nuxtjs.cn/api/pages-transition)

## 中间件 middleware

1.   中间件就是一个函数， 运行在客户端或者服务端
2.   项目启动或者刷新页面，运行在服务端
3.   切换路由，运行在客户端
4.   process.server / process.static  判断执行环境

​    执行顺序：

1. nuxt.config.js

2. 布局文件(layouts)

3. 页面文件(pages)

4. 全局中间件, 整个项目都可以使用

   1. middleware目录下xxx.js

   2. nuxt.config.js 全局注册  

      ```javascript
      router :{
          middleware:'全局中间件名称'
      }
      ```

   3. 整个项目路由切换时或者刷新页面时，全局中间件都会执行

### 全局中间件

nuxt.config.js

```js
export default {
  router:{
    middleware:"index1"
  }
}
```

middleware/index1.js

```js
export default () => {
  console.log("这里是中间件")
}
```

### 局部中间件

2.布局中的中间件

1. middleware目录下xxx.js

middleware/pagesMiddleware.js

```js
export default () => {
  console.log("pages 中间件")
}
```

1. 在布局文件中使用middleware:'中间件名称'

layouts/default.vue

```vue
<template>
  <div>
    <h1>这里是 layouts</h1>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {
  // 使用中间件
  middleware:"layoutsMiddleware"
}
</script>
```





3.页面中的中间件

1. middleware目录下xxx.js
2. 在页面文件中使用middleware:'中间件名称'

使用方法同上面

[中间件](https://www.nuxtjs.cn/guide/routing#中间件)



## 插件 plugins

### 插件的注册

插件需要在 nuxt.config.js 内的 plugins 内进行注册才可以调用

nuxt.config.js

```js
export default {
    plugins:[
        "插件的目录/xxx.js",
        { src:"插件的路径/xx.js"}
    ]
}
```



###  默认插件

1. 就是一个plugins/js文件
2. 项目启动时/根目录刷新， 会在客户端和服务端都执行一次，此时要注意区分环境
3. 路由切换时，该插件不执行

###  客户端/服务端插件

nuxt.config.js

```js
plugins:[
    '~/plugins/xxx.js'  // 两端都会执行
    {src:'~/plugins/xxx.js', mode:'client'} // 客户端
    {src:'~/plugins/xx.js', mode:'server'} // 服务端
    {src:'~/plugins/xx.js', mode:'both'} // 两端
]
```

### 插件注入 

#### 注入 vue 实例

plugins/test.js

```js
import vue from "vue";

export default function () {
  // 注入 vue 原型
  vue.prototype.$test = "这里是test"
  console.log("插件执行了")
}
```

pages/index.vue

```vue
<script>
export default {
 created() {
   console.log(this.$test) // "这里是test"
 }
}
</script>
```

#### 注入 context 实例

在`asyncData`和`fetch`中可以获取到 context

plugins/client.js

```js
export default (context) => {
  context.app.myClient = "这里是客户端"
  console.log("指定在客户端运行")
}
```

pages/index.vue

```vue
<script>
export default {
  asyncData(context){
   console.log(context.app.myClient)
  }
}
</script>
```

#### 同时注入

如果您需要同时在`context`，`Vue`实例，甚至`Vuex`中同时注入，您可以使用`inject`方法,它是 plugin 导出函数的第二个参数。将内容注入 Vue 实例的方式与在 Vue 应用程序中进行注入类似。系统会自动将`$`添加到方法名的前面。



plugins/test.js

```js
export default function (context,inject) {
  inject('myServer',() => {
    return "这里是 server"
  })
  console.log("插件执行了")
}
```

pages/index.vue

```vue
<script>
export default {
 created(context) {
   let str=this.$myServer()
   console.log(str) //这里是 server
 },
  asyncData(context){
   console.log(context.app.$myServer()) //这里是 server
  }
}
</script>
```

## vuex 的使用

nuxt 内置了 vuex 所以使用的时候不需要再次安装 vuex

Nuxt.js 会尝试找到 src 目录（默认是应用根目录）下的 `store` 目录，如果该目录存在，它将做以下的事情：

1. 引用 `vuex` 模块
2. 将 `vuex` 模块 加到 vendors 构建配置中去
3. 设置 `Vue` 根实例的 `store` 配置项

Nuxt.js 支持两种使用 `store` 的方式，你可以择一使用：

- **模块方式：** `store` 目录下的每个 `.js` 文件会被转换成为状态树[指定命名的子模块](http://vuex.vuejs.org/en/modules.html) （当然，`index` 是根模块）
- **Classic(不建议使用)：** `store/index.js`返回创建 Vuex.Store 实例的方法。



一个案例体验在 nuxt 中使用 vuex

![vuex](https://gitee.com/qianshilei/test/raw/master/img/vuex.gif)

pages/index.vue

```vue
<template>
  <div id="box">
    <h1>index首页</h1>
    <h2>{{ $store.state.count }}</h2>
    <button @click="add">同步增加</button>
    <button @click="asyncAdd">异步增加</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("add", 100)
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", 200)
    }
  }
};
</script>

<style>
html, body {
  height: 100%;
}

#box {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid;
  text-align: center;
}
</style>
```

store/index.js

```js
export const state = function () {
  return {
    count: 0
  }
}

export const mutations = {
  add(state, params) {
    state.count += params
  }
}

export const actions = {
  asyncAdd({commit}, payload) {
    commit("add", payload)
  }
}
```

### 模块的使用 module

您可以将模块文件分解为单独的文件：`state.js`,`actions.js`,`mutations.js`和`getters.js`。如果您使用`index.js`来维护`state`,`getters`,`actions`和`mutations`，同时具有单个单独的操作文件，那么仍然可以正确识别该文件。

如果在 store 里面写 xxx.js 那么记住导出 state 等以便外部调用,多个导出的 xxx.js 文件会被识别成为模块



案例

![vuex2](https://gitee.com/qianshilei/test/raw/master/img/vuex2.gif)

pages/about.vue

```vue
<template>
  <div class="about">
    <h1>随机数: {{ random }}</h1>
    <h2>把随机数添加到数组内</h2>
    <div>{{ $store.state.modulesList.list }}</div>
    <!-- 调用 moduleA 里面的数据 -->
    <div>{{ $store.state.moduleA.str }}</div>
    <button type="submit" @click="addList">把随机数添加到 modulesList 模块的 list 内</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      random: 0
    }
  },
  methods: {
    getRandom() {
      let random = Math.floor(Math.random() * 10 - 0 + 0);
      return random;
    },
    addList() {
      let random = this.getRandom();
      this.random = random;
      // 调用 modulesList 模块里面的 addList 方法
      this.$store.commit("modulesList/addList",random)
    }
  }
}
</script>
```



store/modulesList.js

```js
// 直接导出 nuxt 会识别 modulesLIst 为模块
export const state = function () {
  return {
    list: [1, 2, 3, 4]
  }
}

export const mutations = {
  addList(state, payload) {
    state.list.push(payload)
  }
}
```





## 参考

[Nuxt.js - Vue.js 通用应用框架 | Nuxt.js 中文网 (nuxtjs.cn)](https://www.nuxtjs.cn/)

[Nuxt.js 中文教程_w3cschool](https://www.w3cschool.cn/nuxtjs/)

