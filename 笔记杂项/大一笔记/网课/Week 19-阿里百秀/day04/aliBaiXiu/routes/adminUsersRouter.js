// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminUsersRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
// 4.1 显示用户管理页面
adminUsersRouter.get('/users', (req, res) => {
  res.render('./admin/users', { title: "后台管理系统-用户" });
})
// 4.2 显示用户编辑页面
adminUsersRouter.get('/users/edit', (req, res) => {
  res.render('./admin/profile', { title: "后台管理系统-编辑用户" });
})

// 5.导出路由
module.exports = adminUsersRouter;