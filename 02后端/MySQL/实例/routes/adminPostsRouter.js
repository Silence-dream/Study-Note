// 引包
const express = require("express");

// 创建路由
const adminPostsRouter = express.Router();

adminPostsRouter.get("/posts", (req, res) => {
  // res.send("login");
  res.render("./admin/posts.html", { title: "所有文章-管理页面" });
});
adminPostsRouter.get("/post-add", (req, res) => {
  // res.send("login");
  res.render("./admin/post-add.html", { title: "写文章-管理页面" });
});
adminPostsRouter.get("/categories", (req, res) => {
  // res.send("login");
  res.render("./admin/categories.html", { title: "分类目录-管理页面" });
});

// 导出路由

module.exports = adminPostsRouter;
