<template>
  <h1 class="hello">{{ msg }}</h1>

 
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="scss" scoped>
.hello{
  color: $color;
}
</style>
