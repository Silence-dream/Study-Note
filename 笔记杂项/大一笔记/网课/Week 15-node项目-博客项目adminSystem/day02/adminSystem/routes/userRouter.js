// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const { showUser, addPage, findUsers, deleteUser, addUser, findUser, updateUser } = require('../controller/userCtrl')
const userRouter = express.Router();

// 3.创建路由
// 3.1 显示用户列表页面
userRouter.get('/', showUser)
// 3.2 获取所有用户
userRouter.get('/findAll', findUsers);
// 3.3 删除用户
userRouter.get('/deleteUser', deleteUser)
// 3.4 显示添加用户页面
userRouter.get('/add', addPage);
// 3.5 添加用户功能
userRouter.post('/addUser', addUser)
// 3.6 更新用户信息
userRouter.get('/findUser', findUser)
userRouter.put('/updateUser', updateUser)
// 4.导出
module.exports = userRouter;
