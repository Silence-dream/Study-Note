import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Parameter from "../components/Parameter";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/parameter/:name",
    name: "parameter",
    component: Parameter,
    // 开启即可在对应的组件中通过props获取传入的参数
    // props: true
    // 通过回调函数的方式传值给组件,对应组件通过props获取传入的参数
    props: router => ({ name: router.params.name })
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
