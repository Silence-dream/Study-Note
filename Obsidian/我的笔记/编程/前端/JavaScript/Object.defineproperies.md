---
alias : 批量定义属性
tags : 
- JavaScript
---

## 语法

```js
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
```


## 使用
```js
let obj = {
  name: '张三',
  age: 18
};


Object.defineProperties(obj, {
  name: {
    writable: false
  },
  age: {
    configurable: false
  }
})


console.log(Object.getOwnPropertyDescriptors(obj))
/* 
{
  name: {
    value: '张三',
    writable: false,
    enumerable: true,
    configurable: true
  },
  age: { value: 18, writable: true, enumerable: true, configurable: false }
}
*/
```

<!-- 知识导航：主题归属与经过整理的关联文章。 -->
## 知识导航

所属主题：[[00-知识导航/01-JavaScript与语言基础|JavaScript与语言基础]]

相关笔记：

- [[编程/前端/JavaScript/Object.defineProperty|Object.defineProperty]] — 单个与批量属性描述符
