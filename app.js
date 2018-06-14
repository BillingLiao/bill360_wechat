'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _window;

    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      // 首页
      'pages/index',
      // 快速查询
      'pages/fast_search',
      // 精确查询
      'pages/search', 'pages/person', 'pages/login',
      // 个人中心
      'pages/personCenter',
      // 登陆授权
      'pages/authorize/liaobilin',
      // 已登录的个人中心
      'pages/person_login',
      // 编辑个人名片
      'pages/person_compile',
      // 我的业务订单
      'pages/myProcessing',
      // 快速查询结果
      'pages/fast_search_result',
      // 查询结果
      'pages/search_result',
      // 确认票据信息
      'pages/affirm_bill_info',
      // 精确查询结果
      'pages/precise_search_result',
      // 精确查询收票详情
      'pages/precise_search_more',
      // 精确查询业务订单
      'pages/precise_search_dingdan',
      //提交成功
      'pages/success_submit',
      // 查询订单
      'pages/search_form'],
      window: (_window = {
        backgroundTextStyle: "dark"
      }, _defineProperty(_window, 'backgroundTextStyle', 'light'), _defineProperty(_window, 'navigationBarBackgroundColor', '#fff'), _defineProperty(_window, 'navigationBarTitleText', 'WeChat'), _defineProperty(_window, 'navigationBarTextStyle', 'black'), _window)
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQWtERSxzQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBLFVBL0NkQyxNQStDYyxHQS9DTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSxtQkFGSztBQUdMO0FBQ0EseUJBSks7QUFLTDtBQUNBLG9CQU5LLEVBT0wsY0FQSyxFQVFMLGFBUks7QUFTTDtBQUNBLDBCQVZLOztBQVlMO0FBQ0EsMEJBYks7QUFjTDtBQUNBLDRCQWZLO0FBZ0JMO0FBQ0EsMEJBakJLO0FBa0JMO0FBQ0EsZ0NBbkJLO0FBb0JMO0FBQ0EsMkJBckJLO0FBc0JMO0FBQ0EsOEJBdkJLO0FBd0JMO0FBQ0EsbUNBekJLO0FBMEJMO0FBQ0Esb0NBM0JLO0FBNEJMO0FBQ0EsNEJBN0JLO0FBOEJMO0FBQ0EseUJBL0JLLENBREE7QUFrQ1BDO0FBQ0VDLDZCQUFvQjtBQUR0Qix5REFFdUIsT0FGdkIsNERBR2dDLE1BSGhDLHNEQUkwQixRQUoxQixzREFLMEIsT0FMMUI7QUFsQ08sS0ErQ0s7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVLQyxDLEVBQUc7QUFDUCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtjLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hILGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBakYwQixlQUFLaUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xuc2V0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAvLyDpppbpobVcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAvLyDlv6vpgJ/mn6Xor6JcbiAgICAgICdwYWdlcy9mYXN0X3NlYXJjaCcsXG4gICAgICAvLyDnsr7noa7mn6Xor6JcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxuICAgICAgJ3BhZ2VzL3BlcnNvbicsXG4gICAgICAncGFnZXMvbG9naW4nLFxuICAgICAgLy8g5Liq5Lq65Lit5b+DXG4gICAgICAncGFnZXMvcGVyc29uQ2VudGVyJyxcblxuICAgICAgLy8g5bey55m75b2V55qE5Liq5Lq65Lit5b+DXG4gICAgICAncGFnZXMvcGVyc29uX2xvZ2luJyxcbiAgICAgIC8vIOe8lui+keS4quS6uuWQjeeJh1xuICAgICAgJ3BhZ2VzL3BlcnNvbl9jb21waWxlJyxcbiAgICAgIC8vIOaIkeeahOS4muWKoeiuouWNlVxuICAgICAgJ3BhZ2VzL215UHJvY2Vzc2luZycsXG4gICAgICAvLyDlv6vpgJ/mn6Xor6Lnu5PmnpxcbiAgICAgICdwYWdlcy9mYXN0X3NlYXJjaF9yZXN1bHQnLFxuICAgICAgLy8g5p+l6K+i57uT5p6cXG4gICAgICAncGFnZXMvc2VhcmNoX3Jlc3VsdCcsXG4gICAgICAvLyDnoa7orqTnpajmja7kv6Hmga9cbiAgICAgICdwYWdlcy9hZmZpcm1fYmlsbF9pbmZvJyxcbiAgICAgIC8vIOeyvuehruafpeivoue7k+aenFxuICAgICAgJ3BhZ2VzL3ByZWNpc2Vfc2VhcmNoX3Jlc3VsdCcsXG4gICAgICAvLyDnsr7noa7mn6Xor6LkuJrliqHorqLljZVcbiAgICAgICdwYWdlcy9wcmVjaXNlX3NlYXJjaF9kaW5nZGFuJyxcbiAgICAgIC8v5o+Q5Lqk5oiQ5YqfXG4gICAgICAncGFnZXMvc3VjY2Vzc19zdWJtaXQnLFxuICAgICAgLy8g5p+l6K+i6K6i5Y2VXG4gICAgICAncGFnZXMvc2VhcmNoX2Zvcm0nLCAgICAgIFxuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOlwiZGFya1wiLFxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHRoaXMudGVzdEFzeW5jKCk7XG4gIH1cblxuICBzbGVlcChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJyk7XG4gICAgICB9LCBzICogMTAwMCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=