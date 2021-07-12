module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends:['eslint:recommended',"plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2015
  },
  "plugins": ["prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ['error', 2], // 缩进
    // quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 'no-console': 1,
    "no-multiple-empty-lines": [1, {"max": 2}], // 最大空行
  },
  globals: {
    getApp: false,
    Page: false,
    wx: false,
    App: false,
    getCurrentPages: false,
    Component: false
  }
};