// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showloading: !1,
    currentTab: 0,
    currentSubTab: 0,
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
    }],
    subCategorys: [],
    bookList:[
      {
        id:122,
        cover:'../../images/img/book1.png',
        name:'窗前收到地方'
      },
      {
        id:12222,
        cover:'../../images/img/book2.png',
        name:'但是地方'
      },
      {
        id:1242,
        cover:'../../images/img/book3.png',
        name:'还好到地方'
      },
      {
        id:12245,
        cover:'../../images/img/book4.png',
        name:'豆腐坊地方'
      },
    ]
  },

  /**
   * 获取书籍分类
   */
  getBookCategorys: (e) => {
    wx.request({
      url: '',
      success: (d) => {

        this.setData({
          categorys:d.data.list,
          subCategorys: d.data.list[0].param
        })
      }
    });
  },

  /**
   * 切换书籍分类
   */
  switchTabs: function(e) {
    var index = e.target.dataset.current;
    this.setData({
      currentTab: index,
      subCategorys: this.data.categorys[index].param
    })
  },
  /**
   * 获取书籍列表
   */
  getBookList:function (e)  {
    this.setData({
      currentSubTab: e.target.dataset.currentSub
    });
    // wx.request({
    //   url: '',
    //   formData: {},
    //   success: (d) => {

    //   }
    // })
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