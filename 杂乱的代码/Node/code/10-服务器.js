const http = require("http");

// 创建web
const app = http.createServer();

app.on("request", function (req, res) {
    // console.log(req);
    // 获取请求的方法
    console.log(req.method);
    // 请求的地址
    console.log(req.url);
    // 请求头
    console.log(req.headers);
    res.writeHead(200, {
        "Content-Type": `text/html;charset=utf-8`
    })
    res.end(
        `你好`
    )

})

app.listen(80, function () {
    console.log("http://localhost:80");
})