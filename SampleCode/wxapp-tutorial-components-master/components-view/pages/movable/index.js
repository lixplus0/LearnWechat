// index.js
Page({
    data: {
        x: 0,
        y: 0
    },
    tap: function (e) {
        this.setData({
            x: this.data.x+30,
            y: 30
        });
      console.log(this.data.x);
    },
    onChange: function (e) {
        console.log('this is touch change');
        console.log(e.detail)
    },
    onScale: function (e) {
        console.log('this is scale change');
        console.log(e.detail)
    }
})