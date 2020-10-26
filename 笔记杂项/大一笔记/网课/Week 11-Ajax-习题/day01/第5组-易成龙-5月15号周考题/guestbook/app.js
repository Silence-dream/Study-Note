// 1. 静态页面已经给定，需要自己在前台发请求，后台写接口进行处理

// 2. 实现留言板的渲染功能，使用art-template模板引擎

// 3. 可以新增留言，如果表单中的用户名或者是留言内容有一项为空，那么就在浏览器中弹出,"请查看姓名或留言的表单不能为空",并且不能添加到json文件里面

// 4. 添加成功之后页面中就会将新添加的数据显示出来
// 导入包
const express = require('express');
const app = express();
const port = 80;
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
// 引入数据
const db = require(path.join(__dirname, "data", 'db.json'));


// console.log(db);
// 设置中间件
app.use(bodyParser.urlencoded({
    extended: false
}));
// 开放静态资源
app.use(express.static(path.join(__dirname, "public")))


app.post("/api/data", (req, res) => {
    // 得到传输过来的数据
    let data = req.body;
    // name和content只要一个没有数据就不添加数据
    let obj = db;
    if (data.name == "" || data.content == "") {
        res.send("请传入完整数据")
    } else {
        db.unshift(data)
        fs.writeFile(path.join(__dirname, "data", 'db.json'), JSON.stringify(db), (err, data) => {
            if (err != null) {
                console.log("没有写入数据成功");
                return;
            }
            console.log("写入数据成功");
        })
    }

    res.send("发送成功")
})


app.get("/api/getDate", (req, res) => {
    fs.readFile(path.join(__dirname, "data", 'db.json'), "utf8", (err, data) => {
        if (err != null) {
            console.log("没有读取到");
            return;
        }
        res.send(JSON.parse(data))
    })
})


app.listen(port, () => {
    console.log(`http://localhost`)
})