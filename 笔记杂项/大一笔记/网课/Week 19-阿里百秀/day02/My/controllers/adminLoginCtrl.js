/**
 * 请求操作
 *
 */

// 后端校验
const Joi = require("joi");
// 连接数据库
const { pool } = require("../config/dbconfig");
// 导入数据库操作
const { findUser } = require("../models/adminLoginModel");

module.exports.loginPage = (req, res) => {
  // res.send("login");
  res.render("./admin/login.html");
};
module.exports.loginUser = (req, res) => {
  // 1.获取前端传来的数据
  let { email, password } = req.body;
  // 2.后端数据校验
  const schema = Joi.object().keys({
    email: Joi.string()
      .min(6)
      .max(100)
      .email()
      .required()
      .error(new Error("邮箱或密码不正确")),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required()
      .error(new Error("邮箱或密码不正确")),
  });
  let result = Joi.validate({ email: email, password: password }, schema);
  // console.log(result.error); // 如果校验通过那么 error对象为null
  if (result.error) {
    res.send({
      code: 500,
      message: result.error.message,
    });
    // 抛出错误
    throw result.error;
  }
  // 3.数据库的数据比对
  // findUser(email, function (result) {
  //   console.log(result);
  // });
  findUser(email, function (result) {
    // console.log(email);
    console.log(result);
  });
};
