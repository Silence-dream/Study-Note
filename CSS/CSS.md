# 什么是CSS

层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现[HTML](https://baike.baidu.com/item/HTML)（[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言/6805073)的一个应用）或[XML](https://baike.baidu.com/item/XML)（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。 

CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。 



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


# 盒子模型

## 内容content

## 内边距padding

- 内容与边框之间的距离  

## 外边距margin

- 元素与元素之间的距离 以边框为界

## 边框border

- 就是快递盒子的最外面一圈



| 属性         | 作用         |
| ------------ | ------------ |
| border-width | 定义边框粗细 |
| border-style | 边框的样式   |
| border-color | 边框颜色     |

- 边框的样式

| 属性   | 作用         |
| ------ | ------------ |
| none   | 没有边框     |
| solid  | 边框为单实线 |
| dashed | 边框为虚线   |
| dotted | 边框为点线   |



## 外边距塌陷(重点)

- 外边距塌陷又叫做`嵌套块元素垂直外边距的塌陷`
- 对于两个嵌套关系的`块级元素`，父元素有上外边距(margin-top)的同时子元素也有上外边距(margin-top)，此时父元素会塌陷较大的外边距值。
- 解决方案：
  - 给父元素定义上边框
  - 给父元素定义内边距
  - 给父元素添加overflow : hidden

## 外边距合并(重点)

- 外边距合并的现象又称为`相邻块元素垂直外边距的合并`

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .one {
            width: 200px;
            height: 200px;
            background: skyblue;
            margin-bottom: 100px;
        }

        .two {
            width: 200px;
            height: 200px;
            background: skyblue;
            margin-top: 200px;
        }
        /* 当我给one一个margin-bottom:100px的时候，one盒子就会距离two盒子100px的距离。，但是当我给two盒子一个margin-top:200px的时候并没有出现one盒子和two盒子的距离是300px，反而是200px的距离，这些现象就是外边距合并的问题，解决的办法就是我们只需要给一个盒子设定margin值就行了。 */
    </style>
</head>

<body>
    <div class="one">我是第一个</div>
    <div class="two">我是第二个</div>
</body>

</html>
~~~




# 伪类选择器

## hover 鼠标经过元素时，显示样式



# CSS元素的显示模式

- 就是元素（标签）以书面方式进行显示，比如`<div>`会自己独占一行,一个行可以放多个`<span>`

## 块元素 block

- 例子：div h1-h6 p ul ol lo table

- 特点
  - 独占一行
  - height、width、padding、border、margin
  - 默认宽度是父元素宽度是100%
- 注意
  - 文字类的元素内不能使用块级元素,比如p标签用于存放房子，不能放div等块级元素
  - h1~h6等是文字类的块级标签，里面也不能放其他块级元素。

## 行内元素 inline

- 例子：span a strong i b small

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

- 例子：img input td

- 同时具有块元素和行内元素的特点
- 特点
  - 和相邻行内元素（行内块元素）在一行上显示，他们之间会有空白的缝隙，一行可以显示多个。
  - 默认宽度就是它本身内容的宽度（行内元素特点）
  - 高度、行高、外边距以及内边距都可以控制（块元素特点）

## 显示模式的转换

- display: inline;//转换行内元素
-  display: block; //转块元素
 - display: inline-block; //转行内块元素



# CSS背景

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
| no-repeat | 背景图像不平铺                      |
| repeat-x  | 背景图片横向平铺                    |
| repeat-y  | 背景图片纵向平铺                    |

## 背景位置background-position

| **参数值** | **含义**                                           |
| ---------- | -------------------------------------------------- |
| length     | 百分数 \| 由浮点数字和单位标识符组成的长度值       |
| position   | top \| center \| bottom \| left \|  right 方位名词 |



## 背景附着 background-attachment

- 描述：设置背景图像是否固定或者随着页面的其余部分滚动。后期可以制作视差滚动效果。

| 参数值         | 含义                 |
| :------------- | -------------------- |
| scroll(默认值) | 背景图像随着内容滚动 |
| fixed          | 背景图像固定         |

## 背景图片大小 background-size

- 描述：用来设置背景图片大小的玩意

- 语法: background-size:宽度 高度; //具体的数字

  ​		  background-size: 10px 20px;
  ​          background-size: cover contain;
  ​      

  | 参数            | 含义                             |
  | --------------- | -------------------------------- |
  | cover（遮盖）   | 填满盒子，不管图片是否完全       |
  | contain（包含） | 是把图片显示全，不管是否填满盒子 |

     



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



# 圆角边框(重点)

- 可以让盒子变成圆角

- 语法:border-radius : length;  // radius半径

# 盒子阴影(重点)

- 语法: box-shadow: h-shadow v-shadow blur spread color inset

| 值       | 描述                                   |
| -------- | -------------------------------------- |
| h-shadow | 必需。水平阴影的位置。允许负值。       |
| v-shadow | 必需。垂直阴影的位置。允许负值。       |
| blur     | 可选。模糊距离。                       |
| spread   | 可选。阴影的尺寸。                     |
| color    | 可选。阴影的颜色。                     |
| inset    | 可选。将外部阴影(outset)改为内部阴影。 |



# 文字阴影

- 语法:text-shadow: h-shadow v-shadow blur color;

| 值       | 描述                             |
| -------- | -------------------------------- |
| h-shadow | 必需。水平阴影的位置。允许负值。 |
| v-shadow | 必需。垂直阴影的位置。允许负值。 |
| blur     | 可选。模糊的距离。               |
| color    | 可选。阴影的颜色                 |





# CSS三大特性（重点）

## 层叠性

- 描述：相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个冲突的样式，层叠性主要解决样式冲突的问题。层叠性简单来说：后面的样式会覆盖前面的样式。

- 例子

~~~html
<html>
   <head>
       <style>
       div{
	width:90px;
	height:50px;
	background-color:red;
}
div{
	background-color:yellow;
}
/*此时第二个div里面的background-colo:yellow就会覆盖掉第一个div里面的background-color:red,但是只会覆盖相同的属性
所以执行的会是	
           width:90px;
			height:50px;
           background-color:yellow;
           这三行代码
*/

       </style>
    </head>
    <body>
        <div>
            
        </div>
    </body>
</html>
~~~





## 继承性

- 描述：子元素继承了父元素的某些样式，如文本颜色和自豪。简单理解就是子承父业。

- 子元素可以继承父元素的样式(text-,font-,line-这些元素开头的可以继承)color也可以

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            color: red;
        }
    </style>
