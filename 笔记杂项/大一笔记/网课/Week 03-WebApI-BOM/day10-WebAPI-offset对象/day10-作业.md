# 选择题

1. 下列关于offsetleft和style.left说法中正确的是（B）

   A、offsetleft返回的是字符串，style.left返回的是数值

   B、style.left是读写的，offsetleft是只读的，所以要改变div的位置，只能修改style.left

   C、offsetleft的值需要事先定义，否则读取到的值为空

   D、如果父div的position定义为relative，子div的position定义为absolute，那么子div的style.left的值是相对于父div的值，这与offsetleft是相同的

2. 下列关于offsetWidth和offsetHeight的说法正确的是(A)

   A、可以获取行内及内嵌的宽高 

   B、获取到的值是一个string类型，带单位 

   C、获取的宽高包含border和padding和margin

   D、不仅能读取，还能设置值

3. 下列关于offsetParent说法错误的是(D )

   A、如果元素自身是固定定位（fixed），则定位父级是null

   B、如果元素自身是非固定定位,并且父元素有定位，那么它的定位父级是最近的那个父级元素

   C、如果元素自身是非固定定位,并且所有的父元素都没有定位，那么它的定位父级是body

   D、body的定位父级是html

4. 下列关于offset系列说法错误的是( )

   A、offsetWidth用于获取元素的真实宽度(除了margin以外的宽度)

   B、offsetLeft可以用于获取元素到最近的定位父盒子的左侧距离

   C、offsetParent用于获取该元素中有定位的最近父级元素

   D、offsetLeft 和 offsetTop只能获取到有定位元素的left值和top值

5. 下列哪个属性不是事件对象 的属性( C)

   A、clientX

   B、pageX

   C、offsetLeft

   D、target


# 简答题

第1题. offse和style的区别是什么？
```js
offset
	offset 可以得到任意样式表中的样式值
	offset 系列获得的数值是没有单位的
	offsetWidth 包含padding+border+width
	offsetWidth 等属性是只读属性，只能获取不能赋值
	所以，我们想要获取元素大小位置，用offset更合适
style
	style 只能得到行内样式表中的样式值
	style.width 获得的是带有单位的字符串
	style.width 获得不包含padding和border 的值
	style.width 是可读写属性，可以获取也可以赋值
	所以，我们想要给元素更改值，则需要用style改变
```
第2题. offsetWidth与offsetHeight的注意点有哪些？
```js
包含padding+border+width
属性是只读属性，只能获取不能赋值
```
第3题. offsetLeft与offsetTop的注意点有哪些？

```js
返回元素相对带有定位父元素上方/左边框的偏移 
返回距离带有**定位元素**的上方偏移
```

# 编程题

 今天的综合案例敲三遍，讲的综合案例每句代码上面写上注释，明天交给组长的就是综合案例和这个.md文件的代码

