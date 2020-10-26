// 导包
const express = require('express')
const app = express()
const port = 80
const url = require("url");
const fs = require("fs");
const path = require("path");
/* 让req.body生效 */
app.use(express.urlencoded());
// 设置静态目录
app.use('/public', express.static(__dirname + '/public', {
    // 修改默认显示的html
    index: "login.html"
}));

console.log(__dirname);
app.post("/public", (req, res) => {
    // 获取用户输入的账户密码
    let useobj = req.body;
    console.log(useobj);
    // 定义进行比较
    let dataobj = {};
    // 获取data.json
    fs.readFile(__dirname + "/data.json", "utf8", (err, data) => {
        // 将数值给dataobj
        dataobj = data;
    })
    if (useobj.username == dataobj.username && useobj.password == dataobj.password) {
        res.send('登录成功');
    } else {
        res.send('用户名或密码错误，请重新登录！');
    }
})
app.listen(80, () => {
    console.log(`http://localhost`)
});