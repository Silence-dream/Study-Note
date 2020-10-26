// 连接数据库
const pool = require("../config/dbconfig");
//#region 查询英雄列表
module.exports.findhero = (callback) => {
  pool.query(`select * from hero `, function (error, results, fields) {
    // callback(results);
    if (error) throw error;
    // console.log(results);
    callback(results);
  });
};
//#endregion

//#region 根据英雄名字模糊查询
module.exports.fuzzySearch = (queryName, callback) => {
  pool.query(`SELECT * FROM hero WHERE hname LIKE '%${queryName}%'`, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    // console.log(queryName);
    callback(results);
    // console.log(results);
  });
};
//#endregion
