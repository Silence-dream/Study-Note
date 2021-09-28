<template>
  <div>
    <h1>过滤器</h1>
    <div>{{ str }}</div>
    <h2>过滤器传参</h2>
    <span>{{ str | reverse("123") }}</span>
    <h2>多个过滤器的使用</h2>
    <div>{{ str | reverse("123") | UpCase }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "admin",
    };
  },
  filters: {
    reverse(value, data) {
      // console.log(value);
      // console.log(data); // 接收传过来的参数
      return value.split("").reverse().join("") + data;
    },
    UpCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style></style>
