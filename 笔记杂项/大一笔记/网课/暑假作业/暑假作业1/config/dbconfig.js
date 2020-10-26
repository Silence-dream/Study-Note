const mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "hero",
});

// pool.query("select * from users", function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

module.exports = pool;
