// 引包
const express = require("express");

// 创建路由
const detailRouter = express.Router();

detailRouter.get("/detail", (req, res) => {
  res.render("detail");
});
// 导出路由

module.exports = detailRouter;
