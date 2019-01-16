// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        inputValue: "",
        calcResult: "",
        
    },

    formSubmit: function (e) {
        this.setData({
            calcResult: parseInt(e.detail.value['inputValue'])+5
        })
    },
    
    formReset: function (e) {
        inputValue: ""
        calcResult: ""
    },

    array2D(dim1, dim2) {
        for(var i = 0; i<dim1; ++i)
            {
                this[i] = new Array(dim2)
            }
        this.length = new Array(dim1, dim2)
    },

    checkValid(inpstrs) {
        var t1 = inpstrs;
        if (t1 == "") return 0;
        var ValidChrs = "ABCDEFGHIKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()."
        for (var i = 0; i <= t1.length - 1; i++) {
            if (ValidChrs.indexOf(t1.charAt(i)) == -1) {
                var t2 = t1.charAt(i)

                if (t2 == " ") t2 = '空格';
                if (t2 == "Q" || t2 == "J") {
                    alert(t2 + "  - 没有这个式"); return 0;
                }
                alert(t2 + "   -不允许"); return 0;
            }
        }
        return 1
    },

    checkString(inpStr) {
        var strnumber = "0123456789"
        var strsmall = "abcdefghijklmnopqrstuvwxyz"
        var strcapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var strdecimal = "."
        var stropen = "("
        var strclose = ")"
        if (strnumber.indexOf(inpStr) != -1) return "0";
        if (strsmall.indexOf(inpStr) != -1) return "-";
        if (strcapital.indexOf(inpStr) != -1) return "1";
        if (inpStr == ".") return ".";
        if (inpStr == "(") return "(";
        if (inpStr == ")") return ")";
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