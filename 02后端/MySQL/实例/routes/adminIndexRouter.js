// 引包
const express = require("express");

// 创建路由
const adminIndexRouter = express.Router();

adminIndexRouter.get("/", (req, res) => {
  // res.send("login");
  res.render("./admin/index.html", { title: "后台管理系统-首页" });
});

// 导出路由

module.exports = adminIndexRouter;
