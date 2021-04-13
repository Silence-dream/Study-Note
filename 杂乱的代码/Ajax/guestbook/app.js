// 1.导包
const express = require('express');
const path = require('path');
const db = require('./data/db.json');
// 2.设置包
// 2.1 创建服务器
const app = express();
// 2.2 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))

// 3.处理请求 返回响应

// 3.1 处理查找留言请求
app.get('/findGuest', (req, res) => {

  res.status(200).send(db);
})


// 4.指定端口 启动服务
app.listen(80, () => {
  console.log("请打开 http://localhost:80")
})