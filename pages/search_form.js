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

var search_form = function (_wepy$page) {
  _inherits(search_form, _wepy$page);

  function search_form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, search_form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search_form.__proto__ || Object.getPrototypeOf(search_form)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '业务订单',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.watch = {
      ordAddId: function ordAddId(newValue, oldValue) {
        console.log('ordAddId value: ' + oldValue + ' -> ' + newValue);
      }
    }, _this.data = {
      token: '',
      ordAddId: '',
      ordAddBillId: '',
      ordAddBillCore: '',
      ordAddBillInvoice: '',
      ordAddBillMoney: '',
      ordAddBillTime: '',
      ordAddBillInterest: '',
      ordAddBillSubsidy: '',
      ordAddBillDay: '',
      ordAddBillImg: '',
      ordAddBillName: '',
      ordAddBillPhone: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(search_form, [{
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
        key: 'orderSearch',
        success: function success(res) {
          that.ordAddBillName = res.data.name;
          that.ordAddBillPhone = res.data.phone;
          that.ordAddId = res.data.id;
          that.ordAddBillMoney = res.data.money;
          that.ordAddBillImg = res.data.img;
          that.ordAddBillId = res.data.bill.id;
          that.ordAddBillCore = res.data.bill.acceptance.core;
          that.ordAddBillInvoice = res.data.bill.acceptance.invoice;
          that.ordAddBillTime = res.data.time;
          that.ordAddBillInterest = res.data.interest;
          that.ordAddBillSubsidy = res.data.subsidy;
          that.ordAddBillDay = res.data.day;
          that.$apply();
          // that.ordAddBillImg = res.data.img;
        }
      });

      // wx.getStorage({
      //   key:'preciseImg',
      //   success:function(res){
      //     that.ordAddBillImg =''+res.data
      //   }
      // })

      /*
      wx.getStorage({
        key: 'rate',
        success: function success(res) {
          that.rate = res.data;
        }
      });
      */

      // 票据金额
      // wx.getStorage({
      //   key: 'billMoney',
      //   success: function(res) {
      //     that.ordAddBillMoney = res.data;
      //   }
      // });

      /*
      // 保理金额
      wx.getStorage({
        key: 'subsidy',
        success: function success(res) {
          that.ordAddBillSubsidy = res.data;
        }
      });
      wx.getStorage({
        key: 'interest',
        success: function success(res) {
          that.ordAddBillInterest = res.data;
        }
      });
      wx.getStorage({
        key: 'day',
        success: function success(res) {
          that.ordAddBillDay = res.data;
        }
      });
      */
      // 订单票据ID 弃用
      // wx.getStorage({
      //   key: 'orderBillId',
      //   success: function(res) {
      //     that.billId = res.data;
      //   }
      // });

      //wx.getStorage({
      // key: 'sourceFind',
      //  success: function success(res) {
          // 渠道ID
          //that.sourceId = res.data[0].id;
          //that.sourecePersons = res.data[0].staffs;
          // that.ordAddBillName = res.data[0].name;
          // that.ordAddBillPhone = res.data[0].phone
        //}
     // });
     /*
      wx.getStorage({
        key: 'ctime',
        success: function success(res) {
          that.ctime = res.data;
        }
      });
      wx.getStorage({
        key: 'core',
        success: function success(res) {
          that.core = res.data;
        }
      });
      wx.getStorage({
        key: 'invoice',
        success: function success(res) {
          that.invoice = res.data;
        }
      });
      wx.getStorage({
        key: 'adjuest',
        success: function success(res) {
          that.adjuest = res.data;
        }
      });
      wx.getStorage({
        key: 'level',
        success: function success(res) {
          that.level = res.data;
        }
      });
      */
      // wx.getStorage({
      //   key: 'money',
      //   success: function(res) {
      //     that.money = res.data;
      //   }
      // });
    }
  }]);

  return search_form;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(search_form , 'pages/search_form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9mb3JtLmpzIl0sIm5hbWVzIjpbInByZWNpc2Vfc2VhcmNoX2RpbmdkYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ3YXRjaCIsIm9yZEFkZElkIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9rZW4iLCJyYXRlIiwiY3RpbWUiLCJhZGp1ZXN0IiwibGV2ZWwiLCJzdWJzaWR5IiwiaW50ZXJlc3QiLCJkYXkiLCJzb3VyY2VJZCIsImNvcmUiLCJtb25leSIsImludm9pY2UiLCJvcmRBZGRCaWxsSWQiLCJvcmRBZGRCaWxsQ29yZSIsIm9yZEFkZEJpbGxJbnZvaWNlIiwib3JkQWRkQmlsbE1vbmV5Iiwib3JkQWRkQmlsbFRpbWUiLCJvcmRBZGRCaWxsSW50ZXJlc3QiLCJvcmRBZGRCaWxsU3Vic2lkeSIsIm9yZEFkZEJpbGxEYXkiLCJvcmRBZGRCaWxsSW1nIiwib3JkQWRkQmlsbE5hbWUiLCJvcmRBZGRCaWxsUGhvbmUiLCJzb3VyZWNlUGVyc29ucyIsIm1ldGhvZHMiLCJ0aGF0Iiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsIm5hbWUiLCJwaG9uZSIsImlkIiwiaW1nIiwiYmlsbCIsInRpbWUiLCIkYXBwbHkiLCJzdGFmZnMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxzQjs7Ozs7Ozs7Ozs7Ozs7c05BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLG9DQUE4QixTQUZ2QjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQUtUQyxLLEdBQU87QUFDSkMsY0FESSxvQkFDTUMsUUFETixFQUNnQkMsUUFEaEIsRUFDMEI7QUFDekJDLGdCQUFRQyxHQUFSLHNCQUErQkYsUUFBL0IsWUFBOENELFFB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QUFjO0FBQ1pDLGFBQUssT0FETztBQUVaQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTCxlQUFLckIsS0FBTCxHQUFhMEIsSUFBSS9CLElBQWpCO0FBQ0Q7QUFKVyxPQUFkO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUFoS2lELGVBQUt3QyxJOztrQkFBcENuRCxzQiIsImZpbGUiOiJzZWFyY2hfZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJlY2lzZV9zZWFyY2hfZGluZ2RhbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4muWKoeiuouWNlScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAyNDlBMCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgfTtcclxuICB3YXRjaCA9e1xyXG4gICAgIG9yZEFkZElkIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBvcmRBZGRJZCB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKVxyXG4gICAgICB9XHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgcmF0ZTogJycsXHJcbiAgICBjdGltZTogJycsXHJcbiAgICBhZGp1ZXN0OiAnJyxcclxuICAgIGxldmVsOiAnJyxcclxuICAgIHN1YnNpZHk6ICcnLFxyXG4gICAgaW50ZXJlc3Q6ICcnLFxyXG4gICAgZGF5OiAnJyxcclxuICAgIHNvdXJjZUlkOiAnJyxcclxuICAgIGNvcmU6ICcnLFxyXG4gICAgbW9uZXk6ICcnLFxyXG4gICAgaW52b2ljZTogJycsXHJcbiAgICBvcmRBZGRJZDogJycsXHJcbiAgICBvcmRBZGRCaWxsSWQ6JycsXHJcbiAgICBvcmRBZGRCaWxsQ29yZTogJycsXHJcbiAgICBvcmRBZGRCaWxsSW52b2ljZTogJycsXHJcbiAgICBvcmRBZGRCaWxsTW9uZXk6ICcnLFxyXG4gICAgb3JkQWRkQmlsbFRpbWU6ICcnLFxyXG4gICAgb3JkQWRkQmlsbEludGVyZXN0OiAnJyxcclxuICAgIG9yZEFkZEJpbGxTdWJzaWR5OiAnJyxcclxuICAgIG9yZEFkZEJpbGxEYXk6ICcnLFxyXG4gICAgb3JkQWRkQmlsbEltZzogJycsXHJcbiAgICBvcmRBZGRCaWxsTmFtZTogJycsXHJcbiAgICBvcmRBZGRCaWxsUGhvbmU6ICcnLFxyXG4gICAgc291cmVjZVBlcnNvbnM6IFtdLFxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIFxyXG4gIH07XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3Rva2VuJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC50b2tlbiA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAvLyAgIGtleToncHJlY2lzZUltZycsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXtcclxuICAgIC8vICAgICB0aGF0Lm9yZEFkZEJpbGxJbWcgPScnK3Jlcy5kYXRhXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pXHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAncmF0ZScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQucmF0ZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOelqOaNrumHkeminVxyXG4gICAgLy8gd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAvLyAgIGtleTogJ2JpbGxNb25leScsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgLy8gICAgIHRoYXQub3JkQWRkQmlsbE1vbmV5ID0gcmVzLmRhdGE7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ29yZGVyU2VhcmNoJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRCaWxsTmFtZSA9IHJlcy5kYXRhLm5hbWU7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRCaWxsUGhvbmUgPSByZXMuZGF0YS5waG9uZTtcclxuICAgICAgICB0aGF0Lm9yZEFkZElkID0gcmVzLmRhdGEuaWQ7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRCaWxsTW9uZXkgPXJlcy5kYXRhLm1vbmV5O1xyXG4gICAgICAgICB0aGF0Lm9yZEFkZEJpbGxJbWcgPXJlcy5kYXRhLmltZztcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxJZCA9IHJlcy5kYXRhLmJpbGwuaWQ7ICAgICAgICBcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxDb3JlID0gcmVzLmRhdGEuYmlsbC5jb3JlO1xyXG4gICAgICAgIHRoYXQub3JkQWRkQmlsbEludm9pY2UgPSByZXMuZGF0YS5iaWxsLmludm9pY2U7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRCaWxsVGltZSA9IHJlcy5kYXRhLnRpbWU7XHJcbiAgICAgICAgdGhhdC5vcmRBZGRCaWxsSW50ZXJlc3QgPSByZXMuZGF0YS5pbnRlcmVzdDtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxTdWJzaWR5ID0gcmVzLmRhdGEuc3Vic2lkeTtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxEYXkgPSByZXMuZGF0YS5kYXk7XHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAvLyB0aGF0Lm9yZEFkZEJpbGxJbWcgPSByZXMuZGF0YS5pbWc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g5L+d55CG6YeR6aKdXHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnc3Vic2lkeScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQub3JkQWRkQmlsbFN1YnNpZHkgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaW50ZXJlc3QnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxJbnRlcmVzdCA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdkYXknLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0Lm9yZEFkZEJpbGxEYXkgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDorqLljZXnpajmja5JRCDlvIPnlKhcclxuICAgIC8vIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgLy8gICBrZXk6ICdvcmRlckJpbGxJZCcsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgLy8gICAgIHRoYXQuYmlsbElkID0gcmVzLmRhdGE7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3NvdXJjZUZpbmQnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAvLyDmuKDpgZNJRFxyXG4gICAgICAgIHRoYXQuc291cmNlSWQgPSByZXMuZGF0YVswXS5pZDtcclxuICAgICAgICB0aGF0LnNvdXJlY2VQZXJzb25zID0gcmVzLmRhdGFbMF0uc3RhZmZzO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbE5hbWUgPSByZXMuZGF0YVswXS5uYW1lO1xyXG4gICAgICAgIC8vIHRoYXQub3JkQWRkQmlsbFBob25lID0gcmVzLmRhdGFbMF0ucGhvbmVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnY3RpbWUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmN0aW1lID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2NvcmUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmNvcmUgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaW52b2ljZScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQuaW52b2ljZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdhZGp1ZXN0JyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5hZGp1ZXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2xldmVsJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5sZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgLy8gICBrZXk6ICdtb25leScsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgLy8gICAgIHRoYXQubW9uZXkgPSByZXMuZGF0YTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==