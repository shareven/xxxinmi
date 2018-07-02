//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    navList: [{
      navUrl: '../book/book',
      imgUrl: '../images/home_book.png',
      navname: '心密书库'
    }, {
      navUrl: '../video/video',
      imgUrl: '../images/home_video.png',
      navname: '心密视频'
      }, {
        navUrl: '../audio/audio',
        imgUrl: '../images/home_audio.png',
        navname: '心密音频'
    }, {
      navUrl: '../tribune/tribune',
      imgUrl: '../images/home_tribune.png',
      navname: '心密论坛'
      }, {
        navUrl: '../mall/mall',
        imgUrl: '../images/home_mall.png',
        navname: '商城'
    }, {
      navUrl: '../activity/activity',
      imgUrl: '../images/home_activity.png',
      navname: '活动报名'
      }],
    recommendList: [{
      navUrl: '../video/video',
      imgUrl: '/images/img/book1.png',
      navname: '视频'
    }, {
      navUrl: '../audio/audio',
      imgUrl: '/images/img/book2.png',
      navname:'音频'
    }, {
      navUrl: '../book/book',
      imgUrl: '/images/img/book3.png',
      navname: '书籍'
    }],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
