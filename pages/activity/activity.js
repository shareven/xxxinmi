// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showloading: !1,
    currentTab: 0,
    currentSubTab: 0,
    categorys:[
      {
        id:122,
        name:"全部"
      },
      {
        id:123,
        name:"灌顶报名"
      },
      {
        id:124,
        name:"打七报名"
      },
      {
        id:125,
        name:"打九报名"
      },
      {
        id:126,
        name:"其它报名"
      },
    ],
    activityList:[
      {
        id:123,
        title:"欢迎到梧桐小院共修",
        nickname:"清水",avatar:"https://www.xinmizj.com/res/member/avatar//2018/7/15/77754594b03ea0fe2d17086d23e6885c1531617282621.jpg",
        content:"深圳梧桐小院定于2018年7月21日到2018年8月21日组织方便七，欢迎师兄们报名。",
        cover:"https://www.xinmizj.com/res/activity/cover//2018/7/15/f3ccdd27d2000e3f9255a7e3e2c488001531619277182.jpg",
        likeNum:12,
        commentNum:23,
        applyNum:22,
      },
      {
        id:123,
        title:"欢迎到梧桐小院共修",
        nickname:"清水",avatar:"https://www.xinmizj.com/res/member/avatar//2018/7/15/77754594b03ea0fe2d17086d23e6885c1531617282621.jpg",
        content:"深圳梧桐小院定于2018年7月21日到2018年8月21日组织方便七，欢迎师兄们报名。",
        cover:"https://www.xinmizj.com/res/activity/cover//2018/7/17/a0b762859636f4ae43b694d4edf10b2e1531815811564.jpg",
        likeNum:12,
        commentNum:23,
        applyNum:22,
      },
    ]
  },

  /**
   * 查看详情
   */
  goDetail: function (options) {
  wx.navigateTo({
    url: './activitydetail/activitydetail',
  });
  },
  /**
    * 切换活动分类
    */
  switchTabs: function (e) {
    var index = e.target.dataset.current;
    this.setData({
      currentTab: index
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