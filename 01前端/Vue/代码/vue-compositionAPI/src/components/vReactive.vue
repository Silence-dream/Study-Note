<template>
  <div>
    <span>here is reactive</span>
    <p @click="fn">{{ obj }}---{{ num }}</p>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Reactive",
  setup() {
    let obj = reactive({
      name: "李四"
    });
    // reactive只能创建复杂数据类型 简单数据类型无法完成响应
    let num = reactive(0);
    function fn() {
      obj.name = "王五";
      num = 123;
      console.log(num);
    }
    return {
      obj,
      fn,
      num
    };
  }
};
</script>

<style></style>
