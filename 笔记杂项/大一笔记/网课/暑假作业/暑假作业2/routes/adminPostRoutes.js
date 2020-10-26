const express = require("express");
const moment = require("moment");
const adminPostRoutes = express.Router();

// 导入数据库方法
const {
  allPosts,
  pagePosts,
  addPosts,
  deletePosts,
  findPosts,
  findPidPosts,
} = require("../models/adminFindPostsModels");

// 写文章渲染
adminPostRoutes.get("/add", (req, res) => {
  // console.log(moment().format());
  res.render("post-add");
});
// 写文章传入内容
adminPostRoutes.post("/addPosts", (req, res) => {
  // 保存用户id
  req.body.uid = req.session.user.uid;
  // console.log(req.body.status);
  // 如果没填写时间那么为当前时间
  if (req.body.created == "") {
    req.body.created = moment().format("YYYY-MM-DD");
  }
  // console.log(req.body);
  //保存数据
  addPosts(req.body);
});

// 所有文章
adminPostRoutes.get("/posts", (req, res) => {
  allPosts(0, 3, function (result) {
    for (let i = 0; i < result.length; i++) {
      // 日期转换
      result[i].publish_time = moment(result[i].publish_time).format(
        "YYYY-MM-DD"
      );
    }
    // 测试代码
    // console.log(moment("2016-10-06T16:00:00.000Z").format("YYYY-MM-DD"));
    res.render("posts", { posts: result });
    // console.log(result);
    // console.log(result.length);
  });
});
// 分页渲染
adminPostRoutes.post("/getPosts", (req, res) => {
  // 得到页码
  // console.log(req.body);
  /**
   *
   * @param {object} obj 空对象判断
   * true是空对象 false不是空对象
   */
  function isEmptyObject(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  if (isEmptyObject(req.body) == true) {
    pagePosts(0, 3, function (result) {
      return res.send({
        code: 200,
        data: result,
        msg: "没有传入参数",
      });
    });
  } else {
    let pageNow = parseInt(req.body.pageNow);
    let pageSize = parseInt(req.body.pageSize);
    // console.log(pageNow);
    // console.log(pageNow, pageSize);
    pagePosts(pageNow, pageSize, function (result) {
      return res.send({
        code: 200,
        data: result,
        msg: "传了参数",
      });
    });
  }
});
// 文章删除
adminPostRoutes.delete("/deletePosts", (req, res) => {
  // console.log(req.body);
  // 得到要删除的id
  let id = Number(req.body.id);
  // console.log("要删除的id", id);
  deletePosts(id, function (result) {
    if (result.code == 200) {
      return res.send({
        code: 200,
        msg: "删除成功",
      });
    }
    if (result.code == 500) {
      return res.send({
        code: 500,
        msg: "删除失败",
      });
    }
  });
});

// 文字查询
adminPostRoutes.post("/findPosts", (req, res) => {
  // console.log(req.body);
  // 得到需要查询的玩意
  let data = req.body;
  if (req.body.cid == "-1" || req.body.state == "-1") {
    return res.send({
      code: 500,
      msg: "你选的什么玩意???",
    });
  }
  findPosts(data, function (result) {
    return res.send({
      code: 200,
      msg: "数据获取成功",
      data: result,
    });
  });
});

adminPostRoutes.post("/updataPosts", (req, res, next) => {
  // console.log(req.body);
  let pid = req.body.pid;
  // 保存pid到session中
  req.session.user.pid = pid;
  // console.log(req.session.user.pid);
  next();
});
adminPostRoutes.get("/edit", (req, res) => {
  // console.log(req.session.user.pid);
  // 得到pid
  let pid = req.session.user.pid;
  findPidPosts(pid, function (result) {
    // console.log(result.data[0]);
    // 修改时间格式让type="datetime-local"识别
    result.data[0].publish_time = moment(result.data[0].publish_time).format(
      "YYYY-MM-DDTHH:mm"
    );
    return res.render("post-edit", { data: result.data[0] });
  });
  // res.render("post-edit");
});

adminPostRoutes.get("/loggedOut", (req, res) => {
  console.log(req.query);
  let isOut = req.query.isOut;
  if (isOut) {
    res.clearCookie("connect.sid");
    return res.send({
      code: 200,
      msg: "退出成功",
    });
  } else {
    return res.send({
      code: 500,
      msg: "退出失败",
    });
  }
});

module.exports = adminPostRoutes;
