<template>
  <h1>这里是page1</h1>
  <router-link to="/home">去根页面的 home</router-link>
  <br />
  <router-view></router-view>
  <router-link to="/page">这个页面里面的page</router-link>
  <br />
  <a href="/">go back</a>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
a {
  font-size: 50px;
}
</style>
