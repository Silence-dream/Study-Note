<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的 methods</h1>
    <h2>
      您将学习到修改 ref 和 reactive 里面的值和使用
      在compositions里面使用optionsAPI里面的methods
    </h2>
    <div>{{ hello }}</div>
    <div>{{ obj }}</div>
    <button @click="changeName">点击我修改值</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let hello = ref("hello");
    let obj = reactive({
      name: "罗老师别这样",
      age: 18
    });

    function changeName() {
      hello.value = "不hello";
      obj.name = "罗老师";
    }
    // 导出
    return {
      hello,
      obj,
      changeName
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
