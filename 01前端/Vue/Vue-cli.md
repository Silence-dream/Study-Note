



## 安装Vue-cli

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## Vue-cli插件推荐

### 让Vuecli像vite一样的启动速度

```shell
vue add vite
```

[IndexXuan/vue-cli-plugin-vite: Use vite today, with vue-cli (github.com)](https://github.com/IndexXuan/vue-cli-plugin-vite)

### 格式化代码 eslint

```shell
vue eslint
```

### vuex

```shell
vue add vuex
```

### router

```shell
vue add router
```

### typescript

```shell
vue add typescript
```

### style-resources-loader 全局使用 Sass 变量

```
vue add style-resources-loader
```

vue.config.js

[CSS 相关 | Vue CLI (vuejs.org)](https://cli.vuejs.org/zh/guide/css.html#向预处理器-loader-传递选项)

```js
const path = require("path");
module.exports = {
  /* 全局 sass 变量和方法引入 */
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/assets/styles/mixnins/_mixnin.scss")//放置scss的地方
      ]
    }
  }
};
```

vite 方案

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/variables.scss";`,
      },
    },
  },
});

```



[基于Vite2+Vue3的项目复盘总结 (juejin.cn)](https://juejin.cn/post/6969758357288648718#heading-9)

