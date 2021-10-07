<template>
  <div class="box">
    <nuxt-link to="/prent">prent</nuxt-link>
  </div>
</template>

<script>
export default {
 created(context) {
   let str=this.$myServer()
   console.log(str)
 },
  asyncData(context){
   console.log(context.app.$myServer())
  }
}
</script>

<style>

</style>
