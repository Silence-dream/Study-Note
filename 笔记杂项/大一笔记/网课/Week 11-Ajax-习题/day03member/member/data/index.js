// index.js的作用就是用来处理members.json或者backup.json文件
// 增加 删除 修改 查询 都要用index.js里面的方法来做

// 引入包
// 1.导入fs包
const fs = require('fs');
// 2.导入path
const path = require('path');
// 3.导入backup.json文件
const database = require('./backup.json');

// 把方法导出

module.exports = {
  // get: function (){}
  get: () => {
    return database
  },
  getById: (id) => {
    // console.log(id)
    // 数组.find() 遍历数组 找到 某一个元素的id和传入的id一样 就把这个元素返回
    return database.find((item) => {
      // 如果数组的元素中的id和传入的id一样 那么就返回这个元素
      return item.id === id;
    })

    // console.log(info);
  },
  // 添加用户
  add: (member) => {
    database.unshift(member)
    // console.log(database);
    let json = JSON.stringify(database);
    // console.log(json);
    // 带sync的是同步的 
    fs.writeFileSync(path.join(__dirname, 'backup.json'), json);

  },
  // 删除用户
  deleteItem: (id) => {
    // 接受到服务器传来的ID,
    // console.log(tpeof id);
    // 遍历数据库中的数据 看看哪一条数据的id和传来的数据的ID一样

    // 如果箭头函数中 只有一个形参 只有一条语句 有返回值可以省略小括号和大括号
    let ids = database.find((item) => {
      return item.id === id;
    })

    // let ids = database.find(item=>item.id === id) // https://es6.ruanyifeng.com/#docs/function
    // console.log(ids);
    // 如果一样 获取到这个数据的索引
    // console.log(database.indexOf(ids));
    // 通过数组的splice方法把这条数据切割掉
    database.splice(database.indexOf(ids), 1);
    let json = JSON.stringify(database);
    fs.writeFileSync(path.join(__dirname, 'backup.json'), json);

    return 'ok'
  }

}