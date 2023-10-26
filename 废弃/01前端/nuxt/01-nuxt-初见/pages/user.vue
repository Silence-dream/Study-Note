<template>
  <div>
    <h1>user</h1>
    <nuxt-link to="/user/child1">child1</nuxt-link>
    <nuxt-link to="/user/child2">child2</nuxt-link>
    <!-- 注意父级 user 写上 nuxt-child 虽然 user/index.vue 也能匹配路由 /user 但是需要 user.vue 在父级才可以使用 nuxt-child -->
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
