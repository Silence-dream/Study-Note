const pool = require("../config/dbconfig");

//#region  根据id查找机构

/**
 *
 *  根据id查找机构
 * @param {number} id
 * @param {function} callback
 */
module.exports.findId = (id, callback) => {
  pool.query(`SELECT * FROM institutions where id =${id} `, function (
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

//#region  更新机构数据
/**
 *
 *   更新机构数据
 * @param {object} obj 机构数据对象 {ins_number:xxx,gname:xxx,state:xxx}
 * @param {function} callback 回调函数
 */
module.exports.updateNode = (obj, callback) => {
  // UPDATE  institutions  SET ins_number=110,gname='hha',state=0  WHERE id = 9 ;

  pool.query(
    `UPDATE institutions SET ins_number=${obj.ins_number},gname='${obj.gname}',state=${obj.state}  WHERE id = ${obj.id}  `,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};

//#endregion