</head>

<body>
    <div>
        <p>你好</p>
    </div>
</body>

</html>
<!-- 这里是p就继承了div的属性color-->
~~~



## 优先级

- 描述：当多个选择器把样式应用到同一个元素上，优先应用哪个样式，就是有优先级。（优先级与顺序无关）

> 选择器相同，则执行层叠性
>
> 选择器不用，则根据选择器权重执行

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        div {
            width: 200px;
            height: 200px;
            background: mediumvioletred;
            border: 1px solid lawngreen;
            color: red;
        }

        .div {
            background: midnightblue;
        }

        #s {
            background: navajowhite;
        }
    </style>
</head>

<body>
    <div class="div" id="s">
    </div>
</body>

</html>
这里因为ID选择器的权重是1大于标签选择器和类选择器的权重所以执行ID选择器里面的属性
~~~



### 权重

!important写在属性值后面分号前面，一般用在框架中，作为开发者禁止使用。

当使用了!important属性之后那么js都无法操作样式
用js写的样式是行内样式

| 选择器              | 选择器权重 |
| ------------------- | ---------- |
| 继承或*             | 0,0,0,0    |
| 标签选择器          | 0,0,0,1    |
| 类选择器 伪类选择器 | 0,0,1,0    |
| ID选择器            | 0,1,0,0    |
| 行内样式 style=""   | 1,0,0,0    |

`权重计算没有进制，所以也不用进位`



# CSS常用的布局方式(要点)

## 网页布局准则

