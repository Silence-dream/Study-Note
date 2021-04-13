import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue";
const routes = [{ path: "/home", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
