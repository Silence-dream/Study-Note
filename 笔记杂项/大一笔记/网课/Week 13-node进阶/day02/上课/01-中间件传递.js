const express = require('express')
const app = express()
const port = 80


app.get("/", (req, res, next) => {
  console.log(1)
  next()
})
app.get("/", (req, res, next) => {
  console.log(2)
  // res.send("")
  next()
})
app.get("/", (req, res) => {
  console.log(3)
  res.send("")
})

app.listen(port, () => console.log(`http://localhost`))