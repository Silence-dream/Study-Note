// Koa 默认的返回类型是text/plain，如果想返回其他类型的内容，可以先用ctx.request.accepts判断一下，客户端希望接受什么数据（根据 HTTP Request 的Accept字段），然后使用ctx.response.type指定返回类型。请看下面的例子（完整代码看这里）。

/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 17:58:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 18:01:23
 * @FilePath: \Koa\02- Context 对象.js
 */
// Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

const koa = require("koa");
const app = new koa();

const main = (ctx) => {
  console.log(ctx);
  if (ctx.request.accepts("xml")) {
    ctx.response.type = "xml";
    ctx.response.body = "<data>Hello World</data>";
  } else if (ctx.request.accepts("json")) {
    ctx.response.type = "json";
    ctx.response.body = { data: "Hello World" };
  } else if (ctx.request.accepts("html")) {
    ctx.response.type = "html";
    ctx.response.body = "<p>Hello World</p>";
  } else {
    ctx.response.type = "text";
    ctx.response.body = "Hello World";
  }
};

app.use(main);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
