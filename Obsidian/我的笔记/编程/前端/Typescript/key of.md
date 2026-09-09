---
tags : 
- TypeScript
- 类型体操
---

该操作符是在 TypeScript 2.1 版本中引入的，用于获取某种类型中的所有键，其返回类型是联合类型。

```ts
interface Person {

  id: string

  name: string

}

type PersonKey = keyof Person // "id" | "name"

// 在指定类型之后就只能赋值为 "id" 和 "name" 了
let a: PersonKey = "id"

let b: PersonKey = "name"
```

-   `keyof T`用于从对象类型T中获取键值 `key`；

-   `in`用于对对象键值`key`进行迭代；
   
-   `Key` 就是对象键值 `key` 本身；
   
-   `T[Key]`是指定 `Key` 的值；

<!-- 知识导航：主题归属与经过整理的关联文章。 -->
## 知识导航

所属主题：[[00-知识导航/02-TypeScript类型系统|TypeScript类型系统]]

相关笔记：

- [[编程/前端/Typescript/Readonly|Readonly]] — 键集合与映射类型
- [[编程/前端/Typescript/索引签名|索引签名]] — 对象键与类型约束
