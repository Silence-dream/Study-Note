// 引包
const express = require("express");
// 后端校验
const Joi = require("joi");
// 连接数据库
const { pool } = require("../config/dbconfig");
// 导入数据库操作
const { findUser } = require("../models/adminLoginModel");

// 导入请求地址操作
const {
  loginPage,
  loginUser,
  logoutUser,
} = require("../controllers/adminLoginCtrl");
// 创建路由
const adminLoginRouter = express.Router();

adminLoginRouter.get("/login", loginPage);
adminLoginRouter.post("/login", loginUser);
adminLoginRouter.get("/logout", logoutUser);
// 导出路由

module.exports = adminLoginRouter;
