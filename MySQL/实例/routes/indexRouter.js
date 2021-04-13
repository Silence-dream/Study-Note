// 引包
const express = require("express");

// 创建路由
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index");
});
// 导出路由

module.exports = indexRouter;
