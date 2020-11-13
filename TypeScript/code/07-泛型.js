/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 20:44:17
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 20:48:18
 * @FilePath: \code\07-泛型.ts
 */
function echo(arg) {
    return arg;
}
var result2 = echo("1");
console.log(result2);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
