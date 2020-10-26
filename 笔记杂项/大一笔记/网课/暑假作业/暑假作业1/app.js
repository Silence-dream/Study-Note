// 引包
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
//
const session = require("express-session");
const mysql = require("mysql");
const ejs = require("ejs");
// 解码url里面的中文
const urlencode = require("urlencode");

// 接收post请求中间件
app.use(express.urlencoded({ extended: false }));

//引用ejs
app.set("views", "views"); //设置视图的对应目录
app.set("view engine", "ejs"); //设置默认的模板引擎
app.engine("ejs", ejs.__express); //定义模板引擎

// 路由配置引入
const adminLoginRouter = require("./routes/adminLoginRouter");
const adminIndexRouter = require("./routes/adminIndexRouter");
const adminAddRouter = require("./routes/adminAddRouter");
const adminQueryRouter = require("./routes/adminQueryRouter");
const adminEditRouter = require("./routes/adminEditRouter");

app.use(express.static(path.join(__dirname, "public")));

// session配置
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
// 登陆拦截
app.use(function (req, res, next) {
  // 得到当前的url
  let url = req.originalUrl;
  // 如果不是登陆页面就跳转过去
  if (url != "/admin/login" && !req.session.user) {
    return res.redirect("/admin/login");
  }
  // console.log("appppppppppppppp");
  // console.log(req.session);
  next();
});

// 挂载路由
// 首页路由
app.use("/admin", adminIndexRouter);
// 登陆路由
app.use("/admin", adminLoginRouter);
// 添加用户
app.use("/admin", adminAddRouter);
// 查询用户
app.use("/admin", adminQueryRouter);
// 编辑用户
app.use("/admin", adminEditRouter);

// 404页面
app.use(function (req, res, next) {
  res.send("哎哟页面不存在,错误代码:404");
});
app.listen(port, () => console.log(`http://localhost:3000`));
