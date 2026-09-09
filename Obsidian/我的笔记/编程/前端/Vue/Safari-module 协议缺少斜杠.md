---
tags : 
- Safari-module 协议缺少斜杠
---

修复方法

vue.config.js
```js

module.exports = defineConfig({
  configureWebpack: (config) => {
    const SafariNomoduleFixPlugin = config.plugins.find(
      (plugin) => plugin?.constructor?.name === "SafariNomoduleFixPlugin"
    );
    if (SafariNomoduleFixPlugin) {
      SafariNomoduleFixPlugin.unsafeInline = true;
    }
  },
})

```

[Wrong url for safari-nomodule-fix if publicPath is absolute url (V5) · Issue #6594 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/issues/6594#issuecomment-1102584491)

[fix(SafariNomoduleFixPlugin):to solve the publicPath with the protocol missing a "/" character by yilihjy · Pull Request #7247 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/pull/7247)

<!-- 知识导航：主题归属与经过整理的关联文章。 -->
## 知识导航

所属主题：[[00-知识导航/04-Vue与响应式|Vue与响应式]]
