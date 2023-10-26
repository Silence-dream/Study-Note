<template>
  <div>
    <h1>v-for 的更新机制</h1>
    <template v-for="item in list">
      <h1 :key="item">{{ item }}</h1>
    </template>
    <button @click="reverse">翻转</button>
    <button @click="slice">截取前3个元素</button>
    <button @click="btn">直接修改第下标0的值为20</button>
  </div>
</template>

<script>
export default {
  name: "v-for",
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  methods: {
    reverse() {
      // 因为原数组被修改了所以触发了更新
      this.list.reverse();
    },
    slice() {
      // slice方法会返回一个新数组,需要把新数组赋值给 this.list 才会触发更新
      // this.list.slice(0, 3);
      let arr = this.list.slice(0, 3);
      this.list = arr;
    },
    btn() {
      // 直接修改数组的值无法触发更新,可以使用 this.$set 方法
      // this.list[0] = 20;
      this.$set(this.list, 0, 20);
    },
  },
};
</script>

<style></style>
