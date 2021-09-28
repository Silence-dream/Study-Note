<template>
  <div>
    <div>
      <span>姓名:</span>
      <input type="text" v-model="full" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    full: {
      // 给full赋值触发set方法
      set(val) {
        console.log(val);
      },
      // 使用full的值触发get方法
      get() {
        return "无名氏";
      },
    },
  },
};
</script>

<style></style>
