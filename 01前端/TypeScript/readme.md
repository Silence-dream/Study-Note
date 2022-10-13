

## 环境搭建

```cmd
npm install typescript -g 

tsc xx.ts # 生成 js 文件
tsc -d xx.ts #生成 xx.d.ts文件
node xx.js # 运行 js 文件

npm install ts-node -g 
ts-node xx.ts # 直接运行 ts 文件
```







## 类型注解(annotation)

-   我们告诉 typescript 变量是什么类型

```typescript
let a: number;
a = 11; // annotation
```

-   声明数字

```typescript
let a:number = 10;
```

-   声明数组

```typescript
let a:number[] = [1,2,3] // 声明数字数组
let b:string[] = ["1","2","3"] // 声明字符串数组
```

-   声明对象

```typescript
const obj: { name: string; age: number } = { name: "李四", age: 19 }
```

-   函数

```typescript
function fn ():void {
    // 没有返回值
}

function fn2 ():number {
	return 1;
}
```

-   结构赋值

```typescript
function sum({ a, b }: { a: number; b: number }): number {
  return a + b
}
```



## 类型推断(inference)

-   typescript 会自动的判断变量的类型

```typescript
let a = 123;  // 鼠标放上去看
```

## never类型的理解

-   一个无法执行完成的函数的返回值可以是never

```typescript
function fn(): never {
  throw new Error();
}
function fn(): never {
  while (true) { }
}
```



## 工具

-   [TS代码在线转JS代码 ](https://www.typescriptlang.org/zh/play?#code/Q)
-   [TypeScript速成教程](https://github.com/joye61/typescript-tutorial)
-   [TypeScript教程](https://ts.xcatliu.com/)
-   [深入理解 TypeScript ](https://jkchao.github.io/typescript-book-chinese/)

