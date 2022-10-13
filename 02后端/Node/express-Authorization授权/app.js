const express = require("express");
const app = express();
const port = 3000;
app.get("/about",(req,res)=>{
    // 这里查看请求头
    console.log(req.headers)
    console.log(req.headers.authorization)
    res.send("hello")
})
app.listen(port, () => console.log(`http://localhost:${port}`));
