// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  loginSuccess: function (e) {
    var that = this;
    var id_num = e.detail.value.id_num;
    var passwd = e.detail.value.passwd;
    if (!(id_num.length === 15 || id_num.length === 18)) {
      wx.showToast({
        title: '请输入15或18位数身份证号码',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (passwd.length === 0) {
      wx.showToast({
        title: '密码不能为空',
        image: '/images/error.png',
        duration: 2000
      })
    } else {
      wx.request({
        method: 'POST',
        url: 'http://localhost:8080/mini/login', //接口地址
        data: {
          'passwd': passwd,
          'id_num': id_num
        },
        header: { 'content-type': 'application/json' },
        success: function (res) {
          if (res.data != "SUCCESS") {
            wx.showToast({
              title: res.data,
              image: '/images/error.png',
              duration: 2000
            })
          }
          setTimeout(function () {
            if (wx.reLaunch) {
              wx.reLaunch({
                url: '../home/home?agent_id_num=' + id_num
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