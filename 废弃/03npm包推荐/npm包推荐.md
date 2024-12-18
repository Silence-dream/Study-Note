## 暂停更新

移动去了博客中

https://silence-dream.github.io/docs/bi-ji-za-xiang/01-yi-xie-npmku.html#git-hooks

## Git Hooks

`husky`：触发 Git Hooks,执行脚本

```bash
yarn add husky@4.3.8 -D
```

新版本 使用方法

```bash
npm install husky --save-dev

# package.json
"scripts": {
    "prepare": "husky install"
}
# .git/hooks/pre-commit
yarn husky add .husky/pre-commit 'npm run lint"

# .git/hooks/commit-msg
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit $1"

```

[手摸手教你使用最新版 husky(v7.0.1)让代码更优雅规范 - 掘金 (juejin.cn)](https://juejin.cn/post/6982192362583752741)

[husky7.0.1 + commitlint 配置提交代码检查和规范踩坑指南 - 掘金 (juejin.cn)](https://juejin.cn/post/6988116616923840549#heading-2)

[husky 无效？ 新版本 husky 怎么配置？ - 蒋大忙 - 博客园 (cnblogs.com)](https://www.cnblogs.com/ly0612/p/15545803.html)

`lint-staged`：检测文件，只对暂存区中**有改动的文件**进行检测，可以在提交前进行 Lint 操作

```bash
yarn add lint-staged -D
```

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,js,vue,css,html,json}": [
      "npm run lint",
      "git add"
    ]
  },
```

`commitizen`：使用规范化的`message`提交

`commitlint`: 检查`message`是否符合规范

`cz-conventional-changelog`：适配器。提供`conventional-changelog`标准（约定式提交标准）。基于不同需求，也可以使用不同适配器（比如: `cz-customizable`）。

```bash
# https://github.com/commitizen/cz-cli
npm i @commitlint/cli @commitlint/config-conventional -D commitizen cz-conventional-changelog


# package.json
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }

# .commitlintrc.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {},
};
```

## 代码规范

https://juejin.cn/post/7038143752036155428#heading-1

`eslint`：代码质量检测（用`var`还是`let`，用`==`还是`===`...）

`prettier`：代码风格检测（加不加尾逗号，单引号还是双引号...）

`eslint-config-prettier`：解决 ESLint 与 Prettier 的风格冲突

`eslint-plugin-prettier`：ESLint 的插件，集成 Prettier 的功能

`eslint-plugin-vue`：ESLint 的插件，增加 Vue 的检测能力

## 后端的 JQuery

cheerio : 一款后端获取 dom 的包,语法类似 JQuery

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

JSON Web Token (JWT) 是一个开放标准 ( [RFC 7519](https://tools.ietf.org/html/rfc7519) )，用于在各方之间作为 JSON 对象安全地传输信息。就是通过用户名和密码来生成 token 确认用户的身份，确认过身份的用户称为为**授权用户(Authenticated user)**。

全称 `JSON Web Token`， 是目前最流行的跨域认证解决方案。基本的实现是服务端认证后，生成一个 `JSON` 对象，发回给用户。用户与服务端通信的时候，都要在请求头带上这个 `JSON` 对象

[jsonwebtoken - npm (npmjs.com)](https://www.npmjs.com/package/jsonwebtoken)

<https://jwt.io/introduction>

使用

```js
const jwt = require('jsonwebtoken');
// jwt(加密信息)  加密信息一定要跟token生成使用加密字符串保持一致
// unless 排除哪些不需要在请求带token
const token =  await jwt.sign({"加密信息"}, secret, { expiresIn: "1h" });
// Authorization: Bearer <token> 设置请求头
```

## VueUse

VueUse 不是 Vue.use，它是为 Vue 2 和 3 服务的一套 Vue Composition API 的常用工具集，是目前世界上 Star 最高的同类型库之一。它的初衷就是将一切原本并不支持响应式的 JS API 变得支持响应式，省去程序员自己写相关代码。

```bash
yarn add @vueuse/core
```

[vueuse.org/guide.html](https://link.juejin.cn/?target=https%3A%2F%2Flinks.jianshu.com%2Fgo%3Fto%3Dhttps%3A%2F%2Fvueuse.org%2Fguide.html)

## 可视化 JavaScript 流程

[介绍](https://www.5axxw.com/wiki/content/384o08)

[事例](https://bogdan-lyashenko.github.io/js-code-to-svg-flowchart/docs/live-editor/index.html)

[GitHub地址](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart)

## 参考文章

[基于 Vite2+Vue3 的项目复盘总结 (juejin.cn)](https://juejin.cn/post/6969758357288648718)