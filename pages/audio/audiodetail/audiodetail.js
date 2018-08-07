// pages/audio/audiodetail/audiodetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowInfo: !1, //是否显示信息
    isPlaying: !0, //是否正在播放
    audioPercent: 0, //播放百分比
    currentTime: '00:00',
    duration: '05:00',
    offset:0,  //进度条偏移量
    max:100,     //进度条最大值
    isCollected: !1 //是否已收藏
  },

  /**
   * 切换是否显示info
   */
  switchInfo: function() {
    this.setData({
      isShowInfo: !this.data.isShowInfo
    })
  },
  collect: function() {
    this.setData({
      isCollected: !this.data.isCollected
    })
  },
  audioPause: function(e) {
    wx.pauseBackgroundAudio();
    this.setData({
      isPlaying: !1
    });
    wx.pauseBackgroundAudio();
  },
  audioPlayOld: function() {
    this.setData({
      isPlaying: !0
    });
    return this.audioManager.play();
  },
  /**
   * 下载
   */
  download: function (e) {
    wx.downloadFile({
      url: this.audioManager.src,
      header: {},
      success: function (res) {
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (res) {
            wx.showToast({
              title: '下载成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '保存失败',
              icon: 'none',
              duration: 2000
            })
          },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '下载失败',
          icon: 'none',
          duration: 2000
        })
      },
      complete: function (res) { },
    })
  },
  timeUpdate: function() {
    let that = this;
    this.audioManager.onTimeUpdate(function() {
      let currentTime = that.audioManager.currentTime,
        duration = that.audioManager.duration;
      
      duration && that.setData({
        offset: currentTime,
        max: duration,
        currentTime: that.filterTime(parseInt(currentTime / 60)) + ':' + that.filterTime(parseInt(currentTime % 60)),
        duration: that.filterTime(parseInt(duration / 60)) + ':' + parseInt(duration % 60),
        audioPercent: that.filterTime(currentTime / duration*100)
      })
    })
  },
  filterTime:function(e){
  return e<10?"0"+e:e
  },
  /**
   * 滑动播放进度条
   */
  seekAudio:function(e){
  var offset = parseInt(e.detail.value);
  this.audioManager.seek(offset);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.audioManager = wx.getBackgroundAudioManager();

    this.setData({
      isPlaying: !this.audioManager.paused
    });
    this.timeUpdate();
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