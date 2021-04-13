<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="handClick">点我去about</button>
    <button @click="forward">点击前进一步</button>
    <button @click="back">点击后退一步</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    handClick() {
      this.$router.push("/about");
    },
    forward() {
      this.$router.go(1);
    },
    back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>
