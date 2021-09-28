<template>
  <div class="home">
    <ForVue></ForVue>
    <ClassVue></ClassVue>
    <DStyle></DStyle>
    <FilterVue></FilterVue>
    <ComputedVue></ComputedVue>
  </div>
</template>

<script>
import ClassVue from "../components/Class.vue";
import ForVue from "../components/For.vue";
import DStyle from "../components/DStyle.vue";
import FilterVue from "../components/Filter.vue";
import ComputedVue from "../components/Computed.vue";

export default {
  name: "Home",
  components: {
    ForVue,
    ClassVue,
    DStyle,
    FilterVue,
    ComputedVue,
  },
};
</script>

<style scoped lang="scss">
.home {
  & > div {
    width: 600px;
    height: 400px;
    margin: 0 auto;
    &:nth-child(2n) {
      background-color: slategray;
    }
    &:nth-child(2n + 1) {
      background-color: skyblue;
    }
  }
}
</style>
