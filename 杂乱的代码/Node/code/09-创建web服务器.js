const http = require("http");
const fs = require("fs");
// 创建web服务器
const app = http.createServer();
app.on("request", function (req, res) {
    // req request  请求
    // res response 响应
    fs.readFile("./test.html", "utf8", function (err, data) {
        res.end(data)
    })
});
// 监听端口并启动服务
app.listen(80, function () {
    console.log("启动成功");
    console.log("http://localhost:80/");
});