# CSS基础选择器

## 标签选择器

- 标签选择器（元素选择器）是指用**HTML**标签名称作为选择器，按标签名称分类，为页面中某一类标签指定统一的CSS样式。  
- 标签选择器 可以把某一类标签**全部**选择出来 比如所有的div标签 和 所有的 span标签

```html
标签名{
	属性:属性值;
...
}

```

## 类选择器

- 类选择器使用“.”（英文点号）进行标识，后面紧跟类名
- 可以为元素对象定义单独或相同的样式。 可以选择一个或者多个标签  

```html
.class name{
	属性:属性值;
...
}
```



## id选择器

- id选择器使用`#`进行标识，后面紧跟id名

```html
#id name {
	属性:属性值;
...
}
```

## 通配符选择器

- 通配符选择器用`*`号表示， * 就是 选择所有的标签 他是所有选择器中作用范围最广的，能匹配页面中所有的元素。

```html
* {
	属性:属性值;
...
}
```





# CSS3复合选择题

## 后代选择器  descendant selector 

- 又成为包含选择器，可以选择父元素里面的子元素，其写法就是把外层标签写在前面，内层标签写在后面，中间用空格分隔。当标签发生嵌套时，内层标签就成为外层标签的后代。

~~~html
li a{
//li里面的a
}
~~~

## 子代选择器  Child selector 

- 只能选择作为某元素的最近一级子元素。简单理解就是选亲儿子元素。

- 语法:元素1>元素2{声明样式}

## 并集选择器

- 可以选择多组标签，同时为他们定义相同的样式。通常用于集体声明。并集选择器是各选择器通过英文逗号(,)连接而成，任何形式的选择器都可以作为并集选择器的一部分。

~~~html
a,p,span{
	color:red;
}
~~~

## 后代选择器和子代选择器的区别

> CSS中`nav ul li ul` 与 `nav>ul>li` 这两种写法的区别是什么，>的作用是什么？
> 　　　　1、nav>ul只选择nav下一级里面的ul元素，例如上面dom结构里id为a的ul。
> 　　　　2、nav ul选择nav内所包含的所有ul元素，例如上面dom结构里面id为a、b、c的全部ul。
> 　　　　3、nav>ul比nav ul限定更严格，必须后面的元素只比前面的低一个级别。 

~~~html

<style>
        *{
            margin:0;
            padding:0;
            list-style:none;
        }nav ul li ul{
            display:none;
        }nav>ul>li{
            float:left;
            padding:10px;
            border:1px solid blue;
        }nav>ul>li>ul>li{
            padding:10px;
            border-bottom:1px solid #ccc;
        }
</style>
<!--
    >是指只能一代接一代，比如： nav>ul>li>ul>li，必须是下面这样的
-->
<nav>
    <ul>
        <li>
            <ul>
                <li></li>
            </ul>
        </li>
    </ul>
</nav>
<!--
  然后nav ul li ul只要求后面的元素是在nav标签下的顺序即可，对中间隔了几层不敏感，比如：
-->
<nav>
     <div>
         <ul>
             <div>
                 <a>
                     <li>
                         <div>
                             <ul>
                                 <li></li>
                             </ul>
                         </div>
                     </li>
                 </a>
             </div>
         </ul>
     </div>
</nav>
~~~





# 伪类选择器

## hover 鼠标经过元素时，显示样式



# CSS元素的显示模式

- 就是元素（标签）以书面方式进行显示，比如`<div>`会自己独占一行,一个行可以放多个`<span>`

## 块元素 block

- 特点
  - 独占一行
  - height、width、padding、border、margin
  - 默认宽度是父元素宽度是100%
- 注意
  - 文字类的元素内不能使用块级元素,比如p标签用于存放房子，不能放div等块级元素
  - h1~h6等是文字类的块级标签，里面也不能放其他块级元素。

## 行内元素 inline

- 特点
  - 相邻行内元素在一行上，一行可以显示多个。
  - 无法直接设置height、width
  - 没有padding、margin
  - 默认宽度等于内容(content)宽度
  - inline元素只能容纳文本或者其他inline元素
- 注意
  - 链接里面不能再放链接
  - 特殊情况链接a标签可以放块级元素,但是把a转换成块元素更安全。

## 行内块元素 inline-block

- 同时具有块元素和行内元素的特点
- 特点
  - 和相邻行内元素（行内块元素）在一行上显示，他们之间会有空白的缝隙，一行可以显示多个。
  - 默认宽度就是它本身内容的宽度（行内元素特点）
  - 高度、行高、外边距以及内边距都可以控制（块元素特点）

