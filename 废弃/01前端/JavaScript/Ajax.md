 # Ajax

## Ajax概述

-   1.Ajax用在项目中 次数特别的多

-   2.不是一个新技术 是老技术的新应用

-   3.网速慢的情况下，页面加载时间长，用户只能等待

-   4.表单提交后，如果一项内容不合格，需要重新填写所有表单内容(提升用户体验)

-   5.页面跳转，重新加载页面，造成资源浪费，增加用户等待时间
-   6.局部刷新

-   7.不会ajax，你连一个前端都不是 最多是个切图仔

## Ajax是什么

-   Ajax：标准读音 [ˈeɪˌdʒæks] ，中文音译：阿贾克斯
    它是浏览器提供的一套方法，可以实现页面无刷新更新数据，提高用户浏览网站应用的体验。

### 应用场景

-   页面上拉加载更多数据
-   列表数据无刷新分页
-   表单项离开焦点数据验证
-   搜索框提示文字下拉列表

### 运行环境
- Ajax 技术需要运行在网站环境中才能生效，当前课程会使用Node创建的服务器作为网站服务器

## Ajax基本使用

### 前端(前端是前端工程师必须要写的)

-   1.创建页面
-   2.创建按钮
-   3.给按钮添加点击事件
-   4.发起ajax请求
-   4.1 实例化XMLHttpRequest对象
-   4.2 使用XMLHttpRequest对象的open方法设置请求方式、请求地址
-   4.3 发送请求
-   4.4 通过onreadystatechange等待数据接受完毕 通过xhr.responseText获得数据
-   5.把后端返回的数据(xhr.responseText)显示到页面上



~~~js
<body>
    <h1>最简单的Ajax代码</h1>
    <button>按钮</button>
    <!-- 点击按钮 请求一个路径 获取一个Hello,World 显示在页面上 -->
    <script>
        let oBtn = document.querySelector('button');

        oBtn.onclick = function (){
            // 1.找到一个黑社会大哥 -- 实例化XMLHttpRequest对象
            let xhr = new XMLHttpRequest();

            // 2.要用什么样的方式要钱 负债的人在哪里-- 请求方式(get) 请求地址()
            xhr.open('GET', '/simple');
            // 3.要钱 -- 发送请求
            xhr.send();
            // 4.钱要的状态 给了50  80 100 
            xhr.onreadystatechange= function (){
            // 5.把100万给债主
            // console.log(xhr.responseText)
            document.body.innerHTML = xhr.responseText;
            }
            
        }

    </script>
</body>
~~~





### 后端(app.js是服务器端工程师需要写的)



```js
const express = require('express');
const path = require('path');
const app = express();

// 把public作为静态资源目录
// console.log(path.join(__dirname, 'public')) // E:\FullStack\day81-Ajax\code\ajaxServer\public
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'public')))


app.get('/simple', (req, res) =>{
    res.send("Hello, World")
})

app.listen(80, ()=>{
    console.log("请打开 http://localhost")
})
```



## Ajax发起请求及参数传递



### Ajax发起GET请求及参数传递

#### 前端

```html
<body>
    <!-- 
        点击按钮 发送用户名和密码给后端 服务器把用户名和密码打印到div中
     -->

    <form>
        <input type="text" name="username">
        <input type="password" name="password">
    </form>
    <button>提交</button>
     <!-- 我叫xxxx,我的密码是什么 -->
    <div class="box"></div>



    <script>
        //  1.获取按钮 给按钮添加点击事件
        let oBtn = document.querySelector('button');
        let userInput = document.querySelector('input[name="username"]');
        let passInput = document.querySelector('input[name="password"]');
        oBtn.onclick = function () {
            //  2.获取username的值 获取password的值
            let username = userInput.value;
            let password = passInput.value;
            //  3.使用ajax把请求发送到服务器
            // 3.1 实例化XMLHttpRequest
            let xhr = new XMLHttpRequest();
            // 3.2 设置请求行(请求方式 请求地址)
            // ?key1=value1&key2=value2
            // localhost/getParam?username=zhangsan&password=123456
            xhr.open('GET', `/getParam?username=${username}&password=${password}`);
            // 3.3 发送请求
            xhr.send(null);
            // 3.4 监听并处理响应
            xhr.onreadystatechange = function () {
                //  4.显示到页面上
                // console.log(typeof xhr.responseText); // 字符串
                let data = JSON.parse(xhr.responseText);
                // console.log(data);
                document.querySelector('.box').innerHTML = `我叫${data.username},我的密码是${data.password}`
            }

        }
    </script>
</body>
```

#### 后端



