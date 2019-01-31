Page({
  data: {
    animationData: {}
  },
  onShow() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })
    let that=this
    that.animation = animation
    let pos = 290;
    that.animation.translateX(pos).step()
    that.setData({
      animationData: that.animation.export()
    })
    //连续动画需要添加定时器,所传参数每次+1就行
    setInterval(function () {

      that.animation.opacity(1).translateX(-pos).step({duration:2000}).translateX(pos).step({duration:10})
      that.setData({
        animationData: that.animation.export()
      })

    }, 2000)
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
