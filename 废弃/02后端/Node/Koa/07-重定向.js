const koa = require("koa");
const route = require("koa-route");
const app = new koa();

app.use(
  route.get("/", (ctx) => {
    // 重定向到about
    ctx.response.redirect("/about");
  })
);

app.use(
  route.get("/about", (ctx) => {
    ctx.response.body = `<h1>about Page</h1>`;
  })
);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
