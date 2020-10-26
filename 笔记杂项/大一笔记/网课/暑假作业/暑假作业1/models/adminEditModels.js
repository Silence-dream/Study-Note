// 连接数据库

const pool = require("../config/dbconfig");

//#region 根据英雄id查询
module.exports.findID = (id, callback) => {
  pool.query(`SELECT * FROM hero where id = '${id}'  `, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    callback(results);
  });
};
// //#endregion

//#region 根据英雄id修改数据
module.exports.updateUser = (obj, callback) => {
  console.log(obj);
  pool.query(
    `UPDATE hero SET hname='${obj.name}',nickname='${obj.username}',skill='${obj.skill}' WHERE id = ${obj.id}`,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
    }
  );
};
//#endregion

// pool.query(`SELECT * FROM hero where id = '1'  `, function (
//   error,
//   results,
//   fields
// ) {
//   if (error) throw error;
//   // callback(results);
//   console.log(results);
// });

// pool.query(
//   `
//   UPDATE hero SET hname='123',nickname='德玛西亚之力',skill='多草丛' WHERE id = 1;`,
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log(error);
//   }
// );
