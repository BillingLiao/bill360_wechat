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

var success_submit = function (_wepy$page) {
  _inherits(success_submit, _wepy$page);

  function success_submit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, success_submit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = success_submit.__proto__ || Object.getPrototypeOf(success_submit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提交成功',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      token: '',
      index: 0,
      size: 10
    }, _this.methods = {

      previewImage: function () {
        var that = this;
        var scene_img = 'https://xcx.wenxikeji.com/bill360/upload/DingTao.jpg' //这里添加图片的地址
        that.billImg = scene_img;
        console.log(this.billImg);
        wx.previewImage({
          current: this.billImg, // 当前显示图片的http链接
          urls: this.billImg.split(',')
          // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
        })
      },

      callPhone: function () {
        wx.makePhoneCall({
          phoneNumber: '17322009880',
          success: function () {
            console.log("拨打电话成功！")
          },
          fail: function () {
            console.log("拨打电话失败！")
          }
        })
      },

      form_url: function form_url() {
        var that = this;
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
            console.log(res.data.data.content);
            wx.setStorage({
              key: 'myProcessing',
              data: res.data.data.content
            });
          }
        });
        wx.navigateTo({
          url: 'myProcessing'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(success_submit, [{
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

  return success_submit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(success_submit , 'pages/success_submit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3Nfc3VibWl0LmpzIl0sIm5hbWVzIjpbInN1Y2Nlc3Nfc3VibWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsInRva2VuIiwiaW5kZXgiLCJzaXplIiwibWV0aG9kcyIsImZvcm1fdXJsIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInNldFN0b3JhZ2UiLCJrZXkiLCJuYXZpZ2F0ZVRvIiwiZ2V0U3RvcmFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxhQUFPLENBRkY7QUFHTEMsWUFBTTtBQUhELEssUUFLUEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0c7QUFDVCxZQUFJQyxPQUFNLElBQVY7QUFDQUMsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGVBQUssOENBREk7QUFFVFQsZ0JBQU07QUFDSkMsbUJBQU9LLEtBQUtMLEtBRFI7QUFFSkMsbUJBQU9JLEtBQUtKLEtBRlI7QUFHSkMsa0JBQU1HLEtBQUtIO0FBSFAsV0FGRztBQU9UTyxrQkFBUSxNQVBDO0FBUVRDLGtCQUFRO0FBQ04sNEJBQWdCLG1DQURWLENBQzhDO0FBRDlDLFdBUkM7QUFXVEMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkMsb0JBQVFDLEdBQVIsQ0FBWUYsSUFBSWIsSUFBSixDQUFTQSxJQUFULENBQWNnQixPQUExQjtBQUNBVCxlQUFHVSxVQUFILENBQWM7QUFDWkMsbUJBQUssY0FETztBQUVabEIsb0JBQU1hLElBQUliLElBQUosQ0FBU0EsSUFBVCxDQUFjZ0I7QUFGUixhQUFkO0FBSUQ7QUFqQlEsU0FBWDtBQW1CQVQsV0FBR1ksVUFBSCxDQUFjO0FBQ1pWLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUF6Qk8sSzs7Ozs7NkJBMkJEO0FBQ1AsVUFBSUgsT0FBTyxJQUFYO0FBQ0FDLFNBQUdhLFVBQUgsQ0FBYztBQUNaRixhQUFLLE9BRE87QUFFWk4saUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsZUFBS0wsS0FBTCxHQUFhWSxJQUFJYixJQUFqQjtBQUNEO0FBSlcsT0FBZDtBQU1EOzs7O0VBOUN5QyxlQUFLcUIsSTs7a0JBQTVCMUIsYyIsImZpbGUiOiJzdWNjZXNzX3N1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3VjY2Vzc19zdWJtaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DkuqTmiJDlip8nLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMjQ5QTAnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIHRva2VuOiAnJyxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgc2l6ZTogMTBcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtX3VybCgpIHtcclxuICAgICAgbGV0IHRoYXQgPXRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL29yZGVyL215JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgIGluZGV4OiB0aGF0LmluZGV4LFxyXG4gICAgICAgICAgc2l6ZTogdGhhdC5zaXplXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YS5jb250ZW50KTtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdteVByb2Nlc3NpbmcnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ215UHJvY2Vzc2luZydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnRva2VuID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=