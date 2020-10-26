
// 引入模型
const { findByPaging, deleteOne, findOne } = require('../models/adminPostsModel');
// 引入日期格式化包
// const moment = require('moment');

//#region 1.显示文章管理页面
module.exports.postsPage = (req, res) => {
  findByPaging({
    callback: function (results) {
      console.log(results);
      res.render('./admin/posts', {
        title: "后台管理系统-文章",
        category: results[0]
      });
    }
  })
}
//#endregion

//#region 2.筛选分页查询所有文章
module.exports.postsByFilter = (req, res) => {
  let { pagenum, pagesize, category, status } = req.query;
  // let pagenum = 1;
  // let pagesize = 5;
  findByPaging({
    category,
    status,
    offset: (pagenum - 1) * pagesize,
    size: pagesize,
    callback(results) {
      // console.log(results);
      res.send({
        code: 200,
        message: "查询数据成功",
        // 分页数据
        pagenum: parseInt(pagenum),
        pagecount: Math.ceil(parseInt(results[1][0].total) / pagesize),
        // 文章数据
        data: results[2]
      });
    }
  })
}
//#endregion

//#region 3.显示文章添加页面
module.exports.postsAddPage = (req, res) => {
  res.render('./admin/post-add', { title: "后台管理系统-文章添加" });
}
//#endregion

//#region 4.通过id删除文章(就是在修改文章的status属性)
module.exports.postsDeleteById = (req, res) => {
  // console.log(req.body);
  let { id } = req.body;
  // let id = 1;
  deleteOne(id, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "文章删除成功"
      })
    } else {
      res.send({
        code: 500,
        message: "文章删除失败"
      })
    }
  });

}
//#endregion

//#region 5.显示文章编辑页面
module.exports.postsEditPage = (req, res) => {
  // 获取文章id
  // console.log(req.params);
  let { id } = req.params;
  findOne(parseInt(id), function (results) {
    console.log(results[2].title);
    res.render('./admin/post-edit', {
      title: "后台管理系统-文章添加",
      category: results[0],
      statusArr: results[1],
      data: results[2]
    });
    console.log(results);
  })

}
//#endregion