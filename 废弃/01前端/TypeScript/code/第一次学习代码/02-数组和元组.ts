/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 16:10:11
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 16:11:43
 * @FilePath: \code\02-数组和元组.ts
 */

let arrOfNumbers: number[] = [1, 2, 3];
arrOfNumbers.push(3);

function test() {
  console.log(arguments);
}

let user: [string, number] = ["viking", 20];
// 通过数组方法越界
user.push(100);
console.log(user);
