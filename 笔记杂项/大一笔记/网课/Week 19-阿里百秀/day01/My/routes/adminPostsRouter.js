// 引包
const express = require("express");

// 创建路由
const adminPostsRouter = express.Router();

adminPostsRouter.get("/posts", (req, res) => {
  // res.send("login");
  res.render("./admin/posts.html");
});
// 导出路由

module.exports = adminPostsRouter;
