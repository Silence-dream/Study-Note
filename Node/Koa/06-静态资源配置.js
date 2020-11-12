/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 18:25:24
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:25:33
 * @FilePath: \Koa\06-静态资源配置.js
 */

const koa = require("koa");
const route = require("koa-route");
const app = new koa();

const about = (ctx) => {
  ctx.response.type = "html";
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = (ctx) => {
  ctx.response.body = "<a href='about'>go to /about</a>";
};

app.use(route.get("/", main));
app.use(route.get("/about", about));

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