1.`多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动`。

2.`先设置盒子大小，之后设置盒子的位置。`

网页布局的本质就是用CSS来摆放盒子。把盒子摆放到相应的位置。

## 普通流（标准流）

- 描述：所谓标准流就是标签按照规定好的默认的方式排列。
- 块级元素会独占一行，从上向下顺序排列。
- 行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘会自动换行。

## 浮动(重点)

- 描述：浮动是网页布局方式之一，它是让网页元素脱离标准流的方式值一，利用浮动，我们可以改变元素默认的排列方式
- 浮动最典型的应用：可以让多个块级元素在一行内排列显示，并且没有空隙。
- `语法:选择器{ float:属性值;}`

| 参数  | 含义         |
| ----- | ------------ |
| none  | 元素不浮动   |
| left  | 元素向左浮动 |
| right | 元素向右浮动 |

### 浮动元素使用经验

浮动元素经常和标准流父级搭配使用。

为了约束浮动元素位置，我们网页布局一般采取的策略是: 先用标准流的父元素排列上下位置，然后内部子元素如果再一行采取浮动排列左右位置，符合网页布局第一准则 。`简单来说就是标准流父级里面放浮动元素`

### 浮动的重要特性(重难点)

`1.脱离标准普通流的控制(浮)移动到指定位置(动)，俗称浮动。`

`2.浮动的盒子不再保留原先的位置`

3.如果多个盒子都设置了浮动，则他们会按照属性值一行内显示并且`顶端对齐排列`

4.浮动的元素是互相贴合的，没有缝隙，如果父元素装不下这些浮动的元素，会换行

5.任何元素都可以浮动。不管原先是什么模式的元素，添加浮动之后具有`行内块元素相似的特性` 

6.如果块级盒子没设置宽度，默认宽度和父级一样，但添加浮动后，宽度由内容决定

7.浮动的盒子中间是没有缝隙的，是紧挨着一起的

### 清除浮动(重要)

- 为什么要清除浮动
  - 由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不在占有位置，最后父级盒子高度为0的时候，就会影响下面的标准流盒子。
  - 由于浮动元素不再占用原文档流的位置没所以它会对后面的元素排版产生影响
  - 理想的状态应该是让自盒子撑开父盒子，有多少孩子，我父盒子就有多高。
    - 简单来说就是：1.父级没有高度。
      							2.子盒子浮动了。
            							3.影响下面布局了，我们就应该清楚浮动了。

- 语法:
  - 选择器:{clear:属性值;}

| 属性值 | 描述                                               |
| ------ | -------------------------------------------------- |
| left   | 不允许左侧有浮动元素(清除左侧浮动的影响)           |
| right  | 不允许右侧有浮动元素(清除右侧浮动的影响)           |
| both   | 同时清除左右两侧浮动的影响。`实际工作中几乎只有它` |

> 清除浮动的策略是：闭合浮动

### 清除浮动的方法

#### 1.额外标签发也称为隔墙法，是W3C推荐的做法。

