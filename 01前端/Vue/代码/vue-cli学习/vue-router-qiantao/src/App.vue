<template>
  <div>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
html,
body {
  text-align: center;
}
a {
  margin: 0 5px;
}
</style>
