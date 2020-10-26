// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminLoginRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
adminLoginRouter.get('/login', (req, res) => {
  res.render('./admin/login');
})
// 5.导出路由
module.exports = adminLoginRouter;