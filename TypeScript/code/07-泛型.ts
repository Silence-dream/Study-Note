/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 20:44:17
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-16 18:08:54
 * @FilePath: \code\07-泛型.ts
 */
function echo<T>(arg: T): T {
  return arg
}

const result = echo("1")
console.log(result)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}


