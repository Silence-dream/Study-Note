const Koa = require("koa");
const serve = require("koa-static");
const router = require("koa-route");
const koaBody = require("koa-body");
const app = new Koa();

const main = async function (ctx, next) {
  const body = ctx.request.body;
  if (!body.name) ctx.throw(400, ".name required");
  ctx.body = { name: body.name };
};
app.use(serve("public"));
app.use(koaBody());
app.use(main);

// 在命令行里面使用   curl -X POST --data "name=Jack" 127.0.0.1:3000 进行测试
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
