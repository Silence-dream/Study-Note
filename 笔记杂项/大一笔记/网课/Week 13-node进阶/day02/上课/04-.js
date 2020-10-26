const express = require('express')
const app = express()
const port = 80
app.use("/admin", (req, res, next) => {
  let islogin = false;
  if (islogin) {
    next();
  } else {
    res.send("你没有登录")
  }
})
app.use((req, res, next) => {
  res.status(404).send("404错误")
})


app.get("/admin", (req, res) => {
  res.send("你已经登录")
})


app.listen(port, () => console.log(`http://localhost`))