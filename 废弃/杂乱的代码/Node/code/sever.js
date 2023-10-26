// const http = require("http");

// let app = http.createServer();

// app.on("request", function (req, res) {
//     // 请求方法
//     console.log(req.method);
//     // 请求地址
//     console.log(req.url);
//     // 请求头
//     console.log(req.headers);
//     // 响应状态码
//     res.writeHead(200, {
//         "Content-Type": "text/html;charset=utf-8"
//     })
//     res.end(`你好`)
// })

// app.listen(80, function () {
//     console.log("启动成功");
// })


let http = require("http");

// let app = http.createServer();

// app.on("request", function (req, res) {
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);

//     res.writeHead(200, {
//         "Content-Type": "text/html;charset=utf-8"
//     })
//     res.end(`哈啊哈`)
// })

// app.listen(80, function () {
//     console.log("启动成功");
// })

let http = require("http");

let app = http.createServer();

app.on("request", function (req, res) {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);

    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    res.end(`哈啊哈`)
})

app.listen(80, function () {
    console.log("启动成功");
})