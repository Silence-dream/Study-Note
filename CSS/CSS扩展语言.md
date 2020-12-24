# CSS扩展语言

## CSS扩展语言介绍

- sass(预处理语言)

  - `sass`是最早的`css`预处理语言，有比`less`更为强大的功能。但因其一开始的缩进式语法并不能被开发者们接受，所以使用率不高，不过由于其强大的功能和`Ruby on Rails `的大力推动，逐渐被更多开发者使用。

    `sass`是采用的`Ruby`语言编写的一款`css`预处理语言，它诞生于2007年，是最早成熟`css`预处理语言。最初它是为了配合`haml`而设计的，因此有着和`haml`一样的缩进式风格。

    `sass`从第三代开始，放弃了缩进式风格，并且完全向下兼容普通的`css`代码，这一代的`sass`也被称为`scss`。

- less(预处理语言)

- stylus(预处理语言)

- postcss(后处理语言)
## Sass预处理语言

### sass的编译

- 1.vscode实时编译插件live sass compiler
- 2.在 vscode的状态栏右下角点击一下watch sass自动编译 

### 注释

- 静默注释不会被编译到css中，标志//
- 多行注释会编译到css中，标志 /* */

### 变量

- 语法: $变量名:  变量值;
- 作用: 方便设计修改设计方案 让前段修改页面的配色方案

```scss
$white: #f5f5f5;
$normalBorder: 1px solid #ff0000;
$blockCenter: 0 auto;
```



### 嵌套

- 作用: 减少代码 增加代码的层次关系

~~~scss
.flash-title-button  {
  float: right;
   margin-top:  calc((62px - 24px) / 2);
   width: 71px; 
   height: 24px;
   border: 1px solid #e0e0e0;
   box-sizing: border-box;

   a {
    float: left;
    width: 34px;
    height: 22px;
    text-align: center;
   }

   a:first-child {
     border-right: $normalBorder;
   }

   i {
     line-height: 22px;
     font-size: 16px;
     color: #b0b2ba
   }

   a:hover i {
     color: #fe7000;
   }
}

~~~

> 对应一下css代码

~~~css
.flash-title-button {
  float: right;
  margin-top: calc((62px - 24px) / 2);
  width: 71px;
  height: 24px;
  border: 1px solid #e0e0e0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.flash-title-button a {
  float: left;
  width: 34px;
  height: 22px;
  text-align: center;
}

.flash-title-button i {
  line-height: 22px;
  font-size: 16px;
  color: #b0b2ba;
}

.flash-title-button a:hover i {
  color: #fe7000;
}

~~~



### 群组选择器

```scss
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```



### 子组合选择器和同层组合选择器：>、+和~;

- `>` 代表 直接子代选择器
- `+` 代表 某个元素（除了自己）后面的一个兄弟元素
- `~` 代表 某个元素（除了自己）后面的所有兄弟元素

### 导入sass文件

- 没有下划线的会被编译 有下划线的不会被编译的
- 语法: @import "sass的文件名"

```scss
 @import "./variables";
```



### 混合器

- 作用: 混合器像`函数`一样 封装的是一段具有具体功能的代码 在需要的时候调用
- 定义: @mixin 混合器的名字(形参:默认值,...) { 具体某个功能的代码 }
- 调用: 选择器 { @include 混合器的名字(实参) }

```scss

@mixin color($top, $left, $right, $bottom) {
    border-top-width: $top;
    border-left-width: $left;
    border-right-width: $right;
    border-bottom-width: $bottom;
}

div {
    @include color(1px, 2px, 3px, 4px);
}
```

> 对应css代码

~~~css
div {
  border-top-width: 1px;
  border-left-width: 2px;
  border-right-width: 3px;
  border-bottom-width: 4px;
}

~~~

### 继承

- 作用: 就是减少写代码的另外一种方式 继承用的好 可以大量的减少代码

- 语法:  @extend 选择器的名字

- 注意: 继承是一把双刃剑 用的好 可以极大的减少代码 用的不好 会出现冗余代码

~~~scss
div {
    position: relative;
    color: red;
    background: black;
    text-align: center;
}

p {
    @extend div;
}
~~~

> 对应css代码

~~~css
div, p {
  position: relative;
  color: red;
  background: black;
  text-align: center;
}
~~~



## LESS 预处理语言

### 历史

 Less 诞生于 2009 年，受Sass的影响创建的一个开源项目。 它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

### 使用

##### 在vscode中使用

- 安装Easy Less插件即可
- 新建.less文件，在里面写入less文件，保存之后自动编译成.css文件

### 语法
#### 变量
##### 声明变量

- Less声明变量的标识符是@变量名:变量值；

> less代码

~~~less
@color: #333;

@font-size: 50px;

div {
    color: @color;
    font-size: @font-size;
}
~~~

> 编译成以下css代码

~~~css
div {
  color: #333;
  font-size: 50px;
}
~~~

