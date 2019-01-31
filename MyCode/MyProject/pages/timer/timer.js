// pages/timer/timer.js
Page({

  data: {

  },


  onLoad: function() {
    console.log(this.inner(3))
  },
  inner: function(n) {
    let that = this;
    let oDate = new Date();
    let now = that.formatNumber(oDate.getHours()) + that.formatNumber(oDate.getMinutes()) + that.formatNumber(oDate.getSeconds());
  },
  //个位时间加零
  formatNumber: function(n) {
    return n < 10 ? '0' + n : '' + n;
  }
})