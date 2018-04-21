// pages/add_creditcard/addCreditcard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agent_id_num: ''
  },

  addSuccess: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var card_num = e.detail.value.card_num;
    var bank_name = e.detail.value.bank_name;
    var sub_bank_name = e.detail.value.sub_bank_name;
    var city = e.detail.value.city;
    var is_default = 0;
    if (e.detail.value.is_default.length > 0) {
      is_default = 1;
    }
    if (name.length === 0) {
      wx.showToast({
        title: '姓名不能为空',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (card_num.length === 0) {
      wx.showToast({
        title: '请输入银行卡号',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (bank_name.length === 0) {
      wx.showToast({
        title: '请输入开户行名称',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (sub_bank_name.length === 0) {
      wx.showToast({
        title: '请输入支行名称',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (city.length === 0) {
      wx.showToast({
        title: '请输入城市名',
        image: '/images/error.png',
        duration: 2000
      })
    } else {
      wx.request({
        method: 'POST',
        // url: 'http://192.168.104.191/mini/addCreditCard', //接口地址
        // url: 'http://localhost/mini/addCreditCard', //接口地址
        url: 'https://inh3rit.top/mini/addCreditCard', //接口地址
        data: {
          'name': name,
          'card_num': card_num,
          'bank_name': bank_name,
          'sub_bank_name': sub_bank_name,
          'city': city,
          'is_default': is_default,
          'agent_id_num': this.agent_id_num
        },
        header: { 'content-type': 'application/json' },
        success: function (res) {
          if (res.data == "SUCCESS") {
            wx.showToast({
              title: '添加成功',
              image: '/images/success.png',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: res.data,
              image: '/images/error.png',
              duration: 2000
            })
          }
          setTimeout(function () {
            if (wx.reLaunch) {
              wx.reLaunch({
                url: '../home/home?agent_id_num=' + that.agent_id_num
              });
            } else {
              wx.switchTab({
                url: '../index/index'
              })
            }
          }, 2000)

        },
        fail: function (res) {
          wx.showToast({
            title: '网络错误，请稍后重试',
            image: '/images/error.png',
            duration: 2000
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.agent_id_num = options.agent_id_num
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