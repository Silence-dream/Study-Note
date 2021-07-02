#  jQuery

## 选择器

### 基本选择器

- ID选择器 

	- $("#id")

-     标签选择器

	- $("标签名")

-     class选择器

	- $(".class")

-     通配符选择器

	- $("*")

-     并集选择器

	- $("div,li")

-     交集选择器

	-     $("div.className")

### 层次选择器

-     后代选择器

	- $("标签名 内的标签名")

-     直接子代选择器

	- $("标签名>内的标签名")

-     下一个兄弟选择器

	- $("标签名+内的标签名")

-     后面所有兄弟选择器

	- $("标签名~同级标签名")

### 过滤选择器

- 索引大于/小于某个值的元素 

	- $('元素:t(2)')     t=gt大于，t=lt小于

-     隐藏的元素

	- $('元素:show')

-     显示的元素

	- $('元素:hidden')

-     匹配一个给定索引的元素

	- $('元素':eq(index)')
	- $('元素').eq(index)

### 表单选择器

-     获取所有input

	- $("input")

-     匹配所有可用元素

	- $("input:enabled")

-     匹配所有不可用元素

	- $("input:disabled")

-     匹配所有被选中的元素

	- $("input:checked")

-     查找所有选中的复选框元素

	- $("input:checked")

-     匹配所有选中的option元素

	- $('option:selected')

## 操作HTML

### 操作HTML标签内容

- text()

	- 原生

		- innerText()

- html()

	- 原生

		- innerHTML()

### 操作HTML标签类名

- 添加类名

	- addClass()

- 删除类名

	- removeClass()

- 切换类名

	- toggleClass()

- 是否存在类名

	- hasClass()

### 操作HTML标签属性

- 获取属性

	- attr()

		- 原生类似于

			- getAttribute() / setAttribute()

	- prop()

		- 原生类似于

			- element.checked = true;

- 设置属性

	- attr("属性名","属性值")
	- prop("属性名","属性值")

- 删除属性

	- removeAttr()
	- removeProp()

### 操作表单属性

- 获取属性

	- prop()

		- 原生类似于

			- element.checked = true;

- 获取值

	- val()

- 设置属性

	- prop("属性名","属性值")

- 删除属性

	- removeProp()

