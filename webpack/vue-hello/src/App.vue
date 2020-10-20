<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Text></Text>
  <if_flag></if_flag>
</template>

<script>
import Text from "@/components/Text";
import if_flag from "@/components/if-flag";
export default {
  name: "App",
  components: {
    Text,
    if_flag
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
