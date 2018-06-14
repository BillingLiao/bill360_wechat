Page({
  data: {
    isauthorization: wx.getStorageSync('isauthorization'),
    nickName: '',
    avatarUrl: './../img/default.png',
    loginInfo: '点击登录',
    islogin: wx.getStorageSync('isLogin')
  },
  onLoad: function () {
    if (wx.getStorageSync('isLogin') != true) {
      this.setData({
        avatarUrl: './../img/default.png',
        loginInfo: '点击登录'
      })
    } else if (wx.getStorageSync('isLogin') == true) {
      this.setData({
        loginInfo: wx.getStorageSync('nickName'),
        avatarUrl: wx.getStorageSync('avatarUrl'),
      })
    }
  },
  onShow: function () {
    if (wx.getStorageSync('isLogin') != true) {
      this.setData({
        avatarUrl: './../img/default.png',
        loginInfo: '点击登录'
      })
    } else if (wx.getStorageSync('isLogin') == true) {
      this.setData({
        loginInfo: wx.getStorageSync('nickName'),
        avatarUrl: wx.getStorageSync('avatarUrl'),
      })
    }
  },
  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      this.setData({
        isauthorization: true
      });
      console.log(e.data);
      console.log(e.detail.userInfo);
      wx.setStorageSync('isauthorization', this.data.isauthorization);
      wx.setStorageSync('nickName', e.detail.userInfo.nickName);
      wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl);
    }
  },
  login: function () {
    var _this = this;
    if (wx.getStorageSync('isLogin') == true) {
      return false
    }
    wx.showLoading({
      title: '登录中...',
      mask: true
    });
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        console.log(res.code);
        wx.request({
          url: utils.host + '/api/v1/user/wxlogin',
          data: {
            code: code
          },
          header: {//请求头
            "Content-Type": "applciation/json",
            "Cookie": wx.getStorageSync('session')
          },
          method: "GET",
          success: function (res) {
            console.log(res);
            wx.setStorageSync('id', res.data.userid);
            wx.setStorageSync('token', res.data.token);
            wx.setStorageSync('session', res.header["Set-Cookie"]);
            wx.request({
              url: utils.host + '/api/v1/user/user?userid=' + wx.getStorageSync('id') + '&token=' + wx.getStorageSync('token'),
              data: {
                userid: Number(wx.getStorageSync('id')),
                name: wx.getStorageSync('nickName')
              },
              header: {
                "Content-Type": "application/json"
              },
              method: "PUT",
              success: function (res) {
                if (res.data.message == 'ok') {
                  console.log("13");
                  wx.setStorageSync('isLogin', true);
                  _this.setData({
                    loginInfo: wx.getStorageSync('nickName'),
                    avatarUrl: wx.getStorageSync('avatarUrl'),
                    isLogin: true,
                  });
                  wx.hideLoading();
                  _this.toastStyle("登录成功");
                }
              }
            })
          }
        })
      }
    });
  },
  jumpBindPhone: function () {
    if (wx.getStorageSync('isLogin') == true) {
      wx.navigateTo({
        url: '../bindEmail/bindEmail',
      })
    } else {
      this.toastStyle("请先登录");
    }
  },
  toastStyle: function (msg) {   //弹框事件
    var _this = this;
    this.setData({
      msgToast: msg,
      msgToastFlag: true
    });
    setTimeout(function () {
      _this.setData({
        msgToastFlag: false
      })
    }, 1500)
  }
})
