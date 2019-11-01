# HTML 语法规范

- HTM标签由尖括号包围关键词，例如<html>
- HTML标签通常成对出现，例如<html>和</html>我们称为双标签

- 有些特殊的标签必须是单标签,例如<br/>

## 标签关系

- 标签挂你分为两大类:

  - 包含关系

    - ```html
      <head>
          <title></title>
      </head>
      
      ```

  - 并列关系

    - ```html
      <head>
          
      </head>
      <body>
          <div></div>
          <p></p>
      </body>
      <!-- 
      	head和body 是并列关系
      	div和p是	并列关系
      -->
      ```

## 文档类型声明标签

```html
<!DOCTYPE html>
采用的是HTML5版本显示网页
```

## lang语言种类

```html
//告诉浏览器我这个网页是什么语言种类的网址
<html lang="en">
</html>
```

## 字符集

~~~html
<meta charset="UTF-8">
~~~



# HTML常用标签

## 段落和换行标签(重要)

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>段落换行标签</title>
</head>

<body>
    <p>1</p>
    <p>2</p>
    123<br>3
</body>

</html>
~~~



## 标题标签`<h1>`---`<h6>`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>标题标签</title>
</head>

<body>
    <h1>1</h1>
    <h2>2</h2>
    <h3>3</h3>
    <h4>4</h4>
    <h5>5</h5>
    <h6>6</h6>
</body>

</html>
```

## 列表

- `<ol></ol>`中只能嵌套`<li></li>`，直接在ol标签中输入其他标签或者文字是非法的。
- `<li></li>`之间相当于一个容器，可以容纳所有元素。
- 有序列表会带有自己的样式属性，但在实际使用时，我们会使用CSS来设置。

### 有序列表 ol li(了解)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>有序列表标签</title>
</head>

<body>
    <h4>排行榜</h4>
    <ol>
        <li>张三</li>
        <li>张四</li>
        <li>张五</li>
    </ol>
</body>

</html>
```

### 无序列表 ul 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>无序列表标签</title>
</head>

<body>
    <h4>排行榜</h4>
    <ul>张三</ul>
    <ul>张四</ul>
    <ul>张五</ul>
</body>

</html>
```

### 自定义列表dt dl

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>自定义标签</title>
</head>

<body>
    <h4>排行榜</h4>
    <dt>1</dt>
    <dt>2</dt>
    <dt>3</dt>
    <dl>张三</dl>
    <dl>张四</dl>
    <dl>张五</dl>
</body>

</html>
```

## 文本格式化标签

### 加粗：`  <strong></strong>或<b></b>`

### 倾斜：`<em></em>或<i></i>`

### 删除线：`  <del></del>或<s></s>`

### 下划线：`<ins></ins>或<u></u>`





