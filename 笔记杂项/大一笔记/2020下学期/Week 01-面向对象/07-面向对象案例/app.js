const express = require('express')
const app = express()
const port = 80

app.get("/get", function (req, res) {
  console.log(req.query)
  res.send("请求成功")


})

app.listen(port, () => console.log(`Example app listening on port port!`))