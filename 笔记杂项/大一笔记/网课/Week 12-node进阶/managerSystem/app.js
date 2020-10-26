const express = require('express')
const app = express()
const port = 80
const path = require("path");

// 数据库
const DB = require("./data");


// 设置中间件
app.use(express.urlencoded({
  extended: false
}))
// 静态目录 
app.use(express.static(path.join(__dirname, "public")));


// 接收前端请求
// app.get("/api/list", (req, res) => {

//   // console.log(DB.findAll().then(data => console.log(data)))
//   // DB.findAll(function (data) {
//   //   res.status(200).send({
//   //     code: 200,
//   //     msg: "数据查询成功",
//   //     data: data
//   //   });
//   // });
//   DB.findAll().then(data => {
//     res.status(200).send({
//       code: 200,
//       msg: "数据查询成功",
//       data: data
//     });
//   })
// })




// 查找分页数据

app.get("/api/getPage", (req, res) => {
  // console.log(req.query)
  DB.findPage(parseInt(req.query.pageNum), parseInt(req.query.pageSize),
    function (data) {
      // console.log(data)
      if (data) {
        res.status(200).send({
          code: 200,
          msg: "数据查询成功",
          data: data
        })

      }
    }
  )
})


// 添加数据

app.post("/api/add", (req, res) => {
  // console.log(req.body)

  let newUser = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email,
    hobbies: req.body.hobbies
  }

  DB.addOne(newUser, function (data) {
    // console.log(data)
    if (data) {
      res.status(200).send({
        code: 200,
        msg: "数据添加成功",
        data: data
      })
    }
  })
})


// 删除数据

app.get("/api/delete", (req, res) => {
  // 返回id
  res.send(req.query.id)
  DB.deleteDate(req.query.id)
})


app.listen(port, () => console.log(`请打开,http://localhost`))