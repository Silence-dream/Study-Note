<template>
  <h1>请看路由传过来的参数:直接接收{{ $route.params.name }}</h1>
  <h1>请看路由传过来的参数:通过props获取{{ name }}</h1>
</template>

<script>
export default {
  name: "parameter",
  props: ["name"]
};
</script>

<style></style>
