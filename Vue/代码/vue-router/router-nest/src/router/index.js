import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// 导入子路由
import HelloWorld from "../components/HelloWorld";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // 路由嵌套 ,使用子路由
    children: [{ path: "/HelloWorld", component: HelloWorld }]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
