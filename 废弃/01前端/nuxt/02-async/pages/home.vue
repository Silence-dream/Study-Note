<template>
  <div>
    <img src="/img/芭芭拉.gif" alt="" />
    <img src="/img/芭芭拉.gif" alt="" />
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
    </div>
    <div class="inline" :style="keli"></div>
  </div>
</template>

<script>
// const keli = require(`~img/可莉.gif`)
// 尽量使用英文文件名
const keli = require('~/static/img/1.gif')
export default {
  asyncData(ctx) {
    console.log(ctx)
  },
}
</script>

<style>
img {
  width: 200px;
}

.box1 {
  display: inline-block;
  width: 200px;
  height: 200px;
  background: url(/img/甘雨.gif) no-repeat;
  background-size: contain;
}

.box2 {
  display: inline-block;
  width: 200px;
  height: 200px;
  background: url(/img/甘雨.gif) no-repeat;
  background-size: contain;
}

.inline {
  width: 200px;
  height: 200px;
  background-size: contain !important;
}
</style>
