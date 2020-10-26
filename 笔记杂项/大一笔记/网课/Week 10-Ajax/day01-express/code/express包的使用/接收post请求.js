const express = require("express");

const app = express();

// 先设置中间件
app.use(express.urlencoded());

app.get("/", function (req, res) {
    res.send("hello");
});

app.post("/login", (req, res) => {
    // 后拿取
    console.log(req.body);
    res.send("POST发起成功")
})


app.listen(80, () => console.log("http://localhost/"));