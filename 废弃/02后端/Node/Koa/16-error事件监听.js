const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  ctx.throw(500);
};

app.on("error", (err, ctx) => {
  console.error("server error服务器错误", err);
});

app.use(main);
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
