'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Base64 } from 'js-base64';
// console.log('moduleA ignored: ', moduleA) // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '查票360',
      navigationBarBackgroundColor: '#0249A0',
      navigationBarTextStyle: 'white'
    }, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      group: _group2.default,
      toast: _wepyComToast2.default
    }, _this.data = {
      mynum: 20,
      userInfo: {
        nickName: '加载中...'
      },
      normalTitle: '原始标题',
      setTimeoutTitle: '标题三秒后会被修改',
      count: 0,
      netrst: '',
      groupList: [{
        id: 1,
        name: '点击改变',
        list: [{
          childid: '1.1',
          childname: '子项，点我改变'
        }, {
          childid: '1.2',
          childname: '子项，点我改变'
        }, {
          childid: '1.3',
          childname: '子项，点我改变'
        }]
      }, {
        id: 2,
        name: '点击改变',
        list: [{
          childid: '2.1',
          childname: '子项，点我改变'
        }, {
          childid: '2.2',
          childname: '子项，点我改变'
        }, {
          childid: '2.3',
          childname: '子项，点我改变'
        }]
      }, {
        id: 3,
        name: '点击改变',
        list: [{
          childid: '3.1',
          childname: '子项，点我改变'
        }]
      }]
    }, _this.computed = {
      now: function now() {
        // return +new Date()
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/choose'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImFzeW5jTnVtIiwic3VtTnVtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwiZGF0YSIsIm15bnVtIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJtZXRob2RzIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUd3QztBQUNUO0FBQ1E7QUFDUDs7O0FBTGhDOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0lBYXFCQSxLLFdBWHBCLHdCQUFRO0FBQ1BDLEtBRE8sZUFDSEMsS0FERyxFQUNJO0FBQ1QsV0FBT0EsTUFBTUMsT0FBTixDQUFjRixHQUFyQjtBQUNELEdBSE07QUFJUEcsVUFKTyxvQkFJRUYsS0FKRixFQUlTO0FBQ2QsV0FBT0EsTUFBTUMsT0FBTixDQUFjQyxRQUFyQjtBQUNELEdBTk07QUFPUEMsUUFQTyxrQkFPQUgsS0FQQSxFQU9PO0FBQ1osV0FBT0EsTUFBTUMsT0FBTixDQUFjRixHQUFkLEdBQW9CQyxNQUFNQyxPQUFOLENBQWNDLFFBQXpDO0FBQ0Q7QUFUTSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7O29MQVlDRSxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLG9DQUE4QixTQUZ2QjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQUtUQyxVLEdBQWE7QUFDWEMsNEJBRFc7QUFFWEMsaUNBRlc7QUFHWEMsaUNBSFc7QUFJWEMsMEJBSlc7QUFLWEMsNEJBTFc7QUFNWEM7QUFOVyxLLFFBVWJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQUZMO0FBS0xDLG1CQUFhLE1BTFI7QUFNTEMsdUJBQWlCLFdBTlo7QUFPTEMsYUFBTyxDQVBGO0FBUUxDLGNBQVEsRUFSSDtBQVNMQyxpQkFBVyxDQUNUO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxjQUFNLE1BRlI7QUFHRWIsY0FBTSxDQUNKO0FBQ0VjLG1CQUFTLEtBRFg7QUFFRUMscUJBQVc7QUFGYixTQURJLEVBS0o7QUFDRUQsbUJBQVMsS0FEWDtBQUVFQyxxQkFBVztBQUZiLFNBTEksRUFTSjtBQUNFRCxtQkFBUyxLQURYO0FBRUVDLHFCQUFXO0FBRmIsU0FUSTtBQUhSLE9BRFMsRUFtQlQ7QUFDRUgsWUFBSSxDQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFYixjQUFNLENBQ0o7QUFDRWMsbUJBQVMsS0FEWDtBQUVFQyxxQkFBVztBQUZiLFNBREksRUFLSjtBQUNFRCxtQkFBUyxLQURYO0FBRUVDLHFCQUFXO0FBRmIsU0FMSSxFQVNKO0FBQ0VELG1CQUFTLEtBRFg7QUFFRUMscUJBQVc7QUFGYixTQVRJO0FBSFIsT0FuQlMsRUFxQ1Q7QUFDRUgsWUFBSSxDQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFYixjQUFNLENBQ0o7QUFDRWMsbUJBQVMsS0FEWDtBQUVFQyxxQkFBVztBQUZiLFNBREk7QUFIUixPQXJDUztBQVROLEssUUEyRFBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNIO0FBQ0o7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzZCQURBLENBQUU7Ozs7RUFwRnNCLGVBQUtDLEk7a0JBQW5CbEMsSyIsImZpbGUiOiJjaG9vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4JztcclxuaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCc7IC8vIGFsaWFzIGV4YW1wbGVcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcic7IC8vIGFsaWFzIGV4YW1wbGVcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JzsgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxyXG5pbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYSc7IC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxyXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCc7XHJcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnO1xyXG4vLyBpbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnO1xyXG4vLyBjb25zb2xlLmxvZygnbW9kdWxlQSBpZ25vcmVkOiAnLCBtb2R1bGVBKSAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XHJcblxyXG5AY29ubmVjdCh7XHJcbiAgbnVtKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW07XHJcbiAgfSxcclxuICBhc3luY051bShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XHJcbiAgfSxcclxuICBzdW1OdW0oc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bSArIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeelqDM2MCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAyNDlBMCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgcGFuZWw6IFBhbmVsLFxyXG4gICAgY291bnRlcjE6IENvdW50ZXIsXHJcbiAgICBjb3VudGVyMjogQ291bnRlcixcclxuICAgIGxpc3Q6IExpc3QsXHJcbiAgICBncm91cDogR3JvdXAsXHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9O1xyXG5cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG15bnVtOiAyMCxcclxuICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgfSxcclxuICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcclxuICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXHJcbiAgICBjb3VudDogMCxcclxuICAgIG5ldHJzdDogJycsXHJcbiAgICBncm91cExpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRpZDogJzEuMScsXHJcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxyXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcclxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXHJcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxyXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcclxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXHJcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIG5vdygpIHtcclxuICAgICAgLy8gcmV0dXJuICtuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuXHJcbiAgfTtcclxuICBvbkxvYWQoKSB7fVxyXG4gIGV2ZW50cyA9IHtcclxuICBcclxuICB9O1xyXG59XHJcbiJdfQ==