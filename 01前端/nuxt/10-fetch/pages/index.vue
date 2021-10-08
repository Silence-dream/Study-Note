<template>
  <div class="box">
    <h1>index</h1>
    <nuxt-link to="/about">about</nuxt-link>
    <ul v-for="item in list">
      <li>{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch({ $axios, store }) {
    let {
      data: { data: list }
    } = await $axios.get("https://cnodejs.org/api/v1/topics");
    store.commit("update", list);
  },
  computed: {
    ...mapState(["list"])
  }
};
</script>

<style></style>
