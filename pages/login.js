'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录/注册',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black'
    }, _this.data = {
      phone: '',
      token: '',
      code: '',
      cardData: '',
      currentTime: 61,
      time: '获取验证码',
      disabled: false
    }, _this.methods = {
      getInfo: function getInfo() {
        var that = this;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360//user/code',
          data: {
            phone: that.phone,
            token: that.token
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            if (res.data.code == 2) {
              wx.showModal({
                title: '提示',
                content: res.data.message,
                showCancel: false
              });
            } else if (res.data.code == 0) {
              that.getCode();
              wx.showToast({
                title: res.data.message,
                icon: 'success',
                duration: 2000
              });
            } else if (res.data.code == 1) {
              wx.showModal({
                title: '提示',
                content: res.data.message,
                showCancel: false
              });
            }
            console.log(res.data);
          },
          error: function error(res) {
            console.log(res.data);
          }
        });
      },


      inputPhone: function inputPhone(input) {
        this.phone = input.detail.value;
      },
      inputCode: function inputCode(input) {
        this.code = input.detail.value;
        this.$apply();
      },
      login: function login() {
        var that = this;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360/user/phone',
          data: {
            token: that.token,
            phone: that.phone,
            code: that.code
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            console.log(res.data.code);
            if (that.phone == '') {
              wx.showModal({
                content: '请输入手机号',
                showCancel: false
              });
            } else if (this.phone == /^(13[0-9]{9})|(19[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/) {
              wx.showModal({
                content: '请确认手机号是否正确',
                showCancel: false
              });
            } else if (that.code == '') {
              wx.showModal({
                content: '请输入验证码',
                showCancel: false
              });
            } else if (res.data.code == 0) {
              wx.showToast({
                title: res.data.message,
                icon: 'success',
                duration: 2000
              });
              wx.setStorage({
                key: 'hintLogin',
                data: res.data.message
              });
              wx.setStorage({
                key: 'loginAccount',
                data: that.phone
              });
              setTimeout(function () {
                wx.navigateTo({
                  url: 'index'
                });
              }, 2000);
            } else if (res.data.code == 1) {
              wx.showModal({
                content: res.data.message,
                showCancel: false
              });
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getCode',
    value: function getCode(options) {
      var that = this;
      var currentTime = that.data.currentTime;
      var interval = null;
      interval = setInterval(function () {
        currentTime--;

        that.time = '获取验证码(' + currentTime + '秒)';
        that.disabled = true;

        if (currentTime <= 0) {
          clearInterval(interval);
          that.time = '获取验证码';
          that.currentTime = 61;
          that.disabled = false;
          that.$apply();
        }
        that.$apply();
      }, 1000);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getStorage({
        key: 'token',
        success: function success(res) {
          that.token = res.data;
          wx.request({
            url: 'https://xcx.wenxikeji.com//bill360//card/my',
            method: 'POST',
            data: {
              token: that.token
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              that.cardData = res.data.data;
              console.log(that.cardData);
              wx.setStorage({
                key: 'cardInfo',
                data: that.cardData
              });
            }
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsInBob25lIiwidG9rZW4iLCJjb2RlIiwiY2FyZERhdGEiLCJjdXJyZW50VGltZSIsInRpbWUiLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJnZXRJbmZvIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwic2hvd0NhbmNlbCIsImdldENvZGUiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpbnB1dFBob25lIiwiaW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImlucHV0Q29kZSIsIiRhcHBseSIsImxvZ2luIiwic2V0U3RvcmFnZSIsImtleSIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwib3B0aW9ucyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZ2V0U3RvcmFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyxvQ0FBOEIsTUFGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxZQUFNLE9BTkQ7QUFPTEMsZ0JBQVU7QUFQTCxLLFFBNkJQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLFlB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QkFnSFE7QUFDUCxVQUFJekIsT0FBTyxJQUFYO0FBQ0FDLFNBQUdrQyxVQUFILENBQWM7QUFDWlAsYUFBSyxPQURPO0FBRVp0QixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCxlQUFLUixLQUFMLEdBQWFlLElBQUlqQixJQUFqQjtBQUNBVyxhQUFHQyxPQUFILENBQVc7QUFDVEMsaUJBQUssNkNBREk7QUFFVEMsb0JBQVEsTUFGQztBQUdUZCxrQkFBTTtBQUNKRSxxQkFBT1EsS0FBS1I7QUFEUixhQUhHO0FBTVRhLG9CQUFRO0FBQ04sOEJBQWdCO0FBRFYsYUFOQztBQVNUQyxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCxtQkFBS04sUUFBTCxHQUFnQmEsSUFBSWpCLElBQUosQ0FBU0EsSUFBekI7QUFDQTJCLHNCQUFRQyxHQUFSLENBQVlsQixLQUFLTixRQUFqQjtBQUNBTyxpQkFBRzBCLFVBQUgsQ0FBYztBQUNaQyxxQkFBSSxVQURRO0FBRVp0QyxzQkFBS1UsS0FBS047QUFGRSxlQUFkO0FBSUQ7QUFoQlEsV0FBWDtBQWtCRDtBQXRCVyxPQUFkO0FBd0JEOzs7O0VBNUtnQyxlQUFLMEMsSTs7a0JBQW5CbkQsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUv5rOo5YaMJyxcclxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBwaG9uZTogJycsXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICBjb2RlOiAnJyxcclxuICAgIGNhcmREYXRhOiAnJyxcclxuICAgIGN1cnJlbnRUaW1lOiA2MSxcclxuICAgIHRpbWU6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgfTtcclxuICBnZXRDb2RlKG9wdGlvbnMpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBjdXJyZW50VGltZSA9IHRoYXQuZGF0YS5jdXJyZW50VGltZTtcclxuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XHJcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdXJyZW50VGltZS0tO1xyXG5cclxuICAgICAgdGhhdC50aW1lID0gJ+iOt+WPlumqjOivgeeggSgnICsgY3VycmVudFRpbWUgKyAn56eSKSc7XHJcbiAgICAgIHRoYXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRUaW1lIDw9IDApIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB0aGF0LnRpbWUgPSAn6I635Y+W6aqM6K+B56CBJztcclxuICAgICAgICB0aGF0LmN1cnJlbnRUaW1lID0gNjE7XHJcbiAgICAgICAgdGhhdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgZ2V0SW5mbygpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy91c2VyL2NvZGUnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBob25lOiB0aGF0LnBob25lLFxyXG4gICAgICAgICAgdG9rZW46IHRoYXQudG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIC8vIOm7mOiupOWAvFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGF0LmdldENvZGUoKTtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGlucHV0UGhvbmU6IGZ1bmN0aW9uKGlucHV0KSB7XHJcbiAgICAgIHRoaXMucGhvbmUgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgaW5wdXRDb2RlOiBmdW5jdGlvbihpbnB1dCkge1xyXG4gICAgICB0aGlzLmNvZGUgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9LFxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC91c2VyL3Bob25lJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgIHBob25lOiB0aGF0LnBob25lLFxyXG4gICAgICAgICAgY29kZTogdGhhdC5jb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuY29kZSk7XHJcbiAgICAgICAgICBpZiAodGhhdC5waG9uZSA9PSAnJykge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgdGhpcy5waG9uZSA9PVxyXG4gICAgICAgICAgICAvXigxM1swLTldezl9KXwoMTlbMC05XXs5fSl8KDE4WzAtOV17OX0pfCgxNFswLTldezl9KXwoMTdbMC05XXs5fSl8KDE1WzAtOV17OX0pJC9cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fnoa7orqTmiYvmnLrlj7fmmK/lkKbmraPnoa4nLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGF0LmNvZGUgPT0gJycpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdoaW50TG9naW4nLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAga2V5OiAnbG9naW5BY2NvdW50JyxcclxuICAgICAgICAgICAgICBkYXRhOiB0aGF0LnBob25lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdwZXJzb25DZW50ZXInXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnRva2VuID0gcmVzLmRhdGE7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy9jYXJkL215JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0b2tlbjogdGhhdC50b2tlblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgdGhhdC5jYXJkRGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY2FyZERhdGEpO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6J2NhcmRJbmZvJyxcclxuICAgICAgICAgICAgICBkYXRhOnRoYXQuY2FyZERhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==