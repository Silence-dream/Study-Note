const express = require("express");
const app = express();
const path = require("path");


//目录
let public = path.join(__dirname, "public");
app.use("/", express.static(public));
// 设置中间件
app.use(express.urlencoded());

// ajax请求
app.get("/simple", function (req, res) {
    // res.send("helloworld");
    res.send(req.body)
})

//接收get参数
app.get("/getParam", function (req, res) {
    // console.log(req.query);
    res.send(req.query);
})


//接收get参数
app.post("/postParam", function (req, res) {
    // console.log(req.query);
    res.send(req.body);
})

app.listen(80, function () {
    console.log("http://127.0.0.1");
})