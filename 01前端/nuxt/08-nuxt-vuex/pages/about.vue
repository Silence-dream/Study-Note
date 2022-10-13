<template>
  <div class="about">
    <h1>随机数: {{ random }}</h1>
    <h2>把随机数添加到数组内</h2>
    <div>{{ $store.state.modulesList.list }}</div>
    <!-- 调用 moduleA 里面的数据 -->
    <div>{{ $store.state.moduleA.str }}</div>
    <button type="submit" @click="addList">把随机数添加到 modulesList 模块的 list 内</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      random: 0
    }
  },
  methods: {
    getRandom() {
      let random = Math.floor(Math.random() * 10 - 0 + 0);
      return random;
    },
    addList() {
      let random = this.getRandom();
      this.random = random;
      // 调用 modulesList 模块里面的 addList 方法
      this.$store.commit("modulesList/addList",random)
    }
  }
}
</script>

<style>

</style>