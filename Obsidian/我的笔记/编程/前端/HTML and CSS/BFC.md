---
tags : 
- CSS
- BFC
- 边距重叠解决方案
---

个人认为 BFC 就是一个伪概念，其实大家都会，就是想要造一个高端的名词出来让大家都不会

### BFC的概念

BFC（Block Formatting Context）：块级格式化上下文。你可以把它理解成一个独立的区域。

BFC 内的元素不会在布局上影响到外面的元素。

另外还有个概念叫IFC。不过，BFC问得更多。

### BFC 的原理/BFC的布局规则

BFC 的原理，其实也就是 BFC 的渲染规则（能说出以下四点就够了）。包括：

-   （1）BFC **内部的**子元素，在垂直方向，**边距会发生重叠**。
    
-   （2）BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
    
-   （3）**BFC区域不与旁边的`float box`区域重叠**。（可以用来清除浮动带来的影响）。
    
-   （4）计算BFC的高度时，浮动的子元素也参与计算。
    

### 如何生成BFC

有以下几种方法：

-   方法1：overflow: 不为visible，可以让属性是 hidden、auto。【最常用】
    
-   方法2：浮动中：float的属性值不为none。意思是，只要设置了浮动，当前元素就创建了BFC。
    
-   方法3：定位中：只要posiiton的值不是 static或者是relative即可，可以是`absolute`或`fixed`，也就生成了一个BFC。
    
-   方法4：display为inline-block, table-cell, table-caption, flex, inline-flex





## 举例一 解决 margin 重叠


```html
<!DOCTYPE html>

<html lang="en">

  

<head>

  <style>

    * {

      padding: 0;

      margin: 0;

    }

  

    .one,

    .two {

      width: 100px;

      height: 100px;

    }

  

    .one {

      margin-bottom: 100px;

      background-color: pink;

    }

  

    .two {

      margin-top: 100px;

      background-color: steelblue;

    }

  </style>

</head>

  

<body>

  <div class="one"></div>

  <div class="two"></div>

  

</body>

  

</html>
```

其渲染结果如下

![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202205191817169.png)

我们想要的效果是两个盒子距离 200 px，如何解决？就需要触发一下 BFC，使用最简单的方式触发 BFC 给 one 和 two 盒子嵌套一个 div 并添加 overflow:hidden




## 举例二 清除浮动

```html
<!DOCTYPE html>
<html lang="en">

<head>

  <style>

    * {

      padding: 0;

      margin: 0;

    }

    .father {

      border: 1px solid red;

    }

    .son {

      width: 100px;

      height: 100px;

      background-color: pink;

    }

  </style>

</head>

<body>
  <div class="father">

    <div class="son"></div>

  </div>
</body>

</html>
```

显示如下
![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202205192045066.png)


子元素设置高度之后父元素没有了高度，这时候让父元素 BFC 就行了也就是添加一个overflow:hidden

```css
    .father {
      border: 1px solid red;
      overflow: hidden;
    }
```


## 举例三 阻止元素被浮动元素覆盖


```html
<!DOCTYPE html>

<html lang="en">

  

<head>


  <style>

    .box {

      width: 500px;

      height: 500px;

      background-color: pink;

    }

    .one{

      width: 100px;

      height: 100px;

      float:left;

      background-color: rosybrown;

    }

  

    .two{

      width: 200px;

      height: 200px;

      background-color: slategray;

    }

  </style>

  

</head>

  

<body>

  <div class="box">

    <div class="one"></div>

    <div class="two"></div>

  </div>

</body>

  

</html>
```
![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202205192131161.png)

