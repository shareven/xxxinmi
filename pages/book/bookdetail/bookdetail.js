// pages/book/bookdetail/bookdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
   /**
   * 加入收藏
   */
  collectBook:function(){
        // wx.showLoading({
    //   title: '拼命拼命加载中',
    // });
  wx.request({
    url: '',
    success:function(res){
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
  })
    // wx.hideLoading()
  },
   /**
   * 开始阅读
   */
  goReading:function(){
     wx.navigateTo({
       url: '../bookreading/bookreading',
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