##### 选择器变量

- 让选择器变成动态的

>  less代码

~~~less
@myselector: #warp;
@warp: warp;

// 当变量名作为css选择器的时候需要用花括号括起来调用

// 调用变量名是myselector的变量值，这个值是id选择器
@{myselector} {
    color: #333;
    width: 50%;
}

.@{warp} {
    background: red;
}


#@{warp} {
    color: #666666;
}
~~~

> 编译成以下css代码

~~~css
#warp {
  color: #333;
  width: 50%;
}
.warp {
  background: red;
}
#warp {
  color: #666666;
}

~~~

#### 嵌套 

##### & 的使用

- &: 代表的是上一层的选择器名字

> less代码

~~~less
#div {
    // 这里的&代指div
    &::after {
        content: "";
    }

    .titile {
        font-weight: bold;
    }

    &-content {
        margin: 20px;
    }
}
~~~

> 编译成以下css代码

~~~ css
#div::after {
  content: "";
}
#div .titile {
  font-weight: bold;
}
#div-content {
  margin: 20px;
}

~~~

#### 混合方法

##### 无参数方法

- 方法犹如 声明的集合，使用时 直接键入名称即可

> less代码

~~~less
.card() {
    border-radius: 5px;
    color: red;
    background-color: pink;
}

div {
    .card();//等价于.card
}
~~~

> 编译成以下css代码

~~~css
div {
  border-radius: 5px;
  color: red;
  background-color: pink;
}
~~~

##### 默认参数方法

- Less 可以使用默认参数，如果 没有传参数，那么将使用默认参数。
- `@arguments` 犹如 JS 中的 `arguments` 指代的是 全部参数。
- 传的参数中 必须带着单位。

> less代码

~~~less
.border(@x: 5px, @y: 5px, @c: 10px, @color: rgba(0, 0, 0, .4)) {
    //冒号后面的是默认值
    border: @color;
    box-shadow: @arguments;
}


div {
    .border(); //不传递参数，使用冒号后面的默认参数。
}

main {
    .border(10px, 20px, 30px, red) //实参替换形参
}
~~~

> 编译成以下css代码

~~~css
div {
  border: rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}
main {
  border: red;
  box-shadow: 10px 20px 30px red;
}

~~~

#### 继承

##### extend关键字的使用

-  extend 是 Less 的一个伪类。它可继承 所匹配声明中的全部样式。 

> less代码

~~~less
.animation {
    animation: move 2 linear infinite;
    transform: rotate(360deg);

    .card {
        color: red;
        font-size: 20px;
    }
}

div {
    &:extend(.animation); //继承.animation的样式
}

main {
    &:extend(.animation .card); //继承.animation里面.card的样式
}
~~~

> 编译成以下css代码

~~~css
.animation,
div {
  animation: move 2 linear infinite;
  transform: rotate(360deg);
}
.animation .card,
main {
  color: red;
  font-size: 20px;
}
~~~

##### all全局替换

可以让选择器继承其他选择器的所有样式

> less代码

~~~less
/* Less */
#main {
    width: 200px;
}

#main {
    &:after {
        content: "Less is good!";
    }
}

#wrap:extend(#main all) {}//#warp继承#main里面的所有样式
~~~

> 编译成以下css代码

~~~css
/* Less */
#main,
#wrap {
  width: 200px;
}
#main:after,
#wrap:after {
  content: "Less is good!";
}
~~~

#####  **要点** 

-  选择器和扩展之间 是允许有空格的：pre:hover :extend(div pre). 

-  可以有多个扩展: pre:hover:extend(div pre):extend(.bucket tr) - 注意这与 pre:hover:extend(div pre, .bucket tr)一样。 
-  这是不可以的，扩展必须在最后 : pre:hover:extend(div pre).nth-child(odd)。 
-  如果一个规则集包含多个选择器，所有选择器都可以使用extend关键字。 

### 导入

引入less文件使用@import

~~~less
@import "./style.less";
~~~

#### 函数

#####  **判断类型** 

######  isnumber 判断值是不是数字

~~~less
isnumber("string"); // false
isnumber(1234);     // true
~~~

######  iscolor 判断值是不是颜色

~~~less
isnumber(blue);     // true
~~~

######  isurl 判断值是不是url

~~~less
isnumber(url(...));  // true
~~~

##### 颜色的操作

######  saturate  增加一定数值的颜色饱和度。 
######  lighten  增加一定数值的颜色亮度。 
######  darken  降低一定数值的颜色亮度。 
######  fade  给颜色设定一定数值的透明度。 
######  mix  根据比例混合两种颜色。

##### 数学函数
###### ceil 向上取整。
###### floor 向下取整。
###### percentage 将浮点数转换为百分比字符串。
###### round 四舍五入。
###### sqrt 计算一个数的平方根。
###### abs 计算数字的绝对值，原样保持单位。
###### pow 计算一个数的乘方。



