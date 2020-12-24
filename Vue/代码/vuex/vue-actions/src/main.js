import { createApp } from "vue";
import App from "./App.vue";
import stroe from "./store";
createApp(App)
  .use(stroe)
  .mount("#app");
