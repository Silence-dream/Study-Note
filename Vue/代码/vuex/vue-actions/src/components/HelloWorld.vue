<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ store }}</h2>
    <h3 @click="asycnAdd(2)">点击我数字增加 {{ count }}</h3>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      store: this.$store.state.store
    };
  },
  methods: {
    ...mapActions(["asycnAdd"])
  },
  computed: {
    ...mapState(["count"])
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
