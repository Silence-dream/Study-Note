const express = require("express");
const adminLoginRouter = express.Router();
// 连接数据库模组
const { userLogin } = require("../models/adminLoginModels");

// 页面渲染
adminLoginRouter.get("/login", (req, res) => {
  res.render("login");
  // console.log(req.session);
});
// 判断登陆成功
adminLoginRouter.post("/login", (req, res) => {
  // 接收到的数据
  let data = req.body;
  // console.log(req.body);
  userLogin(data.username, function (result) {
    // 返回的数据库数据
    // console.log(result[0]);
    if (result[0] === undefined) {
      res.send({
        code: 500,
        message: "登陆失败",
      });
    } else {
      // 得到数据库里面的数据;
      let dbUserName = result[0].username;
      let dbpassword = result[0].password;
      // 对比页面输入的数据
      // console.log(data.username);
      // console.log(data.password);

      if (data.username === dbUserName && data.password === dbpassword) {
        // 保存登陆信息到cookie
        req.session.user = result[0];
        // 登陆成功
        return res.send({
          code: 200,
          message: "登陆成功",
        });
      } else {
        // 登陆失败
        return res.send({
          code: 500,
          message: "登陆失败",
        });
      }
      // console.log(dbUserName, dbpassword);
    }
  });
});

module.exports = adminLoginRouter;
