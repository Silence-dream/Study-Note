module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    uni: true,
    wx: true,
    App: true,
    getApp: true,
    Page: true,
    getCurrentPages: true,
    Component: true,
    Behavior: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
