<template>
  <div id="box">
    <h1>index首页</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // DOM 更新完毕之后调用 loading
    this.$nextTick(() => {
      // 调用 loading 中的方法,记得在 nux.config.js 里面配置
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

#box {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid;
  text-align: center;
}
</style>
