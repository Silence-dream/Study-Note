// 为了方便处理错误，最好使用try...catch将其捕获。
// 但是，为每个中间件都写try...catch太麻烦，
// 我们可以让最外层的中间件，负责所有中间件的错误处理。请看下面的例子

const Koa = require("koa");
const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // 返回错误码
    console.log(err.statusCode);
    console.log(err.status);
    //设置返回的错误码
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message,
    };
  }
};

const main = (ctx) => {
  ctx.throw(500);
};

app.use(handler);
app.use(main);
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
