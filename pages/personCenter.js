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
      company: '',
      name: '',
      addr: '',
      tel: '',
      saveORcompile: '保存',
      userName: '',
      userHeaderImg: '',
      phone: '',
      token: '',
      userAccount: '',
      duty: ''
    }, _this.methods = {
      getData: function getData() {
        var that = this;
        var myreg = /^(13[0-9]{9})|(19[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        if (myreg.test(this.phone)) {
          wx.request({
            url: 'https://xcx.wenxikeji.com//bill360//card/add',
            data: {
              company: that.company,
              name: that.name,
              token: that.token,
              addr: that.addr,
              tel: that.tel,
              phone: that.phone
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              if (res.data.code == 0) {
                wx.showToast({
                  title: res.data.message,
                  duration: 2000
                });
                wx.request({
                  url: 'https://xcx.wenxikeji.com//bill360//card/my',
                  data: {},
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function success(res) {
                    wx.setStorage({
                      key: 'cardInfo',
                      data: res.data.data
                    });
                    setTimeout(function () {
                      wx.navigateTo({
                        url: 'index'
                      });
                    }, 2000);
                  }
                });
              } else if (res.data.code == 1) {
                wx.showModal({
                  content: res.data.message,
                  showCancel: false
                });
              }
            }
          });
        } else {
          wx.showModal({
            content: '请确认手机号是否正确',
            showCancel: false
          });
        }
      },
      nameInput: function nameInput(input) {
        this.name = input.detail.value;
      },
      companyInput: function companyInput(input) {
        this.company = input.detail.value;
      },
      addrInput: function addrInput(input) {
        this.addr = input.detail.value;
      },
      telInput: function telInput(input) {
        this.tel = input.detail.value;
      },
      phoneInput: function phoneInput(input) {
        this.phone = input.detail.value;
      },
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
        key: 'switchLogin',
        success: function success(res) {
          console.log(res.data);
          that.userAccount = res.data.phone;
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
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter , 'pages/personCenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkNlbnRlci5qcyJdLCJuYW1lcyI6WyJwZXJzb25DZW50ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiY29tcGFueSIsIm5hbWUiLCJhZGRyIiwidGVsIiwic2F2ZU9SY29tcGlsZSIsInVzZXJOYW1lIiwidXNlckhlYWRlckltZyIsInBob25lIiwidG9rZW4iLCJ1c2VyQWNjb3VudCIsImR1dHkiLCJtZXRob2RzIiwiZ2V0RGF0YSIsInRoYXQiLCJteXJlZyIsInRlc3QiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsInNob3dUb2FzdCIsInRpdGxlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwic2V0U3RvcmFnZSIsImtleSIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJuYW1lSW5wdXQiLCJpbnB1dCIsImRldGFpbCIsInZhbHVlIiwiY29tcGFueUlucHV0IiwiYWRkcklucHV0IiwidGVsSW5wdXQiLCJwaG9uZUlucHV0IiwiZHV0eUlucHV0IiwiZ2V0U3RvcmFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLFdBQUssRUFKQTtBQUtMQyxxQkFBZSxJQUxWO0FBTUxDLGdCQUFVLEVBTkw7QUFPTEMscUJBQWUsRUFQVjtBQVFMQyxhQUFPLEVBUkY7QUFT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QUFDQUcsU0FBRzRCLFVBQUgsQ0FBYztBQUNaZixhQUFLLE9BRE87QUFFWlIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlQsZUFBS0wsS0FBTCxHQUFhYyxJQUFJdkIsSUFBakI7QUFDRDtBQUpXLE9BQWQ7QUFNQWlCLFNBQUc0QixVQUFILENBQWM7QUFDWmYsYUFBSyxhQURPO0FBRVpSLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJULGVBQUtKLFdBQUwsR0FBbUJhLElBQUl2QixJQUFKLENBQVNRLEtBQTVCO0FBQ0Q7QUFKVyxPQUFkO0FBTUFTLFNBQUc0QixVQUFILENBQWM7QUFDWmYsYUFBSyxVQURPO0FBRVpSLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJULGVBQUtSLFFBQUwsR0FBZ0JpQixJQUFJdkIsSUFBcEI7QUFDRDtBQUpXLE9BQWQ7QUFNQWlCLFNBQUc0QixVQUFILENBQWM7QUFDWmYsYUFBSyxlQURPO0FBRVpSLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJULGVBQUtQLGFBQUwsR0FBcUJnQixJQUFJdkIsSUFBekI7QUFDRDtBQUpXLE9BQWQ7QUFNRDs7OztFQTdIdUMsZUFBSzhDLEk7O2tCQUExQm5ELFkiLCJmaWxlIjoicGVyc29uQ2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25DZW50ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMjQ5QTAnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGNvbXBhbnk6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBhZGRyOiAnJyxcclxuICAgIHRlbDogJycsXHJcbiAgICBzYXZlT1Jjb21waWxlOiAn5L+d5a2YJyxcclxuICAgIHVzZXJOYW1lOiAnJyxcclxuICAgIHVzZXJIZWFkZXJJbWc6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgdXNlckFjY291bnQ6ICcnLFxyXG4gICAgZHV0eTogJydcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHZhciBteXJlZyA9IC9eKDEzWzAtOV17OX0pfCgxOVswLTldezl9KXwoMThbMC05XXs5fSl8KDE0WzAtOV17OX0pfCgxN1swLTldezl9KXwoMTVbMC05XXs5fSkkLztcclxuICAgICAgaWYgKG15cmVnLnRlc3QodGhpcy5waG9uZSkpIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL2NhcmQvYWRkJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29tcGFueTogdGhhdC5jb21wYW55LFxyXG4gICAgICAgICAgICBuYW1lOiB0aGF0Lm5hbWUsXHJcbiAgICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgICAgICBhZGRyOiB0aGF0LmFkZHIsXHJcbiAgICAgICAgICAgIHRlbDogdGhhdC50ZWwsXHJcbiAgICAgICAgICAgIHBob25lOiB0aGF0LnBob25lLFxyXG4gICAgICAgICAgICBkdXR5OiB0aGF0LmR1dHlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy9jYXJkL215JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY2FyZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICdwZXJzb25fbG9naW4nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICBjb250ZW50OiAn6K+356Gu6K6k5omL5py65Y+35piv5ZCm5q2j56GuJyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBuYW1lSW5wdXQoaW5wdXQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gaW5wdXQuZGV0YWlsLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIGNvbXBhbnlJbnB1dChpbnB1dCkge1xyXG4gICAgICB0aGlzLmNvbXBhbnkgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYWRkcklucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMuYWRkciA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICB0ZWxJbnB1dChpbnB1dCkge1xyXG4gICAgICB0aGlzLnRlbCA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBwaG9uZUlucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMucGhvbmUgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgZHV0eUlucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMuZHV0eSA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQudG9rZW4gPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnc3dpdGNoTG9naW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnVzZXJBY2NvdW50ID0gcmVzLmRhdGEucGhvbmU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3VzZXJOYW1lJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC51c2VyTmFtZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd1c2VySGVhZGVySW1nJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC51c2VySGVhZGVySW1nID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=