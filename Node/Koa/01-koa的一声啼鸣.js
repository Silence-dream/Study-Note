/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 17:46:20
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:19:48
 * @FilePath: \Koa\01-koa的一声啼鸣.js
 */

const koa = require("koa");
const app = new koa();
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
