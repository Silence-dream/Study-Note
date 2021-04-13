const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const path = require("path");
let public = path.join(__dirname, "public");
app.use("/", express.static(public, {
    index: "传入对象.html"
}))
/* 中间件 */
app.use(bodyParser.json())

app.post("/json", (req, res) => {
    res.send(req.body)
})

app.listen(80, function () {
    console.log("http://127.0.0.1");
})