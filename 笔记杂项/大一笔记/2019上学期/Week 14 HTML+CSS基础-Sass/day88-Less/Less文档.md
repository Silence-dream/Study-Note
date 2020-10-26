# LESS 预处理语言

## 历史

 Less 诞生于 2009 年，受Sass的影响创建的一个开源项目。 它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

# 使用

### 在vscode中使用

- 安装Easy Less插件即可
- 新建.less文件，在里面写入less文件，保存之后自动编译成.css文件

# 语法
## 变量
### 声明变量

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

### 选择器变量

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

## 嵌套 

### & 的使用

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

## 混合方法

### 无参数方法

- 方法犹如 声明的集合，使用时 直接键入名称即可

> less代码

~~~less
.card() {
    //.card()等价于.card()
    border-radius: 5px;
    color: red;
    background-color: pink;
}

div {
    .card();
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

