const express = require("express");
const adminNodeIndexRoutes = express.Router();
const { findIns, findNode } = require("../models/adminNodeIndexModels");
adminNodeIndexRoutes.get("/NodeIndex", (req, res) => {
  findIns(function (results) {
    console.log();
    return res.render("./Node/index", { data: results });
  });
});
// 模糊查询
adminNodeIndexRoutes.post("/NodeFindData", (req, res) => {
  // console.log(req.body);
  let obj = req.body;
  console.log(obj);
  // 没有传入参数的修改
  if (obj.gname == "") {
    obj.gname = null;
  }
  if (obj.state == "") {
    obj.state = null;
  }
  // console.log(obj);
  findNode(obj, function (results) {
    if (results) {
      return res.send({
        code: 200,
        msg: "查询成功",
        data: results,
      });
    } else {
      return res.send({
        code: 500,
        msg: "查询失败",
      });
    }
  });
});
module.exports = adminNodeIndexRoutes;
