// 引入数据库连接池
const pool = require("../config/dbconfig");

//#region 查询站点内容统计数据
module.exports.findCount = (callback) => {
  // sql语句
  pool.query(
    `
      SELECT COUNT(*)AS pcount FROM posts; --文章总数
      SELECT COUNT(*)AS dcount  FROM posts WHERE STATUS ="drafted"; -- 草稿总数
      SELECT COUNT(*) AS cacount FROM categories; -- 分类总数
      SELECT COUNT(*) AS cocount FROM comments; --评论总数
      SELECT COUNT(*) AS hcount FROM comments WHERE STATUS ="held"; --待审核总数
    `,
    function (error, result) {
      if (error) throw error;
      // console.log(result);
      callback(result);
    }
  );
};
//#endregion

//#region 测试查询代码
// -- 10篇文章
// SELECT COUNT(*)AS pcount FROM posts;
// -- 2篇草稿
// SELECT COUNT(*)AS dcount  FROM posts WHERE STATUS ="drafted";
// -- 6个分类
// SELECT COUNT(*) AS cacount FROM categories;
// -- 5条评论
// SELECT COUNT(*) AS cocount FROM comments;
// -- 1条待审核
// SELECT COUNT(*) AS hcount FROM comments WHERE STATUS ="held";

// pool.query(
//   `
//     SELECT COUNT(*)AS pcount FROM posts;
//     SELECT COUNT(*)AS dcount  FROM posts WHERE STATUS ="drafted";
//     SELECT COUNT(*) AS cacount FROM categories;
//     SELECT COUNT(*) AS cocount FROM comments;
//     SELECT COUNT(*) AS hcount FROM comments WHERE STATUS ="held";
//   `,
//   function (error, result) {
//     if (error) throw error;
//     console.log(result);
//   }
// );
//#endregion
