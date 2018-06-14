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
      enablePullDownRefresh: true,
      navigationBarTitleText: '我的业务订单',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      token: '',
      index: 0,
      size: 10,
      states: '',
      billId: '',
      processingList: [],
      clientHeight: '',
      category: '',
      img: '',
      isHideLoadMore: false
    }, _this.methods = {
      url_form: function url_form(event) {
        var that = this;
        that.billId = event.currentTarget.dataset.id;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360/order/id',
          data: {
            token: that.token,
            id: that.billId
          },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          method: 'POST',
          success: function success(res) {
            wx.setStorage({
              key: 'orderSearch',
              data: res.data.data
            });
            var downloadTask = wx.downloadFile({
              url: 'https://xcx.wenxikeji.com/bill360/inventory/ocr/' + res.data.data.img,
              type: 'image',
              success: function success(res) {
                console.log(res);
                console.log('1111');
                that.img = res.tempFilePath;
                console.log(that.img);
              }
            });
            downloadTask.onProgressUpdate(function (res) {
              console.log('下载进度', res.progress);
              console.log('已经下载的数据长度', res.totalBytesWritten);
              console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
            });
            console.log('223');
            downloadTask.abort(); // 取消下载任务
            console.log('223');
            
            wx.navigateTo({
              url: 'search_form'
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(personCenter, [{
    key: 'downSearch',

    // 下拉刷新顶部订单
    value: function downSearch() {
      var that = this;
      that.size += 10;
      wx.request({
        url: 'https://xcx.wenxikeji.com//bill360//order/my',
        data: {
          token: that.token,
          index: that.index,
          size: that.size
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function success(res) {
          if (res.data.data.content == '') {
            // wx.showToast({
            //   title:"到顶啦"
            // })
            return;
          } else {
            wx.setStorage({
              key: 'myProcessing',
              data: res.data.data.content
            });
            that.processingList = res.data.data.content;
            that.$apply();
          }
        }
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var that = this;
      console.log('加载更多');
      setTimeout(function () {
        that.isHideLoadMore = true, that.downSearch();
      }, 1000);
    }
    //下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showNavigationBarLoading(); //在标题栏中显示加载
      //模拟加载
      console.log('2222');
      setTimeout(function () {
        console.log('3333');
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //停止下拉刷新
      }, 1500);
      this.downSearch();
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;

      wx.getStorage({
        key: 'token',
        success: function success(res) {
          that.token = res.data;
        }
      });
      wx.getStorage({
        key: 'myProcessing',
        success: function success(res) {
          that.processingList = res.data;
        }
      });
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter , 'pages/myProcessing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UHJvY2Vzc2luZy5qcyJdLCJuYW1lcyI6WyJwZXJzb25DZW50ZXIiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwidG9rZW4iLCJpbmRleCIsInNpemUiLCJzdGF0ZXMiLCJiaWxsSWQiLCJwcm9jZXNzaW5nTGlzdCIsImNsaWVudEhlaWdodCIsImNhdGVnb3J5IiwiaW1nIiwiaXNIaWRlTG9hZE1vcmUiLCJtZXRob2RzIiwidXJsX2Zvcm0iLCJldmVudCIsInRoYXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwid3giLCJyZXF1ZXN0IiwidXJsIiwiaGVhZGVyIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldFN0b3JhZ2UiLCJrZXkiLCJkb3dubG9hZFRhc2siLCJkb3dubG9hZEZpbGUiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInRlbXBGaWxlUGF0aCIsIm9uUHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzcyIsInRvdGFsQnl0ZXNXcml0dGVuIiwidG90YWxCeXRlc0V4cGVjdGVkVG9Xcml0ZSIsImFib3J0IiwibmF2aWdhdGVUbyIsImNvbnRlbnQiLCIkYXBwbHkiLCJzZXRUaW1lb3V0IiwiZG93blNlYXJjaCIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJvcHRpb25zIiwiZ2V0U3RvcmFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDZCQUF1QixJQURoQjtBQUVQQyw4QkFBd0IsUUFGakI7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLDhCQUF3QjtB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RjtBQXpCUSxPQUFYO0FBMkJEOzs7b0NBQ2U7QUFDZCxVQUFJMUIsT0FBTyxJQUFYO0FBQ0FnQixjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBVSxpQkFBVyxZQUFNO0FBQ2QzQixhQUFLSixjQUFMLEdBQXNCLElBQXZCLEVBQThCSSxLQUFLNEIsVUFBTCxFQUE5QjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7QUFDRDs7Ozt3Q0FDb0I7QUFDbEJ4QixTQUFHeUIsd0JBQUgsR0FEa0IsQ0FDYTtBQUMvQjtBQUNBYixjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBVSxpQkFBVyxZQUFXO0FBQ3BCWCxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQWIsV0FBRzBCLHdCQUFILEdBRm9CLENBRVc7QUFDL0IxQixXQUFHMkIsbUJBQUgsR0FIb0IsQ0FHTTtBQUMzQixPQUpELEVBSUcsSUFKSDtBQUtBLFdBQUtILFVBQUw7QUFDRDs7OzJCQUNNSSxPLEVBQVM7QUFDZCxVQUFJaEMsT0FBTyxJQUFYOztBQUVBSSxTQUFHNkIsVUFBSCxDQUFjO0FBQ1pyQixhQUFLLE9BRE87QUFFWkgsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlYsZUFBS2IsS0FBTCxHQUFhdUIsSUFBSXhCLElBQWpCO0FBQ0Q7QUFKVyxPQUFkO0FBTUFrQixTQUFHNkIsVUFBSCxDQUFjO0FBQ1pyQixhQUFLLGNBRE87QUFFWkgsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlYsZUFBS1IsY0FBTCxHQUFzQmtCLElBQUl4QixJQUExQjtBQUNEO0FBSlcsT0FBZDtBQU1EOzs7O0VBbkl1QyxlQUFLZ0QsSTs7a0JBQTFCdEQsWSIsImZpbGUiOiJteVByb2Nlc3NpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNvbkNlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOS4muWKoeiuouWNlScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAyNDlBMCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgICBzaXplOiAxMCxcclxuICAgIHN0YXRlczogJycsXHJcbiAgICBiaWxsSWQ6ICcnLFxyXG4gICAgcHJvY2Vzc2luZ0xpc3Q6IFtdLFxyXG4gICAgY2xpZW50SGVpZ2h0OiAnJyxcclxuICAgIGNhdGVnb3J5OiAnJyxcclxuICAgIGltZzonJyxcclxuICAgIGlzSGlkZUxvYWRNb3JlOiBmYWxzZVxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHVybF9mb3JtKGV2ZW50KSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5iaWxsSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvb3JkZXIvaWQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgICAgaWQ6IHRoYXQuYmlsbElkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAnb3JkZXJTZWFyY2gnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGRvd25sb2FkVGFzayA9IHd4LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS9iaWxsMzYwL2JpbGwvb2NyLycrcmVzLmRhdGEuZGF0YS5pbWcsXHJcbiAgICAgICAgICAgIHR5cGU6J2ltYWdlJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTExMScpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbWcgPSByZXMudGVtcEZpbGVQYXRoO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5pbWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRvd25sb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuIvovb3ov5vluqYnLCByZXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5bey57uP5LiL6L2955qE5pWw5o2u6ZW/5bqmJywgcmVzLnRvdGFsQnl0ZXNXcml0dGVuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgJ+mihOacn+mcgOimgeS4i+i9veeahOaVsOaNruaAu+mVv+W6picsXHJcbiAgICAgICAgICAgICAgcmVzLnRvdGFsQnl0ZXNFeHBlY3RlZFRvV3JpdGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJzIyMycpO1xyXG4gICAgICAgICAgZG93bmxvYWRUYXNrLmFib3J0KCk7IC8vIOWPlua2iOS4i+i9veS7u+WKoVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJzIyMycpO1xyXG5cclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdzZWFyY2hfZm9ybSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyDkuIvmi4nliLfmlrDpobbpg6jorqLljZVcclxuICBkb3duU2VhcmNoKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhhdC5zaXplICs9IDEwO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL29yZGVyL215JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgIGluZGV4OiB0aGF0LmluZGV4LFxyXG4gICAgICAgIHNpemU6IHRoYXQuc2l6ZVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIC8vIOm7mOiupOWAvFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5jb250ZW50ID09ICcnKSB7XHJcbiAgICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgLy8gICB0aXRsZTpcIuWIsOmhtuWVplwiXHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAnbXlQcm9jZXNzaW5nJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5jb250ZW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoYXQucHJvY2Vzc2luZ0xpc3QgPSByZXMuZGF0YS5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygn5Yqg6L295pu05aSaJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgKHRoYXQuaXNIaWRlTG9hZE1vcmUgPSB0cnVlKSwgdGhhdC5kb3duU2VhcmNoKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbiAgLy/kuIvmi4nliLfmlrBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WcqOagh+mimOagj+S4reaYvuekuuWKoOi9vVxyXG4gICAgLy/mqKHmi5/liqDovb1cclxuICAgIGNvbnNvbGUubG9nKCcyMjIyJyk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnMzMzMycpO1xyXG4gICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgfSwgMTUwMCk7XHJcbiAgICB0aGlzLmRvd25TZWFyY2goKTtcclxuICB9XHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnRva2VuID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ215UHJvY2Vzc2luZycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQucHJvY2Vzc2luZ0xpc3QgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==