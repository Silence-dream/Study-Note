# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
get用来获取数据，post用来提交数据
get参数有长度限制（受限于url长度，具体的数值取决于浏览器和服务器的限制，最长2048字节），而post无限制。
get请求的数据会附加在url之 ，以 " ？ "分割url和传输数据，多个参数用 "&"连接，而post请求会把请求的数据放在http请求体中。
get是明文传输，post是放在请求体中，但是开发者可以通过抓包工具看到，也相当于是明文的。
get请求会保存在浏览器历史记录中，还可能保存在web服务器的日志中

```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
//get 
//创建XMLHttpRequest对象
let xhr = new XMLHttpRequest();
//设置请求方式和请求地址
xhr.open("GET","/请求地址");
//发送请求
xhr.send();
//当请求被发送到服务器的时候
xhr.onreadystatechange=function(){
   // 当请求已完成和发送成功的时候
    if(xhr.readyState==4 && xhr.status==200){
       //输出返回的数据
    console.log(xhr.responseText)
   }
}


//post
// 创建XMLHttpRequst对象
let xhr = new XMLHttpRequrst();
//设置请求方式和地址
xhr.open("POST",'/请求地址');
//设置请求头
xhr.setRequrstHeader("Content-Type","application/x-www-form-urlencoded");

//当数据发送到服务器的时候
xhr.onreadystatechange=function(){
   // 当请求已完成和发送成功的时候
    if(xhr.readystate==4 && xhr.status==200){
        console.log(xhr.reponseText);
    }
}
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
&.ajax{
    //设置请求方式
    type:"get",
    //设置请求地址
    url:"/baidu",
   	//设置请求数据
    data:{
      name:"李四"  
    },
	//请求成功
   	success:funtion(response){
        //输出返回的数据
        console.log(response);
    }
}
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
//下载模板引擎
npm i art-template
//引入模板引擎
<script scr="路径"></script>

//创建模板
<script type="text/template" id="muban">
	<h3>{{key}}</h3>
</script>

//初始化模板引擎
let htmlStr = template("muban",{
    key:value;
})
//将模板输出
console.log(htmlStr)
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
//循环
{{each target}}
{{{/each}}}
 //判断
{ {if target}}
{ {/if}}
```

6. 客户端和服务端的通信过程是怎么样的？
```js
客户端请求服务器接口
服务器从数据库中调用数据
数据库返回数据到服务器
服务器响应数据到接口
接口返回数据到客户端
```

7. express怎么开放静态资源?
```js
//引入express
const express = require("express");
//开放静态资源
express().use(express.static("文件夹名称"));
express().listen(80);
```

8. express怎么读文件和写文件?
```js
let fs = require("fs");
//读
fs.readFile("路径","编码",function(err,data){
    //如果读取错误
    if(err!=null){
        console.log(err);
        return;
    }
    console.log(data);
})
//写
fs.writeFile("路径",写入的内容,function(err){
    //如何写入失败
    if(err!=null){
        console.log(err);
        return;
    }
    console.log("写入成功")
})
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
//转json
JSON.stringify("");
//解析json
JSON.parse("");
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
//发送请求地址
action="//baidu.com" 
//请求方式
method="get"
//表单的名称
name="form"
```

11. form表单怎么序列化获取值表单的值？
```js

```

12. form表单怎么阻止默认的提交行为?
```js

```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js

```