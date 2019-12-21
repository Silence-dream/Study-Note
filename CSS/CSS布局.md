# 伸缩布局 flex

flexible box 弹性布局

## 概念

- 伸缩容器：含有display : flex 的属性的元素是伸缩容器
- 伸缩项目：在伸缩容器中的所有`子`元素都是伸缩项目,孙元素不是
- 主轴：在伸缩容器内有一条默认的虚拟县 自左向右(默认的)
- 侧轴：垂直于主轴的是侧轴

## 属性

### 伸缩容器(flex container)

- display : flex 把一个普通容器变成伸缩容器
- display : flex 之后子元素的`float`、`clear`、`vertical-align`都会失效
- 伸缩容器flex container里面的子元素是flex(flex item)flex项目

#### 主轴的属性

- 主轴方向 flex-direction: row(行,默认值) | row-reverse | column(列) | column-reverse
- 伸缩项目在主轴上的对齐方式 justify-content : flex-start | flex-end | center | space-between(两端对齐，元素贴边再平分剩余空间) | space-around(空间环绕,平分剩余空间)

#### 侧轴的属性

- 是否换行 flex-wrap: nowrap(不换行) wrap(换行)
- align-items : 设置伸缩项目`单行`后的对齐方式
  - align-items: stretch;flex item有不能高度，不然会失效
- align-content: 设置伸缩项目`换行`的对齐方式 flex



| 值            | 描述                             |
| ------------- | -------------------------------- |
| stretch       | 默认值。元素被拉伸以适应容器     |
| center        | 元素位于容器的中心。             |
| flex-start    | 元素位于容器的开头。             |
| flex-end      | 元素位于容器的结尾。             |
| baseline      | 元素位于容器的基线上。           |
| space-between | 两端对齐，元素贴边再平分剩余空间 |
| space-around  | 空间环绕,平分剩余空间            |



### 伸缩项目(flex item)的属性

- flex: 设置的伸缩项目在伸缩容器中所占的剩余空间的比例
- order: 设置伸缩项目排序顺序 默认顺序是html标签的顺序 值越小 越靠前
  - 用于单独给flex-item设置排序顺序
- align-self: 自我对齐 关于某一个伸缩项目的对齐方式 和 `align-items`的属性值完全一样
  - 用于给flex-item单独设置align-items属性

###　简写

- flex-direction和flex-warp的简写
  - flex-flow : row  warp;

 # 流式布局(百分比布局)

- 比较适合电商网站 京东移动端
- width 和 height 是父元素的宽高
- padding 和 margin 是width 的宽

- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受 固定像素的限制，内容向两侧填充。
-  为了保护内容在合理的范围内 

# rem布局+sass

- rem布 局是现在用的最多的移动端布局方式可以适配各个不同的手机psd切图

- rem的布局文字可以随着屏幕变大而变大
- `rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以很好来控制整个页面的元素大小。`

## 1.rem单位

rem (root em)是一个相对单位，类似于em，em是父元素字体大小。

不同的是rem的基准是相对于html元素的字体大小。

比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px。



# 响应式布局

- 特别特别简单的网站才能用响应式一套html页面多个终端的css样式在哪个终端应用哪个终端的样式

# 媒体查询

## 什么是媒体查询

媒体查询（Media Query）是CSS3新语法。

+ 使用 @media查询，可以针对不同的媒体类型定义不同的样式
+ @media 可以针对不同的屏幕尺寸设置不同的样式
+ 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 
+ 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询

## 媒体查询语法规范

+ 用 @media开头 注意@符号
+ mediatype  媒体类型
+ 关键字 and  not  only
+ media feature 媒体特性必须有小括号包含

~~~
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
~~~

1.mediatype查询类型

将不同的终端设备划分成不同的类型，称为媒体类型

| 值    | 描述                 |
| ----- | -------------------- |
| all   | 用于所有设备         |
| print | 用于打印机和打印预览 |
| scree | 用于电脑屏幕         |

2. 关键字

​       关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。

+ and：可以将多个媒体特性连接到一起，相当于“且”的意思。
+ not：排除某个媒体类型，相当于“非”的意思，可以省略。
+ only：指定某个特定的媒体类型，可以省略。    

3.媒体特性

每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。

注意他们要加小括号包含

| 值        | 描述                               |
| --------- | ---------------------------------- |
| width     | 定义输出设备中页面可见区域的宽度   |
| min-width | 定义输出设备中页面最小可见区域宽度 |
| max-width | 定义输出设备中页面最大可见区域宽度 |

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 1000-1200红色   1200-1300蓝色  1300-无穷大px紫色 */
        /* 宽度>=1000px body显示粉色 */
        /* 小于等于1200px 红色 */
        @media screen and (max-width: 1200px) {
            body {
                background: red
            }
        }

        /* 大于1200px 蓝色 */
        @media screen and (min-width:1200px) {
            body {
                background: blue;
            }
        }

        /* 大于1300px紫色 */
        @media screen and (min-width:1300px) {
            body {
                background: purple;
            }
        }
    </style>
</head>

<body>

</body>

</html>
~~~

