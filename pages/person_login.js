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
      navigationBarTitleText: '个人中心',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      token: '',
      cardData: '',
      cardTel: '',
      cardPhone: '',
      cardDuty: '',
      cardCompany: '',
      cardAddr: '',
      userName: '',
      loginAccount: '',
      userHeaderImg: '',
      cardInfo: [],
      switchLogin: [],
      index: 0,
      size: 10
    }, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(personCenter, [{
    key: 'onPrefetch',
    value: function onPrefetch() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getStorage({
        key: 'token',
        success: function success(res) {
          that.token = res.data;
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
        }
      });
      wx.getStorage({
        key: 'switchLogin',
        success: function success(res) {
          var arr = [];
          arr.push(res.data);
          that.switchLogin = arr;
        }
      });
      wx.getStorage({
        key: 'cardInfo',
        success: function success(res) {
          that.cardInfo = res.data;
          console.log(that.cardInfo);
        }
      });
      wx.getStorage({
        key: 'userName',
        success: function success(res) {
          that.userName = res.data;
        }
      });
      wx.getStorage({
        key: 'userHeaderImg',
        success: function success(res) {
          that.userHeaderImg = res.data;
        }
      });
      wx.getStorage({
        key: 'loginAccount',
        success: function success(res) {
          that.loginAccount = res.data;
          console.log(that.loginAccount);
        }
      });
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter , 'pages/person_login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbl9sb2dpbi5qcyJdLCJuYW1lcyI6WyJwZXJzb25DZW50ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwidG9rZW4iLCJjYXJkRGF0YSIsImNhcmRUZWwiLCJjYXJkUGhvbmUiLCJjYXJkRHV0eSIsImNhcmRDb21wYW55IiwiY2FyZEFkZHIiLCJ1c2VyTmFtZSIsImxvZ2luQWNjb3VudCIsInVzZXJIZWFkZXJJbWciLCJjYXJkSW5mbyIsInN3aXRjaExvZ2luIiwiaW5kZXgiLCJzaXplIiwid2F0Y2giLCJtZXRob2RzIiwidGhhdCIsInd4IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJzZXRTdG9yYWdlIiwiYXJyIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxpQkFBVyxFQUpOO0FBS0xDLGdCQUFVLEVBTEw7QUFNTEMsbUJBQWEsRUFOUjtBQU9MQyxnQkFBVSxFQVBMO0FBUUxDLGdCQUFVLEVBUkw7QUFTTEMsb0JBQWMsRUFUVDtBQVVMQyxxQkFBZSxFQVZWO0FBV0xDLGdCQUFVLEVBWEw7QUFZTEMsbUJBQVksRUFaUDtBQWFMQyxhQUFPLENBYkY7QUFjTEMsWUFBTTtBQWRELEssUUFnQlBDLEssR0FBUSxFLFFBQ1JDLE8sR0FBVSxFOzs7OztpQ0FDRyxDQUFFOzs7NkJBQ047QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQUMsU0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGFBQUssT0FETztBQUVaQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTCxlQUFLaEIsS0FBTCxHQUFhcUIsSUFBSXRCLElBQWpCO0FBQ0FrQixhQUFHSyxPQUFILENBQVc7QUFDVEMsaUJBQUssOENBREk7QUFFVHhCLGtCQUFNO0FBQ0pDLHFCQUFPZ0IsS0FBS2hCLEtBRFI7QUFFSlkscUJBQU9JLEtBQUtKLEtBRlI7QUFHSkMsb0JBQU1HLEtBQUtIO0FBSFAsYUFGRztBQU9UVyxvQkFBUSxNQVBDO0FBUVRDLG9CQUFRO0FBQ04sOEJBQWdCLG1DQURWLENBQzhDO0FBRDlDLGFBUkM7QUFXVEwscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkssc0JBQVFDLEdBQVIsQ0FBWU4sSUFBSXRCLElBQUosQ0FBUzZCLE9BQXJCO0FBQ0FYLGlCQUFHWSxVQUFILENBQWM7QUFDWlYscUJBQUssY0FETztBQUVacEIsc0JBQU1zQixJQUFJdEIsSUFBSixDQUFTQSxJQUFULENBQWM2QjtBQUZSLGVBQWQ7QUFJRDtBQWpCUSxXQUFYO0FBbUJEO0FBdkJXLE9BQWQ7QUF5QkNYLFNBQUdDLFVBQUgsQ0FBYztBQUNiQyxhQUFLLGFBRFE7QUFFYkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJUyxNQUFLLEVBQVQ7QUFDQUEsY0FBSUMsSUFBSixDQUFTVixJQUFJdEIsSUFBYjtBQUNBaUIsZUFBS0wsV0FBTCxHQUFtQm1CLEdBQW5CO0FBQ0Q7QUFOWSxPQUFkO0FBUURiLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxhQUFLLFVBRE87QUFFWkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkwsZUFBS04sUUFBTCxHQUFnQlcsSUFBSXRCLElBQXBCO0FBQ0EyQixrQkFBUUMsR0FBUixDQUFZWCxLQUFLTixRQUFqQjtBQUNEO0FBTFcsT0FBZDtBQU9BTyxTQUFHQyxVQUFILENBQWM7QUFDWkMsYUFBSyxVQURPO0FBRVpDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJMLGVBQUtULFFBQUwsR0FBZ0JjLElBQUl0QixJQUFwQjtBQUNEO0FBSlcsT0FBZDtBQU1Ba0IsU0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGFBQUssZUFETztBQUVaQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTCxlQUFLUCxhQUFMLEdBQXFCWSxJQUFJdEIsSUFBekI7QUFDRDtBQUpXLE9BQWQ7QUFNQWtCLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxhQUFLLGNBRE87QUFFWkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkwsZUFBS1IsWUFBTCxHQUFvQmEsSUFBSXRCLElBQXhCO0FBQ0EyQixrQkFBUUMsR0FBUixDQUFZWCxLQUFLUixZQUFqQjtBQUNEO0FBTFcsT0FBZDtBQU9EOzs7O0VBdkZ1QyxlQUFLd0IsSTs7a0JBQTFCdEMsWSIsImZpbGUiOiJwZXJzb25fbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNvbkNlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gycsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAyNDlBMCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHRva2VuOiAnJyxcclxuICAgIGNhcmREYXRhOiAnJyxcclxuICAgIGNhcmRUZWw6ICcnLFxyXG4gICAgY2FyZFBob25lOiAnJyxcclxuICAgIGNhcmREdXR5OiAnJyxcclxuICAgIGNhcmRDb21wYW55OiAnJyxcclxuICAgIGNhcmRBZGRyOiAnJyxcclxuICAgIHVzZXJOYW1lOiAnJyxcclxuICAgIGxvZ2luQWNjb3VudDogJycsXHJcbiAgICB1c2VySGVhZGVySW1nOiAnJyxcclxuICAgIGNhcmRJbmZvOiBbXSxcclxuICAgIHN3aXRjaExvZ2luOltdLFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgICBzaXplOiAxMFxyXG4gIH07XHJcbiAgd2F0Y2ggPSB7fTtcclxuICBtZXRob2RzID0ge307XHJcbiAgb25QcmVmZXRjaCgpIHt9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3Rva2VuJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC50b2tlbiA9IHJlcy5kYXRhO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC8vb3JkZXIvbXknLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgICAgaW5kZXg6IHRoYXQuaW5kZXgsXHJcbiAgICAgICAgICAgIHNpemU6IHRoYXQuc2l6ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuY29udGVudCk7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIGtleTogJ215UHJvY2Vzc2luZycsXHJcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5jb250ZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnc3dpdGNoTG9naW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBsZXQgYXJyID1bXTtcclxuICAgICAgICBhcnIucHVzaChyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhhdC5zd2l0Y2hMb2dpbiA9IGFycjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnY2FyZEluZm8nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmNhcmRJbmZvID0gcmVzLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhhdC5jYXJkSW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3VzZXJOYW1lJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC51c2VyTmFtZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd1c2VySGVhZGVySW1nJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC51c2VySGVhZGVySW1nID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2xvZ2luQWNjb3VudCcsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQubG9naW5BY2NvdW50ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhhdC5sb2dpbkFjY291bnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19