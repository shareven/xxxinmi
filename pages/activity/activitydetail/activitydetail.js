// pages/activity/activitydetail/activitydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLike:false,
    isCollected:false,
    activity: {
      id: 123,
      title: "欢迎到梧桐小院共修",
      createTime:"2018-07-17",
      nickname: "清水",
       avatar: "https://www.xinmizj.com/res/member/avatar//2018/7/15/77754594b03ea0fe2d17086d23e6885c1531617282621.jpg",
      content: "深圳梧桐小院定于2018年7月21日到2018年8月21日组织方便七，欢迎师兄们报名。",
      cover: "https://www.xinmizj.com/res/activity/cover//2018/7/15/f3ccdd27d2000e3f9255a7e3e2c488001531619277182.jpg",
      likeNum: 12,
      commentNum: 23,
      applyNum: 22,
    },
    commentList:[
      {
        avatar: "https://www.xinmizj.com/res/member/avatar//2018/7/15/77754594b03ea0fe2d17086d23e6885c1531617282621.jpg",
        nickname:"清水",
        content:"欢迎师兄们过来共修哈"
      }
    ]
  },

  /**
   * 点赞
   */
  like: function (options) {
    this.setData({
      isLike:true
    })
  },

  /**
   * 取消点赞
   */
  unlike: function (options) {
    this.setData({
      isLike:false
    })
  },

  /**
   * 收藏
   */
  collect: function (options) {
    this.setData({
      isCollected:true
    })
  },

  /**
   * 取消收藏
   */
  uncollect: function (options) {
    this.setData({
      isCollected:false
    })
  },
  /**
   * share
   */
  share: function (options) {
    
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