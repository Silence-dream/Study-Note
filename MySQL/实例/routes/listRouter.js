// 引包
const express = require("express");

// 创建路由
const listRouter = express.Router();

listRouter.get("/list", (req, res) => {
  res.render("list");
});
// 导出路由

module.exports = listRouter;
