import { createApp } from "vue";
import App from "./App.vue";
// 引入路由配置
import routes from "./routes";
createApp(App)
  //使用路由
  .use(routes)
  .mount("#app");
