<template>
  <div>
    <a-spin size="large" :spinning="true" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: false
    };
  }
};
</script>

<style>
html,
body {
  padding: 100px;
}
</style>
