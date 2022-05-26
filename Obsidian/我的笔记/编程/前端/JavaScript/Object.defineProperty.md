---
alias : 属性描述符
tags : 
- 属性描述符
- JavaScript
---

## 语法

Object.defineProperty(obj, propertyName, descriptor)

`obj`，`propertyName`

要应用描述符的对象及其属性。

`descriptor`

要应用的属性描述符对象。

通过属性描述符可以决定 :
- 属性值是否可更改(writable)、
- 属性是否可枚举(enumerable)、
- 属性是否可以被删除(configurable)。

writable 中 true 可更改，false 只读。默认为 false
enumerable 中 true 可枚举，false 不可枚举。默认为 false。
configurable 中 true 可删除，false 不可删除。


## 使用

### 只读(writable)

我们希望声明的对象的某个属性值无法被修改的时候我们就可以进行如下操作

```js
// "use strict"
let obj = {
  name: '张三',
  age: 18
};

Object.defineProperty(obj, 'name', {
  writable: false
});

obj.name = "李四" // 修改无法生效    // 严格模式下会报错 Cannot assign to read only property 'name' of object '#<Object>'

console.log(obj.name) // 张三
```

### 枚举(enumerable)

通常情况下我们使用 `for...in`  来遍历对象，但是有时候有些属性我们不想遍历，就可以将对应的属性遍历关掉

```js
let obj = {
  name: '张三',
  age: 18
};

Object.defineProperty(obj, "name", {
  enumerable: false
})

for (const key in obj) {
  console.log(key) // 输出了 age，name消失了
}

console.log(Object.keys(obj)) // ["age"]   name消失了
```

### 是否可删除/配置 (configurable)
```js
let obj = {
  name: '张三',
  age: 18
};

Object.defineProperty(obj, "name", {
  configurable: false
})

delete name; // 删不掉 name 

console.log(obj) // { name: '张三', age: 18 }
```




## 访问器描述符

访问器属性的描述符与数据属性的不同。

对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。如果设置了 `value` 或 `writable` 则会报错

所以访问器描述符可能有：

-   **`get`** —— 一个没有参数的函数，在读取属性时工作，
-   **`set`** —— 带有一个参数的函数，当属性被设置时调用，
-   **`enumerable`** —— 与数据属性的相同，
-   **`configurable`** —— 与数据属性的相同。

```js
let obj = {
  name: '张三',
  age: 18,
};

Object.defineProperty(obj, "name", {
  get() {
    // console.log(this)
    return "李四"
  },
  set(value) {
    return value + "芜湖"
  }
})

console.log(obj.name) //李四
```


## 描述符默认值汇总

- getOwnPropertyDescriptor(obj,propertyName 获取指定 defineProperty 
- getOwnPropertyDescriptor`s` 一次获取全部的 defineProperty
-   拥有布尔值的键 `configurable`、`enumerable` 和 `writable` 的默认值都是 `false`。[1]
-   属性值和函数的键 `value`、`get` 和 `set` 字段的默认值为 `undefined`。


对于 [1] 所说的默认值 false 指的是通过以下的方式创建属性,如果是直接声明的对象属性,其默认值都是 true
```js
let obj = new Object()
Object.defineProperty(obj, "name", {
  value: '张三',
})
console.log(obj.name) // 张三 
console.log(Object.getOwnPropertyDescriptor(obj, "name"))
/* 
{
  value: '张三',
  writable: false,
  enumerable: false,
  configurable: false
}
*/
```

一个一个的定义是很烦的，所以我们可以使用 [[Object.defineproperies]]来一次定义多个属性

[属性标志和属性描述符](https://zh.javascript.info/property-descriptors)