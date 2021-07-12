/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 17:58:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:24:09
 * @FilePath: \Koa\02- Context 对象.js
 */
// Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

const koa = require("koa");
const app = new koa();

// const main = (ctx) => {
//   //ctx.response代表 HTTP Response
//   ctx.response.body = "Hello World";
// };

// app.use(main);

app.use((content) => {
  content.response.body = "hello";
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
