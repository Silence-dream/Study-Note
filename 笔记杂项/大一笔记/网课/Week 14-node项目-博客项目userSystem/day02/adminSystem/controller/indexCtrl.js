let User = require('../model/dbUser');
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