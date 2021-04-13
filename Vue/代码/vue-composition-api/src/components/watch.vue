<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的 watch</h1>
    <h2>
      您将学习到在compositions里面使用optionsAPI里面的watch 注意看控制台
    </h2>
    <div>{{ num }}--{{ num2 }}</div>
    <button @click="changeNum">点击我数字变化</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
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
    // 监听单一的值;
    watch(
      () => num.value, //监听num
      (count, prevCount) => {
        console.log("num 变化后的值", count, "num 变化前的值", prevCount);
      }
    );
    //监听多个值
    watch(
      [num, num2], //监听num
      ([num, num2], [prevNum, prevNum2]) => {
        console.log("num 变化后的值", num, "num 变化前的值", prevNum);
        console.log("num2 变化后的值", num2, "num2 变化前的值", prevNum2);
      }
    );

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
  background-color: skyblue;
}
</style>
