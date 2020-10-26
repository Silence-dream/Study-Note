const express = require("express");
const app = express();
const path = require("path");
const port = 80;
const session = require("express-session");
// 配置静态目录
app.use(express.static(path.join(__dirname, "public")));
// 设置中间件接收post请求
app.use(express.urlencoded({ extended: false }));
// ejs配置
app.set("views", path.join(__dirname, "views"));
app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");
// session配置
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 600 * 1000, // 有效期，单位是毫秒
    },
  })
);
// 登陆拦截
app.use("/", (req, res, next) => {
  let url = req.originalUrl;
  if (url != "/admin/login" && !req.session.user) {
    return res.redirect("/admin/login");
  }
  next();
});

// 路由导入
const adminLoginRoutes = require("./routes/adminLoginRoutes");
const adminPostRoutes = require("./routes/adminPostRoutes");

// 配置路由
app.use("/admin", adminLoginRoutes);
app.use("/admin", adminPostRoutes);

// 404页面
app.use(function (req, res) {
  return res.redirect(
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=911395497,503465996&fm=26&gp=0.jpg"
  );
});
app.listen(port, () =>
  console.log(`服务器已经启动,请打开http://localhost:${port}`)
);
