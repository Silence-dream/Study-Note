const express = require('express')
const app = express()
const port = 80

const router = express.Router();

router.use(router)
// app.use(router)

// router.get("/li", (req, res) => {
//   res.send("你好")
// })
// app.get("/li", (req, res) => {
//   res.send("你好")
// })
router.get('/', function (req, res) {
  res.send('hello, user!')
})

app.listen(port, () => console.log("http://localhost"))