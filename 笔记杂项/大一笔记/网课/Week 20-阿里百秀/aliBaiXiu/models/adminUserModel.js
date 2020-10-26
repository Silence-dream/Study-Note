// 引入数据库连接池
const pool = require("../config/dbconfig");

module.exports.allUsers = (callback) => {
  let sql = `select * from users`;
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
};

module.exports.addUser = (obj, callback) => {
  let sql = `  
  insert into users(email,password,nickname,slug,avatar,status,bio) values 
  (
    '${obj.email}','${obj.password}','${obj.nickname}','${obj.slug}','/img/default.png','activated','一切开始于迅速的行动'
  )`;

  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
};
