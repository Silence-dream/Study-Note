// 引包
const express = require("express");

// 创建路由
const adminUsersRouter = express.Router();

adminUsersRouter.get("/users", (req, res) => {
  // res.send("login");
  res.render("./admin/users.html");
});
// 导出路由

module.exports = adminUsersRouter;
