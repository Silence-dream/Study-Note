import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入公共样式
import "../public/css/common.scss";

// 引入手机适配
import "../public/js/rem.js";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
