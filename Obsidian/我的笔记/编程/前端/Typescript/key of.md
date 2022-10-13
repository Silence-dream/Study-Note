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