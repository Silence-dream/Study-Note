const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  // 如果将ctx.response.status设置成404，就相当于ctx.throw(404)，返回404错误。请看下面的例子
  ctx.response.status = 404;
  ctx.response.body = "Page Not Found";
};

app.use(main);
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
