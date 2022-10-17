<template>
  <div>sumC------{{ sumC }}</div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Computed",
  setup() {
    // 定义变量
    const count = ref(23);
    const sum = ref(0);
    const plusOne = computed({
      // 定义函数get 让count加1
      get: () => {
        console.log("get里面的 count 值", count.value);
        count.value + 1;
      },
      // 定义函数set
      set: val => {
        console.log("set里面的val值", val);
        count.value = val - 1;
      }
    });

    //使用 plusOne.value 会调用 plusOne 里面的 get 方法得到值进行处理
    plusOne.value;
    console.log("count : ", count.value); // 23
    // 使用plusOne.value = 某些值 会调用plusOne里面的 set 方法进行处理
    plusOne.value = 1;
    console.log("count : ", count.value); // 0
    let sumC = computed(() => {
      return sum.value + 100;
    });
    return {
      sumC
    };
  }
};
</script>

<style></style>
