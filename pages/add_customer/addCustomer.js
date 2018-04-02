// pages/add_customer/addCustomer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agent_id_num: '',
    items: [
      { name: '1', value: '男', checked: 'true' },
      { name: '0', value: '女' }
    ]
  },

  addSuccess: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var telephone = e.detail.value.telephone;
    var sex = e.detail.value.sex;
    var description = e.detail.value.description;
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
    } else if (description.length === 0) {
      wx.showToast({
        title: '请输入描述说明',
        image: '/images/error.png',
        duration: 2000
      })
    } else {
      wx.request({
        method: 'POST',
        url: 'http://localhost:8080/mini/addCustomer', //接口地址
        data: {
          'name': name,
          'telephone': telephone,
          'sex': sex,
          'description': description,
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
                url: '../home/home'
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