---
title: hash 和 history 路由的区别
tags:
  - JavaScript
---

## 前端路由实现方式

路由需要实现三个功能：

-   当浏览器地址变化时，切换页面；
    
-   点击浏览器【后退】、【前进】按钮，网页内容跟随变化；
    
-   刷新浏览器，网页加载当前路由对应内容；
    

在单页面 web 网页中, 单纯的浏览器地址改变, 网页不会重载，如单纯的 hash 网址改变网页不会变化，因此我们的路由主要是通过监听事件，并利用 js 实现动态改变网页内容，有两种实现方式：

-   hash 模式：监听浏览器地址 hash 值变化，执行相应的 js 切换网页；
    
-   history 模式：利用 history API 实现 url 地址改变，网页内容改变；
    

它们的区别最明显的就是 hash 会在浏览器地址后面增加#号，而 history 可以自定义地址。

## hash 模式

使用 window.location.hash 属性及窗口的 onhashchange 事件，可以实现监听浏览器地址 hash 值变化，执行相应的 js 切换网页。下面具体介绍几个使用过程中必须理解的要点：

-   hash 指的是地址中#号以及后面的字符，也称为散列值。hash 也称作锚点，本身是用来做页面跳转定位的。如 [http://localhost/index.html#abc](http://localhost/index.html#abc)，这里的#abc就是hash；
    
-   散列值是不会随请求发送到服务器端的，所以改变 hash，不会重新加载页面；
    
-   监听 window 的 hashchange 事件，当散列值改变时，可以通过 location.hash 来获取和设置 hash 值；
    
-   location.hash 值的变化会直接反应到浏览器地址栏；
    

### 触发 hashchange 事件的几种情况

-   浏览器地址栏散列值的变化（包括浏览器的前进、后退）会触发 window.location.hash 值的变化，从而触发 onhashchange 事件；
    
-   当浏览器地址栏中 URL 包含哈希如 [http://www.baidu.com/#home](http://www.baidu.com/#home)，这时按下输入，浏览器发送[http://www.baidu.com/](http://www.baidu.com/)请求至服务器，请求完毕之后设置散列值为#home，进而触发onhashchange事件；
    
-   当只改变浏览器地址栏 URL 的哈希部分，这时按下回车，浏览器不会发送任何请求至服务器，这时发生的只是设置散列值新修改的哈希值，并触发 onhashchange 事件；
    
-   html 中`<a>`标签的属性 href 可以设置为页面的元素 ID 如 #top，当点击该链接时页面跳转至该 id 元素所在区域，同时浏览器自动设置 window.location.hash 属性，地址栏中的哈希值也会发生改变，并触发 onhashchange 事件；
    

## history 模式

-   window.history 属性指向 History 对象，它表示当前窗口的浏览历史。当发生改变时，只会改变页面的路径，不会刷新页面。
    
-   History 对象保存了当前窗口访问过的所有页面网址。通过 history.length 可以得出当前窗口一共访问过几个网址。
    
-   由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航。
    
-   浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。
    

 // 当前窗口访问过多少个网页  
 history.length; // 1  
 ​  
 // History 对象的当前状态  
 // 通常是 undefined，即未设置  
 history.state; // undefined

-   History.back()：移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。
    
-   History.forward()：移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果。
    
-   History.go()：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为 0，相当于刷新当前页面。
    

 history.back();  
 history.forward();  
 history.go(1); //相当于history.forward()  
 history.go(-1); //相当于history.back()  
 history.go(0); // 刷新当前页面

### History.pushState()

该方法用于在历史中添加一条记录。pushState()方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化。

语法：history.pushState(object, title, url)

该方法接受三个参数，依次为：

-   object：是一个对象，通过 pushState 方法可以将该对象内容传递到新页面中。如果不需要这个对象，此处可以填 null。
    
-   title：指标题，几乎没有浏览器支持该参数，传一个空字符串比较安全。
    
-   url：新的网址，必须与当前页面处在同一个域。不指定的话则为当前的路径，如果设置了一个跨域网址，则会报错。
    

 var data = { foo: "bar" };  
 history.pushState(data, "", "2.html");  
 console.log(history.state); // {foo: "bar"}

**注意**：如果 pushState 的 URL 参数设置了一个新的锚点值（即 hash），并不会触发 hashchange 事件。反过来，如果 URL 的锚点值变了，则会在 History 对象创建一条浏览记录。

如果 pushState() 方法设置了一个跨域网址，则会报错。

 // 报错  
 // 当前网址为 http://example.com  
 history.pushState(null, "", "https://twitter.com/hello");

### History.replaceState()
该方法用来修改 History 对象的当前记录，用法与 pushState() 方法一样。

假定当前网页是 example.com/example.html。

```js
history.pushState({page: 1}, '', '?page=1')
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, '', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, '', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1

history.back()
// URL 显示为 http://example.com/example.html

history.go(2)
// URL 显示为 http://example.com/example.html?page=3

```

### popstate 事件
每当 history 对象出现变化时，就会触发 popstate 事件。

注意：

- 仅仅调用pushState()方法或replaceState()方法 ，并不会触发该事件;
- 只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用History.back()、
- History.forward()、History.go()方法时才会触发。
- 另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。
- 页面第一次加载的时候，浏览器不会触发popstate事件。

使用的时候，可以为popstate事件指定回调函数，回调函数的参数是一个 event 事件对象，它的 state 属性指向当前的 state 对象。


```js
window.addEventListener('popstate', function(e) {
	//e.state 相当于 history.state
	console.log('state: ' + JSON.stringify(e.state));
	console.log(history.state);
});
```
## 区别

hash模式：监听浏览器地址hash值变化，执行相应的js切换网页；
history模式：利用history API实现url地址改变，网页内容改变；

hash模式：使用window.location.hash属性及窗口的onhashchange事件，可以实现监听浏览器地址hash值变化，执行相应的js切换网页。

history模式：window.history 属性指向 History 对象，它表示当前窗口的浏览历史。当发生改变时，只会改变页面的路径，不会刷新页面。
每当 history 对象出现变化时，就会触发 popstate 事件。

hash 就是指 url 尾巴后的 # 号以及后面的字符，history没有底带#，外观上比hash 模好看些hash回车刷新会加载到地址栏对应的页面，history一般就是404掉了hash 能兼容到IE8， history 只能兼容到 IE10；


## 总结

hash 路由通过 window.hashchange 事件监听变化

history 路由通过 window.popstate  事件监听变化

[前端路由的两种模式：hash模式和 history模式_蒲公英芽的博客-CSDN博客_history](https://blog.csdn.net/Charissa2017/article/details/104779412)