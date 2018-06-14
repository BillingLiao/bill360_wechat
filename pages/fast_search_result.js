'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function getDateStr(today, addDayCount) {
  var dd;
  if (today) {
    dd = new Date(today);
  } else {
    dd = new Date();
  }
  dd.setDate(dd.getDate() + addDayCount);//获取AddDayCount天后的日期 
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;//获取当前月份的日期 
  var d = dd.getDate();
  if (m < 10) {
    m = '0' + m;
  };
  if (d < 10) {
    d = '0' + d;
  };
  return y + "-" + m + "-" + d;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var personCenter = function (_wepy$page) {
  _inherits(personCenter, _wepy$page);

  function personCenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, personCenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = personCenter.__proto__ || Object.getPrototypeOf(personCenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '查询结果',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      fastCore: [],
      id: '',
      token: '',
      core: '',
      endDate: '',
      fastSubsidy: '',
      isHotOrHistory: wx.getStorageSync('isHotOrHistory')
    }, _this.methods = {

      url: function url(e) {
        var that = this;
        wx.request({
          url: 'https://xcx.wenxikeji.com/bill360/bill/fastByCore',
          data: {
            token: that.token,
            core: e.target.id
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          success: function (res) {
            if (res.data.data == null) {
              wx.showModal({
                content: '查询不到该条票据信息',
                showCancel: false
              });
            } else {

              that.billId = res.data.data.id;

              wx.setStorage({
                key: 'minBill',
                data: res.data.data
              });

              if (wx.getStorageSync('isHotOrHistory') == false) {
                if (that.fastSubsidy == null || that.fastSubsidy == "") {
                  that.fastSubsidy = 100000;
                  wx.setStorageSync('fastSubsidy', that.fastSubsidy);
                }
                if (that.endDate == null || that.endDate == "") {
                  that.endDate = getDateStr(null, 365);
                }
                wx.request({
                  url: 'https://xcx.wenxikeji.com//bill360/order/calc',
                  data: {
                    token: that.token,
                    billId: that.billId,
                    money: that.fastSubsidy,
                    time: that.endDate
                  },
                  method: 'POST',
                  header: { 'content-type': 'application/x-www-form-urlencoded' },
                  success: function success(res) {
                    if (res.data.code == 0) {
                      console.log(res.data);
                      that.money = res.data.data.interestUnit;
                      that.day = res.data.data.day;
                      that.interest = res.data.data.interest;
                      wx.setStorageSync('fastDay', that.day);
                      wx.setStorageSync('fastMoney', that.money);
                      wx.setStorageSync('fastInterest', that.interest);
                      console.log(that.day);
                      that.$apply();
                      wx.navigateTo({
                        url: 'search_result'
                      });
                    } else if (res.data.code == 2) {
                      wx.showModal({
                        content: res.data.message,
                        showCancel: false
                      });
                    }
                  }
                });
              }
              else if (wx.getStorageSync('isHotOrHistory') == true) {
                that.bill = res.data.data;
                var day = 365;
                var subsidy = 100000;
                var money = that.bill.ayinterest;
                var interest = that.bill.ayinterest;
                wx.setStorageSync('fastDay', day);
                wx.setStorageSync('fastSubsidy', subsidy);
                wx.setStorageSync('fastMoney', money);
                wx.setStorageSync('fastInterest', interest);
                wx.setStorageSync('isHotOrHistory', false);

                wx.navigateTo({
                  url: 'search_result'
                });

              }



            }
          },
        });

      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(personCenter, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getStorage({
        key: 'token',
        success: function success(res) {
          that.token = res.data;
        }
      });

      wx.getStorage({
        key: 'endDate',
        success: function success(res) {
          that.endDate = res.data;
        }
      });

      wx.getStorage({
        key: 'fastSubsidy',
        success: function success(res) {
          that.fastSubsidy = res.data;
        }
      });

      wx.getStorage({
        key: 'fastCore',
        success: function success(res) {
          that.fastCore = res.data;
        },
      });

    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter, 'pages/fast_search_result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc3Rfc2VhcmNoX3Jlc3VsdC5qcyJdLCJuYW1lcyI6WyJwZXJzb25DZW50ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiY29yZUxpc3QiLCJpZCIsIm1ldGhvZHMiLCJ1cmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ0aGF0IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImNvbXBsZXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLG9DQUE4QixTQUZ2QjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQUtUQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxVQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFOSyxLLFFBUVBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsZUFBSztBQURPLFNBQWQ7QUFHRDtBQXRCTyxLOzs7Ozs2QkF3QkQ7QUFDUCxVQUFJRyxPQUFPLElBQVg7QUFDQUYsU0FBR0csVUFBSCxDQUFjO0FBQ1pDLGFBQUssVUFETztBQUVaQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFJWCxJQUFoQjtBQUNBTyxlQUFLTixRQUFMLEdBQWdCVSxJQUFJWCxJQUFwQjtBQUNELFNBTFc7QUFNWmMsY0FBTSxnQkFBVztBQUNmO0FBQ0QsU0FSVztBQVNaQyxrQkFBVSxvQkFBVztBQUNuQjtBQUNEO0FBWFcsT0FBZDtBQWFEOzs7O0VBckR1QyxlQUFLQyxJOztrQkFBMUJyQixZIiwiZmlsZSI6ImZhc3Rfc2VhcmNoX3Jlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGVyc29uQ2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p+l6K+i57uT5p6cJyxcclxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDI0OUEwJyxcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBjb3JlTGlzdDogW10sXHJcbiAgICBpZDogJydcclxuICAgIC8vIG5hdmlnYXRvclxyXG4gICAgLy8gIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgLy8gdXJsOiAnc2VhcmNoX3Jlc3VsdCdiaWxsL2lkXHJcbiAgICAvLyB9KTtcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB1cmwoKSB7XHJcbiAgICAgIC8vIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAvLyAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL2JpbGwvaWQnLFxyXG4gICAgICAvLyAgIGRhdGE6IHsgaWQ6IHRoYXQuaWQgfSxcclxuICAgICAgLy8gICBoZWFkZXI6IHtcclxuICAgICAgLy8gICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIC8vICAgICAvLyBzdWNjZXNzXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gICAgIC8vIGZhaWxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gICAgIC8vIGNvbXBsZXRlXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KTtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnc2VhcmNoX3Jlc3VsdCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnZmFzdENvcmUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhhdC5jb3JlTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBmYWlsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBjb21wbGV0ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19