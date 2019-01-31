//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mottos: [{
        "title": "手持弹幕(完成度30%)",
        "url": "../danmu/danmu"
      },
      {
        "title": "计算器(完成度90%)",
        "url": "../calc/calc"
      },
      {
        "title": "时钟演示(完成度0%)",
        "url": "../timer/timer"
      },
      {
        "title": "参与聚会(完成度70%)",
        "url": "../party/party"
      },
      {
        "title": "查看启动日志(完成度100%)",
        "url": "../logs/logs"
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //跳转小程序
  toMiniApp: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  //微信授权
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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