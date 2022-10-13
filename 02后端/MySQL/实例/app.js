const express = require("express");
const app = express();
const path = require("path");
const port = 80;
const ejs = require("ejs");
var session = require("express-session");
// 静态目录设置
app.use(
  express.static(path.join(__dirname, "public"), {
    index: "index.html",
  })
);
// 中间件设置
app.use(express.urlencoded({ extended: false }));

// 设置session
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000 * 10,
    },
  })
);
//  路由拦截(登录页面就让访问 如果req.session.user 也让访问)
app.use(function (req, res, next) {
  // 获取url
  let url = req.originalUrl;
  // 判断 是不是登录页 和是否没有req.session.user 就让页面跳转到登录页
  if (url != "/admin/login" && !req.session.user) {
    // 重定向到登录页
    return res.redirect("/admin/login");
  }
  next();
});
// 导入路由
// 导入用户系统首页
const index = require("./routes/indexRouter");
const list = require("./routes/listRouter");
const detail = require("./routes/detailRouter");
const adminLogin = require("./routes/adminLoginRouter");
const adminIndex = require("./routes/adminIndexRouter");
const adminPosts = require("./routes/adminPostsRouter");
const adminCommentsRouter = require("./routes/adminCommentsRouter");
const adminUsers = require("./routes/adminUsersRouter");
const adminSettings = require("./routes/adminSettingsRouter");

// 挂载路由
app.use(index);
app.use(list);
app.use(detail);
// 后台路由
app.use("/admin", adminLogin);
app.use("/admin", adminIndex);
app.use("/admin", adminPosts);
app.use("/admin", adminCommentsRouter);
app.use("/admin", adminUsers);
app.use("/admin", adminSettings);

//设置ejs模板引擎
// 把views设置为模板文件的根目录
app.set("views", path.join(__dirname, "views"));
//设置模板引擎为ejs
app.set("view engine", "ejs");
//为html扩展名注册ejs,注意需要res.render("xxx.html")才能使用,不加后缀默认是ejs,修改默认请修改上一行代码
app.engine("html", ejs.renderFile);

app.listen(port, () => console.log(`服务器启动成功:请打开http://localhost:80`));
