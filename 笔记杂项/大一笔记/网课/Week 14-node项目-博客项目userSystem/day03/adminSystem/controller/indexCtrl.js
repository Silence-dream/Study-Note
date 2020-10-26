let User = require('../model/dbUser');
// 登录页面
module.exports.show = (req, res) => {
  // console.log("====User====")
  // console.log(req.session.username);
  // console.log("========")

  // 判断一下 req.session.username
  if (!req.session.username) {
    // 如果没有 那么跳转到登录页面
    res.render('login');
  } else {
    // 如果有 那么跳转到用户列表页面 当我们访问路由 localhost:3000/的时候 我想让页面跳到别的页面 这叫重定向 redirect(地址)
    res.redirect('/user');
  }
}
// 用户登录
module.exports.login = async (req, res) => {
  // 获取邮箱和密码
  // console.log(req.body);
  // let email = req.body.email;
  // let password = req.body.password;
  // console.log(email, password);
  // let { email, password } = {
  //   email: '232323@qq.com',
  //   password: '235r42343'
  // }

  // console.log(email, password)

  let { email, password } = req.body;
  // console.log(email, password);

  // 做后端校验
  if (email.trim().length == 0 || password.trim().length == 0) {
    return res.status(400).send({
      code: 400,
      msg: "邮箱或密码错误"
    })
  }
  // 去数据库中查询数据
  // 通过email查询用户的所有信息
  let user = await User.findOne({ email: email })
  // console.log(user);
  // 如果没有user 返回 null 如果有user 结果是对象
  if (user) {
    // 如果有这个用户 说明用户的email首先是对的，至于密码是否一样 不清楚 再次进行比对
    let isValid = (password === user.password);
    // console.log(isValid);
    if (isValid) {
      // email和密码完全正确res.status(200).send()
      // 用户名和密码存到session
      req.session.username = user.username;
      req.session.email = user.email;

      res.status(200).send({
        code: 200,
        message: "登录成功"
      })
    } else {
      return res.status(400).send({ code: 400, msg: "邮箱或密码错误" })
    }
  } else {
    return res.status(400).send({ code: 400, msg: "邮箱或密码错误" })
  }
}

// 用户退出
module.exports.logout = (req, res) => {
  // 
  req.session.destroy(function (err) {
    // cannot access session here 这里访问不到session
    // 清除cookie
    // 这是一个响应
    res.clearCookie('connect.sid');
    // res.status(200).send({
    //   code: 200,
    //   msg: "用户退出成功"
    // })
    res.redirect('/')
  })
  //  Cannot set headers after they are sent to the client 如果你写了多次send就有这个问题

}