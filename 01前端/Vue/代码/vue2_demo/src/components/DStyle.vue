<template>
  <div>
    <h1 :style="{ background: colorRed }">动态style</h1>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Dstyle",
  data() {
    return {
      colorRed: "red",
    };
  },
  methods: {
    btn() {
      if (this.colorRed === "red") {
        this.colorRed = "yellow";
      } else {
        this.colorRed = "red";
      }
    },
  },
};
</script>

<style></style>
