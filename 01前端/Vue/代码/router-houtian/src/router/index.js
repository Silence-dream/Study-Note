import { createRouter, createWebHashHistory } from "vue-router";

import Users from "@/components/Users";

const routes = [
  {
    path: "/",
    redirect: "/users"
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/userInfo/:id",
    name: "UserInfo",
    component: () => import("../components/UserInfo"),
    props: true
  },
  {
    path: "/rights",
    name: "Rights",
    component: () => import("../components/Rights")
  },
  {
    path: "/goods",
    name: "Goods",
    component: () => import("../components/Goods")
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../components/Orders")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../components/Settings")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
