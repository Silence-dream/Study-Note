<template>
  <div id="box">
    <h1>index首页</h1>
    <nuxt-link to="/about">go to about</nuxt-link>
    <h2>{{ $store.state.count }}</h2>
    <button @click="add">同步增加</button>
    <button @click="asyncAdd">异步增加</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("add", 100)
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", 200)
    }
  }
};
</script>

<style>
html, body {
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
