const pool = require("../config/dbconfig");
//#region 添加机构数据
/**
 *
 *  添加机构数据请传入正确的对象格式
 * {
 *  ins_number:xx,
 *  gname:xx,
 *  state:xx,
 *  }
 * @param {object} obj
 * @param {function} callback
 */
module.exports.NodeAdd = (obj, callback) => {
  pool.query(
    `insert into institutions  (ins_number,gname,state) VALUES (${obj.ins_number},'${obj.gname}',${obj.state})`,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
//#endregion

//#region 删除机构数据
/**
 *
 *删除机构数据
 * @param {number} id
 * @param {function} callback
 */
module.exports.NodeDelete = (id, callback) => {
  pool.query(`delete from institutions where id=${id}`, function (
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
