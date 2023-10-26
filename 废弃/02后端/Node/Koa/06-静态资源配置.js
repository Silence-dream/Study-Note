/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 18:25:24
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-16 20:34:10
 * @FilePath: \Koa\06-静态资源配置.js
 */

const koa = require("koa");
const route = require("koa-route");
const app = new koa();

const path = require("path");
const serve = require("koa-static");

app.use(serve(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
