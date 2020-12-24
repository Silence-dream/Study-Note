<template>
  <div class="box">
    <h1>这里相当于 optionsAPI 里面的 computed</h1>
    <h2>注意看控制台</h2>
    <div>helloComputed={{ helloComputed }}</div>
    <div>numComputed={{ numComputed }}</div>
  </div>
</template>

<script>
// 注意要引入vue里面的方法才可以使用
import { computed, ref } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let hello = ref("hello");
    let helloComputed = computed(() => {
      return hello.value + "World"; //计算完毕之后变成helloWorld
    });
    let num = ref(21);
    let numComputed = computed({
      get: () => num.value + 11, //直接调用执行这里
      set: val => {
        // 2.执行这里
        console.log("numComputed.value=", val);
      }
    });
    // 1.给 numComputed 赋值
    numComputed.value = 20;
    // 导出变量
    return {
      helloComputed,
      numComputed
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: skyblue;
}
</style>
