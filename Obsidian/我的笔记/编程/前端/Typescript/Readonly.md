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