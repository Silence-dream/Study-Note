// 1.引入模块

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const app = http.createServer();


app.on("request", (req, res) => {
    // 路径
    let pathname = url.parse(req.url).pathname;
    let absouleUrl = path.join(__dirname, pathname);
    fs.readFile(absouleUrl, "utf8", function (err, data) {
        if (err != null) {
            res.writeHead(404, {
                "Content-Type": "text/plain;charset=utf8"
            })
            res.end("没有找到页面");
            return;
        }
        let type = mime.getType(absouleUrl);
        console.log(type);
        res.writeHead(200, {
            "Content-Type": type
        })
        res.end(data);
    });
    // res.end()
}).listen(80, () => {
    console.log("http://localhost");
})