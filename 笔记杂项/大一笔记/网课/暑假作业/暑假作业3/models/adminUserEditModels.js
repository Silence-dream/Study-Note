const pool = require("../config/dbconfig");

//#region 根据用户id编辑用户
/**
 *
 *根据用户id编辑用户
 * @param {object} obj
 * @param {function} callback
 */
module.exports.editUser = (obj, callback) => {
  pool.query(
    "UPDATE  users  SET username='"
      .concat(obj.username, "',`password`='")
      .concat(obj.password, "',state=")
      .concat(obj.state - 0, ",gid=")
      .concat(obj.gid - 0, " WHERE id = ")
      .concat(obj.id - 0),
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
//#endregion

//#region 根据用户id查找用户
/**
 *
 *根据用户id查找用户
 * @param {number} id
 * @param {function} callback
 */
module.exports.findUser = (id, callback) => {
  pool.query(`select * from users where id = ${id}`, function (
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
