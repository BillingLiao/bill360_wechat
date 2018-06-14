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
      navigationBarTitleText: '确认票据信息',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      items: [{ name: '母公司', value: '0', checked: 'true' }, { name: '子公司', value: '1' }, { name: '孙公司', value: '2' }],
      core: '',
      token: '',
      type: '0',
      rate: '',
      invoice: '',
      index: 0,
      size: 10,
      endDate: '',
      date: '',
      company: '',
      preciseData: '',
      level: '',
      ctime: '',
      day: '',
      adjuest: '',
      money: '',
      billId: ''
    }, _this.methods = {
      bindDateChange: function bindDateChange(e) {
        var that = this;
        this.date = e.detail.value;
        wx.setStorage({
          key: 'endDate',
          data: that.date
        });
      },
      getData: function getData() {
        var that = this;
        wx.request({
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          method: 'POST',
          url: 'https://xcx.wenxikeji.com//bill360//bill/precise',
          data: {
            token: that.token,
            core: that.core,
            type: that.type,
            invoice: that.company,
            index: that.index,
            size: that.size
          },
          success: function success(res) {
            if (that.core == '') {
              wx.showModal({
                content: '核心企业名额不能为空',
                showCancel: false
              });
            } else if (that.company == '') {
              wx.showModal({
                content: '承兑企业不能为空',
                showCancel: false
              });
            } else if (that.money == '') {
              wx.showModal({
                content: '票据金额不能为空',
                showCancel: false
              });
            } else if (that.date == '') {
              wx.showModal({
                content: '到期日期不能为空',
                showCancel: false
              });
            } else if (res.data.code == 1) {
              console.log('没上传名片');
              wx.navigateTo({
                url: 'personCenter'
              });
            } else if (res.data.data == '') {
              wx.showModal({
                content: '该票据不符合保理要求，请与工作人员联系',
                showCancel: false
              });
              return;
            } else if (res.data.code == 0) {
              that.preciseData = res.data.data;
              wx.setStorage({
                key: 'preciseData',
                data: that.preciseData
              });
              wx.navigateTo({
                url: 'precise_search_result'
              });
            }
          }
        });

        /*
        // 获取渠道列表
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360/source/find',
          data: {
            token: that.token,
            index: that.index,
            size: that.size,
            money: that.money,
            level: that.level,
            invoice: that.company
          },
          method: 'POST',
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: function success(res) {
            that.sourceFind = res.data.data.content;
            wx.setStorage({
              key: 'sourceFind',
              data: that.sourceFind
            });
          }
        });
        */
      }, 

      radioChange: function radioChange(e) {
        this.type = e.detail.value;
      },
      coreData: function coreData(input) {
        this.core = input.detail.value;
      },
      moneyInput: function moneyInput(input) {
        var that = this;
        this.money = input.detail.value;
        wx.setStorage({
          key: 'billMoney',
          data: that.money
        });
      },
      companyInput: function companyInput(input) {
        var that = this;
        this.company = input.detail.value;
        wx.setStorage({
          key: 'company',
          data: that.company
        });
      },
      dayInput: function dayInput(input) {
        var that = this;
        this.day = input.detail.value;
        wx.setStorage({
          key: 'endDate',
          data: that.day
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
        key: 'amount',
        success: function success(res) {
          console.log(res.data);
          that.money = res.data;
        }
      });
      wx.getStorage({
        key: 'endDate',
        success: function success(res) {
          console.log(res.data);
          that.date = res.data;
        }
      });
      wx.getStorage({
        key: 'company',
        success: function success(res) {
          console.log(res.data);
          that.company = res.data;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.date = "";
      this.company = "";
      this.money = "";
      this.core = "";
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter, 'pages/affirm_bill_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmlybV9iaWxsX2luZm8uanMiXSwibmFtZXMiOlsicGVyc29uQ2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsImNvcmUiLCJ0b2tlbiIsInR5cGUiLCJyYXRlIiwiaW52b2ljZSIsImluZGV4Iiwic2l6ZSIsImVuZERhdGUiLCJkYXRlIiwiY29tcGFueSIsInByZWNpc2VEYXRhIiwibGV2ZWwiLCJjdGltZSIsImRheSIsImFkanVlc3QiLCJtb25leSIsImJpbGxJZCIsIm1ldGhvZHMiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJ0aGF0IiwiZGV0YWlsIiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwiZ2V0RGF0YSIsInJlcXVlc3QiLCJoZWFkZXIiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29kZSIsIm5hdmlnYXRlVG8iLCJzb3VyY2VGaW5kIiwicmFkaW9DaGFuZ2UiLCJjb3JlRGF0YSIsImlucHV0IiwibW9uZXlJbnB1dCIsImNvbXBhbnlJbnB1dCIsImRheUlucHV0IiwiZ2V0U3RvcmFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTCxFQUFFQyxNQUFNLEtBQVIsRUFBZUMsT0FBTyxHQUF0QixFQUEyQkMsU0FBUyxNQUFwQyxFQURLLEVBRUwsRUFBRUYsTUFBTSxLQUFSLEVBQWVDLE9B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QWQ7QUFJRCxPQXZHTztBQXdHUjZCLG9CQUFjLHNCQUFTRixLQUFULEVBQWdCO0FBQzVCLFlBQUl0QixPQUFPLElBQVg7QUFDQSxhQUFLWCxPQUFMLEdBQWVpQyxNQUFNckIsTUFBTixDQUFhdkIsS0FBNUI7QUFDQXdCLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLFNBRE87QUFFWjdCLGdCQUFNeUIsS0FBS1g7QUFGQyxTQUFkO0FBSUQsT0EvR087QUFnSFJvQyxnQkFBVSxrQkFBU0gsS0FBVCxFQUFnQjtBQUN4QixZQUFJdEIsT0FBTyxJQUFYO0FBQ0EsYUFBS1AsR0FBTCxHQUFXNkIsTUFBTXJCLE1BQU4sQ0FBYXZCLEtBQXhCO0FBQ0F3QixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyxTQURPO0FBRVo3QixnQkFBTXlCLEtBQUtQO0FBRkMsU0FBZDtBQUlEO0FBdkhPLEs7Ozs7OzZCQXlIRDtBQUNQLFVBQUlPLE9BQU8sSUFBWDtBQUNBRSxTQUFHd0IsVUFBSCxDQUFjO0FBQ1p0QixhQUFLLE9BRE87QUFFWk0saUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlgsZUFBS25CLEtBQUwsR0FBYThCLElBQUlwQyxJQUFqQjtBQUNEO0FBSlcsT0FBZDtBQU1BMkIsU0FBR3dCLFVBQUgsQ0FBYztBQUNadEIsYUFBSyxTQURPO0FBRVpNLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJYLGVBQUtQLEdBQUwsR0FBV2tCLElBQUlwQyxJQUFmO0FBQ0Q7QUFKVyxPQUFkO0FBTUQ7Ozs2QkFDUTtBQUNQLFdBQUthLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxXQUFLTSxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtmLElBQUwsR0FBWSxFQUFaO0FBQ0Q7Ozs7RUE1S3VDLGVBQUsrQyxJOztrQkFBMUJ6RCxZIiwiZmlsZSI6ImFmZmlybV9iaWxsX2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25DZW50ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTnpajmja7kv6Hmga8nLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMjQ5QTAnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogJ+avjeWFrOWPuCcsIHZhbHVlOiAnMCcsIGNoZWNrZWQ6ICd0cnVlJyB9LFxyXG4gICAgICB7IG5hbWU6ICflrZDlhazlj7gnLCB2YWx1ZTogJzEnIH0sXHJcbiAgICAgIHsgbmFtZTogJ+WtmeWFrOWPuCcsIHZhbHVlOiAnMicgfVxyXG4gICAgXSxcclxuICAgIGNvcmU6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgdHlwZTogJzAnLFxyXG4gICAgcmF0ZTogJycsXHJcbiAgICBpbnZvaWNlOiAnJyxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgc2l6ZTogMTAsXHJcbiAgICBlbmREYXRlOiAnJyxcclxuICAgIGRhdGU6ICcnLFxyXG4gICAgY29tcGFueTogJycsXHJcbiAgICBwcmVjaXNlRGF0YTogJycsXHJcbiAgICBsZXZlbDogJycsXHJcbiAgICBjdGltZTogJycsXHJcbiAgICBkYXk6ICcnLFxyXG4gICAgYWRqdWVzdDogJycsXHJcbiAgICBtb25leTogJycsXHJcbiAgICBiaWxsSWQ6ICcnXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGJpbmREYXRlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ2VuZERhdGUnLFxyXG4gICAgICAgIGRhdGE6IHRoYXQuZGF0ZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy9iaWxsL3ByZWNpc2UnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgICAgY29yZTogdGhhdC5jb3JlLFxyXG4gICAgICAgICAgdHlwZTogdGhhdC50eXBlLFxyXG4gICAgICAgICAgaW52b2ljZTogdGhhdC5jb21wYW55LFxyXG4gICAgICAgICAgaW5kZXg6IHRoYXQuaW5kZXgsXHJcbiAgICAgICAgICBzaXplOiB0aGF0LnNpemVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhhdC5kYXkpO1xyXG4gICAgICAgICAgaWYgKHRoYXQuY29yZSA9PSAnJykge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmoLjlv4PkvIHkuJrlkI3pop3kuI3og73kuLrnqbonLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGF0LmNvbXBhbnkgPT0gJycpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAn5byA56Wo5LyB5Lia5LiN6IO95Li656m6JyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5tb25leSA9PSAnJykge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfnpajmja7ph5Hpop3kuI3og73kuLrnqbonLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGF0LmRhdGUgPT0gJycpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAn5Yiw5pyf5pel5pyf5LiN6IO95Li656m6JyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmsqHkuIrkvKDlkI3niYcnKTtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAncGVyc29uQ2VudGVyJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5jb250ZW50ID09ICcnKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+ivpeelqOaNruS4jeespuWQiOS/neeQhuimgeaxgu+8jOivt+S4juW3peS9nOS6uuWRmOiBlOezuycsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoYXQucHJlY2lzZURhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdwcmVjaXNlRGF0YScsXHJcbiAgICAgICAgICAgICAgZGF0YTogdGhhdC5wcmVjaXNlRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAncHJlY2lzZV9zZWFyY2hfcmVzdWx0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyDojrflj5bmuKDpgZPliJfooahcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC9zb3VyY2UvZmluZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdG9rZW46IHRoYXQudG9rZW4sXHJcbiAgICAgICAgICBpbmRleDogdGhhdC5pbmRleCxcclxuICAgICAgICAgIHNpemU6IHRoYXQuc2l6ZSxcclxuICAgICAgICAgIG1vbmV5OiB0aGF0Lm1vbmV5LFxyXG4gICAgICAgICAgbGV2ZWw6IHRoYXQubGV2ZWwsXHJcbiAgICAgICAgICBpbnZvaWNlOiB0aGF0LmNvbXBhbnlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIHRoYXQuc291cmNlRmluZCA9IHJlcy5kYXRhLmRhdGEuY29udGVudDtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdzb3VyY2VGaW5kJyxcclxuICAgICAgICAgICAgZGF0YTogdGhhdC5zb3VyY2VGaW5kXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJhZGlvQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIGNvcmVEYXRhOiBmdW5jdGlvbihpbnB1dCkge1xyXG4gICAgICB0aGlzLmNvcmUgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgbW9uZXlJbnB1dDogZnVuY3Rpb24oaW5wdXQpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGlzLm1vbmV5ID0gaW5wdXQuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdiaWxsTW9uZXknLFxyXG4gICAgICAgIGRhdGE6IHRoYXQubW9uZXlcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29tcGFueUlucHV0OiBmdW5jdGlvbihpbnB1dCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuY29tcGFueSA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAnY29tcGFueScsXHJcbiAgICAgICAgZGF0YTogdGhhdC5jb21wYW55XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRheUlucHV0OiBmdW5jdGlvbihpbnB1dCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuZGF5ID0gaW5wdXQuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdlbmREYXRlJyxcclxuICAgICAgICBkYXRhOiB0aGF0LmRheVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQudG9rZW4gPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnZW5kRGF0ZScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQuZGF5ID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5kYXRlID0gXCJcIjtcclxuICAgIHRoaXMuY29tcGFueSA9IFwiXCI7XHJcbiAgICB0aGlzLm1vbmV5ID0gXCJcIjtcclxuICAgIHRoaXMuY29yZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcbiJdfQ==