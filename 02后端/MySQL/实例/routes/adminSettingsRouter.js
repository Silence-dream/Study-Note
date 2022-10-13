// 引包
const express = require("express");

// 创建路由
const adminSettingsRouter = express.Router();

adminSettingsRouter.get("/settings", (req, res) => {
  // res.send("login");
  res.render("./admin/settings.html", { title: "网页设置-管理页面" });
});

// 导出路由

module.exports = adminSettingsRouter;
