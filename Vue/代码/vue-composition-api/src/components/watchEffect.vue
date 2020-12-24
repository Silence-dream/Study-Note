<template>
  <div class="box">
    <h2>
      您将学习到在compositions里面的 watchEffect 注意看控制台
    </h2>
    <div>{{ num }}--{{ num2 }}</div>
    <button @click="changeNum">点击我数字变化</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let num = ref(100);
    let num2 = ref(200);

    function changeNum() {
      setInterval(() => {
        num.value++;
        num2.value++;
      }, 500);
    }

    //监听多个值
    watchEffect(() => {
      console.log(num.value);
      console.log(num2.value);
    });

    // 导出
    return {
      num,
      num2,
      changeNum
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: pink;
}
</style>
