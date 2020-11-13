/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 16:15:49
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 16:54:20
 * @FilePath: \code\03-interface对象.ts
 */

/*
 * interface 创建一个接口来约束对象的形状
 */

interface Person {
  // readonly 创建的属性变成可读了的
  readonly id: number;
  name: string;
  // 在属性后面加个问号可以让次属性变成可选的
  age?: number;
}

let viking: Person = {
  id: 1,
  name: "viking",
  age: 20,
};

// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
// }

// let viking: Person = {
//   id: 1,
//   name: "李四",
//   age: 20,
// };

// console.log(viking);
