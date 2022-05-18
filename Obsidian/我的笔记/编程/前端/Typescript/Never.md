---
tags : 
- TypeScript
- 类型
---


never类型表示那些永远不会存在值的类型，比如永远不会返回的方法（百分百异常或死循环）所返回的值类型。他是一种底部类型，任何其他类型的值都不能赋值给never类型。

下面是一些返回never类型的函数：

```ts
// 返回never的函数必须存在无法达到的终点

function error(message: string): never {

  throw new Error(message);

}

  

// 返回never的函数必须存在无法达到的终点

function infiniteLoop(): never {

  while (true) {

  }

}
```

实际应用中，never类型用的并不多，我通常给过期的方法返回值设置为never类型。