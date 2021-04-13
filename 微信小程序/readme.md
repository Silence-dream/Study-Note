



## rpx转换

```css
															/* 
 * 设计图750px
 * 1px = 1rpx
 * 设计图 375px
 * 1px = 2rpx
 * 设 设计图大小为page 求100px在page里面该用多少rpx表示
 * 750rpx 乘上 (设计稿px与设计稿宽度px)的比值
 */
.box-rpx{
    width: calc(750rpx * 100 / 375);
    height: calc(750rpx * 100 / 375);
    background-color:pink;
}
```

## 代码提示

-  使用npm在根目录安装miniprogram-api-typings和npm install miniprogram-api-typings@2.4.1



```cmd
																							npm install miniprogram-api-typings
npm install miniprogram-api-typings@2.4.1
```

## 小程序目录结构

```cmd
├── pages ······································ 【目录】存放所有的小程序页面
│   │── index ···································· 【目录】index 页面
│   │   ├── index.wxml ······························· 【文件】 index 页面的结构
│   │   ├── index.js ································· 【文件】 index 页面的逻辑
│   │   ├── index.json ······························· 【文件】 index 页面的配置
│   │   └── index.wxss ······························· 【文件】 index 页面的样式
│   └── logs ····································· 【目录】 logs 页面
│       ├── logs.wxml ································ 【文件】 logs 页面的结构
│       └── logs.js ·································· 【文件】 logs 页面的逻辑
└── utils ······································ 【目录】 存放小程序中用到的工具函数
├── app.js ····································· 【文件】 小程序逻辑
├── app.json ··································· 【文件】 小程序的公共配置
├── app.wxss ··································· 【文件】小程序公共样式表
├── project.config.json ························ 【文件】 开发工具配置文件
```

说明：

- `app.js` 是小程序的入口文件，运行小程序，第一个被运行的就是 `app.js`
- `app.json` 是小程序的全局配置文件，对小程序每个页面生效 
- `app.wxss` 是小程序的全局样式文件，对小程序每个页面生效

注意：

- 对于小程序运行而言，`app.js` 和 `app.json` 是必不可少的
- 对于小程序页面而言， `.js` 和 `.html` 文件是必不可少的

## `app.json` 配置文件

1. 在 `app.json` 配置文件中，最主要的配置节点是：
    - `pages` 数组：配置小程序的页面路径
    - `window` 对象：用于设置小程序的状态栏、导航条、标题、窗口背景色
    - `tabBar` 对象：配置小程序的tab栏效果

