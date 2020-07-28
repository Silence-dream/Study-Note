// 引包
const express = require("express");

// 创建路由
const adminUsersRouter = express.Router();
// 显示用户管理页面
adminUsersRouter.get("/users", (req, res) => {
  // res.send("login");
  res.render("./admin/users.html");
});
// 显示用户编辑页面
adminUsersRouter.get("/users/edit", (req, res) => {
  // res.send("login");
  res.render("./admin/edit.html", { title: "用户资料修改" });
});
// 导出路由

module.exports = adminUsersRouter;
