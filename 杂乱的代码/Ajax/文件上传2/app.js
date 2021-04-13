const express = require('express')
const multer = require("multer");
const app = express()
const port = 80
app.use(express.static("public"))

app.post("/profile", multer({
  dest: "upload",

  storage: multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, "upload")
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  })
}).single("file"), (req, res) => {
  console.log(req.file);
  res.send(req.file)
})
app.listen(port, () => console.log(`http://localhost`))