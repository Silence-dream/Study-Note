<template>
  <div>
    here is ref
    {{ num }}
    <button @click="fn">点击修改值</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "vSetup",
  props: ["msg"],
  /**
   * props 获取传给组件的值
   * context 代替this 在setup里面的this是undefined
   * context里面的方法:
   * attrs: (...)
   * emit: (...)
   * slots: (...)
   */
  setup() {
    // ref 定义简单类型 Number String Boolean Null undefind
    // 定义变量
    let num = ref(123456789);
    function fn() {
      // ref()声明的变量通过 变量名.value访问
      num.value = 5555555;
    }
    // 导出数据
    return {
      num,
      fn
    };
  }
};
</script>

<style></style>
