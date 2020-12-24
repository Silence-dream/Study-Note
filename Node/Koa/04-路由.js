/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 18:08:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:24:50
 * @FilePath: \Koa\04-路由.js
 */

/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 18:02:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:06:26
 * @FilePath: \Koa\03-HTTP Response .js
 */

// Koa 默认的返回类型是text/plain，如果想返回其他类型的内容，可以先用ctx.request.accepts判断一下，客户端希望接受什么数据（根据 HTTP Request 的Accept字段），然后使用ctx.response.type指定返回类型。请看下面的例子（完整代码看这里）。

const koa = require("koa");
const app = new koa();

const main = (ctx) => {
  console.log(ctx);
  // 访问路由不是 /
  if (ctx.request.path !== "/") {
    // 响应类型
    ctx.response.type = "html";
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = "Hello World";
  }
};

app.use(main);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
