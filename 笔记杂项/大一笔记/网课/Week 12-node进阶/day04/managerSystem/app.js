const express = require('express');
const app = express();
const port = 80;
const path = require("path");
// 获取数据库db_system中集合 User 的数据
const data = require(path.join(__dirname, "data", "index.js"));



// 设置静态目录
app.use(express.static(path.join(__dirname, "public"), {
  // 设置默认启动文件
  index: "index.html"
}));


app.get("/list", (req, res) => {
  // 得到数据
  // console.log(data.result)
  // 返回数据库中的数据
  res.send(data.result)
})


app.listen(port, () => console.log(`服务器已经启动:http://localhost`))