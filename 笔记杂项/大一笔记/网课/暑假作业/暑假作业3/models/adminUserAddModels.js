const pool = require("../config/dbconfig");
//#region 添加用户数据
/**
 *
 * 添加用户数据
 * @param {object} obj
 * @param {function} callback
 */
module.exports.addUser = (obj, callback) => {
  pool.query(
    'INSERT INTO users (username,`password`,state,gid) VALUES ("'
      .concat(obj.username, "\",'")
      .concat(obj.password, "',")
      .concat(obj.state - 0, ",")
      .concat(obj.gid - 0, ")"),
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
//#endregion
