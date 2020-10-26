const express = require("express");
const adminNodeEditRoutes = express.Router();
const { findId, updateNode } = require("../models/adminEditModels");

adminNodeEditRoutes.get("/edit", (req, res) => {
  // console.log(req.query.id);
  let id = req.query.id - 0;
  findId(id, function (result) {
    // console.log(result);
    return res.render("./Node/edit", { data: result[0] });
  });
});

// 修改机构信息
adminNodeEditRoutes.post("/updateEdit", (req, res) => {
  console.log(req.body);
  let obj = req.body;
  updateNode(obj, function (result) {
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

module.exports = adminNodeEditRoutes;
