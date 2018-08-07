// pages/video/videodetail/videodetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://v.qq.com/iframe/player.html?vid=s0683brk0bu&tiny=0&auto=0',
    newSrc:'',
    vid:''
  },

  /**
   * 处理腾讯视频,使之可以使用
   */
  changeVideoSrc: function (src) {
    let that=this;
    let vid = src.match(/vid\=(\S*)\&tiny/)[1];
    console.log(vid);
    this.setData({
      vid:vid
    });
    wx.request({
      url: 'http://vv.video.qq.com/getinfo?vids='+vid+'&platform=101001&charge=0&otype=json',
      success:function(res){
        let json = JSON.parse(res.data.match(/QZOutputJson\=(\S*)\;/)[1]);
        let vi=json.vl.vi[0];
        console.log(vi);
        console.log(vi.ul.ui[0].url + vi.fn + '?vkey=' + vi.fvkey);
        that.setData({
          newSrc:vi.ul.ui[0].url+vi.fn+'?vkey='+vi.fvkey
        });
      }
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
    this.changeVideoSrc(this.data.src);
    this.videoContext = wx.createVideoContext('myVideo');
    // this.videoContext.play();
    // const txvContext = requirePlugin("tencentvideo");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  setInterval(()=>{
    console.log(this.data.newSrc);
  },2000)
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