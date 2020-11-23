import { createRouter, createWebHashHistory } from "vue-router";

// 导入登录页面组件
import Login from "@/views/Login";

// 声明路由规则
const routes = [
  // 如果地址为根路径，直接跳转到登录页面
  { path: "/", redirect: "/login" },
  // 登录页面
  { name: "Login", path: "/login", component: Login },
  // 首页
  {
    name: "Home",
    path: "/home",
    component: () => import("@/views/Home"),
    children: [
      { path: "/home", redirect: "/welcome" },
      // welcome组件
      { path: "/welcome", component: () => import("@/components/Welcome") },
      // UserList组件
      { path: "/users", component: () => import("@/components/Users") }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 定义路由导航守卫
// to: 代表我要去哪个个路由
// from: 代表我来自于哪个路由
// next代表: 下一步要去哪里 如果next() 代表放行  如果next("/login")代表必须跳转到login这个路由
router.beforeEach((to, from, next) => {
  // 获取token
  const isAuthenticated = window.sessionStorage.getItem("token");
  // 如果将要去的地方 不是Login 且没有授权 要强制跳转到Login页面
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next(); // 否则放行
});

export default router;
