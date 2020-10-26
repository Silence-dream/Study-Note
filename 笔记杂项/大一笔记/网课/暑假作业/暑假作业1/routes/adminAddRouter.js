const express = require("express");
const adminAddRouter = express.Router();
// 连接数据库模组
const { addHero, deleteHero } = require("../models/adminAddModels");

// 页面渲染
adminAddRouter.get("/add", (req, res) => {
  res.render("add");
});

// 添加数据
adminAddRouter.post("/add", (req, res) => {
  // console.log(req.body);
  // addHero()
  let heroObjData = {
    hname: req.body.name[0],
    nickname: req.body.name[1],
    skill: req.body.skill,
  };
  addHero(heroObjData, function (result) {
    // console.log(result);
    if (result) {
      return res.send({
        code: 200,
        message: "添加成功",
      });
    } else {
      return res.send({
        code: 500,
        message: "添加失败",
      });
    }
  });
});

// 删除数据
adminAddRouter.post("/delete", (req, res) => {
  let id = Number(req.body.id);

  deleteHero(id, function (result) {
    if (result) {
      return res.send({
        code: 200,
        message: "删除成功",
      });
    } else {
      return res.send({
        code: 500,
        message: "删除失败",
      });
    }
  });
});
module.exports = adminAddRouter;
