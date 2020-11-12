/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 19:47:06
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 20:25:15
 * @FilePath: \express\app.js
 */

const express = require("express");
const app = express();
const port = 3000;

var mysql = require("mysql");

const pool = mysql.createPool({
  //支持多条sql语句
  multipleStatements: true,
  //数据库连接池 有多少连接
  connecttionLimit : 20,
  // host : 'localhost',
  user : 'root',
  password : '',
  database : 'test1'
});


pool.query('select * from user', function (error, results, fields) {
  // if (error) throw error;
  // console.log('The solution is: ', results[0].solution);
  console.log(results);
});


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port port!`));
