// 导入joi模块
const joi = require('joi')

// 定义验证规则
const schema = {
  // username必须是字符串类型、最小长度是2、最大长度是6、必填项、自定义验证失败错误信息
  username: joi.string().min(2).max(6).required().error(new Error('用户名格式不正确')),
}

// 真实数据(测试数据)
const user = {
  username: 'a'
}

// validate(要验证的对象, 验证规则) 是一个promise方法
// joi.validate(user, schema).then(() => {
//   console.log("验证通过")
// }).catch((error) => {
//   console.log(error.message)
// })
async function run() {
  try {
    await joi.validate(user, schema)
  } catch (error) {
    // catch 用来捕获错误的 
    console.log(error.message);
  }
}

run();