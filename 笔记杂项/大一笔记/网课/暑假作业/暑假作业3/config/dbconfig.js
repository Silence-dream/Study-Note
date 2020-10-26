var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "root",
  database: "jigou",
});

// pool.query("show tables", function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// 导出数据库连接配置
module.exports = pool;
