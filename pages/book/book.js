// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showloading: !1,
    currentTab: 0,
    categorys: [{
      key: '书库',
      param: [{
        orderCol: '全部'
      }]
    }, {
      key: '心密文集',
      param: [{
        orderCol: '佛心经'
      }, {
        orderCol: '大愚祖师'
      }, {
        orderCol: '王骧陆上师'
      }, {
        orderCol: '元音老人'
      }]
    }, {
      key: '禅宗辑要',
      param: [{
        orderCol: '七佛'
      }, {
        orderCol: '本师化迹'
      }, {
        orderCol: '古尊宿集'
      }]
    }, ]
  },

  /**
   * 切换书籍分类
   */
  switchTabs: function(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})