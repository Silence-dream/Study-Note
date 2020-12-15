"use strict";
/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 18:05:30
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 20:52:25
 * @FilePath: \code\06-枚举.ts
 */
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.down);
