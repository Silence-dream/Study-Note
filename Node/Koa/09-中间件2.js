const Koa = require("koa");
const app = new Koa();
// logger函数就叫做"中间件"（middleware），
// 因为它处在 HTTP Request 和 HTTP Response 中间，用来实现某种中间功能。app.use()用来加载中间件。

/*
 *
 *  基本上，Koa 所有的功能都是通过中间件实现的，前面例子里面的main也是中间件。
 *  每个中间件默认接受两个参数，
 *  第一个参数是 Context 对象，第二个参数是next函数。
 *  只要调用next函数，就可以把执行权转交给下一个中间件。
 * 最外层的中间件首先执行。
 *  调用next函数，把执行权交给下一个中间件。
 *  ...
 *  最内层的中间件最后执行。
 *  执行结束后，把执行权交回上一层的中间件。
 *  ...
 *  最外层的中间件收回执行权之后，执行next函数后面的代码。
 */
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
};
app.use(logger);
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
