





## Git Hooks

`husky`：触发Git Hooks,执行脚本

`lint-staged`：检测文件，只对暂存区中**有改动的文件**进行检测，可以在提交前进行Lint操作

`commitizen`：使用规范化的`message`提交

`commitlint`: 检查`message`是否符合规范

`cz-conventional-changelog`：适配器。提供`conventional-changelog`标准（约定式提交标准）。基于不同需求，也可以使用不同适配器（比如: `cz-customizable`）。

## 代码规范



`eslint`：代码质量检测（用`var`还是`let`，用`==`还是`===`...）

`prettier`：代码风格检测（加不加尾逗号，单引号还是双引号...）

`eslint-config-prettier`：解决ESLint与Prettier的风格冲突

`eslint-plugin-prettier`：ESLint的插件，集成Prettier的功能

`eslint-plugin-vue`：ESLint的插件，增加Vue的检测能力


## 后端的JQuery
cheerio : 一款后端获取dom的包,语法类似JQuery

## 开发和生产环境的切换 

[cross-env - npm (npmjs.com)](https://www.npmjs.com/package/cross-env)

用法:

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
// 获取环境变量
process.env.NODE_ENV
```

## JWT 登录 token

JSON Web Token (JWT) 是一个开放标准 ( [RFC 7519](https://tools.ietf.org/html/rfc7519) )，用于在各方之间作为 JSON 对象安全地传输信息。就是通过用户名和密码来生成token确认用户的身份，确认过身份的用户称为为**授权用户(Authenticated user)**。

全称 `JSON Web Token`， 是目前最流行的跨域认证解决方案。基本的实现是服务端认证后，生成一个 `JSON` 对象，发回给用户。用户与服务端通信的时候，都要在请求头带上这个 `JSON` 对象

[jsonwebtoken - npm (npmjs.com)](https://www.npmjs.com/package/jsonwebtoken)

https://jwt.io/introduction

使用

```js
const jwt = require('jsonwebtoken');
// jwt(加密信息)  加密信息一定要跟token生成使用加密字符串保持一致
// unless 排除哪些不需要在请求带token
const token =  await jwt.sign({"加密信息"}, secret, { expiresIn: "1h" }); 
// Authorization: Bearer <token> 设置请求头
```



## 参考文章

[基于Vite2+Vue3的项目复盘总结 (juejin.cn)](https://juejin.cn/post/6969758357288648718)