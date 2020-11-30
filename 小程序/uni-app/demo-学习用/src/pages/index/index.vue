<template>
  <view class="content">
    <view>
      <text class="title" @click="fn($event)">{{ title }}12312</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    wx.showLoading({
      title: "加载中",
      mask: true,
      success: result => {
        console.log(result);
      }
    });
  },
  methods: {
    fn(e) {
      console.log(e);
    }
  }
};
</script>

<style>
.title {
  color: red;
}
</style>
