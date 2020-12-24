const express = require("express");
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static("public"));
app.get("/about", function (req, res) {
  return res.send({
    code: 200,
    msg:"hello"
  });
});
app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
