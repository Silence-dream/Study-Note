import express from "express";

const app = express();
let port: number = 3000;

app.get("/", (req, res) => {
  res.send("hellop");
});
app.listen(port, () => {
  console.log("http://localhost:3000");
});
