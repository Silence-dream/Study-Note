<template>
  <h1>AsyncShow : {{ 200 }}</h1>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AsyncShow",
  setup() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          result: 200
        });
      }, 3000);
    });
  }
});
</script>

<style></style>
