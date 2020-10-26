// 导入数据连接配置
const pool = require("../config/dbconfig");

module.exports.allPosts = (pageUp, pageDown, callback) => {
  //#region 设置默认参数
  if (!pageUp) {
    pageUp = 0;
  }
  if (!pageDown) {
    pageDown = 3;
  }
  //#endregion

  pool.query(`select * from posts limit ${pageUp},${pageDown}`, function (
    error,
    result,
    fields
  ) {
    if (error) throw error;
    callback(result);
    // console.log(result);
  });
};
//#region 分页查询
/**
 *
 *
 * @param {number} pageNow 当前页码
 * @param {number} pageSize  一次需要渲染多少个数据
 * @param {function} callback 回调函数,返回文章数据
 */
module.exports.pagePosts = (pageNow, pageSize, callback) => {
  //#region 注释
  /**
   * pageNow  当前页码
   * pageSize 一次显示多少
   * pageUp  limit前数字
   * pageDown 给下一页的自定义属性
   */
  /**
   *limit前数字
   */

  let pageUp = pageNow * pageSize - 3 || 0;
  /**
   * limit后数字
   */
  let pageDown = pageNow * pageSize || 3;

  // console.log(pageDown);
  // console.log("你好", Math.ceil(pageDown / pageSize));
  if (pageUp <= 0) pageUp = 0;
  //#endregion
  // console.log("pageUp", pageUp);
  // console.log("pageDown", pageDown);
  pool.query(
    `SELECT * FROM posts LIMIT ${pageUp},${pageSize};
     SELECT * FROM posts
  `,
    function (error, result, fields) {
      if (error) throw error;
      // 返回分页信息 result
      // 返回一共可以渲染多少个页码
      /**
       *pageNumBer 返回可以渲染多少个页码
       */
      let pageNumBer = [];
      pageNumBer.length = Math.ceil(result[1].length / pageSize);
      // 得到一共多少条数据
      // console.log(result[1].length);
      // console.log(result);
      callback({
        postsData: result,
        pageNumBer: pageNumBer,
        pageNow: pageDown / pageSize,
      });
    }
  );
};
//#endregion

// 添加文章
module.exports.addPosts = (obj, callback) => {
  // console.log(obj);
  pool.query(
    `INSERT INTO posts ( ptitle, pname,publish_time,state,uid,cid )
    VALUES
    ('${obj.title}', '${obj.slug}','${obj.created}','${obj.status}',${obj.uid},${obj.category})`,
    // ('${obj.title}', '${obj.slug}',${obj.created},'${obj.status}',${obj.uid},${obj.category})
    function (error, result, fields) {
      if (error) throw error;
      if (callback) callback(result);
      // console.log(result);
    }
  );
};

//删除文章
module.exports.deletePosts = (id, callback) => {
  // console.log("这是数据库的操作", id, typeof id);

  if (isNumber(id)) {
    // DELETE FROM posts WHERE pid = 10;
    pool.query(` DELETE FROM posts WHERE pid = ${id}`, function (
      error,
      result,
      fields
    ) {
      if (error) throw error;
      if (callback)
        callback({
          code: 200,
          data: result,
        });
      // console.log(result);
    });
  } else {
    callback({
      msg: `数据库操作返回,查询错误,传入的不是数字id:${id}`,
      code: 500,
    });
  }
};

// 模糊查询数据
module.exports.findPosts = (obj, callback) => {
  // SELECT * FROM posts WHERE cid=2 AND state='已发布';
  pool.query(
    `SELECT * FROM posts WHERE cid=${obj.cid} AND state='${obj.state}'`,
    function (error, result, fields) {
      if (error) throw error;
      if (callback) callback(result);
      // console.log(result);
    }
  );
};

/**
 *
 *
 * @param {number} pid 文章id
 * @param {function} callback 回调函数
 */
module.exports.findPidPosts = (pid, callback) => {
  if (isNumber(pid)) {
    pool.query(`SELECT * FROM posts WHERE pid=${pid}`, function (
      error,
      result,
      fields
    ) {
      if (error) throw error;
      if (callback)
        callback({
          code: 200,
          msg: "数据获取成功",
          data: result,
        });
    });
  } else {
    if (callback)
      callback({
        code: 500,
        msg: "请输入数字",
      });
  }
};

/**
 *
 * @param {number} input 传入数字,不是数字的会返回 false
 */
function isNumber(input) {
  var re = /^[0-9]+.?[0-9]*/; //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/
  if (!re.test(input)) {
    // 不是数字
    return false;
  } else {
    // 是数字
    return true;
  }
}
