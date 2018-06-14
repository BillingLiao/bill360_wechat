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
      navigationBarTitleText: '查询结果',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.methods = {}, _this.data = {
      token: '',
      subsidy: '',
      interest: '',
      day: '',
      img: '',
      sourceId: '',
      billld: '',
      isBargain: '',
      isinvoice: '',
      billRate: '',
      dateWeek: '',
      core: '',
      index: 0,
      endDate: '',
      size: 10,
      money: '',
      invoice: '',
      preciseData: []
    }, _this.methods = {
      // 仅查询订单
      orderSearch: function orderSearch() {
        wx.navigateTo({
          url: 'search'
        });
        // let that = this;
        // wx.request({
        //   url: 'https://xcx.wenxikeji.com//bill360//order/my',
        //   data: {
        //     token: that.token,
        //     index: that.index,
        //     size: that.size
        //   },
        //   method: 'POST',
        //   header: {
        //     'content-type': 'application/x-www-form-urlencoded' // 默认值
        //   },
        //   success: function(res) {
        //     console.log(res.data.data.content);
        //     wx.setStorage({
        //       key: 'myProcessing',
        //       data: res.data.data.content
        //     });
        //     wx.navigateTo({
        //       url: 'myProcessing'
        //     });
        //   }
        // });
      },
      radioChange: function radioChange(e) {
        var that = this;
        this.billld = e.detail.value;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360/order/calc',
          data: {
            token: that.token,
            billId: that.billld,
            money: that.subsidy,
            time: that.endDate
          },
          method: 'POST',
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: function success(res) {
            if (res.data.code == 0) {
              that.money = res.data.data.interestUnit;
              that.day = res.data.data.day;
              that.interest = res.data.data.interest;
              wx.setStorage({
                key: 'day',
                data: that.day
              });
              wx.setStorage({
                key: 'interest',
                data: that.interest
              });
              that.$apply();
            } else if (res.data.code == 2) {
              wx.showModal({
                content: res.data.message,
                showCancel: false
              });
            }
          }
        });
      },

      //     // 保留JS
      //     that.billRate = res.data.data.rate;
      //     that.adjuest = res.data.data.adjuest;
      //     // 当天日期
      //     let date = new Date();
      //     let dateWeek = new Date().getDay();
      //     if(dateWeek == 0){
      //       that.dateWeek +=2;
      //     }else if(dateWeek == 6){
      //       that.dateWeek ++;
      //     }else{
      //       that.dateWeek = 0;
      //     }
      //     //年
      //     let Y = date.getFullYear();
      //     //月
      //     let M =date.getMonth() + 1 < 10? '0' + (date.getMonth() + 1): date.getMonth() + 1;
      //     //日
      //     let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      //     let fendata = Y +"-"+ M +"-"+ D;
      //     let oDate2 = that.endDate;
      //     //转换为12-18-2002格式,即时间字符串的格式：月-日-年
      //     let aDate2 = oDate2.split('-');
      //     let aDate1 = fendata.split('-');
      //     let oDate1 =Date.parse(new Date(fendata));
      //     let oDate23 = Date.parse(new Date(oDate2));
      //     //把相差的毫秒数转换为天数 贴现当天10-21，到期是明年10-11，按照上面要求加5天，就是355+5，/360
      //     console.log(parseInt((Math.abs(oDate1 - oDate23) / 1000 / 60 / 60 / 24)));
      //     let iDays = parseInt(
      //       (Math.abs(oDate1 - oDate23) / 1000 / 60 / 60 / 24 + that.adjuest + that.dateWeek)
      //     );
      //     // that.interest = num.toFixed(2);
      //     // that.day = iDays;
      //             // 利息公式  年利率10%，100万金额，一年利息10万，每10万就扣1万
      //     // let interestMoney = that.subsidy * (that.day/360)* (that.billRate / 100);
      //     let sss = interestMoney.toString();
      //     let ttt = sss.substring(0, 1);
      //     let tr = sss.substring(0, 2);
      //     let yi = sss.substring(0, 3);
      //     let tenyi = sss.substring(0, 4);
      //     let baiyi = sss.substring(0, 5);
      //     console.log(interestMoney.toString().length);
      //     if (interestMoney.toString().length == 6) {
      //       interestMoney -= ttt + '0000';
      //       console.log(interestMoney);
      //     } else if (interestMoney.toString().length == 7) {
      //       interestMoney -= tr + '0000';
      //     } else if (interestMoney.toString().length == 8) {
      //       interestMoney -= yi + '0000';
      //     } else if (interestMoney.toString().length == 9) {
      //       interestMoney -= tenyi + '0000';
      //     } else if (interestMoney.toString().length == 10) {
      //       interestMoney -= baiyi + '0000';
      //     }

      //     let num = new Number(interestMoney);
      //     console.log(num)
      //     // that.interest = interestMoney;
      //     that.interest = num.toFixed(2);
      //     // 每十万计算公式
      //     // let interestDay = (that.interest*100000)/that.subsidy;
      //       // that.subsidy * that.billRate / 100 * (that.adjuest) / 360;
      //     // let arr = new Number(interestDay);
      //     // that.money = arr.toFixed(2);
      //     // that.money = interestDay;
      // 创建订单
      orderAdd: function orderAdd() {
        var that = this;
        console.log(that.billld);
        wx.request({
          url: 'https://xcx.wenxikeji.com/bill360/bill/id',
          method: 'POST',
          data: {
            token: that.token,
            id: that.billld
          },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: function success(res) {
            console.log(res.data);
            wx.setStorage({
              key: 'assignBill',
              data: res.data.data
            });
            wx.navigateTo({
              url: 'precise_search_dingdan'
            });
          }
        });
      },
      // 加载查询bill更多内容
      moreBill: function moreBill(e) {
        var that = this;
        var billId = e.currentTarget.id;
        wx.request({
          url: 'https://xcx.wenxikeji.com/bill360/bill/id',
          method: 'POST',
          data: {
            token: that.token,
            id: billId
          },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: function success(res) {
            if (res.data.code == 0) {
              console.log(res.data);
              wx.setStorage({
                key: 'billMore',
                data: res.data.data
              });
              wx.navigateTo({
                url: 'precise_search_more'
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(personCenter, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getStorage({
        key: 'billMoney',
        success: function success(res) {
          that.subsidy = res.data;
        }
      });
      wx.getStorage({
        key: 'token',
        success: function success(res) {
          that.token = res.data;
          wx.request({
            url: 'https://xcx.wenxikeji.com//bill360/record/my',
            method: 'POST',
            data: {
              token: that.token,
              size: 2
            },
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            success: function success(res) {
              that.historyData = res.data.data.content;
            }
          });
        }
      });
      wx.getStorage({
        key: 'preciseData',
        success: function success(res) {
          that.preciseData = res.data;
          console.log(res.data);
        }
      });

      /*
      wx.getStorage({
        key: 'sourceFind',
        success: function success(res) {
          that.sourceFind = res.data;
          that.etime = res.data[0].etime;
          that.rate = res.data[0].rate;
          that.isBargain = res.data[0].isBargain;
          that.isinvoice = res.data[0].isInvoice;
          that.adjuest = res.data[0].adjuest;
          console.log(that.isBargain);
          console.log(that.isinvoice);
        }
      });
      */

      wx.getStorage({
        key: 'billId',
        success: function success(res) {
          that.billId = res.data;
          console.log(that.billId);
        }
      });

      wx.getStorage({
        key: 'endDate',
        success: function success(res) {
          that.endDate = res.data;
        }
      });
      wx.getStorage({
        key: 'invoice',
        success: function success(res) {
          that.invoice = res.data;
        }
      });
      wx.getStorage({
        key: 'preciseImg',
        success: function success(res) {
          that.img = res.data;
        }
      });
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter, 'pages/precise_search_result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWNpc2Vfc2VhcmNoX3Jlc3VsdC5qcyJdLCJuYW1lcyI6WyJwZXJzb25DZW50ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJtZXRob2RzIiwiZGF0YSIsInRva2VuIiwicmF0ZSIsImN0aW1lIiwiYWRqdWVzdCIsImxldmVsIiwiZXRpbWUiLCJzdWJzaWR5IiwiaW50ZXJlc3QiLCJkYXkiLCJpbWciLCJzb3VyY2VJZCIsImJpbGxsZCIsImlzQmFyZ2FpbiIsImlzaW52b2ljZSIsImJpbGxSYXRlIiwiZGF0ZVdlZWsiLCJjb3JlIiwiaW5kZXgiLCJlbmREYXRlIiwic2l6ZSIsIm1vbmV5IiwiaW52b2ljZSIsInNvdXJjZUZpbmQiLCJwcmVjaXNlRGF0YSIsIm9yZGVyU2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmFkaW9DaGFuZ2UiLCJlIiwidGhhdCIsImRldGFpbCIsInZhbHVlIiwicmVxdWVzdCIsInRpbWUiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsImludGVyZXN0VW5pdCIsInNldFN0b3JhZ2UiLCJrZXkiLCIkYXBwbHkiLCJzaG93TW9kYWwiLCJjb250ZW50IiwibWVzc2FnZSIsInNob3dDYW5jZWwiLCJvcmRlckFkZCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImdldFN0b3JhZ2UiLCJoaXN0b3J5RGF0YSIsImlzSW52b2ljZSIsImJpbGxJZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVEMsTyxHQUFVLEUsUUFDVkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtB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QixVQUFILENBQWM7QUFDWlYsYUFBSyxRQURPO0FBRVpMLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJSLGVBQUt5QixNQUFMLEdBQWNqQixJQUFJdkMsSUFBbEI7QUFDQWtELGtCQUFRQyxHQUFSLENBQVlwQixLQUFLeUIsTUFBakI7QUFDRDtBQUxXLE9BQWQ7O0FBUUE5QixTQUFHMkIsVUFBSCxDQUFjO0FBQ1pWLGFBQUssU0FETztBQUVaTCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUixlQUFLWixPQUFMLEdBQWVvQixJQUFJdkMsSUFBbkI7QUFDRDtBQUpXLE9BQWQ7QUFNQTBCLFNBQUcyQixVQUFILENBQWM7QUFDWlYsYUFBSyxTQURPO0FBRVpMLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJSLGVBQUtULE9BQUwsR0FBZWlCLElBQUl2QyxJQUFuQjtBQUNEO0FBSlcsT0FBZDtBQU1BMEIsU0FBRzJCLFVBQUgsQ0FBYztBQUNaVixhQUFLLFlBRE87QUFFWkwsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsZUFBS3JCLEdBQUwsR0FBVzZCLElBQUl2QyxJQUFmO0FBQ0Q7QUFKVyxPQUFkO0FBTUQ7Ozs7RUF4UXVDLGVBQUt5RCxJOztrQkFBMUIvRCxZIiwiZmlsZSI6InByZWNpc2Vfc2VhcmNoX3Jlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGVyc29uQ2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p+l6K+i57uT5p6cJyxcclxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDI0OUEwJyxcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge307XHJcbiAgZGF0YSA9IHtcclxuICAgIHRva2VuOiAnJyxcclxuICAgIHJhdGU6ICcnLFxyXG4gICAgY3RpbWU6ICcnLFxyXG4gICAgYWRqdWVzdDogJycsXHJcbiAgICBsZXZlbDogJycsXHJcbiAgICBldGltZTogJycsXHJcbiAgICBzdWJzaWR5OiAnJyxcclxuICAgIGludGVyZXN0OiAnJyxcclxuICAgIGRheTogJycsXHJcbiAgICBpbWc6ICcnLFxyXG4gICAgc291cmNlSWQ6ICcnLFxyXG4gICAgYmlsbGxkOiAnJyxcclxuICAgIGlzQmFyZ2FpbjogJycsXHJcbiAgICBpc2ludm9pY2U6ICcnLFxyXG4gICAgYmlsbFJhdGU6ICcnLFxyXG4gICAgZGF0ZVdlZWs6ICcnLFxyXG4gICAgY29yZTogJycsXHJcbiAgICBpbmRleDogMCxcclxuICAgIGVuZERhdGU6ICcnLFxyXG4gICAgc2l6ZTogMTAsXHJcbiAgICBtb25leTogJycsXHJcbiAgICBpbnZvaWNlOiAnJyxcclxuICAgIHNvdXJjZUZpbmQ6IFtdLFxyXG4gICAgcHJlY2lzZURhdGE6IFtdXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8g5LuF5p+l6K+i6K6i5Y2VXHJcbiAgICBvcmRlclNlYXJjaCgpIHtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnc2VhcmNoJ1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAvLyB3eC5yZXF1ZXN0KHtcclxuICAgICAgLy8gICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy9vcmRlci9teScsXHJcbiAgICAgIC8vICAgZGF0YToge1xyXG4gICAgICAvLyAgICAgdG9rZW46IHRoYXQudG9rZW4sXHJcbiAgICAgIC8vICAgICBpbmRleDogdGhhdC5pbmRleCxcclxuICAgICAgLy8gICAgIHNpemU6IHRoYXQuc2l6ZVxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vICAgaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEuY29udGVudCk7XHJcbiAgICAgIC8vICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgLy8gICAgICAga2V5OiAnbXlQcm9jZXNzaW5nJyxcclxuICAgICAgLy8gICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5jb250ZW50XHJcbiAgICAgIC8vICAgICB9KTtcclxuICAgICAgLy8gICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAvLyAgICAgICB1cmw6ICdteVByb2Nlc3NpbmcnXHJcbiAgICAgIC8vICAgICB9KTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuICAgIHJhZGlvQ2hhbmdlKGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGlzLmJpbGxsZCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwL29yZGVyL2NhbGMnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgICAgc291cmNlSWQ6IHRoYXQuYmlsbGxkLFxyXG4gICAgICAgICAgbW9uZXk6IHRoYXQuc3Vic2lkeSxcclxuICAgICAgICAgIHRpbWU6IHRoYXQuZW5kRGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGF0Lm1vbmV5ID0gcmVzLmRhdGEuZGF0YS5pbnRlcmVzdFVuaXQ7XHJcbiAgICAgICAgICAgIHRoYXQuZGF5ID0gcmVzLmRhdGEuZGF0YS5kYXk7XHJcbiAgICAgICAgICAgIHRoYXQuaW50ZXJlc3QgPSByZXMuZGF0YS5kYXRhLmludGVyZXN0O1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdkYXknLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHRoYXQuZGF5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdpbnRlcmVzdCcsXHJcbiAgICAgICAgICAgICAgZGF0YTogdGhhdC5pbnRlcmVzdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vICAgICAvLyDkv53nlZlKU1xyXG4gICAgLy8gICAgIHRoYXQuYmlsbFJhdGUgPSByZXMuZGF0YS5kYXRhLnJhdGU7XHJcbiAgICAvLyAgICAgdGhhdC5hZGp1ZXN0ID0gcmVzLmRhdGEuZGF0YS5hZGp1ZXN0O1xyXG4gICAgLy8gICAgIC8vIOW9k+WkqeaXpeacn1xyXG4gICAgLy8gICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vICAgICBsZXQgZGF0ZVdlZWsgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xyXG4gICAgLy8gICAgIGlmKGRhdGVXZWVrID09IDApe1xyXG4gICAgLy8gICAgICAgdGhhdC5kYXRlV2VlayArPTI7XHJcbiAgICAvLyAgICAgfWVsc2UgaWYoZGF0ZVdlZWsgPT0gNil7XHJcbiAgICAvLyAgICAgICB0aGF0LmRhdGVXZWVrICsrO1xyXG4gICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgdGhhdC5kYXRlV2VlayA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8v5bm0XHJcbiAgICAvLyAgICAgbGV0IFkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyAgICAgLy/mnIhcclxuICAgIC8vICAgICBsZXQgTSA9ZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwPyAnMCcgKyAoZGF0ZS5nZXRNb250aCgpICsgMSk6IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAvLyAgICAgLy/ml6VcclxuICAgIC8vICAgICBsZXQgRCA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBkYXRlLmdldERhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgLy8gICAgIGxldCBmZW5kYXRhID0gWSArXCItXCIrIE0gK1wiLVwiKyBEO1xyXG4gICAgLy8gICAgIGxldCBvRGF0ZTIgPSB0aGF0LmVuZERhdGU7XHJcbiAgICAvLyAgICAgLy/ovazmjaLkuLoxMi0xOC0yMDAy5qC85byPLOWNs+aXtumXtOWtl+espuS4sueahOagvOW8j++8muaciC3ml6Ut5bm0XHJcbiAgICAvLyAgICAgbGV0IGFEYXRlMiA9IG9EYXRlMi5zcGxpdCgnLScpO1xyXG4gICAgLy8gICAgIGxldCBhRGF0ZTEgPSBmZW5kYXRhLnNwbGl0KCctJyk7XHJcbiAgICAvLyAgICAgbGV0IG9EYXRlMSA9RGF0ZS5wYXJzZShuZXcgRGF0ZShmZW5kYXRhKSk7XHJcbiAgICAvLyAgICAgbGV0IG9EYXRlMjMgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKG9EYXRlMikpO1xyXG4gICAgLy8gICAgIC8v5oqK55u45beu55qE5q+r56eS5pWw6L2s5o2i5Li65aSp5pWwIOi0tOeOsOW9k+WkqTEwLTIx77yM5Yiw5pyf5piv5piO5bm0MTAtMTHvvIzmjInnhafkuIrpnaLopoHmsYLliqA15aSp77yM5bCx5pivMzU1KzXvvIwvMzYwXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocGFyc2VJbnQoKE1hdGguYWJzKG9EYXRlMSAtIG9EYXRlMjMpIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCkpKTtcclxuICAgIC8vICAgICBsZXQgaURheXMgPSBwYXJzZUludChcclxuICAgIC8vICAgICAgIChNYXRoLmFicyhvRGF0ZTEgLSBvRGF0ZTIzKSAvIDEwMDAgLyA2MCAvIDYwIC8gMjQgKyB0aGF0LmFkanVlc3QgKyB0aGF0LmRhdGVXZWVrKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgLy8gdGhhdC5pbnRlcmVzdCA9IG51bS50b0ZpeGVkKDIpO1xyXG4gICAgLy8gICAgIC8vIHRoYXQuZGF5ID0gaURheXM7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyDliKnmga/lhazlvI8gIOW5tOWIqeeOhzEwJe+8jDEwMOS4h+mHkemine+8jOS4gOW5tOWIqeaBrzEw5LiH77yM5q+PMTDkuIflsLHmiaMx5LiHXHJcbiAgICAvLyAgICAgLy8gbGV0IGludGVyZXN0TW9uZXkgPSB0aGF0LnN1YnNpZHkgKiAodGhhdC5kYXkvMzYwKSogKHRoYXQuYmlsbFJhdGUgLyAxMDApO1xyXG4gICAgLy8gICAgIGxldCBzc3MgPSBpbnRlcmVzdE1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAvLyAgICAgbGV0IHR0dCA9IHNzcy5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICAvLyAgICAgbGV0IHRyID0gc3NzLnN1YnN0cmluZygwLCAyKTtcclxuICAgIC8vICAgICBsZXQgeWkgPSBzc3Muc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgLy8gICAgIGxldCB0ZW55aSA9IHNzcy5zdWJzdHJpbmcoMCwgNCk7XHJcbiAgICAvLyAgICAgbGV0IGJhaXlpID0gc3NzLnN1YnN0cmluZygwLCA1KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpbnRlcmVzdE1vbmV5LnRvU3RyaW5nKCkubGVuZ3RoKTtcclxuICAgIC8vICAgICBpZiAoaW50ZXJlc3RNb25leS50b1N0cmluZygpLmxlbmd0aCA9PSA2KSB7XHJcbiAgICAvLyAgICAgICBpbnRlcmVzdE1vbmV5IC09IHR0dCArICcwMDAwJztcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGludGVyZXN0TW9uZXkpO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAoaW50ZXJlc3RNb25leS50b1N0cmluZygpLmxlbmd0aCA9PSA3KSB7XHJcbiAgICAvLyAgICAgICBpbnRlcmVzdE1vbmV5IC09IHRyICsgJzAwMDAnO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAoaW50ZXJlc3RNb25leS50b1N0cmluZygpLmxlbmd0aCA9PSA4KSB7XHJcbiAgICAvLyAgICAgICBpbnRlcmVzdE1vbmV5IC09IHlpICsgJzAwMDAnO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAoaW50ZXJlc3RNb25leS50b1N0cmluZygpLmxlbmd0aCA9PSA5KSB7XHJcbiAgICAvLyAgICAgICBpbnRlcmVzdE1vbmV5IC09IHRlbnlpICsgJzAwMDAnO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAoaW50ZXJlc3RNb25leS50b1N0cmluZygpLmxlbmd0aCA9PSAxMCkge1xyXG4gICAgLy8gICAgICAgaW50ZXJlc3RNb25leSAtPSBiYWl5aSArICcwMDAwJztcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGxldCBudW0gPSBuZXcgTnVtYmVyKGludGVyZXN0TW9uZXkpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG51bSlcclxuICAgIC8vICAgICAvLyB0aGF0LmludGVyZXN0ID0gaW50ZXJlc3RNb25leTtcclxuICAgIC8vICAgICB0aGF0LmludGVyZXN0ID0gbnVtLnRvRml4ZWQoMik7XHJcbiAgICAvLyAgICAgLy8g5q+P5Y2B5LiH6K6h566X5YWs5byPXHJcbiAgICAvLyAgICAgLy8gbGV0IGludGVyZXN0RGF5ID0gKHRoYXQuaW50ZXJlc3QqMTAwMDAwKS90aGF0LnN1YnNpZHk7XHJcbiAgICAvLyAgICAgICAvLyB0aGF0LnN1YnNpZHkgKiB0aGF0LmJpbGxSYXRlIC8gMTAwICogKHRoYXQuYWRqdWVzdCkgLyAzNjA7XHJcbiAgICAvLyAgICAgLy8gbGV0IGFyciA9IG5ldyBOdW1iZXIoaW50ZXJlc3REYXkpO1xyXG4gICAgLy8gICAgIC8vIHRoYXQubW9uZXkgPSBhcnIudG9GaXhlZCgyKTtcclxuICAgIC8vICAgICAvLyB0aGF0Lm1vbmV5ID0gaW50ZXJlc3REYXk7XHJcbiAgICAvLyDliJvlu7rorqLljZVcclxuICAgIG9yZGVyQWRkKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQuYmlsbGxkKTtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC9iaWxsL2lkJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b2tlbjogdGhhdC50b2tlbixcclxuICAgICAgICAgIGlkOiB0aGF0LmJpbGxsZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2Fzc2lnbkJpbGwnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdwcmVjaXNlX3NlYXJjaF9kaW5nZGFuJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdiaWxsTW9uZXknLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnN1YnNpZHkgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnRva2VuID0gcmVzLmRhdGE7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwL3JlY29yZC9teScsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdG9rZW46IHRoYXQudG9rZW4sXHJcbiAgICAgICAgICAgIHNpemU6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgdGhhdC5oaXN0b3J5RGF0YSA9IHJlcy5kYXRhLmRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5oaXN0b3J5RGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3ByZWNpc2VEYXRhJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5wcmVjaXNlRGF0YSA9IHJlcy5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhhdC5wcmVjaXNlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3NvdXJjZUZpbmQnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LnNvdXJjZUZpbmQgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGF0LmV0aW1lID0gcmVzLmRhdGFbMF0uZXRpbWU7XHJcbiAgICAgICAgdGhhdC5yYXRlID0gcmVzLmRhdGFbMF0ucmF0ZTtcclxuICAgICAgICB0aGF0LmlzQmFyZ2FpbiA9IHJlcy5kYXRhWzBdLmlzQmFyZ2FpbjtcclxuICAgICAgICB0aGF0LmlzaW52b2ljZSA9IHJlcy5kYXRhWzBdLmlzSW52b2ljZTtcclxuICAgICAgICB0aGF0LmFkanVlc3QgPSByZXMuZGF0YVswXS5hZGp1ZXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQuaXNCYXJnYWluKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmlzaW52b2ljZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdiaWxsSWQnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmJpbGxJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQuYmlsbElkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2VuZERhdGUnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB0aGF0LmVuZERhdGUgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaW52b2ljZScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQuaW52b2ljZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdwcmVjaXNlSW1nJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5pbWcgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==