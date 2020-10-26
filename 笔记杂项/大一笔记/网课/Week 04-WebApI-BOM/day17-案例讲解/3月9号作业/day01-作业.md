# 选择题
1. 有关获取元素方法的说法错误的是（ D  ）

   A、getElementById()返回的是单个DOM对象

   B、getElementsByTagName()返回的是多个DOM对象

   C、querySelectorAll()返回的是多个DOM对象

   D、document.body等价于document.getElementsByTagName("body")   // 1 [1]

2. 下面HTML代码中，可以正确获取p元素的方法是（   B）
```html
  <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <div></div>
    <div></div>
    <p></p>
    <strong></strong>
</body>
</html>

```

   A、document.getElementsByTagName("p")

   B、document.getElementsByTagName("p")[0]

   C、document.getElementsByTagName("p")[1] 

   D、getElementsByTagName("p")[0]

3. 下列关于DOM模型节点访问说法正确是（）

   A、可以根据节点ID访问多个对象. 在一个页面中 ID只允许出现一次 只能获取到一个对象 

   <font color="red"> document.getElementsByName根据节点的name属性访问节点</font>

   B、getElementsByTagName方法是根据节点的name属性访问节点 

   <font color="red"> 获取一个符合css选择器的元素</font>

   C、querySelector方法的作用是获取一个指定name属性值的对象集合 

   <font color="red">方法名错的，作用也是错的</font>

   D、getElementsById的我们作用是根据name值获取对象集合

4. 下面HTML代码中，可以正确获取第二个ul元素的方法是（   D）
```html
  <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
   <ul>
       <li>1</li>
       <li>2</li>
       <li>
           <ul>
              <li>31</li>
              <li>32</li>   
           </ul>
       </li>
  </ul>
</body>
</html>
```
   <font color="red"> 这样只能获取到一个ul中的所有的元素</font>

​	A、document.querySelectorAll('ul')[0]

   B、document.querySelector('ul')[1]  <font color="red">document.querySelector()方法 返回的是一个对象不可能有数组下标 </font>

   C、document.getElementsByTagName('ul')[0] <font color="red">获取的是第一个ul</font>

   D、document.querySelectorAll('ul')[1] 

5. 执行以下代码后的结果是（A）
```html
  <button id="oyx">按钮</button>
  <script>
    var btn = document.querySelectorAll("button"); //返回的是集合 集合不能添加点击事件。只能给对象添加点击事件
    btn.onclick = function(){
       console.log("11")
    }
  </script>
```


  A、没有反应

  B、在控制台输出11

  C、在页面弹出框显示11

  D、“按钮”文字变成11


# 简答题

1. js由哪几部分构成，DOM的顶级对象是谁？
```js

```
2. 列举获取DOM元素的方法？
```js

```
3. 获取html和body标签的方式是什么？
```js

```
4. 事件三要素是什么？并举几个常见的事件类型? 
```js

```

# 编程题

需求1.获取元素:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="mod-tabs">
    <ul>
        <li>list1</li>
        <li>list2</li>
        <li id="list3">list3</li>
        <li>
           <ul>
              <li>list41</li>
              <li>list42</li>
           </ul>
        </li>
        <li>list5</li>
    </ul>
    <button class="btn">点我</button>
 </div>
</body>
</html>
```
1. 获取上面代码中的html元素
```js
let root = document.documentElement;
```
2. 获取上面代码中的body元素
```js
let oBody = document.body;
```
3. 获取上面代码中的按钮,通过三种方式
```js
let obtn = document.getElementsByTagName('button')[0];
let obtn = document.getElementsByClassName('btn')[0];
let obtn = document.querySelector('button');
let obtn = document.querySelector('.btn');
let obtn = document.querySelectorAll('button')[0];
```
4. 获取上面代码中所有的li元素,用2种方式
```js
let obtn = document.getElementsByTagName('li');
let obtn = document.querySelectorAll('li');
```
5. 获取上面代码中list3元素
```js
let list3. = document.querySelector('#list3')
```
6. 获取第二个ul中的所有li
```js
let secondUl  = document.querySelectorAll('ul>ul li');
```

需求2. 鼠标的事件:
- 在页面中创建一个div，给这个div添加点击事件，在页面中显示，我被点击了，
- 鼠标进入事件，在页面中显示，鼠标移入到了盒子上，
- 鼠标离开事件，在页面中显示，鼠标离开了盒子
