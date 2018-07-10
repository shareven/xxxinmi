// pages/book/bookreading/bookreading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookName:'新年呢',
    currentMode:'day'
  },

  /**
   * 减小字体
   */
  reduceA: function (d) {
    
  },

  /**
   * 增大字体
   */
  addA: function (d) {
    
  },

  /**
   * 切换夜间模式与白天模式
   */
  switchMode: function (d) {
    this.setData({
      currentMode: d.currentTarget.dataset.mode
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})