var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({
    data: {
        toView: 'red',
        toViewH: 'red',
        scrollTop: 0
    },
    /**
     * scroll-view api
     */
    upper: function (e) {
        console.log(e)
    },
    lower: function (e) {
        console.log(e)
    },
    scroll: function (e) {
        console.log(e)
    },
    tap: function (e) {
        for (var i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1]
                })
                break
            }
        }
    },
    tap2: function (e) {
      for (var i = order.length-1; i > 0; --i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i - 1]
                })
                break
            }
        }
    },
    tapH: function (e) {
      for (var i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toViewH) {
          this.setData({
            toViewH: order[i + 1]
          })
          break
        }
      }
    },
    tapMove: function (e) {
        this.setData({
            scrollTop: this.data.scrollTop + 20
        })
    }

})