**注：[全局配置详细文档](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#全局配置)**



## 小程序窗口的组成部分

**常见的属性配置： [常见的属性配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)**



![2xcxwindow](https://gitee.com/qianshilei/test/raw/master/img//2xcxwindow.png)

## 页面配置

### 001 - 页面配置和局部配置的关系

- `app.json` 中的 `window` 节点，可以全局配置小程序中每个页面的窗口表现；
- 如果某些小程序页面，想要拥有特殊的窗口表现，此时，“页面级别的 `.json` 配置文件”就可以实现这种需求；

**注意：页面级别配置优先于全局配置生效**

### 002 - 页面配置属性

**注： [页面配置详细文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)**

## 应用生命周期函数

app.js

```js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () { },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) { },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () { },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) { }
})

```

## 页面生命周期

```js
//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: { },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})
```



## 数据绑定

### 1.定义数据

在js文件里面的data里面定义

```js
// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		src: "你好",
		picurl: "好吧"
	},
})
```

### 2.渲染数据

```html
<view>{{ src }}</view>
```

## 事件

-    关键字bind

### 案例

wxml

```html
<!--pages/index/index.wxml-->
<text>{{string}}</text>
<button type="primary" bindtap="fn">按钮</button>
```

js

```js
// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		string: "你好"
	},
	fn(e) {
		console.log(e);
		// 修改 data 里面的值
		this.setData({
			string: "不好"
		})
	}
})
```

## 事件传参

### 001 -  不能再绑定事件的同时传递参数

- 小程序的事件传参比较特殊，不能在为组件绑定事件的同时，为事件处理函数传递参数
- 小程序会把 `bindtap` 后指定的值，统一当做事件名称来处理

```javascript
// 错误做法
<button bindtap='eventHandle(123)' type='primary' data-info='info'>传递参数</button>
```

### 002 - 通过 `data-*` 自定义属性传参

- 如果要在组件触发事件处理函数的时候，传递参数，可以为组件提供 `data-*` 自定义属性传参

### 003 -  获取 `data-*` 自定义属性中传递的参数

- 通过事件参数 `event.currentTarget.dataset.参数名`，能够获取 `data-*` 自定义属性传递到事件处理函数中的参数

### 004 - 案例代码

```html
<!--pages/index/index.wxml-->
<text>{{string}}</text>
<button type="primary" bindtap="fn" data-info="我是事件传参">按钮</button>
```

```javascript
// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		string: "你好"
	},
	fn(e) {
		console.log(e);
		// 修改 data 里面的值
		this.setData({
			string: "不好"
		})
		// 输出事件传参
		console.log(e.currentTarget.dataset.info);
	}

})
```

## 条件渲染

### 001 -  `wx:if`

- 在小程序中，使用 `wx:if="{{condition}}" `来判断是否需要渲染该代码块
- 也可以用 `wx:elif` 和 `wx:else` 来添加一个 else 块

```html
<view wx:if='{{id < 10}}'>JavaScript</view>
<view wx:elif='{{id == 10}}'>HTML</view>
<view wx:else='{{id > 10}}'>CSS</view>
```

### 002 - `block wx:if`

- 因为 `wx:if` 是一个控制属性，需要将它添加到一个标签上。
- 如果要一次性判断多个组件标签，可以使用一个 `<block></block>` 标签将多个组件包装起来，并在上边使用 `wx:if` 控制属性。
- **`<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。**

```html
<block wx:if='{{ id == 10 }}'>
  <view>JavaScript</view>
  <view>HTML</view>
  <view>CSS</view>
</block>
```

### 003 -  hidden

- 使用 `hidden="{{condition}}"` 也能控制元素的显示与隐藏

```html
<view hidden='{{ id > 10 }}'>前端三板斧</view>
```

### 004 - hidden 和 `wx:if` 的区别

- 被 `wx:if` 控制的区域，框架有一个局部渲染的过程，会根据控制条件的改变，动态创建或销毁对应的 `UI`结构。
- `wx:if` 是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。 
- 相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。
- **总结：**`wx:if` 有更高的切换消耗而 hidden 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 hidden 更好，如果在运行时条件不大可能改变则 `wx:if` 较好。

## 列表渲染

### 001 -  wx:for

- 在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。
- 默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`。

```html
<view wx:for='{{ arr }}' wx:key='index'>
  我是{{ item }} -- 索引是 {{ index }}
</view>
```

### 002 - `block wx:for`

- `wx:for` 可以用在 `<block></block>` 标签上，以渲染一个包含多节点的结构块。

```html
<block wx:for='{{ arr }}' wx:key='index'>
  <view>值：{{item}} -- 索引{{index}}</view>
</block>
```

### 003 - 指定索引和当前项的变量名

- 使用 `wx:for-item` 可以指定数组当前元素的变量名
- 使用 `wx:for-index` 可以指定数组当前下标的变量名，

```html
<view wx:for='{{ arr }}' wx:for-item='foritem' wx:for-index='forindex' wx:key='index'>
  我是{{ foritem }} -- 索引是 {{ forindex }}
</view>
```

### 004 -  列表渲染中的 `wx:key`

1. `wx:key` 的作用说明

    - 如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `<input/>` 中的输入内容，`<checkbox/>` 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

    - 当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，**框架会确保他们被重新排序，而不是重新创建**，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

2. `wx:key` 的注意事项
    - `key` 值必须具有唯一性，且不能动态改变
    - `key` 的值必须是数字或字符串
    - 保留关键字 `*this` 代表在 `for` 循环中的 `item` 本身，它也可以充当 `key` 值，但是有以下限制：需要 `item` 本身是一个唯一的字符串或者数字。
    - 如不提供 `wx:key`，会报一个 `warning`， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。

## 下拉刷新

### 001 - 下拉刷新的概念以及场景

- 概念：下拉刷新是移动端更新列表数据的交互行为，用户通过手指在屏幕上自上而下的滑动，可以触发页面的下拉刷新，更新列表数据。
- 应用场景：在移动端，数据列表是常见的页面效果，更新列表数据是最基本的页面需求，相比于按钮刷新、定时刷新来说，下拉刷新的用户体验方便友好，已经成为移动端刷新列表数据的最佳解决方案。

### 002 -  如何启动下拉刷新

- 在 `app.json` 的 `window` 选项中或页面配置中开启 `enablePullDownRefresh`。
- 可以通过 `wx.startPullDownRefresh()` 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

**注意：一般情况下，推荐在页面配置中为需要的页面单独开启下拉刷新行为**

### 003 - 设置下拉刷新窗口的样式

- 在 `app.json` 的 `window` 选项中或页面配置中修改 `backgroundColor` 和 `backgroundTextStyle` 选项。
- `backgroundColor` 用来配置下拉刷新窗口的背景颜色，仅支持16进制颜色值
- `backgroundTextStyle` 用来配置下拉刷新 `loading` 的样式，仅支持 `dark` 和 `light`

### 004 - 监听下拉刷新事件

> 需要先开启下拉刷新

- 为页面添加 `onPullDownRefresh()` 函数，可以监听用户在当前页面的下拉刷新事件。

```javascript
/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function () {
  console.log('触发下拉刷新啦')
}
```

### 005 - 停止下拉刷新

- 处理完下拉刷新后，下拉刷新的 loading 效果会一直显示，不会主动消失，
- 因此需要手动隐藏下拉刷新的 loading 效果，调用 `wx.stopPullDownRefresh()` 可以停止当前页面的下拉刷新。

```javascript
/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function () {
  console.log('触发下拉刷新啦')
    
  wx.stopPullDownRefresh()
}
```

---

## 上拉刷新

### 001 - 上拉刷新的概念以及场景

- 概念：在移动端，随着手指不断向上滑动，当内容将要到达屏幕底部的时候，页面会随之不断的加载后续内容，直到没有新内容为止，我们称之为上拉加载更多。上拉加载更多的本质就是数据的分页加载。
- 应用场景：在移动端，列表数据的分页加载，首选的实现方式就是上拉加载更多。

### 002 -  设置上拉刷新的距离

- 在 `app.json` 的 `window`选项中或页面配置中设置触底距离 `onReachBottomDistance`。单位为`px`，默认触底距离为 `50px`。
- 为页面添加 `onReachBottom()` 函数，可以监听用户在当前页面的上拉触底事件，从而实现上拉加载更多列表数据的效果。

```javascript
/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function () {
  console.log('触发上拉刷新啦')
},
```

## 其他事件

### 001 -  页面滑动事件`onPageScroll`

- 监听用户滑动页面事件
    - 得到 `scrollTop`，页面在垂直方向已滚动的距离（单位`px`）

```javascript
onPageScroll: function (e) {
  console.log(e)
}
```

### 002 - 分享事件 `onShareAppMessage`

- 监听用户点击页面内转发按钮（`<button> 组件 open-type="share"`）
- 右上角菜单“转发”按钮的行为，并自定义转发内容。

|     参数     |   类型   |                             说明                             |
| :----------: | :------: | :----------------------------------------------------------: |
|    `from`    | `String` |  转发事件来源。button：页面内转发按钮；menu：右上角转发菜单  |
|   `target`   | `Object` | 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined |
| `webViewUrl` | `String` |     页面中包含<web-view>组件时，返回当前<web-view>的url      |

- 自定义转发内容， return 一个 Object 就可以

|    字段    |                             说明                             |                  默认值                   |
| :--------: | :----------------------------------------------------------: | :---------------------------------------: |
|  `title`   |                           转发标题                           |              当前小程序名称               |
|   `path`   |                           转发路径                           | 当前页面 path ，必须是以 / 开头的完整路径 |
| `imageUrl` | 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持`PNG`及`JPG`。显示图片长宽比是 5:4。 |               使用默认截图                |

```javascript
Page({
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})

```

### 003 - 点击 tab 时触发事件 `onTabItemTap`

|    参数    |   类型   |               说明               |
| :--------: | :------: | :------------------------------: |
|  `index`   | `String` | 被点击 `tabItem` 的序号，从0开始 |
| `pagePath` | `String` |    被点击`tabItem` 的页面路径    |
|   `text`   | `String` |   被点击 `tabItem` 的按钮文字    |





---

## 小程序导航 -- 声明式导航

### 001 - 导航到非 `tabBar` 页面

> 非 `tabBar` 页面指的是没有被当作 `tabBar` 进行切换的页面。

- 案例代码：

```javascript
<navigator url="/pages/about/about">跳转到 about 页面</navigator>
```

- 注意事项
  - `url` 属性设置需要跳转的路径
  - 页面路径应该以 / 开头，
  - 路径必须提前在 `app.json` 的 `pages` 节点下声明

### 002 - 导航到 `tabBar` 页面

> navigator组件单纯使用 `url` 属性，无法导航到  `tabBar` 页面，必须需要结合 `open-type` 属性进行导航。

- 案例代码

```javascript
<navigator url="/pages/person/person" open-type="switchTab">跳转到 tabBar 页面</navigator>
```

### 003 - 后退导航


> 小程序如果要后退到上一页面或多级页面，需要把 `open-type` 设置为 `navigateBack`，同时使用 `delta` 属性指定后退的层数

- 案例代码

```javascript
<navigator open-type='navigateBack' delta='1'> 返回上一页 </navigator>

<navigator open-type='navigateBack' delta='2'> 返回上上一页 </navigator>

```

---

## 小程序导航 -- 编程式导航

### 001 - 导航到非 `tabBar` 页面

> 通过 `wx.navigateTo(Object object)` 方法，可以跳转到应用内的某个页面。
>
> 但是不能跳到 `tabbar` 页面。

- 参数文档
  - [wx.navigateTo  详细文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)

- 代码案例

```javascript
// 跳转到非导航页面
handle: function () {
  wx.navigateTo({
    url: '/pages/about/about',
    success: function () {
      console.log('Hello about')
    }
  })
},
```

### 002 - 导航到 `tabBar` 页面

> 通过 `wx.switchTab(Object object)` 方法，可以跳转到 `tabBar` 页面，
>
> **并关闭其他所有非 `tabBar` 页面**

- 参数文档
  -  [wx.switchTab 详细文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)
- 案例代码

```javascript
// 跳转到 tabBar 页面
tabBarHandle: function () {
  wx.switchTab({
    url: '/pages/person/person',
    success: function() {
      console.log('Hello Person')
    }
  })
},
```

### 003 - 后退导航

> 通过 `wx.navigateBack(Object object) `方法，关闭当前页面，返回上一页面或多级页面。

- 参数文档
  - [wx.navigateBack  详细文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)
- 案例代码

```javascript
handle: function () {
  wx.navigateBack({
    delta: 1
  })
},

twoHandle: function () {
  wx.navigateBack({
    delta: 2
  })
},
```

---

## 小程序导航 -- 导航传参

### 001 - 声明式导航传参 

> `navigator` 组件的 `url` 属性用来指定导航到的页面路径，同时路径后面还可以携带参数，参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔。

- 案例代码

```javascript
<navigator url="/pages/about/about?age=18&name=shuji">跳转到 about 页面</navigator>
```

### 002 - 编程式导航传参

> `wx.navigateTo(Object object)` 方法的 `objec`t 参数中，`url` 属性用来指定需要跳转的应用内非 `tabBar` 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔。

- 案例代码

```javascript
// 跳转到 tabBar 页面
tabBarHandle: function () {
  wx.switchTab({
    url: '/pages/person/person?age=18&name=shuji',
    success: function() {
      console.log('Hello Person')
    }
  })
},
```

### 003 - 接受传递的参数

> 不论是声明式导航还是编程式导航，最终导航到的页面可以在 `onLoad` 生命周期函数中接收传递过来的参数。

- 案例代码

```javascript
  onLoad: function (options) {
    // 打印传递出来的参数
    console.log(options)
  },
```
### 004 - 导航栏自定义编译模式快速传参

- 小程序每次修改代码并编译后，会默认从首页进入，但是在开发阶段，我们经常会针对特定的页面进行开发，为了方便编译后直接进入对应的页面，可以配置自定义编译模式，步骤如下：
  - 单击工具栏上的“普通编译”下拉菜单
  - 单击下拉菜单中的“添加编译模式”选项
  - 在弹出的“自定义编译条件窗口”，按需添加模式名称、启用页面、启动参数、进入场景等。

![导航栏自定义传参第一步](images/4chuanc1.png)

![导航栏自定义传参第二步](images/4chuanc2.png)

---

## 网络数据请求

### 001 - 小程序后台配置

- 每个微信小程序需要事先设置一个通讯域名，小程序只可以跟指定的域名进行网络通信。
- 服务器域名请在 「小程序后台-开发-开发设置-服务器域名」 中进行配置，配置时需要注意：
  -  域名只支持 `https` (`request`、`uploadFile`、`downloadFile`) 和 `wss` (`connectSocket`) 协议
  - 域名不能使用 `IP` 地址或 `localhost`
  - 域名必须经过 `ICP` 备案
  - 服务器域名一个月内可申请5次修改

**注意： [网络配置详情](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)**

### 002 - 跳过域名校验

- 在微信开发者工具中，可以临时开启 「开发环境不校验请求域名、TLS 版本及 HTTPS 证书」 选项，跳过服务器域名的校验。此时，在微信开发者工具中及手机开启调试模式时，不会进行服务器域名的校验。

**注意：在服务器域名配置成功后，建议开发者关闭此选项进行开发，并在各平台下进行测试，以确认服务器域名配置正确。**

**注意： [网络配置详情](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)**

### 003 - 小程序发送 get 与 Post 请求

> 小程序发送请求使用 `wx.request()` 方法，

- Get 案例代码

```javascript
getData: function () {
  wx.request({
    url: 'xxxx',
    method: 'get',
    success: function (res) {
      console.log(res)
    }
  })
},
```

- Post 代码案例

```javascript
postData: function () {
  wx.request({
    url: 'https://www.liulongbin.top:8082/api/post',
    method: 'post',
    data: {
      name: 'shuji'
    },
    success: function (res) {
      console.log(res)
    }
  })
},
```

**注意： method 如果不进行配置，默认参数是 get 请求方式**

**[wx.request  详细文档说明](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)**

### 004 - 小程序中没有跨域限制

- 在普通网站开发中，由于浏览器的同源策略限制，存在数据的跨域请求问题，从而衍生出了 JSONP 和 CORS 两种主流的跨域问题解决方案。
- **注意：小程序的内部运行机制与网页不同，小程序中的代码并不运行在浏览器中，因此小程序开发中，不存在数据的跨域请求限制问题**

---

## 小程序组件 -- 创建与引用

> [组件创建详细文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

### 001 - 组件的创建

-  在项目的根目录中，鼠标右键，创建 components 文件夹 --> test 
- 在新建的 components -> test 文件夹上，鼠标右键，点击“新建 Component”
- 为新建的组件命名之后，会自动生成组件对应的 4 个文件，后缀名分别为 `.js`，`.json`， `.wxml` 和 `.wxss`

**注意：应当尽量将不同的组件，存放到单独的文件夹中，从而保证清晰的目录结构**



### 002 - 组件的引用

- 在需要引用组件的页面中，找到页面的 `.json` 配置文件，新增 `usingComponents` 节点
- 在 `usingComponents` 中，通过键值对的形式，注册组件；键为注册的组件名称，值为组件的**相对路径**
- 在页面的 `.wxml` 文件中，把注册的组件名称，以**标签形式在页面上使用**，即可把组件展示到页面上

```javascript
{
  "usingComponents": {
    "first-com": "../../component/com01/com01"
  }
}
```

**注册组件名称时，建议把组件名称使用中横线进行连接，例如 vant-button 或 custom-button**

---

## 小程序组件 -- 组件的样式

> [小程序组件样式 详细文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)

- 组件对应 `wxss` 文件的样式，只对组件 `wxml` 内的节点生效。编写组件样式时，需要注意以下几点：
- 组件和引用组件的页面不能使用id选择器(#a)、属性选择器([a])和标签名选择器，请改用 `class` 选择器。
- 组件和引用组件的页面中使用后代选择器（.a .b）在一些极端情况下会有非预期的表现，如遇，请避免使用。
- 子元素选择器(.a>.b)，只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况。
- 继承样式，如 `font` 、 `color` ，会从组件外继承到组件内。
- 除继承样式外， `app.wxss` 中的样式、组件所在页面的样式对自定义组件无效。

**注意：以上语法不推荐死记硬背，建议使用 class 选择器**





---

## 小程序组件 -- 数据与方法

> [组件详细的参数含义和使用](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html)

### 001 -  使用 data 定义组件的私有数据

- 小程序组件中的 `data`与小程序页面中的 `data` 用法一致，区别是：

  - 页面的 `data` 定义在 `Page()` 函数中
  - 组件的 `data` 定义在 `Component()` 函数中

- 在组件的 `.js` 文件中：

  - 如果要访问 `data` 中的数据，直接使用 `this.data.数据名称` 即可
  - 如果要为 `data` 中的数据重新赋值，调用 `this.setData({ 数据名称: 新值 })` 即可

- 在组件的 .wxml 文件中

  - 如果要渲染 data 中的数据，直接使用 {{ 数据名称 }} 即可


### 002 - 使用 methods 定义组件的事件处理函数

> [组件间通信与事件 详细文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)

-  和页面不同，组件的事件处理函数，必须定义在 methods 节点中

```javascript
methods: {
  handle: function () {
    console.log('组件的方法要定义在 methods 中')

    this.setData({
      num: this.data.num + 1
    })

    console.log(this.data.num)
  }
}
```

---

## 小程序组件 --  properties 

### 001 - properties  简介

> 组件的对外属性，用来接收外界传递到组件中的数据。 类似于 `Vue` 中的 `props`

- 组件的 `properties` 和 `data` 的用法类似，它们都是可读可写的，只不过：

  - `data` 更倾向于存储组件的私有数据
  - `properties` 更倾向于存储外界传递到组件中的数据


### 002 - properties  语法结构

```javascript
properties: {
  a: {	// 属性名
    type: String,	// 属性的数据类型
    value: ''		// 默认值
  }
}
```

**注意：type 的可选值为 Number，String、Boolean、Object、Array、null(表示不限制类型)**

### 003 - 向组件传递 properties 的值

> 使用数据绑定的形式，向子组件的属性传递动态数据

```javascript
<second-com prop-price="{{ priceData }}"></second-com>
```

**注意：**

- 在定义 properties 时，属性名采用驼峰写法（propertyName）；
- 在 wxml 中，指定属性值时，则对应使用连字符写法（property-name=“attr value”），
- 应用于数据绑定时，采用驼峰写法（attr="{{propertyName}}"）。

### 004 - 案例代码

```javascript
// 组件 com02.js

properties: {
  propPrice: {
    type: Number,
    value: 1
  }
},
```

```html
<!-- 引用组件的页面 -->

<second-com prop-price="{{ priceData }}"></second-com>
```

```html
<!-- 组件 com02.html -->

<view>{{ propPrice }}</view>
```

### 005 - 组件内修改 properties 

> properties 的值是可读可写的，可以通过 `setData` 修改 `properties` 中任何属性的值，

- 案例代码

```javascript
methods: {
  handle: function () {
    this.setData({
      propPrice: this.properties.propPrice + 1
    })

    console.log(this.properties.propPrice)
  }
}
```

---

## 小程序组件 -- 数据监听器

### 001 - 基本使用方法

> 数据监听器可以用于监听和响应任何属性和数据字段的变化，从而执行特定的操作
>
> [数据监听详细文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)

```javascript
observers: {
  'propPrice, num': function (newPropPrice, newNum) {
    console.log(newPropPrice)
    console.log(newNum)
  }
},
```

### 002 - 监听子数据字段语法（computed）

- 案例代码

```javascript
// 监控某个子数据的代码
Component({
  observers: {
    'some.subfield': function (subfield) {
      // 使用 setData 设置 this.data.some.subfield 时触发
      // （除此以外，使用 setData 设置 this.data.some 也会触发）
    },
    'arr[12]': function (arr12) {
      // 使用 setData 设置 this.data.arr[12] 时触发
      // （除此以外，使用 setData 设置 this.data.arr 也会触发）
    }
  }
})

```

```javascript
// 使用通配符 ** 监听所有子数据字段的变化
Component({
  observers: {
    'some.field.**': function (field) {
      // 使用 setData 设置 this.data.some.field 本身或其下任何子数据字段时触发
      // （除此以外，使用 setData 设置 this.data.some 也会触发）
      field === this.data.some.field
    }
  }
})
```

---

## 组件的生命周期

> 组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发。

- 最重要的生命周期是 `created`, `attached`, `detached` ，包含一个组件实例生命流程的最主要时间点。
  - 组件实例刚刚被创建好时， `created` 生命周期被触发。此时还不能调用 `setData` 。 通常情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段。
  - 在组件完全初始化完毕、进入页面节点树后， `attached` 生命周期被触发。此时， `this.data` 已被初始化完毕。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行。
  - 在组件离开页面节点树后， `detached` 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 `detached` 会被触发。

**其他： [组件生命周期详解](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)**

---

## 小程序插槽的使用

### 001 - 默认插槽

> 在组件的 `wxml` 中可以包含 `slot` 节点，用于承载组件使用者提供的 `wxml` 结构。

- 默认情况下，一个组件的 `wxml` 中只能有一个 `slot`。需要使用多 `slot` 时，可以在组件 `js` 中声明启用。
- **注意：小程序中目前只有默认插槽和多个插槽，暂不支持作用域插槽。**

- 案例代码

```html
// 组件模板

<view>
  <view>我是组件</view>
  <slot></slot>
</view>
```

```html
// 引用组件的页面模板

<second-com>
  <view>你好，我是引用组件</view>
</second-com>
```

### 002 - 多个插槽

1. 在组件中，需要使用多 `slot` 时，可以在组件 `js` 中声明启用。
   - 案例代码

```javascript
Component({

  options: {
    multipleSlots: true
  },
    
})
```

2. 在组件的 wxml 中使用多个 slot 标签，以不同的 name 来区分不同的插槽
   - 案例代码

```javascript
// 引用组件的页面模板

<second-com prop-price="{{ priceData }}">
  <view slot="name">你好，这是 name 插槽 </view>
  <view slot="age">你好，这是 age 插槽</view>
</second-com>
```

3. 使用多个插槽

```javascript
// 组件插槽

<view>
  <view>我是组件</view>
  <slot name="name"></slot>
  <slot name="age"></slot>
</view>
```

---

## 组件间的通信

### 001 - 组件之间的三种基本通信方式

- `WXML` 数据绑定：用于父组件向子组件的指定属性传递数据，仅能设置 `JSON` 兼容数据

```html
// 父
<!--pages/index/index.wxml-->
<Day info="123"></Day>

// 子
<!--components/Day.wxml-->
<text>components/Day.wxml</text>

<view>{{info}}</view>
```

子 js

```js
// components/Day.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		info: String
	},
})
```



- 事件：用于子组件向父组件传递数据，可以传递任意数据。
    - 

流程图

![image-20210108112938300](https://gitee.com/qianshilei/test/raw/master/img//image-20210108112938300.png)

-   父

```html
<!--pages/index/index.wxml-->
<Day info="123" bind:Father="onFather"></Day>

```

```js
// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {},
	onFather(e) {
		console.log(e.detail);
	}

})
```

json配置

```json
{
  "usingComponents": {
    "Day": "/components/Day/Day"
  }
}
```



-   子

```html
<!--components/Day.wxml-->
<text>components/Day.wxml</text>

<view>{{info}}</view>

<button type="default" bindtap="fn">我是子组件按钮</button>

```

```js
// components/Day.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		info: String
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		test: "我是子组件的数据"
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		fn() {
			this.triggerEvent("Father", {
				name: this.data.test
			})
		}
	}
})
```





- 父组件通过 `this.selectComponent` 方法获取子组件实例对象，便可以直接访问组件的任意数据和方法。


### 002 -  `this.selectComponent` 使用

> 父组件的 `.js` 文件中，可以调用 `this.selectComponent(string)` 函数并指定 `id` 或 `class` 选择器， 获取子组件对象调用 ，可以返回指定组件的实例对象

- 案例代码

```javascript
// 使用组件的页面模板

<second-com class="second" id="second" prop-price="{{ priceData }}">
  <view slot="name">你好，这是 name 插槽 </view>
  <view slot="age">你好，这是 age 插槽</view>
</second-com>
```

```javascript
// 使用组件的 .js 文件，使用方法触发

changeData: function () {
  // console.log(this.selectComponent('#second'))
    
  console.log(this.selectComponent('.second'))
},
```

- 注意事项
  - **不能传递标签选择器（component-a），不然返回的是 `null`**

### 003 - 通过事件监听实现子向父传值

> 事件系统是组件间通信的主要方式之一。自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件。

- 实现步骤
  - 在父组件的 `js` 中，定义一个函数，这个函数即将通过自定义事件的形式，传递给子组件
  - 在父组件的 `wxml` 中，通过自定义事件的形式，将步骤一中定义的函数引用，传递给子组件
  - 在子组件的 `js` 中，通过调用 `this.triggerEvent('自定义事件名称', { /* 参数对象 */ })` ，将数据发送到父组件
  - 在父组件的 `js` 中，通过 `e.detail` 获取到子组件传递过来的数据
- 案例代码

```javascript
// 使用组件的页面模板自定义 myEvent 事件,接收 getCount 方法

<second-com bind:myEvent="getCount" class="second" id="second" prop-price="{{ priceData }}">
  <view slot="name">你好，这是 name 插槽 </view>
  <view slot="age">你好，这是 age 插槽</view>
</secondcom>
```

```javascript
// 使用组件页面 js，生命 getCount 方法

getCount: function (e) {
  console.log(e.detail)
},
```

```javascript
// 组件页面

this.triggerEvent('myEvent', {
  count: this.data.num
})
```

```css
body h6 {

color: coral !important; 

}


```





## 其他

[vscode 上安装量最大的小程序开发插件](https://developers.weixin.qq.com/community/develop/doc/000c641345c9f8d220b70d94e5b006)

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

[哔哩哔哩大学](https://www.bilibili.com/video/BV1nE41117BQ)