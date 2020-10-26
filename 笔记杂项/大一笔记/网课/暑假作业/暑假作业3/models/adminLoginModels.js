const pool = require("../config/dbconfig");

//#region 根据用户名查找登陆信息
/**
 *
 *根据用户名查找登陆信息
 * @param {string} id 用户id
 * @param {function} callback 回调函数
 */
module.exports.findUserID = (id, callback) => {
  pool.query(`SELECT * FROM users where username='${id}'`, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    callback(results);
    // console.log(results);
  });
};
//#endregion
