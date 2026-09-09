---
tags : 
- TypeScript
- 类型体操
---

Readonly 会将类型全部转换为 Readonly(只读的)。

实现一个 Readonly
```ts
interface Person {

  title: string

  description: string

}

let obj: Person = { title: "1", description: "2" }

obj.title = '李四'

let test: Readonly<Person> = { title: "2", description: "3" }

test.title = "李虎" // Cannot assign to 'title' because it is a read-only property.ts(2540)

type MyReadonly<T> = {

  readonly [Key in keyof T]: T[Key]

}

let my: MyReadonly<Person> = { title: "2", description: "3" }

my.title = "123"
```



[[key of]] 就相当于 for 循环取出值

<!-- 知识导航：主题归属与经过整理的关联文章。 -->
## 知识导航

所属主题：[[00-知识导航/02-TypeScript类型系统|TypeScript类型系统]]

相关笔记：

- [[编程/前端/Typescript/key of|keyof]] — 键集合与映射类型
- [[编程/前端/Typescript/高级类型|高级类型]] — 高级类型入口与工具类型
