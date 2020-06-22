const express = require("express");
const path = require('path');
const url = require('url');
const app = express();
const querystring = require('querystring');


let public = __dirname + "/public"

app.use("/", express.static(public, {
    index: "ajax封装.html"
}))

app.get("/simple", (req, res) => {
    console.log(req.query);
    res.send(req.query)
})

app.listen(80, function () {
    console.log('http://127.0.0.1');
})