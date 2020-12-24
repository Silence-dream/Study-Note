<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的data</h1>
    <div>{{ hello }}</div>
    <div>{{ obj }}</div>
  </div>
</template>

<script>
// 注意要引入vue里面的方法才可以使用
import { reactive, ref } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let hello = ref("hello");
    let obj = reactive({
      name: "罗老师",
      age: 18
    });
    // 导出变量
    return {
      hello,
      obj
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
