const express = require("express");
const adminIndexRoutes = express.Router();

adminIndexRoutes.get("/index", (req, res) => {
  return res.render("index", { username: req.session.user.username });
});
adminIndexRoutes.post("/loggedOut", (req, res) => {
  console.log(req.body);

  // 清空session 登陆拦截会返回到登陆界面
  if (req.body.loggedOut) {
    req.session.destroy(function (err) {
      console.log(err);
      // console.log(req.session);
    });
  }
});

module.exports = adminIndexRoutes;
