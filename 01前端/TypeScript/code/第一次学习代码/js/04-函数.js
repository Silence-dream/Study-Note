"use strict";
/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 17:00:32
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 17:20:48
 * @FilePath: \code\04-函数.ts
 */
//  定义一个函数     x是number类型 ...              返回值是number
var add = function (x, y, z) {
    return x + y;
};
//新建一个变量把add赋值给新变量
// 如果要让 arr2 == add 就需要约束好数据类型和返回值 注意语法
var arr2 = add;
// 把 arr2 简化一下
// 这样就可以简化代码量了
var arr3 = add;
var result = add(1, 2);
console.log(result);
