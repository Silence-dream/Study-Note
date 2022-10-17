<template>
  <div>
    <h1 v-bind:class="{ red: flag }">动态class</h1>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
export default {
  name: "class",
  data() {
    return {
      flag: "red",
    };
  },
  methods: {
    btn() {
      this.flag = !this.flag;
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
