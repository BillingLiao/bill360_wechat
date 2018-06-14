'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function getDataStr(today, addDayCount) {
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

var fast_search = function (_wepy$page) {
  _inherits(fast_search, _wepy$page);

  function fast_search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, fast_search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = fast_search.__proto__ || Object.getPrototypeOf(fast_search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '快速查票',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      index: 0,
      size: 10,
      core: '',
      int: 2,
      hotData: [],
      historyData: [],
      time: '12:01',
      date: getDataStr(null, 365),
      subsidy: 100000,
      historyNone: '',
      //hotNone: '',
      isHotOrHistory: wx.getStorageSync('isHotOrHistory')
    }, _this.methods = {
      coreInput: function coreInput(input) {
        this.core = input.detail.value;
      },

      bindDateChange: function bindDateChange(e) {
        var that = this;
        this.date = e.detail.value;
        wx.setStorageSync('endDate', that.date);
      },
      subsidyInput: function subsidyInput(input) {
        var that = this;
        this.subsidy = input.detail.value;
        wx.setStorageSync('fastSubsidy', that.subsidy);
      },
     // addrInput: function addrInput(input) {
     //   this.addr = input.detail.value;
      //},
      cleanHistory: function cleanHistory() {
        this.historyNone = 'none';
      },
      //cleanHot: function cleanHot() {
      //  this.hotNone = 'none';
     // },

      // 点击历史记录
      clickHistory: function clickHistory(e) {
        var that = this;
        var historyWord = e.currentTarget.dataset.title;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360/acceptance/fast',
          data: {
            core: historyWord,
            token: that.token,
            index: that.index,
            size: that.size
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function success(res) {
            if (res.data.data == null) {
              wx.showModal({
                content: '查询不到该条票据信息',
                showCancel: false
              });
            } else {
              wx.setStorageSync('fastCore', res.data.data);
              wx.setStorageSync('isHotOrHistory', true);
              wx.navigateTo({
                url: 'fast_search_result'
              });
            }
          }
        });
      },

      // 点击热门搜索
      clickHot: function clickHot(e) {
        var hotWord = e.currentTarget.dataset.title;
        var that = this;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360/acceptance/fast',
          data: {
            core: hotWord,
            token: that.token,
            index: that.index,
            size: that.size
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function success(res) {
            if (res.data.data == null) {
              wx.showModal({
                content: '查询不到该条票据信息',
                showCancel: false
              });
            } else {
              wx.setStorageSync('fastCore', res.data.data);
              wx.setStorageSync('isHotOrHistory', true);

              wx.navigateTo({
                url: 'fast_search_result'
              });
            }
          }
        });
      },
      getData: function getData() {
        var that = this;
        if (this.core != '') {
          wx.request({
            url: 'https://xcx.wenxikeji.com//bill360/acceptance/fast',
            data: {
              core: that.core,
              token: that.token,
              index: that.index,
              size: that.size
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              if (res.data.data == null) {
                wx.showModal({
                  content: '查询不到该条票据信息',
                  showCancel: false
                });
              } else {
                wx.setStorageSync('fastCore', res.data.data);
                wx.setStorageSync('fastSubsidy', that.subsidy);
                wx.setStorageSync('endDate', that.date, );
                wx.setStorageSync('isHotOrHistory', false);
                wx.navigateTo({
                  url: 'fast_search_result'
                });

              }
            }
          });
        } else if (this.core == '') {
          wx.showModal({
            content: '请输入核心企业名称',
            showCancel: false
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(fast_search, [{
    key: 'onShow',
    value: function onShow() {
      this.core = '';
      this.subsidy = 100000;
      this.date = getDataStr(null, 365);
    }
  }, {
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
        key: 'historyData',
        success: function success(res) {
          that.historyData = res.data;
        }
      });
      wx.getStorage({
        key: 'hotData',
        success: function success(res) {
          that.hotData = res.data;
        }
      });
    }
  }]);

  return fast_search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(fast_search, 'pages/fast_search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc3Rfc2VhcmNoLmpzIl0sIm5hbWVzIjpbImZhc3Rfc2VhcmNoIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsImNvcmUiLCJpbmRleCIsInNpemUiLCJpbnQiLCJob3REYXRhIiwiaGlzdG9yeURhdGEiLCJ0aW1lIiwiZGF0ZSIsImJpbGxJZCIsImhpc3RvcnlOb25lIiwiaG90Tm9uZSIsImNvbXBhbnkiLCJtZXRob2RzIiwiY29yZUlucHV0IiwiaW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmREYXRlQ2hhbmdlIiwiZSIsInRoYXQiLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJjb21wYW55SW5wdXQiLCJhZGRySW5wdXQiLCJhZGRyIiwiY2xlYW5IaXN0b3J5IiwiY2xlYW5Ib3QiLCJjbGlja0hpc3RvcnkiLCJoaXN0b3J5V29yZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGl0bGUiLCJyZXF1ZXN0IiwidXJsIiwidG9rZW4iLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY291bnQiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImlkIiwicGhvbmUiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsImNsaWNrSG90IiwiaG90V29yZCIsImdldERhdGEiLCJnZXRTdG9yYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLG9DQUE4QixTQUZ2QjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQUtUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsV0FBSyxDQUpBO0FB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Z0MsVUFBSCxDQUFjO0FBQ1o5QixhQUFLLFNBRE87QUFFWmdCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJwQixlQUFLZixPQUFMLEdBQWVtQyxJQUFJeEMsSUFBbkI7QUFDRDtBQUpXLE9BQWQ7QUFNRDs7OztFQXJRc0MsZUFBS3NELEk7O2tCQUF6QjNELFciLCJmaWxlIjoiZmFzdF9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZhc3Rfc2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5b+r6YCf5p+l56WoJyxcclxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDI0OUEwJyxcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBjb3JlOiAnJyxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgc2l6ZTogMTAsXHJcbiAgICBpbnQ6IDIsXHJcbiAgICBob3REYXRhOiBbXSxcclxuICAgIGhpc3RvcnlEYXRhOiBbXSxcclxuICAgIHRpbWU6ICcxMjowMScsXHJcbiAgICBkYXRlOiAnJyxcclxuICAgIGJpbGxJZDogJycsXHJcbiAgICBoaXN0b3J5Tm9uZTogJycsXHJcbiAgICBob3ROb25lOiAnJyxcclxuICAgIGNvbXBhbnk6ICcnXHJcbiAgfTtcclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmNvcmUgPSAnJztcclxuICAgIHRoaXMuY29tcGFueSA9ICcnO1xyXG4gICAgdGhpcy5hZGRyID0gJyc7XHJcbiAgICB0aGlzLmRhdGUgPSAnJztcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNvcmVJbnB1dChpbnB1dCkge1xyXG4gICAgICB0aGlzLmNvcmUgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYmluZERhdGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGlzLmRhdGUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAnZW5kRGF0ZScsXHJcbiAgICAgICAgZGF0YTogdGhhdC5kYXRlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvbXBhbnlJbnB1dChpbnB1dCkge1xyXG4gICAgICB0aGlzLmNvbXBhbnkgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYWRkcklucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMuYWRkciA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBjbGVhbkhpc3RvcnkoKSB7XHJcbiAgICAgIHRoaXMuaGlzdG9yeU5vbmUgPSAnbm9uZSc7XHJcbiAgICB9LFxyXG4gICAgY2xlYW5Ib3QoKSB7XHJcbiAgICAgIHRoaXMuaG90Tm9uZSA9ICdub25lJztcclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vljoblj7LorrDlvZVcclxuICAgIGNsaWNrSGlzdG9yeShlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgbGV0IGhpc3RvcnlXb3JkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGl0bGU7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL2JpbGwvZmFzdCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY29yZTogaGlzdG9yeVdvcmQsXHJcbiAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgIGluZGV4OiB0aGF0LmluZGV4LFxyXG4gICAgICAgICAgc2l6ZTogdGhhdC5zaXplXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5jb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+afpeivouS4jeWIsOivpeadoeelqOaNruS/oeaBrycsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LmJpbGxJZCA9IHJlcy5kYXRhLmRhdGEuY29udGVudFswXS5pZDtcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC9vcmRlci9pZCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGF0LmJpbGxJZCxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdmYXN0UmVzdWx0JyxcclxuICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ2Zhc3RQaG9uZScsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGEucGhvbmVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEuY29udGVudCk7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIGtleTogJ2Zhc3RDb3JlJyxcclxuICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJ2Zhc3Rfc2VhcmNoX3Jlc3VsdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vng63pl6jmkJzntKJcclxuICAgIGNsaWNrSG90KGUpIHtcclxuICAgICAgbGV0IGhvdFdvcmQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aXRsZTtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy9iaWxsL2Zhc3QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNvcmU6IGhvdFdvcmQsXHJcbiAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgIGluZGV4OiB0aGF0LmluZGV4LFxyXG4gICAgICAgICAgc2l6ZTogdGhhdC5zaXplXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5jb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+afpeivouS4jeWIsOivpeadoeelqOaNruS/oeaBrycsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LmJpbGxJZCA9IHJlcy5kYXRhLmRhdGEuY29udGVudFswXS5pZDtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAga2V5OiAnZmFzdFJlc3VsdCcsXHJcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5jb250ZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwL29yZGVyL2lkJyxcclxuICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoYXQuYmlsbElkLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoYXQudG9rZW5cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ2Zhc3RSZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAga2V5OiAnZmFzdFBob25lJyxcclxuICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5waG9uZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAga2V5OiAnZmFzdENvcmUnLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGEuY29udGVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnZmFzdF9zZWFyY2hfcmVzdWx0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKHRoaXMuY29yZSAhPSAnJykge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC8vYmlsbC9mYXN0JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29yZTogdGhhdC5jb3JlLFxyXG4gICAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgICAgaW5kZXg6IHRoYXQuaW5kZXgsXHJcbiAgICAgICAgICAgIHNpemU6IHRoYXQuc2l6ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5jb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmn6Xor6LkuI3liLDor6XmnaHnpajmja7kv6Hmga8nLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyB0aGF0LmJpbGxJZCA9IHJlcy5kYXRhLmRhdGEuY29udGVudFswXS5pZDtcclxuICAgICAgICAgICAgICAvLyB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAvLyAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvb3JkZXIvaWQnLFxyXG4gICAgICAgICAgICAgIC8vICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAvLyAgICAgaWQ6IHRoYXQuYmlsbElkLFxyXG4gICAgICAgICAgICAgIC8vICAgICB0b2tlbjogdGhhdC50b2tlblxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDQpIHtcclxuICAgICAgICAgICAgICAvLyAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnZmFzdFJlc3VsdCcsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICBrZXk6ICdmYXN0UGhvbmUnLFxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5waG9uZVxyXG4gICAgICAgICAgICAgIC8vICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdmYXN0X3NlYXJjaF9yZXN1bHQnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIGtleTogJ2Zhc3RDb3JlJyxcclxuICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb3JlID09ICcnKSB7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmoLjlv4PkvIHkuJrlkI3np7AnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQudG9rZW4gPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaGlzdG9yeURhdGEnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0Lmhpc3RvcnlEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2hvdERhdGEnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmhvdERhdGEgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==