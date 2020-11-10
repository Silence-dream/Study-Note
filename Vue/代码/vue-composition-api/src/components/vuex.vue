<template>
  <div class="box">
    <h2>
      您将学习到修改 如何调用 vuex里面的值和方法
    </h2>
    <div>vuex里面的msg的值是---{{ msg }}</div>
    <div>vuex里面的msg被计算属性之后的值----{{ msgComputed }}</div>
    <button @click="changeMsg">点击修改vuex-msg</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "vuex",
  // components: {}
  setup() {
    let store = useStore();
    //获取 state() 里面的属性
    let msg = computed(() => store.state.msg);
    //获取 getters()里面的属性
    let msgComputed = computed(() => store.getters.msg);
    function changeMsg() {
      // 调用mutations的方法
      store.commit("changeMsg");
      // 调用actios里面的方法
      store.dispatch("fn");
    }
    return {
      msg,
      changeMsg,
      msgComputed
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
