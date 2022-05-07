const express = require('express')
const app = express()
const port = 3000

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requestd-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next()
});

app.use(express.static("public"))
app.post("/hello", (req, res) => {
  res.set({
    "set-cookie": "test=123"
  })
  res.send({
    code: 200
  })
})
app.get("/hello", (req, res) => {

  res.send({
    code: 200
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))