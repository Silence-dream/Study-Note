const express = require("express");
const io = require("socket.io")();
const server = require("http").createServer();
const app = express();

const port = 5260;

app.get("/", (req, res) => res.send("Hello World!"));
server.listen(port, () => console.log(`http://localhost:${port}`));
