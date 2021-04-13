/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 17:00:32
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 17:20:48
 * @FilePath: \code\04-函数.ts
 */

//  定义一个函数     x是number类型 ...              返回值是number
let add = function (x: number, y: number, z?: number): number {
  return x + y;
};

interface ISum {
  (x: number, y: number, z?: number): number;
}

//新建一个变量把add赋值给新变量
// 如果要让 arr2 == add 就需要约束好数据类型和返回值 注意语法
let arr2: (x: number, y: number, z?: number) => number = add;

// 把 arr2 简化一下
// 这样就可以简化代码量了
let arr3: ISum = add;

let result: number = add(1, 2);
console.log(result);
