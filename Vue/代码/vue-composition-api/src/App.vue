<template>
  <!-- 变量 -->
  <data1></data1>
  <!-- 方法 -->
  <methods></methods>
  <!-- 监听 -->
  <watch></watch>
  <!--  -->
  <watchEffect></watchEffect>
  <!-- 计算属性 -->
  <computed></computed>
  <!-- vuex -->
  <vuex></vuex>
</template>

<script>
import data1 from "@/components/data1.vue";
import methods from "@/components/methods.vue";
import watch from "@/components/watch.vue";
import watchEffect from "@/components/watchEffect.vue";
import computed from "@/components/computed.vue";
import vuex from "@/components/vuex.vue";
export default {
  name: "App",
  components: {
    data1,
    methods,
    watch,
    watchEffect,
    computed,
    vuex
  }
};
</script>

<style>
html,
body {
  height: 5000px;
}
</style>