## 显示模式的转换

- display: inline;//转换行内元素
-  display: block; //转块元素
 - display: inline-block; //转行内块元素



# CSS背景颜色

## 背景颜色background-color

~~~html
background-color:rbga(0,0,255,0.2)
//1是完全不透明，0是完全透明
~~~

## 背景图片background-image

~~~html
background-image:url("路径");
~~~

## 背景平铺 background-repeat

| 参数      | 含义                                |
| --------- | ----------------------------------- |
| repeat    | 背景图像在纵向和横向上平铺 （默认） |
| np-repeat | 背景图像不平铺                      |
| repeat-x  | 背景图片横向平铺                    |
| repeat-y  | 背景图片纵向平铺                    |

## 背景位置background-position





# 文本样式

## 文本颜色 text color

- color设置文本颜色

```html
<style>
    标签{
        color:颜色;
    }
</style>
```

## 文本水平对齐方式 text-align

- text-align属性用于设置`文本内容`的水平对齐，相当于html中的align对齐属性

| 属性    | 作用           |
| ------- | -------------- |
| left    | 左对齐(默认值) |
| right   | 右对齐         |
| center  | 居中对齐       |
| Justify | 两端对齐       |



## 首行缩进

- text-indent用于设置首行文本的缩进
- **属性值**：其属性值可为不同单位的数值、em字符宽度的倍数、或相对于浏览器窗口宽度的百分比%，允许使用负值,建议使用em作为设置单位。
- `1em就是一个字的宽度，如果是汉字的段落，1em就是一个汉字的宽度`
- 1em相对的是自身的font-size,如果设置font-size是30px，那么1em就是30px

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        p {
            margin: 0;
            padding: 0;
            text-indent: 2em;
        }
    </style>
</head>

<body>
    <span>萧炎天下第一</span>
    <p>萧炎天下第一</p>
</body>

</html>
```

## 文本修饰 text-decoration  

| 属性         | 作用                                                  |
| ------------ | ----------------------------------------------------- |
| none         | 默认。定义标准的文本。 取消下划线（最常用）           |
| underline    | 定义文本下的一条线。下划线 也是我们链接自带的（常用） |
| overline     | 定义文本上的一条线。（不用）                          |
| line-through | 定义穿过文本下的一条线。删除线（不常用）              |

## 行高 line-height

- ling-height代表的是基线与基线之间的高度

-  基线: 拼音格 有四线三格 从上往下数 第三条线就是基线

-  测量: 从第一行的文字的底部到第二行文字的底部 可以测出 行高

- 因为 顶线间的距离=中线间的距离 = 基线间的距离 = 底线间的距离

- 行高越大 行与行之间的距离越大

- `如果想让文字垂直居中只要让文字的行高包含它的标签的高度`

# 字体样式

## 字体大小 font-size

-  font-size属性用于设置字号  

```html
<style>
    p{
        font-size:50px;
    }
</style>
```



## 字体种类 font-family

- font-family属性用于设置哪一种字体。
- 只能设置电脑中存在的字体

```html
<style>
    p{
        font-family:"楷体";
    }
</style>
```



## 字体粗细 font-weight

| 属性值  | 作用                                                         |
| ------- | ------------------------------------------------------------ |
| normal  | 默认值（不加粗的）                                           |
| bold    | 定义粗体（加粗的）                                           |
| 100~900 | **400** **等同于** **normal**，而**700** **等同于** **bold** 我们重点记住这句话 |

**提倡**：

我们平时更喜欢用数字来表示加粗和不加粗。

## 字体风格 font-style

- font-style属性用于定义字体风格，如设置斜体、倾斜或正常字体，其可用属性  

| 属性   | 作用                                                   |
| ------ | ------------------------------------------------------ |
| normal | 默认值，浏览器会显示标准的字体样式 font-style: normal; |
| italic | 浏览器会显示斜体的字体样式。                           |



## 伪元素after和before

- 用途
  - 清除浮动
  - 鼠标移入有一个遮罩

## 伪元素的用法

   1.给真实元素添加
   2.真实元素:before 和 真实元素:after
   3.before和after能不能加上全看content有没有写
   4.给某一个标签添加before和afte只能给该标签添加一个before 或一个after  不能给一个标签添加多个before 或after





# 常见问题解决办法

## 1.去除行内块之间的距离

- 因为空格也算字符，所以我们只需要给父元素设置font-size:0;就行了