```js
// 接受GET参数
app.get('/getParam', (req, res) =>{
    // console.log(req.query);
    // res.send('1111');
    res.send(req.query);
})
```





#### readystate

-   作用: xhr的属性，用来表明数据的接受状态
    -   0: xhr实例化了 但是没有设置请求行 
    -   1: xhr实例化了 设置了请求行
    -   2: xhr对象接受到了服务端的响应头
    -   3: xhr对象接受到了服务端的响应头 但是没有把内容接受全
    -   4: xhr对象接受到了服务端的响应头 内容全部接受完毕



```js
<body>
    <h1>最简单的Ajax代码</h1>
    <button>按钮</button>
    <!-- 点击按钮 请求一个路径 获取一个Hello,World 显示在页面上 -->
    <div></div>

    <script>
        let oBtn = document.querySelector('button');

        oBtn.onclick = function () {

            // 1.找到一个黑社会大哥 -- 实例化XMLHttpRequest对象
            let xhr = new XMLHttpRequest();
            console.log(xhr.readyState); // xhr对象实例化，
            // 2.要用什么样的方式要钱 负债的人在哪里-- 请求方式(get) 请求地址()
            xhr.open('GET', '/simple');
            // console.log(xhr.readyState); // xhr对象实例化,但没有设置请求行
            // 3.要钱 -- 发送请求
            xhr.send();

            // console.log(xhr.readyState); // 但是没有接收到数据
            // 4.钱要的状态 给了50  80 100 
            // 当readystate改变的时候 触发这个事件

            xhr.onreadystatechange = function () {
                // console.log(xhr.readyState);
                // 如果是2 代表接收到了响应头 但为接收到响应内容
                // 如果是3 代表接收到了响应头 页接受到了响应内容 但未收全
                // 如果是4 代表响应头接受完毕 内容接受完全
                // 5.把100万给债主
                // console.log(xhr.responseText)

                // 浏览器的状态 1 2 3 4 5
                // 如果xhr的内容接受完毕且浏览器的状态是200代表完全好了的时候 我们才把服务器的数据放到页面上
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText)
                    // document.body.innerHTML = xhr.responseText;
                    document.querySelector('div').innerHTML = xhr.responseText;
                }
            }
        }

    </script>
</body>

```



### Ajax发起POST请求及参数



#### 前端

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>最简单的POST请求方式的ajax</h1>
    <button>按钮</button>
    <!-- 点击按钮 请求一个路径 获取一个Hello,World 显示在页面上 -->
    <div></div>

    <script>
        let oBtn = document.querySelector('button');


        oBtn.onclick = function () {
            // 1.实例化XMLHttpRequest对象
            let xhr = new XMLHttpRequest();
            // 2.设置请求行(请求方式 请求地址)
            xhr.open('POST', '/postParam');
            // 重点: 使用POST请求必须添加请求头，form表单自动就是这样的Content-Type
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            // 3.发送请求数据(在get请求中这个地方写null)
            xhr.send("username=zhangsan&password=123456")
            // 4.监听并处理响应
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // 5.把数据显示在页面上
                    console.log(xhr.responseText)
                }
            }
        }
    </script>
</body>

</html>
```



#### 后端

```js
const express = require('express');
const path = require('path');
const app = express();

// 把public作为静态资源目录
// console.log(path.join(__dirname, 'public')) // E:\FullStack\day81-Ajax\code\ajaxServer\public
// app.use('/public', express.static(path.join(__dirname, 'public')))
// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))
// 中间价获取post请求的参数
app.use(express.urlencoded());

// 接受POST请求
app.post('/postParam', (req, res) =>{
    res.send(req.body);
})
app.listen(80, ()=>{
    console.log("请打开 http://localhost")
})
```

## Ajax接受服务器的JSON响应渲染页面

### 封装Ajax函数

#### 版本1

```js
function ajax(type, url, data, success) {
  // 1.实例化xhr对象
  let xhr = new XMLHttpRequest();
  // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
  if (type == 'GET') {
    url = url + '?' + data;
    data = null;
  }

  xhr.open(type, url);
  // 如果是POST那么要设置请求头
  if (type == 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  // 3.发送请求数据
  xhr.send(data);
  // 4.监听并处理响应
  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      success(xhr.responseText);
    }
  }
}
```

#### 版本2

```js
/**
 * 
 * @param {Object} options ajax请求的请求方式|请求地址|请求数据|回调函数
 */
