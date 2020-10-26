const express = require("express");
const adminQueryRouter = express.Router();
// 连接数据库模组
const { fuzzySearch } = require("../models/adminEditModels");

// 页面渲染
// adminQueryRouter.post("/queryHname", (req, res) => {
//   // console.log(req.params.id);
//   // console.log(req.query);
//   // console.log(req.body);
//   return res.send("你好啊");
// });

module.exports = adminQueryRouter;
