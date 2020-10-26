const express = require('express')
const app = express()
const port = 3000

app.get('/hi/:id/:name/:age', (req, res) => {

  res.send(req.params)
})
app.get('/xue', (req, res) => {

  // res.send(req.params)
})
app.listen(port, () => console.log(`Example app listening on port port!`))