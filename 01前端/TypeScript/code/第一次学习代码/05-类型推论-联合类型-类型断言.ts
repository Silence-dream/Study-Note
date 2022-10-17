/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 17:28:04
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 17:39:15
 * @FilePath: \code\05-类型推论-联合类型-类型断言.ts
 */
// type inference 类型推论 虽然没有给变量指定数据类型但是编译器会推论出类型,但是在新版的ts里面已经会报错了
// let str = "str";
// str.replace();

// union types 联合类型
// 指定一个变量既可以是 number 也可以是 string 使用语法 |
let numberOrString: number | string;

// 类型断言
function getLength(input: string | number): number {
  // 告诉编译器 自己知道这个变量现在是什么类型
  // input 现在是 string 类型了
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const number = input as number;
    return number.toString().length;
  }
}

//type guard
function getLength2(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}
