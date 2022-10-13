// 1. 静态页面模板已经给定，接口和ajax请求都需要自己写

// 2. 在index.html页面中点击"提交"按钮发起ajax请求，请求成功之后把数据添加到 `data.json`,并且跳转到`list.html`

// 3. 当跳转到`list.html`页面的时候，展示的是`data.json`里面你刚才添加的数据

// 注意: 在`index.html`页面中只要有一个没有传数据，那么整条数据就不添加到`data.json`文件里面


const express = require('express');
const app = express();
const port = 80;
const fs = require("fs");
const path = require("path");
const data = require("./data.json");
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, "students"), {
  index: "index.html"
}));
/* 设置中间件 */
app.use(bodyParser.urlencoded({
  extended: false
}));

/* 保存传输过来的数据 */
let objInfo = {};



// let count = 0;
app.post('/index', (req, res) => {
  // console.log(req.query);
  objInfo = req.body;
  // console.log(objInfo);
  // 判断是否添加数据进去
  let flag = true;

  // console.log(arrInfo.length);

  //判断数据是否填写完整
  for (const key in objInfo) {

    if (objInfo[key] == "") {
      flag = false;
      res.send("请完整填写表单");
      // return;
      break;
    }
  }

  data.unshift(objInfo)
  if (flag) {
    fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(data), (err, data) => {
      if (err != null) {
        console.log("写入失败");
        return;
      }
      res.send("发送成功")
    })
  }
  console.log(flag);
})

app.get("/students", (req, res) => {
  fs.readFile("data.json", "utf8", function (err, data) {
    if (err != null) {
      res.send("没有读取到文件")
      return;
    }
    res.send(JSON.parse(data))
  })
})





app.listen(port, () => {
  console.log(`http://localhost`)
})