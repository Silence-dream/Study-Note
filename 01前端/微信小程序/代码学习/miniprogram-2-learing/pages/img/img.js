// pages/img/img.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello我的图片",
    obj: [
      {
        id: 1,
        name: "李四",
      },
      {
        id: 2,
        name: "四是",
      },
      {
        id: 3,
        name: "王五",
      },
    ],
    num: 0,
  },

  add(e) {
    // 得到传过来的参数
    console.log(e);
    let params = Number(e.currentTarget.dataset.info);
    // console.log(typeof params);
    this.setData({
      num: (params += 1),
    });
    // console.log(params);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
