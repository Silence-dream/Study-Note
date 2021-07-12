import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Page from "../components/PageHome.vue";
const routes = [
  { path: "/home", component: Home },
  { path: "/page", component: Page }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
