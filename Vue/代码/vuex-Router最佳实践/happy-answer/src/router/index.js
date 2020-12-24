import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/components/Home";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/item",
    component: () => import("@/components/Item")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
