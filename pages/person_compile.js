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
      navigationBarTitleText: '编辑名片',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.data = {
      company: '',
      name: '',
      addr: '',
      tel: '',
      phone: '',
      token: '',
      cardInfo: [],
      duty: '',
      id: ''
    }, _this.methods = {
      compile_card: function compile_card() {
        var that = this;
        wx.request({
          url: 'https://xcx.wenxikeji.com//bill360//card/set',
          data: {
            id: that.id,
            company: that.company,
            name: that.name,
            token: that.token,
            addr: that.addr,
            tel: that.tel,
            phone: that.phone
            // duty: that.duty
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function success(res) {
            if (res.data.data == null) {
              wx.showModal({
                content: res.data.message,
                showCancel: false
              });
            }else{
                console.log(res.data);
                var arr = [];
                arr.push(res.data.data);
                wx.setStorage({
                  key: 'cardInfo',
                  data: arr
                });

                wx.navigateTo({
                  url: 'person_login'
                });
            }
            // wx.setStorage({
            //   key: 'cardCompany',
            //   data: res.data.data.company
            // });
            // wx.setStorage({
            //   key: 'cardAddr',
            //   data: res.data.data.addr
            // });
            // wx.setStorage({
            //   key: 'cardDuty',
            //   data: res.data.data.duty
            // });
            // wx.setStorage({
            //   key: 'cardName',
            //   data: res.data.data.name
            // });
            // wx.setStorage({
            //   key: 'cardPhone',
            //   data: res.data.data.phone
            // });
            // wx.setStorage({
            //   key: 'cardTel',
            //   data: res.data.data.tel
            // });
          }
        });
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
      dutyInput: function dutyInput(input) {
        this.duty = input.detail.value;
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
        key: 'cardId',
        success: function success(res) {
          that.id = res.data;
        }
      });
      wx.getStorage({
        key: 'cardInfo',
        success: function success(res) {
          that.cardInfo = res.data;
          that.id = res.data[0].id;
        }
      });
    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter , 'pages/person_compile'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbl9jb21waWxlLmpzIl0sIm5hbWVzIjpbInBlcnNvbkNlbnRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImRhdGEiLCJjb21wYW55IiwibmFtZSIsImFkZHIiLCJ0ZWwiLCJwaG9uZSIsInRva2VuIiwiY2FyZEluZm8iLCJkdXR5IiwiaWQiLCJtZXRob2RzIiwiY29tcGlsZV9jYXJkIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwicHVzaCIsInNldFN0b3JhZ2UiLCJrZXkiLCJuYXZpZ2F0ZVRvIiwibmFtZUlucHV0IiwiaW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbXBhbnlJbnB1dCIsImFkZHJJbnB1dCIsInRlbElucHV0IiwicGhvbmVJbnB1dCIsImR1dHlJbnB1dCIsImdldFN0b3JhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBS1RDLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxXQUFLLEVBSkE7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLGFBQU8sRUFORjtBQU9MQyxnQkFBUyxFQVBKO0FBUUxDLFlBQU0sRUFSRDtBQVNMQyxVQUFJO0FBVEMsSyxRQVdQQyxPLEdBQVU7QUFDUkMsa0JBRFEsMEJBQ087QUFDYixZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGVBQUssOENBREk7QUFFVGYsZ0JBQU07QUFDSlMsZ0JBQUlHLEtBQUtILEVBREw7QUFFSlIscUJBQVNXLEtBQUtYLE9BRlY7QUFHSkMsa0JBQU1VLEtBQUtWLElBSFA7QUFJSkksbUJBQU9NLEtBQUtOLEtBSlI7QUFLSkgsa0JBQU1TLEtBQUtULElBTFA7QUFNSkMsaUJBQUtRLEtBQUtSLEdBTk47QUFPSkMsbUJBQU9PLEtBQUtQO0FBQ1o7QUFSSSxXQUZHO0FBWVRXLGtCQUFRLE1BWkM7QUFhVEMsa0JBQVE7QUFDTiw0QkFBZ0I7QUFEVixXQWJDO0FBZ0JUQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxvQkFBUUMsR0FBUixDQUFZRixJQUFJbkIsSUFBaEI7QUFDQSxnQkFBSXNCLE1BQUssRUFBVDtBQUNBQSxnQkFBSUMsSUFBSixDQUFTSixJQUFJbkIsSUFBSixDQUFTQSxJQUFsQjtBQUNFYSxlQUFHVyxVQUFILENBQWM7QUFDZEMsbUJBQUssVUFEUztBQUVkekIsb0JBQU1zQjtBQUZRLGFBQWQ7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVQsZUFBR2EsVUFBSCxDQUFjO0FBQ1pYLG1CQUFLO0FBRE8sYUFBZDtBQUdEO0FBbkRRLFNBQVg7QUFxREQsT0F4RE87QUF5RFJZLGVBekRRLHFCQXlERUMsS0F6REYsRUF5RFM7QUFDZixhQUFLMUIsSUFBTCxHQUFZMEIsTUFBTUMsTUFBTixDQUFhQyxLQUF6QjtBQUNELE9BM0RPO0FBNERSQyxrQkE1RFEsd0JBNERLSCxLQTVETCxFQTREWTtBQUNsQixhQUFLM0IsT0FBTCxHQUFlMkIsTUFBTUMsTUFBTixDQUFhQyxLQUE1QjtBQUNELE9BOURPO0FBK0RSRSxlQS9EUSxxQkErREVKLEtBL0RGLEVBK0RTO0FBQ2YsYUFBS3pCLElBQUwsR0FBWXlCLE1BQU1DLE1BQU4sQ0FBYUMsS0FBekI7QUFDRCxPQWpFTztBQWtFUkcsY0FsRVEsb0JBa0VDTCxLQWxFRCxFQWtFUTtBQUNkLGFBQUt4QixHQUFMLEdBQVd3QixNQUFNQyxNQUFOLENBQWFDLEtBQXhCO0FBQ0QsT0FwRU87QUFxRVJJLGdCQXJFUSxzQkFxRUdOLEtBckVILEVBcUVVO0FBQ2hCLGFBQUt2QixLQUFMLEdBQWF1QixNQUFNQyxNQUFOLENBQWFDLEtBQTFCO0FBQ0QsT0F2RU87QUF3RVJLLGVBeEVRLHFCQXdFRVAsS0F4RUYsRUF3RVM7QUFDZixhQUFLcEIsSUFBTCxHQUFZb0IsTUFBTUMsTUFBTixDQUFhQyxLQUF6QjtBQUNEO0FBMUVPLEs7Ozs7OzZCQTRFRDtBQUNQLFVBQUlsQixPQUFPLElBQVg7QUFDQUMsU0FBR3VCLFVBQUgsQ0FBYztBQUNaWCxhQUFLLE9BRE87QUFFWlAsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsZUFBS04sS0FBTCxHQUFhYSxJQUFJbkIsSUFBakI7QUFDRDtBQUpXLE9BQWQ7QUFNQWEsU0FBR3VCLFVBQUgsQ0FBYztBQUNaWCxhQUFLLFFBRE87QUFFWlAsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsZUFBS0gsRUFBTCxHQUFVVSxJQUFJbkIsSUFBZDtBQUNEO0FBSlcsT0FBZDtBQU1FYSxTQUFHdUIsVUFBSCxDQUFjO0FBQ2RYLGFBQUssVUFEUztBQUVkUCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCxlQUFLTCxRQUFMLEdBQWdCWSxJQUFJbkIsSUFBcEI7QUFDQVksZUFBS0gsRUFBTCxHQUFTVSxJQUFJbkIsSUFBSixDQUFTLENBQVQsRUFBWVMsRUFBckI7QUFDRDtBQUxhLE9BQWQ7QUFPSDs7OztFQWxIdUMsZUFBSzRCLEk7O2tCQUExQjFDLFkiLCJmaWxlIjoicGVyc29uX2NvbXBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25DZW50ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHlkI3niYcnLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMjQ5QTAnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGNvbXBhbnk6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBhZGRyOiAnJyxcclxuICAgIHRlbDogJycsXHJcbiAgICBwaG9uZTogJycsXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICBjYXJkSW5mbzpbXSxcclxuICAgIGR1dHk6ICcnLFxyXG4gICAgaWQ6ICcnXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgY29tcGlsZV9jYXJkKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL2NhcmQvc2V0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogdGhhdC5pZCxcclxuICAgICAgICAgIGNvbXBhbnk6IHRoYXQuY29tcGFueSxcclxuICAgICAgICAgIG5hbWU6IHRoYXQubmFtZSxcclxuICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuLFxyXG4gICAgICAgICAgYWRkcjogdGhhdC5hZGRyLFxyXG4gICAgICAgICAgdGVsOiB0aGF0LnRlbCxcclxuICAgICAgICAgIHBob25lOiB0aGF0LnBob25lLFxyXG4gICAgICAgICAgLy8gZHV0eTogdGhhdC5kdXR5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIGxldCBhcnIgPVtdO1xyXG4gICAgICAgICAgYXJyLnB1c2gocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdjYXJkSW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IGFyclxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIC8vICAga2V5OiAnY2FyZENvbXBhbnknLFxyXG4gICAgICAgICAgLy8gICBkYXRhOiByZXMuZGF0YS5kYXRhLmNvbXBhbnlcclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgLy8gd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAvLyAgIGtleTogJ2NhcmRBZGRyJyxcclxuICAgICAgICAgIC8vICAgZGF0YTogcmVzLmRhdGEuZGF0YS5hZGRyXHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgIC8vIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgLy8gICBrZXk6ICdjYXJkRHV0eScsXHJcbiAgICAgICAgICAvLyAgIGRhdGE6IHJlcy5kYXRhLmRhdGEuZHV0eVxyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAvLyB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIC8vICAga2V5OiAnY2FyZE5hbWUnLFxyXG4gICAgICAgICAgLy8gICBkYXRhOiByZXMuZGF0YS5kYXRhLm5hbWVcclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgLy8gd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAvLyAgIGtleTogJ2NhcmRQaG9uZScsXHJcbiAgICAgICAgICAvLyAgIGRhdGE6IHJlcy5kYXRhLmRhdGEucGhvbmVcclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgLy8gd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAvLyAgIGtleTogJ2NhcmRUZWwnLFxyXG4gICAgICAgICAgLy8gICBkYXRhOiByZXMuZGF0YS5kYXRhLnRlbFxyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAncGVyc29uX2xvZ2luJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBuYW1lSW5wdXQoaW5wdXQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gaW5wdXQuZGV0YWlsLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIGNvbXBhbnlJbnB1dChpbnB1dCkge1xyXG4gICAgICB0aGlzLmNvbXBhbnkgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYWRkcklucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMuYWRkciA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICB0ZWxJbnB1dChpbnB1dCkge1xyXG4gICAgICB0aGlzLnRlbCA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBwaG9uZUlucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMucGhvbmUgPSBpbnB1dC5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgZHV0eUlucHV0KGlucHV0KSB7XHJcbiAgICAgIHRoaXMuZHV0eSA9IGlucHV0LmRldGFpbC52YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQudG9rZW4gPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnY2FyZElkJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5pZCA9IHJlcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2NhcmRJbmZvJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgdGhhdC5jYXJkSW5mbyA9IHJlcy5kYXRhO1xyXG4gICAgICAgIHRoYXQuaWQ9IHJlcy5kYXRhWzBdLmlkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19