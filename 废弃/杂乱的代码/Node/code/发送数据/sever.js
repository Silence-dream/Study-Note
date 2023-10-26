const http = require("http");
const url = require("url");
const app = http.createServer();

app.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    console.log(req.url);
    // true可以拿到对象形式的数据
    let params = url.parse(req.url, true)
    // console.log(params);
    // console.log(params.query);
    if (params.query.uname == "李四" && params.query.upwd == "123") {
        res.write("成功")
    } else {
        res.write("失败")
    }

    let postData = ""
    req.on("data", (chunk) => {
        console.log(`---------------------`);
        console.log(chunk);
        postData += chunk;
        console.log(postData);
    })

    // res.end();
});

app.listen(80, function () {
    console.log("启动成功");
})