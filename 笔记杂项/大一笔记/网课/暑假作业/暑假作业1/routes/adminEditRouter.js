const express = require("express");
const adminEditRouter = express.Router();
const url = require("url");
// 连接数据库模组
const { findID, updateUser } = require("../models/adminEditModels");
console.log("adminEditModels.js的输出");
// 页面渲染
adminEditRouter.get("/edit", (req, res) => {
  // 得到查询的id
  let id = YCLuserEditID.id;
  console.log("getgetgetgetgetgetgetget");
  console.log(id);
  if (id) {
    findID(id, function (result) {
      res.render("edit", { userInfo: result[0] });
    });
  } else {
    res.render("edit", { userInfo: null });
  }
});

adminEditRouter.post("/userEdit", (req, res) => {
  // 得到修改的id
  let id = req.body;
  console.log("postpostpost");
  console.log(id);
  if (id == undefined) return false;
  // 保存到全局id
  global.YCLuserEditID = id;
  console.log(global.YCLuserEditID);
});

adminEditRouter.post("/saveEdit", (req, res) => {
  console.log("savesavesavesavesave");
  // 得到修改信息和id
  let data = req.body;
  console.log(data);
  updateUser(data, function (result) {
    // console.log(result);
    res.send({
      code: 200,
    });
  });
});
console.log("adminEditModels.js的输出结束,bug存疑");

module.exports = adminEditRouter;
