// 1.引入express框架
const express = require("express");
// 数据库操作方法
const { allUsers, addUser } = require("../models/adminUserModel");
// 路由操作方法
const {
  showUserCtrl,
  getUserCtrl,
  addUserCtrl,
  editUserCtrl,
} = require("../controllers/adminUsersCtrl");
// 2.使用express方法提供的Router方法来创建路由
const adminUsersRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
// 4.1 显示用户管理页面
adminUsersRouter.get("/users", showUserCtrl);

// 获取所有用户数据
adminUsersRouter.post("/users/getUser", getUserCtrl);

// 添加用户
adminUsersRouter.post("/users/addUser", addUserCtrl);

// 4.2 显示用户编辑页面
adminUsersRouter.get("/users/edit", editUserCtrl);

// 5.导出路由
module.exports = adminUsersRouter;
