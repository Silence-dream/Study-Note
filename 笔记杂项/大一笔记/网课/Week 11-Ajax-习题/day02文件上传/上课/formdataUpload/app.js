// 引包
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');
const multer = require("multer");
const app = express();

// 设置中间件
app.use(bodyParser.urlencoded({
  extended: false
}))
// 开放静态目录

app.use(express.static(path.join(__dirname, "public"), {
  index: "index.html"
}));
// 设置文件上传路径
let uploader = multer({
  storage: multer.diskStorage({
    // 确定上传的文件在哪里 cb:callback
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "upload"));
    },
    // 确定上传之后的名字
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  })
})

// 处理请求并且响应
app.post("/profile", uploader.single("avatar"), function (request, response) {
  console.log(request.file);

  console.log(request.body);
  response.status(200).send("发送成功")
})





app.listen(80, () => {
  console.log("服务器启动成功:http://localhost");
})