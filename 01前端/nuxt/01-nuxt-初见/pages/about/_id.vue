<template>
  <div>
    <h1>查询参数</h1>
    <h2>{{ $route.query.hello }}</h2>
    <h2>{{ $route.query.jack }}</h2>
    <h1>路径参数</h1>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
