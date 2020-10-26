const express = require("express");
const adminNodeAddRoutes = express.Router();
const { NodeAdd, NodeDelete } = require("../models/adminNodeAddModels");
// 渲染数据
adminNodeAddRoutes.get("/Nodeadd", (req, res) => {
  return res.render("./Node/add");
});
// 添加机构数据
adminNodeAddRoutes.post("/Nodeadd", (req, res) => {
  // 得到添加的对象
  let obj = req.body;
  NodeAdd(obj, function (results) {
    // console.log(results);
    if (results) {
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
// 删除机构数据
adminNodeAddRoutes.delete("/Nodeadd", (req, res) => {
  // 得到添加的对象
  let id = req.body.id;
  NodeDelete(id, function (results) {
    if (results) {
      return res.send({
        code: 200,
        msg: "删除成功",
      });
    } else {
      return res.send({
        code: 500,
        msg: "删除失败",
      });
    }
  });
});



module.exports = adminNodeAddRoutes;
