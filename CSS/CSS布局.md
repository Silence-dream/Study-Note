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

 