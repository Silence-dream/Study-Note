const express = require("express");
const app = express();
const urlencode = require("urlencode");
const adminIndexRouter = express.Router();
// 连接数据库模组
const { findhero, fuzzySearch } = require("../models/adminIndexModels");

// 页面渲染
adminIndexRouter.get("/index", (req, res) => {
  // 得到搜索参数
  let query = req.query.search;

  if (query == undefined) {
    res.render("index", { queryHeroTemp: null });
  } else {
    fuzzySearch(query, function (result) {
      console.log(result);
      res.render("index", { queryHeroTemp: result });
    });
  }

  // if (req.query == true) {
  //   // 查找页面
  //   let search = req._parsedOriginalUrl.query;
  //   if (search == null) return null;
  //   // 得到参数
  //   let query = urlencode.decode(search.split("=")[1]);
  //   // 查找数据
  //   fuzzySearch(query, function (result) {
  //     res.render("index", { queryHeroTemp: result });
  //   });
  // } else {
  //   // 渲染页面
  //   res.render("index", { queryHeroTemp: null });
  // }
});

// 获取英雄数据
adminIndexRouter.post("/indexHero", (req, res) => {
  findhero(function (result) {
    return res.send({
      code: 200,
      data: result,
    });
  });
});

module.exports = adminIndexRouter;
