<template>
  <h1>{{ msg }}</h1>
  <h2 v-text="123"></h2>
  <h3 v-html="`${element}`"></h3>
  <input type="text" :value="'message'" /><br />
  <input type="text" v-model="aaa" /> <br />
  <span>{{ aaa }}</span>
  <button @click="fn">点击</button>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let msg = "HelloWorld";
    let element = "<span>456</span>";
    let aaa = ref("123");
    const fn = () => {
      console.log(1);
    };
    return {
      msg,
      element,
      aaa,
      fn,
    };
  },
  components: {},
};
</script>

<style scoped></style>
