<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handClick">点我去主页</button>
    <button @click="forward">点击前进一步</button>
    <button @click="back">点击后退一步</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    handClick() {
      // 这就是编程式导航
      this.$router.push("/");
    },
    forward() {
      this.$router.go(1);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
