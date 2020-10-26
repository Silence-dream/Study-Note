const pool = require("../config/dbconfig");

//#region  查找全部文章

/**
 *
 *查找全部文章
 * @param {function} callback
 */
module.exports.findIns = (callback) => {
  pool.query(`SELECT * FROM institutions `, function (error, results, fields) {
    if (error) throw error;
    callback(results);
    // console.log(results);
  });
};
//#endregion

// 模糊查询
/**
 * 模糊查询 传入正确的对象格式
 * {
 *  gname:xxx,
 * state:xxx,
 * }
 *
 * @param {object} obj
 * @param {function} callback
 */
module.exports.findNode = (obj, callback) => {
  pool.query(
    `select * from institutions where gname='${obj.gname}' or state=${obj.state}`,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
