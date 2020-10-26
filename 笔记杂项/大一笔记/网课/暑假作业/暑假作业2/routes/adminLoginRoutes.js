const express = require("express");
const adminLoginRoutes = express.Router();
// 导入数据库方法
const { findUser } = require("../models/adminLoginModels");

adminLoginRoutes.get("/login", (req, res) => {
  res.render("login");
});
adminLoginRoutes.post("/login", (req, res) => {
  // 得到账户和密码
  const userName_passWorld = req.body;
  // 与数据库对比
  findUser(userName_passWorld.username, function (result) {
    // 使用用户输入的账户密码和数据库里面的账户密码对比
    // console.log(result);
    // console.log(result.length);
    // 没有查到到数据
    if (result.length == 0) {
      return res.send({
        code: 500,
        msg: "登陆失败",
      });
    }
    // 查找到了
    if (
      result[0].username == userName_passWorld.username &&
      result[0].password == userName_passWorld.password
    ) {
      // 登陆成功
      // 保存数据到session里面
      // 保存账户名和密码到session
      req.session.user = result[0];
      return res.send({
        code: 200,
        msg: "登陆成功",
      });
    } else {
      // 登陆失败
      console.log("失败了啊!!!");
      return res.send({
        code: 500,
        msg: "登陆失败",
      });
    }
  });
});

module.exports = adminLoginRoutes;
