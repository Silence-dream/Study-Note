<template>
  <!-- 路由书写的地方 -->
  <nav>
    <a href="#/zhuye">主页</a>
    <a href="#/keji">科技</a>
    <a href="#/caijing">财经</a>
    <a href="#/yule">娱乐</a>
  </nav>

  <!-- 对应路由的内容 -->
  <main>
    <!-- 占位符 至于放什么组件 由is属性决定 -->
    <!-- <component :is="'yule'"></component> -->
    <!-- 变量来控制渲染哪个组件 -->
    <component :is="cname"></component>
  </main>
</template>

<script>
// 主页组件
let zhuye = {
  template: `<div><h2>主页信息</h2></div>`
};
// 科技组件
let keji = {
  template: `<div><h2>科技信息</h2></div>`
};
// 主页组件
let caijing = {
  template: `<div><h2>财经信息</h2></div>`
};
// 主页组件
let yule = {
  template: `<div><h2>娱乐信息</h2></div>`
};
export default {
  name: "HelloWorld",
  data() {
    return {
      cname: "zhuye"
    };
  },
  // 局部组件
  components: {
    zhuye,
    caijing,
    yule,
    keji
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin: 0 5px;
}
</style>
