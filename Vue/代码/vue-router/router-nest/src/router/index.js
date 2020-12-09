import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// 导入子路由
import HelloWorld from "../components/HelloWorld";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    // 路由嵌套 ,使用子路由
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [{ path: "HelloWorld", component: HelloWorld }]
    // 子路由中不用加'/'  如果加了就是从根路径跳转
    // children: [{ path: "/HelloWorld", component: HelloWorld }]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
