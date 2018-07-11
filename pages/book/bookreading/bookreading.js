// pages/book/bookreading/bookreading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookName:'新年呢',
    currentMode:'day',
    fontSize: 30
  },

  /**
   * 减小字体
   */
  reduceA: function (d) {
    var fontSize = Math.max(this.data.fontSize - 3 ,24) ;console.log(fontSize);
    this.setData({
      fontSize:fontSize
    })
  },

  /**
   * 增大字体
   */
  addA: function (d) {
    var fontSize = Math.min(this.data.fontSize + 3, 51); console.log(fontSize);
    this.setData({
      fontSize: fontSize
    })
  },

  /**
   * 切换夜间模式与白天模式
   */
  switchMode: function (d) {
    var mode = d.currentTarget.dataset.mode
   
    mode=='night' && (wx.setNavigationBarColor({
      backgroundColor:'#444444',
      frontColor:'#ffffff'
    }) ,1)
    || wx.setNavigationBarColor({
      backgroundColor: '#fffffff',
      frontColor: '#000000'
    });
    this.setData({
      currentMode: mode
    });
  },

  /**
   * 目录页
   */
  goContents: function () {
    wx.navigateTo({
      url: '../bookcontents/bookcontents',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 下一章
   */
  nextChapter: function (options) {
    
  },
  /**
   * 下一章
   */
  nextChapter: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setBackgroundColor({
    //   // backgroundColor:'#333',
    //   backgroundColorTop:'#333'
    // });
    wx.setNavigationBarTitle({
      title: this.data.bookName
    })
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