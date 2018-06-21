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
      navigationBarTitleText: '精确查询',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      file: '',
      token: '',
      billImg: './../img/photo@2x.png',
      savedFilePath: ''
    }, _this.methods = {
      // 跳转
      affirm_bill_info: function affirm_bill_info() {
        var that = this;
        if (that.savedFilePath == '') {
          wx.showModal({
            content: '请先上传票据照片',
            showCancel: false
          });
          return;
        } else {
          wx.navigateTo({
            url: 'affirm_bill_info'
          });
        }
      },
      photos: function photos() {
        var that = this;
        wx.chooseImage({
          count: 1,
          sizeType: ['compressed', 'original'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths[0];
            console.log(tempFilePaths);
            that.billImg = tempFilePaths;
            that.$apply();
            wx.setStorage({
              key: 'realImg',
              data: tempFilePaths
            });
            var uploadTas = wx.uploadFile({
              url: 'https://xcx.wenxikeji.com/bill360/user/img',
              filePath: tempFilePaths,
              name: 'file',
              header: {
                'content-type': 'multipart/form-data'
              },
              formData: {
                token: that.token
              },
              success: function success(res) {
                console.log(res.data);
                wx.setStorage({
                  key: 'preciseImg',
                  data: res.data
                });
                that.savedFilePath = tempFilePaths;
                wx.downloadFile({
                  url: 'https://xcx.wenxikeji.com/bill360/user/img' + res.data,
                  success: function success(res) {
                    console.log(res);
                  }
                });
              }
            });
            uploadTas.onProgressUpdate(function (res) {
              console.log('上传进度', res.progress);
              console.log('已经上传的数据长度', res.totalBytesSent);
              console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
            });

            wx.showToast({
              title: '上传成功',
              icon: 'success'
            });

            /*
            wx.showLoading({
              title: '上传中'
            });

            var uploadTask = wx.uploadFile({
              url: 'https://xcx.wenxikeji.com//bill360//inventory/ocr',
              filePath: tempFilePaths,
              header: {
                'content-type': 'multipart/form-data'
              },
              name: 'file',
              formData: {
                token: that.token
              },
              success: function success(res) {
                var jsonData = JSON.parse(res.data);
                console.log(jsonData);
                wx.hideLoading();
                if (jsonData.code == 0) {
                  var arrData = JSON.parse(res.data);
                  that.endDate = arrData.data.endDate;
                  that.company = arrData.data.company;
                  that.amount = arrData.data.amount;
                  wx.setStorage({
                    key: 'endDate',
                    data: arrData.data.endDate
                  });
                  wx.setStorage({
                    key: 'company',
                    data: arrData.data.company
                  });
                  wx.setStorage({
                    key: 'amount',
                    data: arrData.data.amount
                  });
                  wx.showToast({
                    title: '识别成功',
                    icon: 'success'
                    // duration: 2000,
                  });
                } else {
                  wx.hideLoading();
                  wx.showModal({
                    content: '识别失败，请手动上传票据',
                    showCancel: false
                  });
                }
              },
              fail: function fail(res) {
                wx.hideLoading();
                wx.showToast({
                  title: '识别有问题',
                  icon: 'none',
                  duration: 2000
                });
              }
            });
            uploadTask.onProgressUpdate(function (res) {
              console.log('上传进度', res.progress);
              console.log('已经上传的数据长度', res.totalBytesSent);
              console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
            });
          */

          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(personCenter, [{
    key: 'onShow',
    value: function onShow() {
      //this.billImg = './../img/photo@2x.png';
      this.savedFilePath = "";
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
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter, 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJwZXJzb25DZW50ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiZmlsZSIsInRva2VuIiwiZW5kRGF0ZSIsImNvbXBhbnkiLCJiaWxsSW1nIiwic2F2ZWRGaWxlUGF0aCIsIm1ldGhvZHMiLCJhZmZpcm1fYmlsbF9pbmZvIiwidGhhdCIsInd4Iiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGhvdG9zIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInNldFN0b3JhZ2UiLCJrZXkiLCJ1cGxvYWRUYXMiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiaGVhZGVyIiwiZm9ybURhdGEiLCJkb3dubG9hZEZpbGUiLCJvblByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3MiLCJ0b3RhbEJ5dGVzU2VudCIsInRvdGFsQnl0ZXNFeHBlY3RlZFRvU2VuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ1cGxvYWRUYXNrIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiLCJoaWRlTG9hZGluZyIsImNvZGUiLCJhcnJEYXRhIiwic2hvd1RvYXN0IiwiaWNvbiIsImZhaWwiLCJkdXJhdGlvbiIsImdldFN0b3JhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBS1RDLEksR0FBTztBQUNMQyxZ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QUFLbEMsT0FBTCxHQUFlLHVCQUFmO0FBQ0EsV0FBS0MsYUFBTCxHQUFtQixFQUFuQjtBQUNEOzs7NkJBZ0lRO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0FDLFNBQUcyQyxVQUFILENBQWM7QUFDWnpCLGFBQUssT0FETztBQUVaUCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCYixlQUFLUCxLQUFMLEdBQWFvQixJQUFJdEIsSUFBakI7QUFDRDtBQUpXLE9BQWQ7QUFNRDs7OztFQXpKdUMsZUFBS3NELEk7O2tCQUExQjNELFkiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25DZW50ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnsr7noa7mn6Xor6InLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMjQ5QTAnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGZpbGU6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgZW5kRGF0ZTogJycsXHJcbiAgICBjb21wYW55OiAnJyxcclxuICAgIGJpbGxJbWc6ICcuLy4uL2ltZy9waG90b0AyeC5wbmcnLFxyXG4gICAgc2F2ZWRGaWxlUGF0aDogJydcclxuICB9O1xyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuYmlsbEltZyA9ICcuLy4uL2ltZy9waG90b0AyeC5wbmcnO1xyXG4gICAgdGhpcy5zYXZlZEZpbGVQYXRoPVwiXCI7XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyDot7PovaxcclxuICAgIGFmZmlybV9iaWxsX2luZm8oKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKHRoYXQuc2F2ZWRGaWxlUGF0aCA9PSAnJykge1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICBjb250ZW50OiAn6K+35YWI5LiK5Lyg56Wo5o2u54Wn54mHJyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnYWZmaXJtX2JpbGxfaW5mbydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBob3RvcygpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCcsICdvcmlnaW5hbCddLFxyXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgICB0aGF0LmJpbGxJbWcgPSB0ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdyZWFsSW1nJyxcclxuICAgICAgICAgICAgZGF0YTogdGVtcEZpbGVQYXRoc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB1cGxvYWRUYXMgPSB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS9iaWxsMzYwL3VzZXIvaW1nJyxcclxuICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHMsXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3ByZWNpc2VJbWcnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGFcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGF0LnNhdmVkRmlsZVBhdGggPSB0ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgICAgIHd4LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tL2JpbGwzNjAvdXNlci9pbWcnICsgcmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB1cGxvYWRUYXMub25Qcm9ncmVzc1VwZGF0ZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5LiK5Lyg6L+b5bqmJywgcmVzLnByb2dyZXNzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+W3sue7j+S4iuS8oOeahOaVsOaNrumVv+W6picsIHJlcy50b3RhbEJ5dGVzU2VudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICfpooTmnJ/pnIDopoHkuIrkvKDnmoTmlbDmja7mgLvplb/luqYnLFxyXG4gICAgICAgICAgICAgIHJlcy50b3RhbEJ5dGVzRXhwZWN0ZWRUb1NlbmRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+S4iuS8oOS4rSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy9iaWxsL29jcicsXHJcbiAgICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgICB0b2tlbjogdGhhdC50b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICBpZiAoanNvbkRhdGEuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5lbmREYXRlID0gYXJyRGF0YS5kYXRhLmVuZERhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmNvbXBhbnkgPSBhcnJEYXRhLmRhdGEuY29tcGFueTtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdlbmREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgZGF0YTogYXJyRGF0YS5kYXRhLmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ2NvbXBhbnknLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiBhcnJEYXRhLmRhdGEuY29tcGFueVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivhuWIq+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAvLyBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ivhuWIq+Wksei0pe+8jOivt+aJi+WKqOS4iuS8oOelqOaNricsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+G5Yir5pyJ6Zeu6aKYJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdXBsb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuIrkvKDov5vluqYnLCByZXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5bey57uP5LiK5Lyg55qE5pWw5o2u6ZW/5bqmJywgcmVzLnRvdGFsQnl0ZXNTZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgJ+mihOacn+mcgOimgeS4iuS8oOeahOaVsOaNruaAu+mVv+W6picsXHJcbiAgICAgICAgICAgICAgcmVzLnRvdGFsQnl0ZXNFeHBlY3RlZFRvU2VuZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQudG9rZW4gPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==