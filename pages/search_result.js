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
    }, _this.data = {
      fastInterest: '',
      fastSubsidy: '',
      fastDay: '',
      fastMoney: '',
      minBill: []
    }, _this.methods = {
      search: function search() {
        wx.navigateTo({
          url: 'search'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(personCenter, [{
    key: 'onLoad',
    value: function onLoad() {

      var that = this;

      wx.getStorage({
        key: 'minBill',
        success: function success(res) {
          console.log(res.data);
          that.minBill = res.data;
        },
      });

      wx.getStorage({
        key: 'fastSubsidy',
        success: function success(res) {
          console.log(res.data);
          that.fastSubsidy = res.data;
        }
      });

      wx.getStorage({
        key: 'fastDay',
        success: function success(res) {
          console.log(res.data);
          that.fastDay = res.data;
        },
      });

      wx.getStorage({
        key: 'fastMoney',
        success: function success(res) {
          console.log(res.data);
          that.fastMoney = res.data;
        },
      });

      wx.getStorage({
        key: 'fastInterest',
        success: function success(res) {
          console.log(res.data);
          that.fastInterest = res.data;
        },
      });
      /*
      wx.getStorage({
        key: 'fastResult',
        success: function success(res) {
          var arr = [];
          arr.push(res.data);
          console.log(res.data);
          that.fastResult = arr;
          console.log(that.fastResult);
        }
      });
      wx.getStorage({
        key: 'fastCore',
        success: function success(res) {
          console.log(res.data);
          that.coreList = res.data;
        }
      });
      wx.getStorage({
        key: 'fastPhone',
        success: function success(res) {
          console.log(res.data);
          that.fastPhone = res.data;
        }
      }); 
      */
     

    }
  }]);

  return personCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personCenter , 'pages/search_result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9yZXN1bHQuanMiXSwibmFtZXMiOlsicGVyc29uQ2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsImNvcmVMaXN0IiwiZmFzdEludGVyZXN0IiwiZmFzdFN1YnNpZHkiLCJmYXN0RGF5IiwiZmFzdE1vbmV5IiwiZmFzdFBob25lIiwiZmFzdFJlc3VsdCIsIm1ldGhvZHMiLCJzZWFyY2giLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsb0JBQWEsRUFGUjtBQUdMQyxtQkFBWSxFQUhQO0FBSUxDLGVBQVEsRUFKSDtBQUtMQyxpQkFBVSxFQUxMO0FBTUxDLGlCQUFVLEVBTkw7QUFPTEMsa0JBQVc7QUFQTixLLFFBU1BDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNBO0FBQ05DLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBTE8sSzs7Ozs7NkJBT0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDR0gsU0FBR0ksVUFBSCxDQUFjO0FBQ2ZDLGFBQUssWUFEVTtBQUVmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGNBQUlDLE1BQUksRUFBUjtBQUNBQSxjQUFJQyxJQUFKLENBQVNGLElBQUlqQixJQUFiO0FBQ0FvQixrQkFBUUMsR0FBUixDQUFZSixJQUFJakIsSUFBaEI7QUFDQWEsZUFBS04sVUFBTCxHQUFrQlcsR0FBbEI7QUFDQUUsa0JBQVFDLEdBQVIsQ0FBWVIsS0FBS04sVUFBakI7QUFDRDtBQVJjLE9BQWQ7QUFVSEcsU0FBR0ksVUFBSCxDQUFjO0FBQ1pDLGFBQUssVUFETztBQUVaQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCRyxrQkFBUUMsR0FBUixDQUFZSixJQUFJakIsSUFBaEI7QUFDQWEsZUFBS1osUUFBTCxHQUFnQmdCLElBQUlqQixJQUFwQjtBQUNEO0FBTFcsT0FBZDs7QUFRRVUsU0FBR0ksVUFBSCxDQUFjO0FBQ2RDLGFBQUssV0FEUztBQUVkQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCRyxrQkFBUUMsR0FBUixDQUFZSixJQUFJakIsSUFBaEI7QUFDQWEsZUFBS1AsU0FBTCxHQUFpQlcsSUFBSWpCLElBQXJCO0FBQ0Q7QUFMYSxPQUFkO0FBT0g7Ozs7RUFqRHVDLGVBQUtzQixJOztrQkFBMUIzQixZIiwiZmlsZSI6InNlYXJjaF9yZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNvbkNlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeivoue7k+aenCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAyNDlBMCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgY29yZUxpc3Q6IFtdLFxyXG4gICAgZmFzdEludGVyZXN0OicnLFxyXG4gICAgZmFzdFN1YnNpZHk6JycsXHJcbiAgICBmYXN0RGF5OicnLFxyXG4gICAgZmFzdE1vbmV5OicnLFxyXG4gICAgZmFzdFBob25lOicnLFxyXG4gICAgZmFzdFJlc3VsdDpbXVxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHNlYXJjaCgpe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdzZWFyY2gnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnZmFzdFJlc3VsdCcsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGxldCBhcnI9W107XHJcbiAgICAgICAgYXJyLnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuZmFzdFJlc3VsdCA9IGFycjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmZhc3RSZXN1bHQpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2Zhc3RDb3JlJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuY29yZUxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnZmFzdFBob25lJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuZmFzdFBob25lID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=