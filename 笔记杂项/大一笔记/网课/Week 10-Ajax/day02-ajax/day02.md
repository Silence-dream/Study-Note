# 简答题

1. 请简述 ajax 请求的时候 get 和 post 方式的区别?

```js
// get请求不安全，post安全
// get请求数据有限制，post无限制
// get请求参数会在url中显示，容易被他人窃取，post在请求体中，不会被窃取
// post需要设置请求头
```

2. ajax 都有哪些优点和缺点？

```js
AJAX的优点
1、提高了性能和速度
减少客户端和服务器之间的流量传输，同时减少了双方响应的时间，响应更快，因此提高了性能和速度。
2、交互性能好
使用ajax，可以开发更快，更具交互性的Web应用程序。
3、异步调用
AJAX对Web服务器进行异步调用。这意味着客户端浏览器在开始渲染之前避免等待所有数据到达。
4、节省带宽
基于Ajax的应用程序使用较少的服务器带宽，因为无需重新加载完整的页面。
5、使用XMLHttpRequest
XMLHttpRequest在Ajax Web开发技术中起着重要作用。XMLHttpRequest是由Microsoft设计的特殊JavaScript对象。XMLHttpRequest对象调用作为异步HTTP请求到服务器以传输数据。它用于向非Ajax页面发出请求。
6、拥有开源JavaScript库 ： JQuery，Prototype，Scriptaculous等。
7、AJAX通过HTTP协议进行通信。

AJAX的缺点
1、增加了设计和开发时间
2、比构建经典Web应用程序更复杂
3、AJAX应用程序中的安全性较低，因为所有文件都是在客户端下载的。
4、可能出现网络延迟问题
5、禁用JavaScript的浏览器无法使用该应用程序。
6、由于安全限制，只能使用它来访问服务于初始页面的主机的信息。如果需要显示来自其他服务器的信息，则无法在AJAX中显示。
```

3. 简述 ajax 的工作原理?

```js
Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。
```

4. readyState 的值有哪些,分别代表什么意思?

```js
0：未初始化，但是已经创建了XHR实例
1：调用了open()函数
2：已经调用了send()函数，但还未收到服务器回应
3：正在接受服务器返回的数据
4：完成响应
```

# 编程题

1 题: 实现看笑话功能

```js

- 请求地址：https://autumnfish.cn/api/joke
- 请求方法：get

1. 点击页面中的"点我看笑话"按钮,`.joke-text`盒子中就会出现获取到的笑话

```

2 题: 实现用户注册功能

```js

用户验证
- 请求地址：https://autumnfish.cn/api/user/check
- 请求方法：post
- 请求参数：username

1. 文本框失去焦点事件
2. 获取文本框的value值
3. 类名为.info的盒子内容就会变为: 验证中...
4. 调用用户验证接口
5. 数据返回之后设置内容到类名为.info的盒子内

用户注册
- 请求地址：https://autumnfish.cn/api/user/register
- 请求方法：post
- 请求参数：username

1. 点击注册按钮
2. 获取文本框的value值
3. 类名为.info的盒子内容就会变成: 注册中...
4. 调用用户注册接口
5. 数据返回之后设置内容到类名为.info的盒子内

```
