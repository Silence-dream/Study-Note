<template>
  <div>
    <h1>我的页面</h1>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware:'auth'
}
</script>

<style>

</style>
