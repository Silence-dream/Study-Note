module.exports.showUser = (req, res) => {
  // console.log("====User====")
  // console.log(req.session);
  // console.log("========")
  res.render('user', {
    username: req.session.username
  })
}

module.exports.editUser = (req, res) => {
  // res.send("用户编辑")
  res.render('user-edit')
}