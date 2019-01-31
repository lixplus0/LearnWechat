//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logo: "../../resources/logo.png",
    mode: "aspectFit",
    input_name: "",
    will_attend: true,
    date_checked: true,
    errorMessage: ""
  },

  // 提交表单
  formSubmit: function (e) {
    var _this = this
    if (e.detail.value.input_name == "" || e.detail.value.input_phone == "") {
      this.showErrorMessage("请填写姓名和电话!"); 
    }
    else {
      wx.showToast({
        title: '正在提交数据...',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: 'https://partytogetherbackend.azurewebsites.net/api/party',
        data: {
          Name: e.detail.value.input_name,
          Phone: e.detail.value.input_phone,
          Date: e.detail.value.input_date,
          Will_Attend: e.detail.value.input_attend
        },
        method: "POST",
        header: {
          'content-type': 'application/json; charset=UTF-8'
        },
        success: function (res) {
          var statusCode = res.statusCode
          var resMsg = res.data
          if (statusCode == 200 && resMsg == "created") {
            wx.redirectTo({
              url: '../created/created?name=' + e.detail.value.input_name,
            })
          }
          else if (resMsg == "failed") {
            _this.showErrorMessage("保存失败，请重试！")
          }
          else {
            // undefined error happened!
          }
        },
        fail: function () {
          _this.showErrorMessage("保存失败，请重试！")
        },
        complete: function () {
          wx.hideToast()
        }
      })
    }
  },

  formReset: function (e) {
    this.setData({
      date_checked: true,
      will_attend: true
    })
  },



  // 显示错误信息
  showErrorMessage: function(message) {

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
