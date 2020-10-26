// 导入数据连接配置
const pool = require("../config/dbconfig");

module.exports.findUser = (userName, callback) => {
  pool.query(`select * from user where username='${userName}' `, function (
    error,
    result,
    fields
  ) {
    if (error) throw error;
    callback(result);
  });
};
