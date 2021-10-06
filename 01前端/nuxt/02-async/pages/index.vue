<template>
  <div>
    <h1>{{ip}}</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    const ip = await context.$axios.$get('http://icanhazip.com')
    const { data } = await context.$axios.$get('https://cnodejs.org/api/v1/topics', {
      params: {
        page: 1,
        tab: 'ask',
      },
    })
    // console.log(context)
    // console.log(data)
    return { ip,data }
  },
})
</script>

<style lang="scss">
$red: red;
div {
  color: $red;
}
</style>
