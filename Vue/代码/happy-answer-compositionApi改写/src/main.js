import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 1.common.scss(本项目的公共样式)
import "../public/css/common.scss";
// 2.rem.js(适配各个手机的js库)
import "../public/js/rem.js";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
