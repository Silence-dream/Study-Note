/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 18:05:30
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 20:52:25
 * @FilePath: \code\06-枚举.ts
 */

enum Direction {
  up,
  down,
  left,
  right
}
// 声明常量枚举之后可以提升性能,详情见 js 文件
const enum Direction2 {
  up,
  down,
  left,
  right
}
console.log(Direction.down)