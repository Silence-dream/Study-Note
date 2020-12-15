"use strict";
/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 20:44:17
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-16 18:08:54
 * @FilePath: \code\07-泛型.ts
 */
function echo(arg) {
    return arg;
}
var result = echo("1");
console.log(result);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
