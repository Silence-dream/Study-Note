// 引包
const express = require("express");

// 创建路由
const adminCommentsRouter = express.Router();

adminCommentsRouter.get("/comments", (req, res) => {
  // res.send("login");
  res.render("./admin/comments.html");
});
// 导出路由

module.exports = adminCommentsRouter;
