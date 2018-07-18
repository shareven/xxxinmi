// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currentAudioIndex: null,
    isPlaying:false,
    currentAudio: null,
    categorys: [{
      name: '佛教常识',
      id: 12
    }, {
      name: '佛经学习',
      id: 13
    }, {
      name: '心中心',
      id: 14
    }],
    audioList: [{
        id: 212,
        title: '单身狗',
        downloadUrl: 'dsfds/sdgsf',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        author: '许巍',
        src: 'https://www.xinmizj.com/res/audio/src/Y6dY0xI5zH1vX7rH0r71.mp3',
      },
      {
        id: 213,
        title: '是打发大厦规划和规范化费工费时发史蒂芬孙地方',
        downloadUrl: 'dsfds/sdgsf',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        author: '许巍',
        src: 'https://www.xinmizj.com/res/audio/src/V9iG7aN4bE6wI5oC2e21.mp3',
      },
      {
        id: 214,
        title: '打个分宿舍',
        downloadUrl: 'dsfds/sdgsf',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        author: '许试试',
        src: 'https://www.xinmizj.com/res/audio/src/yylhbyyjt.mp3',
      },
      {
        id: 215,
        title: '到底是否收费高师傅的告诉对方',
        downloadUrl: 'dsfds/sdgsf',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        author: '的巍',
        src: 'https://www.xinmizj.com/res/audio/src/yylhbyyjt.mp3',
      },
    ],

  },

  /**
   * 切换音频分类
   */
  switchTabs: function(e) {
    var index = e.target.dataset.current;
    this.setData({
      currentTab: index,
      subCategorys: this.data.categorys[index].param
    })
  },
  audioPlay: function(e) {
    var i = e.target.dataset.index;
    if(i == this.data.currentAudioIndex ){
      this.setData({
        isPlaying: !0
      });
      return this.audioManager.play();
    }
    this.audioManager.stop();
    this.setData({
      isPlaying:!0,
      currentAudioIndex: i,
      currentAudio: this.data.audioList[i]
    });
    this.audioManager.src = this.data.currentAudio.src;
    this.audioManager.title = this.data.currentAudio.title;
  },
  audioPause: function(e) {
    wx.pauseBackgroundAudio();
    this.setData({
      isPlaying: !1
    });
  },
  audioPlayOld: function() {
    this.setData({
      isPlaying: !0
    });
    return this.audioManager.play();
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
    this.audioManager = wx.getBackgroundAudioManager();
    this.audioManager.onWaiting = function(){
      this.audioManager.title="正在缓冲..." 
    };
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