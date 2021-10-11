<template>
  <div class='box'>
    <h1>{{ $store.state.msg }}</h1>
    <button type='submit' @click='fn'>按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      // console.log(this.$store.state.msg)
    }
  }
}
</script>
