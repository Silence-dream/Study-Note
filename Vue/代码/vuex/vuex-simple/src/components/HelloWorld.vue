<template>
  <div class="hello">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      // 访问 vuex里$store.state的name
      msg: this.$store.state.name
    };
  },
  computed: {
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
