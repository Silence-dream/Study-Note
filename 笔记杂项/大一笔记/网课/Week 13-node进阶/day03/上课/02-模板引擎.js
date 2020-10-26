const express = require('express')
const path = require('path');
const app = express()
const port = 80

app.use(express.static("public"))


// view engine setup
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');


app.get("/", (req, res) => {

  res.render("index", {
    title: "首页"
  })
})


app.listen(port, () => console.log(`Example app listening on port port!`))