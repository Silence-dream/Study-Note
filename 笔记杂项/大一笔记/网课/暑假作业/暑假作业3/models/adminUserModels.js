const pool = require("../config/dbconfig");
//#region 显示所有用户数据
/**
 *
 *  显示所有用户数据
 * @param {function} callback
 */
module.exports.findUser = (callback) => {
  pool.query(
    `select users.id,users.username,users.state,institutions.ins_number,institutions.gname from users,institutions WHERE users.gid=institutions.id;`,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
//#endregion

//#region 根据用户id删除用户
/**
 *
 *根据用户id删除用户
 * @param {number} id
 * @param {function} callback
 */
module.exports.deleteUser = (id, callback) => {
  pool.query(`DELETE FROM users  where id=${id};`, function (
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

// 模糊查询
/**
 * 模糊查询 传入正确的对象格式
 * {
 *  username:xxx,
 * gname:xxx,
 * }
 *
 * @param {object} obj
 * @param {function} callback
 */
module.exports.findQuery = (obj, callback) => {
  pool.query(
    `select users.id,users.username,users.state,institutions.ins_number,institutions.gname from users,institutions 
    WHERE  users.gid=institutions.id and users.username= '${obj.username}' or institutions.gname='${obj.gname}';`,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
