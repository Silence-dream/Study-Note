<template>
  <h2 v-text="msg"></h2>
  <h4 v-html="msg2"></h4>
</template>

<script>
export default {
  //组件的名称
  name: "Text",
  data() {
    return {
      msg: "123",
      msg2: "<div>我曹你妈的</div>"
    };
  }
};
</script>

<style scoped></style>
