// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    category: [{
      id: 1231,
      name: '元音老人视频'
    }, {
      id: 12671,
      name: '齐老师视频'
    }],
    recommes: [{
        id: 234,
        cover: 'https://www.xinmizj.com/res/video/cover/yylr-frcjm.jpg',
        title: '法融禅净密',
        info: '元音老人讲解'
      },
      {
        id: 234,
        cover: 'https://www.xinmizj.com/res/video/cover/yylr-mgcfks.jpg',
        title: '美国传法开示',
        info: '元音老人讲解'
      },
      {
        id: 234,
        cover: 'https://www.xinmizj.com/res/video/cover/yylr-mgzysks.jpg',
        title: '美国庄严寺开示',
        info: '元音老人美国庄严寺开示'
      },
    ],
    videoList: [{
        id: 234,
        cover: 'https://www.xinmizj.com/res/video/cover/yylr-frcjm.jpg',
      title: '法融禅净密',
      info: '元音老人讲解'
      },
      {
        id: 234,
        cover: 'https://www.xinmizj.com/res/video/cover/yylr-mgcfks.jpg',
        title: '美国传法开示',
        info: '元音老人讲解'
      },
      {
        id: 234,
        cover: 'https://www.xinmizj.com/res/video/cover/yylr-mgzysks.jpg',
        title: '美国庄严寺开示',
        info: '元音老人美国庄严寺开示'
      }
    ]
  },
  /**
   * 切换分类
   */
  switchTabs: function(e) {
    var index = e.target.dataset.current;
    this.setData({
      currentTab: index
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    wx.showLoading({
      title: '玩命加载中',
    });
    setTimeout(()=>{ 
      wx.hideLoading();
    },1000);
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})