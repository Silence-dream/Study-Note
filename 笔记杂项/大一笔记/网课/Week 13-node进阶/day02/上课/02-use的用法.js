const express = require('express')
const app = express()
const port = 80

app.use((req, res, next) => {
  console.log(11111)
  next()
})

app.get("/", (req, res) => {
  console.log(3)
  res.send("")
})

app.use("/li", (req, res) => {
  console.log(3)
  res.send("哟你也能够请求")
})


app.listen(port, () => console.log(`http://localhost`))