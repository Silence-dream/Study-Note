// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const { showUser, editUser, findUsers, deleteUser } = require('../controller/userCtrl')
const userRouter = express.Router();

// 3.创建路由
// 3.1 显示用户页面
userRouter.get('/', showUser)
// 3.2 获取所有用户
userRouter.get('/findAll', findUsers);
// 3.3 删除用户
userRouter.get('/deleteUser', deleteUser)

userRouter.get('/edit', editUser);
// 4.导出
module.exports = userRouter;
