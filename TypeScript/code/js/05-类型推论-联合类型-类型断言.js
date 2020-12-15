"use strict";
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
var numberOrString;
// 类型断言
function getLength(input) {
    // 告诉编译器 自己知道这个变量现在是什么类型
    // input 现在是 string 类型了
    var str = input;
    if (str.length) {
        return str.length;
    }
    else {
        var number_1 = input;
        return number_1.toString().length;
    }
}
//type guard
function getLength2(input) {
    if (typeof input === "string") {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
