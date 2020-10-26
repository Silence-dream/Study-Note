// 连接数据库
const pool = require("../config/dbconfig");
//#region 添加英雄
module.exports.addHero = (obj, callback) => {
  pool.query(
    `INSERT INTO hero (hname,nickname,skill) VALUES ('${obj.hname}','${obj.nickname}','${obj.skill}'); `,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
    }
  );
};
//#endregion

//#region 根据id删除
module.exports.deleteHero = (id, callback) => {
  pool.query(`DELETE FROM hero WHERE id =${id}; `, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    callback(results);
  });
};
//#endregion
