<template>
  <div @click="fn">{{ msg }}</div>
</template>

<script>
/* mixin复用代码 */
const mixin = {
  data() {
    return {
      msg: "mixins"
    };
  },
  methods: {
    fn() {
      console.log(1);
    }
  }
};
export default {
  name: "HelloWorld",
  mixins: [mixin]
};
</script>

<style></style>
