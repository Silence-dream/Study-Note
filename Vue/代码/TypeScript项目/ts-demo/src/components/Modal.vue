<template>
  <!-- 组件移动 功能为了把一个全局对话框的DOM位置移动到我们想要的位置
  ,记住在public里面的index创建对应的节点,观看这个组件的相对位置 -->
  <teleport to="#modal">
    <div id="center">
      <h1>组件移动</h1>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export interface Ponse {
  id: number;
}
export default defineComponent({});
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
