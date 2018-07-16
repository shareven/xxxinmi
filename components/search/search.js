// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mPlaceholder:{
      type: String,
      value:'搜索'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    clear: function (e) {
      this.setData({
        inputValue: ''
      });
    },
  }
})