function ajax(options) {
  // 定义ajax的具体的四个参数
  // 请求方式
  let type = options.type;
  // 请求地址
  let url = options.url;
  // 请求数据
  let data = options.data;
  // 成功时的回调函数
  let success = options.success;
  // 发起ajax请求
  // 1.实例化xhr对象
  let xhr = new XMLHttpRequest();
  // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
  if (type == 'GET') {
    url = url + '?' + data;
    data = null;
  }
  xhr.open(type, url);
  // 如果是POST那么要设置请求头
  if (type == 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  // 3.发送请求数据
  xhr.send(data);
  // 4.监听并处理响应
  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      success(xhr.responseText);
    }
  }
}
```

#### 版本3

```js
let $ = {
  // 把前端的js对象变成key=value&key1=value1的形式
  /**
   * 
   * @param {Object} dataObj 前端给后端传的数据对象
   */
  param: function (dataObj) {
    // 现在是''
    // 未来是 'key=value&key1=value1'

    let dataStr = '';
    for (let k in dataObj) {
      dataStr += k + '=' + dataObj[k] + '&';
    }
    // console.log(dataStr); //name=zs&age=18&
    dataStr = dataStr.slice(0, -1);
    // console.log(dataStr); // name=zs&age=18
    return dataStr;
  },
  /**
 * 
 * @param {Object} options ajax请求的请求方式|请求地址|请求数据|回调函数
 */
  ajax: function (options) {
    // 定义ajax的具体的四个参数
    // 请求方式 如果传参数 那么就是传的 如果发现没有传参数那么就是GET默认值
    let type = options.type || 'GET';
    // 请求地址
    let url = options.url || '';
    // 请求数据
    let data = this.param(options.data || {});
    // 成功时的回调函数
    let success = options.success;

    // 发起ajax请求

    // 1.实例化xhr对象
    let xhr = new XMLHttpRequest();

    // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
    if (type == 'GET') {
      url = url + '?' + data;
      data = null;
    }
    xhr.open(type, url);

    // 如果是POST那么要设置请求头
    if (type == 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    // 3.发送请求数据
    xhr.send(data);
    // 4.监听并处理响应
    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        success(xhr.responseText);
      }
    }
  }
}

```

## 使用jQuery的ajax

```js
// 使用jQuery的ajax
$.ajax({
			// 请求方式
			type: 'get',
			// 请求地址
			url: '/reqGet',
			// 请求数据
			data: {
				name: 'zs',
				age: 18
			},
			// 成功时的回调函数
			success: function (data) {
				console.log(data);
			}
		})
```

## 模板引擎ArtTemplate

-   ### ArtTemplate

    artTemplate是新一代的高性能JavaScript模板引擎 
    http://aui.github.io/art-template/

### 使用

-   1.引入ArtTemplate库

```html
 <script src="./art-template-4.13.2/template-web.js"></script>
```

-   2.在引入所有库之后 创建模板

```html
<script type="text/template"  id="id的名字">
  <!-- 这里是html结构 -->
</script>
```

-   3.使用 渲染html =  template('模板ID', 对象);

```js
  let htmlStr = template('str_templ', {
        content: title
      });
```

### 语法

`渲染一个字符串`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <button>按钮</button>
  <div>
    <!-- <h1>我是标题</h1> -->
  </div>
  <script src="./art-template-4.13.2/template-web.js"></script>
  <!-- 模板 -->
  <script type="text/template" id="str_templ">
    <h1>{{content}}</h1> 
  </script>
  <script>
    let title = "我是标题2";
    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('str_templ', {
        content: title
      });

      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
</body>

</html>
```

`渲染一个列表`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <button>按钮</button>
  <div>
    <!-- <h1>我是标题</h1> -->

    <!-- <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li> -->
  </div>

  <script src="./art-template-4.13.2/template-web.js"></script>
  <script type="text/template" id="list_templ">
    <!-- target代表数字的名字 -->
  {{each target}}
  <li> {{$index}}-{{$value}}</li>
  {{/each}}
  </script>
  <script>
    let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];

    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('list_templ', {
        target: data
      })
      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
</body>

</html>
```

`渲染一个对象类型的数据`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <button>按钮</button>
  <div>

  </div>

  <script src="./art-template-4.13.2/template-web.js"></script>
  <script type="text/template" id="judge_templ">
    {{if data.length > 0 }} 
        <ul>
          {{each data}}
          <li>{{$value}}</li>
          {{/each}}
        </ul>
    {{else }}
       <p>没有数据</p>
    {{/if}}
    
  </script>
  <script>
    // 如果data中有数据 那么就渲染数据 
    // 如果data中没有数据 那么就渲染一句话 没有数据
    // let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];
    let data = [];
    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('judge_templ', {
        data: data
      })
      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
</body>

</html>
```