// 引包
const express = require("express");

// 创建路由
const adminIndexRouter = express.Router();

adminIndexRouter.get("/", (req, res) => {
  // res.send("login");
  res.render("./admin/index.html");
});
// 导出路由

module.exports = adminIndexRouter;
