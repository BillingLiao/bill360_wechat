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

var precise_search_more = function (_wepy$page) {
  _inherits(precise_search_more, _wepy$page);

  function precise_search_more() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, precise_search_more);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = precise_search_more.__proto__ || Object.getPrototypeOf(precise_search_more)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '收票详情',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      token: '',
      billId: '',
      day: '',
      money: '',
      billId: '',
      billCore: '',
      billInvoice: '',
      billName: '',
      billCompany: '',
      billOffer: '',
      billRate: '',
      billAdjuest: '',
      billDeductions: '',
      billDirect: '',
      billEndorseTime: '',
      billIsBargain: '',
      billIsInvoice: '',
      billAgreement: '',
      billIsFinancing: '',
      billIsClean: '',
      billIsMoneyorback: ''
    }, _this.methods = {

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(precise_search_more, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getStorage({
        key: 'token',
        success: function success(res) {
          that.token = res.data;
          // wx.getStorage({
          //   key: 'realImg',
          //   success: function(res) {
          //    wx.uploadFile({
          //      url: 'https://xcx.wenxikeji.com/bill360/user/img/upload',
          //      filePath:res.data,
          //      name:'file',
          //      // header: {}, // 设置请求的 header
          //      formData: {
          //        token:that.token
          //      },
          //      success: function(res){
          //         console.log(res);
          //         that.ordAddBillImg=res.data
          //      }
          //    })
          //   }
          // });
        }
      });
      wx.getStorage({
        key: 'billMore',
        success: function success(res) {
          console.log(res.data);
          that.billId = res.data.id;
          that.billCore = res.data.acceptance.core;
          that.billInvoice = res.data.acceptance.invoice;
          that.billName = res.data.staff.name;
          that.billCompany = res.data.staff.company;
          that.billOffer = res.data.offer;
          that.billRate = res.data.rate;
          that.billAdjuest = res.data.adjuest;
          that.billDeductions = res.data.deductions;
          that.billDirect = res.data.direct;
          that.billEndorseTime = res.data.etime;
          that.billIsBargain = res.data.isBargain;
          that.billIsInvoice = res.data.isInvoice;
          that.billAgreement = res.data.agreement;
          that.billIsFinancing = res.data.isFinancing;
          that.billIsClean = res.data.isClean;
          that.billIsMoneyorback = res.data.isMoneyOrBack;
          // that.ordAddBillImg = res.data.data.img;
          // that.ordAddId = res.data.data.id;
          // that.ordAddBillCore = res.data.data.bill.core;
          // that.ordAddBillInvoice = res.data.data.bill.invoice;
          // that.ordAddBillTime = res.data.data.time;
          // that.ordAddBillInterest = res.data.data.interest;
          // that.ordAddBillSubsidy = res.data.data.subsidy;
          // that.ordAddBillDay = res.data.data.day;
          // that.ordAddBillImg = res.data.data.img;
          // that.ordAddBillName = res.data.data.name;
          // that.ordAddBillPhone = res.data.data.phone;
          // console.log(that.ordAddBill);
        }
      });
    }
  }]);

  return precise_search_more;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(precise_search_more, 'pages/precise_search_more'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWNpc2Vfc2VhcmNoX2RpbmdkYW4uanMiXSwibmFtZXMiOlsicHJlY2lzZV9zZWFyY2hfZGluZ2RhbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImRhdGEiLCJ0b2tlbiIsInJhdGUiLCJjdGltZSIsImFkanVlc3QiLCJsZXZlbCIsInN1YnNpZHkiLCJpbnRlcmVzdCIsImJpbGxJZCIsImRheSIsInNvdXJjZUlkIiwiY29yZSIsIm1vbmV5IiwiaW52b2ljZSIsIm9yZEFkZElkIiwib3JkQWRkQmlsbENvcmUiLCJvcmRBZGRCaWxsSW52b2ljZSIsIm9yZEFkZEJpbGxNb25leSIsIm9yZEFkZEJpbGxUaW1lIiwib3JkQWRkQmlsbEludGVyZXN0Iiwib3JkQWRkQmlsbFN1YnNpZHkiLCJvcmRBZGRCaWxsRGF5Iiwib3JkQWRkQmlsbEltZyIsIm9yZEFkZEJpbGxOYW1lIiwib3JkQWRkQmlsbFBob25lIiwicmVhbEltZyIsInNvdXJlY2VQZXJzb25zIiwibWV0aG9kcyIsImdldERhdGEiLCJ0aGF0Iiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGltZSIsImltZyIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJzdGF0dXNDb2RlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibmF2aWdhdGVUbyIsImdldFN0b3JhZ2UiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJzdGFmZnMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxzQjs7Ozs7Ozs7Ozs7Ozs7c05BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLG9DQUE4QixTQUZ2QjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQUtUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtB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InNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJlY2lzZV9zZWFyY2hfZGluZ2RhbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4muWKoeiuouWNlScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAyNDlBMCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgcmF0ZTogJycsXHJcbiAgICBjdGltZTogJycsXHJcbiAgICBhZGp1ZXN0OiAnJyxcclxuICAgIGxldmVsOiAnJyxcclxuICAgIHN1YnNpZHk6ICcnLFxyXG4gICAgaW50ZXJlc3Q6ICcnLFxyXG4gICAgYmlsbElkOiAnJyxcclxuICAgIGRheTogJycsXHJcbiAgICBzb3VyY2VJZDogJycsXHJcbiAgICBjb3JlOiAnJyxcclxuICAgIG1vbmV5OiAnJyxcclxuICAgIGludm9pY2U6ICcnLFxyXG4gICAgb3JkQWRkSWQ6ICcnLFxyXG4gICAgb3JkQWRkQmlsbENvcmU6ICcnLFxyXG4gICAgb3JkQWRkQmlsbEludm9pY2U6ICcnLFxyXG4gICAgb3JkQWRkQmlsbE1vbmV5OiAnJyxcclxuICAgIG9yZEFkZEJpbGxUaW1lOiAnJyxcclxuICAgIG9yZEFkZEJpbGxJbnRlcmVzdDogJycsXHJcbiAgICBvcmRBZGRCaWxsU3Vic2lkeTogJycsXHJcbiAgICBvcmRBZGRCaWxsRGF5OiAnJyxcclxuICAgIG9yZEFkZEJpbGxJbWc6ICcnLFxyXG4gICAgb3JkQWRkQmlsbE5hbWU6ICcnLFxyXG4gICAgb3JkQWRkQmlsbFBob25lOiAnJyxcclxuICAgIHJlYWxJbWc6ICcnLFxyXG4gICAgc291cmVjZVBlcnNvbnM6IFtdXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC9vcmRlci9hZGQnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgICAgc3Vic2lkeTogdGhhdC5vcmRBZGRCaWxsU3Vic2lkeSxcclxuICAgICAgICAgIGludGVyZXN0OiB0aGF0Lm9yZEFkZEJpbGxJbnRlcmVzdCxcclxuICAgICAgICAgIGRheTogdGhhdC5vcmRBZGRCaWxsRGF5LFxyXG4gICAgICAgICAgaW52b2ljZTogdGhhdC5vcmRBZGRCaWxsSW52b2ljZSxcclxuICAgICAgICAgIHNvdXJjZUlkOiB0aGF0LnNvdXJjZUlkLFxyXG4gICAgICAgICAgY29yZTogdGhhdC5vcmRBZGRCaWxsQ29yZSxcclxuICAgICAgICAgIGJpbGxJZDogdGhhdC5vcmRBZGRJZCxcclxuICAgICAgICAgIG1vbmV5OiB0aGF0Lm9yZEFkZEJpbGxNb25leSxcclxuICAgICAgICAgIHRpbWU6IHRoYXQub3JkQWRkQmlsbFRpbWUsXHJcbiAgICAgICAgICBpbWc6IHRoYXQub3JkQWRkQmlsbEltZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDUwMCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5Zmo5YaF6YOo6ZSZ6K+vJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICdzdWNjZXNzX3N1Ym1pdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnRva2VuID0gcmVzLmRhdGE7XHJcbiAgICAgICAgLy8gd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgLy8gICBrZXk6ICdyZWFsSW1nJyxcclxuICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgIC8vICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS9iaWxsMzYwL3VzZXIvaW1nL3VwbG9hZCcsXHJcbiAgICAgICAgLy8gICAgICBmaWxlUGF0aDpyZXMuZGF0YSxcclxuICAgICAgICAvLyAgICAgIG5hbWU6J2ZpbGUnLFxyXG4gICAgICAgIC8vICAgICAgLy8gaGVhZGVyOiB7fSwgLy8g6K6+572u6K+35rGC55qEIGhlYWRlclxyXG4gICAgICAgIC8vICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAvLyAgICAgICAgdG9rZW46dGhhdC50b2tlblxyXG4gICAgICAgIC8vICAgICAgfSxcclxuICAgICAgICAvLyAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhhdC5vcmRBZGRCaWxsSW1nPXJlcy5kYXRhXHJcbiAgICAgICAgLy8gICAgICB9XHJcbiAgICAgICAgLy8gICAgfSlcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAncHJlY2lzZUltZycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQub3JkQWRkQmlsbEltZyA9XHJcbiAgICAgICAgICAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS9iaWxsMzYwL3VwbG9hZC8nICsgcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3JhdGUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnJhdGUgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDnpajmja7ph5Hpop1cclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdiaWxsTW9uZXknLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxNb25leSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdlbmREYXRlJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRCaWxsVGltZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdhc3NpZ25CaWxsJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcyMjIyJyk7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRJZCA9IHJlcy5kYXRhLmlkO1xyXG4gICAgICAgIHRoYXQub3JkQWRkQmlsbENvcmUgPSByZXMuZGF0YS5jb3JlO1xyXG4gICAgICAgIHRoYXQub3JkQWRkQmlsbEludm9pY2UgPSByZXMuZGF0YS5pbnZvaWNlO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbEltZyA9IHJlcy5kYXRhLmRhdGEuaW1nO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbE5hbWUgPSByZXMuZGF0YS5kYXRhLm5hbWU7XHJcbiAgICAgICAgLy8gdGhhdC5vcmRBZGRCaWxsUGhvbmUgPSByZXMuZGF0YS5kYXRhLnBob25lO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkSWQgPSByZXMuZGF0YS5kYXRhLmlkO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbENvcmUgPSByZXMuZGF0YS5kYXRhLmJpbGwuY29yZTtcclxuICAgICAgICAvLyB0aGF0Lm9yZEFkZEJpbGxJbnZvaWNlID0gcmVzLmRhdGEuZGF0YS5iaWxsLmludm9pY2U7XHJcbiAgICAgICAgLy8gdGhhdC5vcmRBZGRCaWxsVGltZSA9IHJlcy5kYXRhLmRhdGEudGltZTtcclxuICAgICAgICAvLyB0aGF0Lm9yZEFkZEJpbGxJbnRlcmVzdCA9IHJlcy5kYXRhLmRhdGEuaW50ZXJlc3Q7XHJcbiAgICAgICAgLy8gdGhhdC5vcmRBZGRCaWxsU3Vic2lkeSA9IHJlcy5kYXRhLmRhdGEuc3Vic2lkeTtcclxuICAgICAgICAvLyB0aGF0Lm9yZEFkZEJpbGxEYXkgPSByZXMuZGF0YS5kYXRhLmRheTtcclxuICAgICAgICAvLyB0aGF0Lm9yZEFkZEJpbGxJbWcgPSByZXMuZGF0YS5kYXRhLmltZztcclxuICAgICAgICAvLyB0aGF0Lm9yZEFkZEJpbGxOYW1lID0gcmVzLmRhdGEuZGF0YS5uYW1lO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbFBob25lID0gcmVzLmRhdGEuZGF0YS5waG9uZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGF0Lm9yZEFkZEJpbGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOS/neeQhumHkeminVxyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2JpbGxNb25leScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQub3JkQWRkQmlsbFN1YnNpZHkgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaW50ZXJlc3QnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxJbnRlcmVzdCA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdkYXknLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxEYXkgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDorqLljZXnpajmja5JRCDlvIPnlKhcclxuICAgIC8vIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgLy8gICBrZXk6ICdvcmRlckJpbGxJZCcsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgLy8gICAgIHRoYXQuYmlsbElkID0gcmVzLmRhdGE7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3NvdXJjZUZpbmQnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAvLyDmuKDpgZNJRFxyXG4gICAgICAgIHRoYXQuc291cmNlSWQgPSByZXMuZGF0YVswXS5pZDtcclxuICAgICAgICB0aGF0LnNvdXJlY2VQZXJzb25zID0gcmVzLmRhdGFbMF0uc3RhZmZzO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbE5hbWUgPSByZXMuZGF0YVswXS5uYW1lO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbFBob25lID0gcmVzLmRhdGFbMF0ucGhvbmVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnY3RpbWUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmN0aW1lID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2NvcmUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmNvcmUgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaW52b2ljZScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQuaW52b2ljZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdhZGp1ZXN0JyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5hZGp1ZXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2xldmVsJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5sZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgLy8gICBrZXk6ICdtb25leScsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgLy8gICAgIHRoYXQubW9uZXkgPSByZXMuZGF0YTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==