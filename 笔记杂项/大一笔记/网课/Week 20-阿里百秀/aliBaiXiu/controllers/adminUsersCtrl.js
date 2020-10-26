// 数据库操作方法
const { allUsers, addUser } = require("../models/adminUserModel");
module.exports.showUserCtrl = (req, res) => {
  res.render("./admin/users", { title: "后台管理系统-用户" });
};
module.exports.getUserCtrl = (req, res) => {
  // console.log(req.session);
  // 得到数据库中所有的用户数据
  allUsers(function (result) {
    // console.log(result);
    // 数据返回前端
    res.send(result);
  });
};

module.exports.addUserCtrl = (req, res) => {
  // 接收前端传送的数据
  let obj = req.body;
  console.log(obj);
  addUser(obj, function () {
    res.send({
      code: 200,
      message: "添加成功",
    });
  });
};

module.exports.editUserCtrl = (req, res) => {
  res.render("./admin/profile", { title: "后台管理系统-编辑用户" });
};
