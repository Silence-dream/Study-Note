// 连接数据库

const pool = require("../config/dbconfig");

//#region 验证登陆

module.exports.userLogin = (username, callback) => {
  pool.query(`select * from users where username='${username}' `, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    callback(results);
  });
};
//#endregion
