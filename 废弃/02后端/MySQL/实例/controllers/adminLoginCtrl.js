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
  res.render("./admin/login.html", { title: "后台登陆页面" });
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
    // 判断邮箱书写是否存在于数据库中
    if (result.length !== 0) {
      // 存在
      if (result[0].password == password) {
        // 密码正确
        // 输出session
        // console.log(req.session);
        // 把用户信息保存在session中
        req.session.user = result[0];
        // console.log(req.session);
        res.send({
          code: 200,
          message: "登陆成功",
        });
      } else {
        // 密码不正确
        res.send({
          code: 500,
          message: "邮箱或密码错误",
        });
      }
    } else {
      // 不存在
      res.send({
        code: 500,
        message: "邮箱或密码错误",
      });
    }
    // console.log(result);
  });
};

// 退出
module.exports.logoutUser = (req, res) => {
  req.session.destroy(function (err) {
    res.clearCookie("connect.sid");
    res.send({
      code: 200,
      message: "退出成功",
      err: err,
    });
  });
};
