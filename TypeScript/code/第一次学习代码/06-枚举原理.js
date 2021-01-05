/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-11 12:43:13
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 18:10:28
 * @FilePath: \code\06-枚举原理.js
 */

var Direction;

(function (Direction) {
  Direction[(Direction["up"] = 0)] = "up";
  Direction[(Direction["down"] = 1)] = "down";
  Direction[(Direction["left"] = 2)] = "left";
  Direction[(Direction["right"] = 3)] = "right";
})(Direction || (Direction = {}));

console.log(Direction);
console.log(Direction[0]);
console.log(Direction[1]);
