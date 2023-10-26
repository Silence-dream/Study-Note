<template>
  <div>
    {{ msg }}
    <p>hehe</p>
  </div>
</template>

<script>
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
  setup(props, context) {
    console.log(props);
    console.log(context);
    console.log(this);
    // 打印从父组件传过来的msg
    console.log(props.msg);
    // 可以获取 标签上的属性值 如果这个属性值被props接收了那么就不会在这里显示了
    console.log("this is attrs", context.attrs);
    // 获取组件内部的 nodes元素
    console.log("this is solots", context.slots.default());
  }
};
</script>

<style></style>
