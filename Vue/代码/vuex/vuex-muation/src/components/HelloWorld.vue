<template>
  <div class="hello">
    <h1 @click="changeName">{{ name }}</h1>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex';
import { mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      // 写在data里面的数据不会随着state里面的数据更新而更新
      msg: this.$store.state.name
    };
  },
  methods: {
    handleClick() {
      //   this.$store.commit("changeName");
      this.$store.commit("changeName");
      // ...mapMutations([])
    },
    ...mapMutations(["changeName"])
  },
  computed: {
    // getName() {
    //   return this.$store.state.name;
    // },
    // 简写办法 可以直接在页面中使用state里面的数据
    ...mapState(["name"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
