// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', value: '男', checked: 'true' },
      { name: '0', value: '女' }
    ]
  },
  bindLoginTap: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  inputNameRight: function (e) {   //获取input输入的值
    var that = this;
    that.setData({
      name: e.detail.value
    })
    var name = that.data.name
    if (name.length === 0) {
      wx.showToast({
        title: '姓名不能为空',
        image: '/images/error.png',
        duration: 2000
      })
    }
  },
  inputTelephoneRight: function (e) {    //获取input输入的值
    var that = this;
    that.setData({
      telephone: e.detail.value
    })
    var telephone = that.data.telephone
    if (!(telephone.length === 11)) {
      wx.showToast({
        title: '请输入11数电话号码',
        image: '/images/error.png',
        duration: 2000
      })
    }
  },
  inputPasswdRight: function (e) {    //获取input输入的值
    var that = this;
    that.setData({
      passwd: e.detail.value
    })
    var passwd = that.data.passwd
    if (passwd.length === 0) {
      wx.showToast({
        title: '密码不能为空',
        image: '/images/error.png',
        duration: 2000
      })
    }
  },
  inputIDNumRight: function (e) {    //获取input输入的值
    var that = this;
    that.setData({
      id_num: e.detail.value
    })
    var id_num = that.data.id_num
    if (!(id_num.length === 15 || id_num.length === 18)) {
      wx.showToast({
        title: '请输入15或18位数身份证号码',
        image: '/images/error.png',
        duration: 2000
      })
    }
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  registerSuccess: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var telephone = e.detail.value.telephone;
    var passwd = e.detail.value.passwd;
    var id_num = e.detail.value.id_num;
    var sex = e.detail.value.sex;
    if (name.length === 0) {
      wx.showToast({
        title: '姓名不能为空',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (!(telephone.length === 11)) {
      wx.showToast({
        title: '请输入11数电话号码',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (passwd.length === 0) {
      wx.showToast({
        title: '密码不能为空',
        image: '/images/error.png',
        duration: 2000
      })
    } else if (!(id_num.length === 15 || id_num.length === 18)) {
      wx.showToast({
        title: '请输入15或18位数身份证号码',
        image: '/images/error.png',
        duration: 2000
      })
    } else {
      wx.request({
        method: 'POST',
        url: 'http://localhost:8080/mini/register', //接口地址
        data: {
          'name': name,
          'telephone': telephone,
          'passwd': passwd,
          'id_num': id_num
        },
        header: { 'content-type': 'application/json' },
        success: function (res) {
          if (res.data == "SUCCESS") {
            wx.showToast({
              title: '注册成功',
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