/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 18:15:32
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:20:11
 * @FilePath: \Koa\01-koa-ts.ts
 */
import * as koa from "koa";

const app = new koa();

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
