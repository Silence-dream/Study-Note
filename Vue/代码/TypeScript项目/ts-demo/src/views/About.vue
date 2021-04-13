<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="updateMouse">点击获得鼠标信息</button>
    <div>
      <h1 v-if="loading">loading...</h1>
      <img v-if="loaded" :src="result[0].url" />
    </div>
    <Modal />
    <div style="margin-top:500px"></div>
    <Suspense>
      <template #default>
        <!-- 目前只能挂载一个组件 所以用 div 包裹 -->
        <div>
          <AsyncShow></AsyncShow>
          <DogShow></DogShow>
        </div>
      </template>
      <template #fallback>
        <h1>加载中</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "../hooks/useMousePosition";
import useURLLoader from "../hooks/useURLLoader";

import Modal, { Ponse } from "@/components/Modal.vue";
import AsyncShow from "@/components/AsyncShow.vue";
import DogShow from "@/components/DogShow.vue";
const a: Ponse = { id: 10 };
console.log(a);
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default defineComponent({
  name: "About",
  setup() {
    const { x, y, updateMouse } = useMousePosition();
    // 泛型的使用
    // 猫api https://api.thecatapi.com/v1/images/search?limit=1
    const { result, loading, loaded } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url);
      }
    });
    return { x, y, updateMouse, result, loading, loaded };
  },
  components: {
    Modal,
    AsyncShow,
    DogShow
  }
});
</script>
