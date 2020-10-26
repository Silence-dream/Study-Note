const express = require("express");
const app = express();
const port = 30;

app.get("/abc", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port port!`));
