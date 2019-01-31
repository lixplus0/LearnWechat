//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  //清空日志
  clearLogs: function() {
    this.setData({
      logs: []
    })
    wx.setStorageSync('logs', [])
  },

  //读取日志记录
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})