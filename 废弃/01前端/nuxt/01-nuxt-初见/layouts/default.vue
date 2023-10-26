<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/user">user</nuxt-link>
    <br />
    <nuxt-link to="/about/123">路径参数/about/123</nuxt-link>
    <nuxt-link to="/about/123/456">路径参数/about/123/456</nuxt-link>
    <nuxt-link to="/about/?hello=123&jack=456"
      >查询参数/about/?hello=123&jack=456</nuxt-link
    >
    <!-- 显示 pages/index.vue -->
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body {
  text-align: center;
}
a {
  padding: 0 20px;
}
</style>
