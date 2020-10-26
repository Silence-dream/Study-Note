const express = require("express");
const adminUserEditRoutes = express.Router();
const { editUser, findUser } = require("../models/adminUserEditModels");

// 编辑用户
adminUserEditRoutes.get("/UserEdit", (req, res) => {
  // console.log(req.query.id);
  let id = req.query.id - 0;
  findUser(id, function (result) {
    // console.log(result);
    return res.render("./User/edit", { data: result[0] });
  });
});

// 修改机构信息
adminUserEditRoutes.post("/updateUser", (req, res) => {
  console.log(req.body);
  let obj = req.body;
  editUser(obj, function (result) {
    if (result) {
      return res.send({
        code: 200,
        msg: "更新成功",
        data: result,
      });
    } else {
      return res.send({
        code: 500,
        msg: "更新失败",
        data: result,
      });
    }
  });
});

module.exports = adminUserEditRoutes;
