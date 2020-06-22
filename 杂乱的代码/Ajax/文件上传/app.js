// 引包

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

//  设置中间件
app.use(bodyParser.urlencoded({
  extended: false
}));

// 设置静态目录
// app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

// 设置文件上传路径

let uploader = multer({
  //存储到磁盘哪里
  storage: multer.diskStorage({
    // 确定上传的文件 
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "upload"));
    },
    // 确定上传之后的名字
    filename: (req, file, cb) => {
      //            原来的文件名
      cb(null, file.originalname);
    }
  })
})


app.post("/profile", uploader.single("file"), (req, res) => {
  // console.log(req.body);
  console.log(req.file);
  res.send(req.body)
})

app.listen(80, function () {
  console.log("服务器启动成功:http://localhost");
})