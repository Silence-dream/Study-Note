import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import HelloWorld from "../components/HelloWorld";
const routes = [
  {
    name: "home",
    path: "/home",
    component: HelloWorld
  }
];
// 3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});

export default router;
