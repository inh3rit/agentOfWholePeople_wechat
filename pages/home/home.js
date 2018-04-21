// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agent_id_num: ''
  },

  bindCustomerTap: function () {
    wx.navigateTo({
      url: '../add_customer/addCustomer?agent_id_num=' + this.agent_id_num,
    })
  },

  bindCreditcardTap: function () {
    wx.navigateTo({
      url: '../add_creditcard/addCreditcard?agent_id_num=' + this.agent_id_num,
    })
  },

  bindMyCustomerTap: function () {
    wx.navigateTo({
      url: '../add_customer/addCustomer?agent_id_num=' + this.agent_id_num,
    })
  },

  bindMyCreditcardTap: function () {
    wx.navigateTo({
      url: '../add_creditcard/addCreditcard?agent_id_num=' + this.agent_id_num,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.agent_id_num = options.agent_id_num;
    var that = this;
    wx.request({
      method: 'GET',
      // url: 'http://192.168.104.191/mini/getCustomers?agentIdNum=' + options.agent_id_num, //接口地址
      // url: 'http://localhost/mini/getCustomers?agentIdNum=' + options.agent_id_num, //接口地址
      url: 'https://inh3rit.top/mini/getCustomers?agentIdNum=' + options.agent_id_num, //接口地址
      header: { 'content-type': 'application/json' },
      success: function (res) {
        that.setData({
          customers: res.data
        })
      }
    });

    wx.request({
      method: 'GET',
      // url: 'http://192.168.104.191/mini/getCreditCards?agentIdNum=' + options.agent_id_num, //接口地址
      // url: 'http://localhost/mini/getCreditCards?agentIdNum=' + options.agent_id_num, //接口地址
      url: 'https://inh3rit.top/mini/getCreditCards?agentIdNum=' + options.agent_id_num, //接口地址
      header: { 'content-type': 'application/json' },
      success: function (res) {
        that.setData({
          creditCards: res.data
        })
      }
    })
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