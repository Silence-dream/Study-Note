// 引包
const express = require("express");

// 创建路由
const adminLoginRouter = express.Router();

adminLoginRouter.get("/login", (req, res) => {
  // res.send("login");
  res.render("./admin/login.html");
});
// 导出路由

module.exports = adminLoginRouter;