- 额外标签法会在浮动元素末尾添加一个空的标签。例如`<div style="clear:both"></div>  `或者其他标签。
  - 优点：通俗易懂，书写方便。
  - 缺点：添加许多无意义的标签，结构化较差。
  - 注意：添加的元素必须是块级元素block。

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .box {
            margin: 0 auto;
            width: 500px;
            border: 1px solid red;
        }

        .one {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .two {
            float: left;
            width: 200px;
            height: 200px;
            background-color: blueviolet;
        }

        .xiaosan {
            height: 200px;
            background-color: black;
        }

        /* 额外标签法 */
        .clear {
            clear: both
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="one">11</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <!-- 额外标签法 -->
        <div class="clear"></div>
    </div>
    <div class="xiaosan"></div>
</body>

</html>
~~~



#### 2.父级添加overflow属性

- 给父级添加overflow属性，将其属性值设置为hidden、auto或scroll都可以清除浮动。
  - 优点：代码简洁。
  - 缺点：无法显示溢出部分。

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .box {
            margin: 0 auto;
            width: 500px;
            border: 1px solid red;
            /* 清除浮动 */
            overflow: hidden;
        }

        .one {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .two {
            float: left;
            width: 200px;
            height: 200px;
            background-color: blueviolet;
        }

        .xiaosan {
            height: 200px;
            background-color: black;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="one">11</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
    </div>
    <div class="xiaosan"></div>
</body>

</html>
~~~



#### 3.父级添加after伪元素

- 额外标签法的升级版，也是给父级元素添加
  - 优点：没有增加标签，结构更简单。
  - 缺点：照顾低版本浏览器。
  - 代码网址：百度、淘宝、网易等

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .clearfix::after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .clearfix {
            /* IE6、7专有 */
            *zoom: 1;
        }

        .box {
            margin: 0 auto;
            width: 500px;
            border: 1px solid red;
        }

        .one {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .two {
            float: left;
            width: 200px;
            height: 200px;
            background-color: blueviolet;
        }

        .xiaosan {
            height: 200px;
            background-color: black;
        }
    </style>
</head>


<body>
    <!-- 给父元素添加clearfix清除浮动 -->
    <div class="box clearfix">
        <div class="one">11</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
    </div>
    <div class="xiaosan"></div>
</body>

</html>
~~~



#### 4.父级添加双伪元素

- 给父级元素添加
  - 优点：代码更简洁。
  - 缺点：照顾低版本浏览器。

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        /* 双伪元素清除浮动 */
        .clearfix:before,
        .clearfix:after {
            content: "";
            display: table;
        }

        .clearfix::after {
            clear: both;
        }

        .clearfix {
            /* IE6、7专有 */
            *zoom: 1;
        }

        .box {
            margin: 0 auto;
            width: 500px;
            border: 1px solid red;
        }

        .one {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .two {
            float: left;
            width: 200px;
            height: 200px;
            background-color: blueviolet;
        }

        .xiaosan {
            height: 200px;
            background-color: black;
        }
    </style>
</head>


<body>
    <!-- 给父元素添加clearfix清除浮动 -->
    <div class="box clearfix">
        <div class="one">11</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
        <div class="two">22</div>
    </div>
    <div class="xiaosan"></div>
</body>

</html>
~~~





## 定位

### 为什么要使用定位？

- 提问：以下情况使用标准流或者浮动能实现吗？
  - 1.某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子。
  - 2.当我们滚动窗口的时候，盒子是固定屏幕某个位置的。
- 以上效果，标准流或浮动都无法快速实现，此时需要`定位`来实现。
- 所以：
  - 1.浮动可以让多个块级盒子一行没有缝隙显示，经常用于横向排泄盒子。
  - 2.定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。

### 定位组成

- 定位：将盒子定在某一个位置，所以定位也是摆放盒子，按照定位的方式移动盒子。
- `定位`=`定位模式`+`边偏移`
- `定位模式`用于指定一个元素在文档中的定位方式。`边偏移`则决定了改元素的最终位置。

#### 定位模式

- 定位模式决定元素的定位方式，它通过CSS的`position`属性来设置,其值可以分为4个。

| 值         | 语义       |
| ---------- | ---------- |
| `static`   | `静态`定位 |
| `relative` | `相对`定位 |
| `absolute` | `绝对`定位 |
| `fixed`    | `固定`定位 |





# 常见问题解决办法

## 1.去除行内块元素之间的距离

- 因为空格也算字符，所以我们只需要给父元素设置font-size:0;就行了

## 2.为什么a标签无法继承父元素的属性

- 因为 浏览器会有一个基本的样式表来给任何网页设置默认样式。这些样式统称**用户代理样式** (user agent  *stylesheet* )
- 所以浏览器对a元素有默认的样式(user agent  stylesheet )，再由于CSS的优先级，继承的优先级是最低的，所以无法通过继承修改a标签的属性

## 3.内边距padding没有撑开盒子的大小

- 原因很简单因为没有给盒子指定width和height属性。此时padding就不会撑开盒子大小

