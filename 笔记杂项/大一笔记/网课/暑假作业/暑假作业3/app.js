const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const port = 80;
// 配置静态目录
app.use(express.static(path.join(__dirname, "public")));
// 路由导入
let adminLoginRoutes = require("./routes/adminLoginRoutes");
let adminIndexRoutes = require("./routes/adminIndexRoutes");
let adminNodeIndexRoutes = require("./routes/adminNodeIndexRoutes");
let adminNodeAddRoutes = require("./routes/adminNodeAddRoutes");
let adminNodeEditRoutes = require("./routes/adminNodeEditRoutes");
let adminUserIndexRoutes = require("./routes/adminUserIndexRoutes");
let adminUserAddRoutes = require("./routes/adminUserAddRoutes");
let adminUserEditRoutes = require("./routes/adminUserEditRoutes");
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

// 二级路由
app.use("/admin", adminLoginRoutes);
app.use("/admin", adminIndexRoutes);
app.use("/admin", adminNodeIndexRoutes);
app.use("/admin", adminNodeAddRoutes);
app.use("/admin", adminNodeEditRoutes);
app.use("/admin", adminUserIndexRoutes);
app.use("/admin", adminUserAddRoutes);
app.use("/admin", adminUserEditRoutes);

// 404页面
app.use((req, res, next) => {
  res.send("404");
});

app.listen(port, () => console.log(`服务端已启动:http://localhost:${port}`));
