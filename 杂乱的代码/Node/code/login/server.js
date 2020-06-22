// let http = require('http');
// let url = require("url");
// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     });
//     // 拿到前端传过来的数据         设置true可以拿到对象形式的
//     let params = url.parse(request.url, true)
//     console.log(params.query);

//     response.end('世界多么的美好');
// }).listen(80, function () {
//     console.log('Server running at http://127.0.0.1:8081/');
// });

// let http = require("http");
// let url = require("url");
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         "Content-Type": "text/html;charset=utf8"
//     })

//     console.log(req.url);
//     let params = url.parse(req.url, true);
//     console.log(params);
//     res.end();

// }).listen(80, function () {
//     console.log("启动成功");
// })

let http = require("http");
let url = require("url");

let app = http.createServer();

app.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf8"
    })
    let params = url.parse(req.url, true)
    console.log(params);
    res.end("启动成功")
}).listen(80, function () {
    console.log("启动成功");
})