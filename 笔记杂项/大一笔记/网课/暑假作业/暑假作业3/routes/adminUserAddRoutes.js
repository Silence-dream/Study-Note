const express = require("express");
const adminUserAddRoutes = express.Router();
const { addUser } = require("../models/adminUserAddModels");
// 添加用户
adminUserAddRoutes.get("/UserAdd", (req, res) => {
  return res.render("./User/add");
});
// 更新用户
adminUserAddRoutes.post("/updateAdd", (req, res) => {
  console.log(req.body);
  let obj = req.body;
  addUser(obj, function (result) {
    if (result) {
      return res.send({
        code: 200,
        msg: "添加成功",
      });
    } else {
      return res.send({
        code: 500,
        msg: "添加失败",
      });
    }
  });
});
module.exports = adminUserAddRoutes;
