'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qs = require('./../npm/qs/lib/index.js');

var _qs2 = _interopRequireDefault(_qs);

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


// import { Base64 } from 'js-base64';
// console.log('moduleA ignored: ', moduleA) // => moduleA ignored: {}
var Index = function (_wepy$page) {
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
    }, _this.components = {}, _this.data = {
      name: '',
      headerImg: '',
      openId: '',
      hintLogin: '',
      switchLogin: '',
      cardLogin: '',
      token: ''
    }, _this.computed = {}, _this.methods = {

      personCenter: function personCenter() {
        var that = this;
        console.log(that.switchLogin);
        // 已绑定手机号和名片
        if (that.switchLogin != null && that.cardLogin == 1) {
          wx.request({
            url: 'https://xcx.wenxikeji.com//bill360/card/my',
            method: 'POST',
            data: {
              token: that.token
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              wx.setStorage({
                key: 'cardInfo',
                data: res.data.data
              });
            }
          });
          wx.navigateTo({
            url: 'person_login'
          });
        } else if (that.switchLogin != null && that.cardLogin == 0) {
          wx.navigateTo({
            url: 'personCenter'
            // url: 'login'
          });
        } else {
          wx.navigateTo({
            url: 'login'
          });
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getStorage({
        key: 'hintLogin',
        success: function success(res) {
          that.hintLogin = res.data;
        }
      });
      wx.login({
        success: function success(res) {
          console.log(res.code);
          // if (res.code) {
          //拿到微信code后发起网络请求
          wx.request({
            url: 'https://xcx.wenxikeji.com//bill360//user/openid',
            data: {
              code: res.code
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              console.log(res.data);
              that.openId = res.data.data;
              wx.getSetting({
                success: function success(res) {
                  // 弹窗让用户授权
                  if (!res.authSetting['scope.userInfo']) {
                    wx.authorize({
                      scope: 'scope.userInfo',
                      success: function success() {
                        wx.getUserInfo({
                          success: function success(res) {
                            console.log('3333');
                            console.log(res);
                            that.name = res.userInfo.nickName;
                            that.headerImg = res.userInfo.avatarUrl;
                            wx.setStorage({
                              key: 'userName',
                              data: that.name
                            });
                            wx.setStorage({
                              key: 'userHeaderImg',
                              data: that.headerImg
                            });
                            wx.request({
                              url: 'https://xcx.wenxikeji.com//bill360//user/login',
                              data: {
                                openid: that.openId,
                                name: that.name,
                                head: that.headerImg
                              },
                              method: 'POST',
                              header: {
                                'content-type': 'application/x-www-form-urlencoded'
                              },
                              success: function success(res) {
                                console.log('4444');
                                console.log(res.data);
                                wx.setStorage({
                                  key: 'token',
                                  data: res.data.data.token
                                });
                                that.switchLogin = res.data.data.user.phone;
                                that.token = res.data.data.token;
                                that.cardLogin = res.data.data.user.card;
                                wx.setStorage({
                                  key: 'switchLogin',
                                  data: res.data.data.user
                                });
                                // 历史搜索 OK
                                wx.request({
                                  url: 'https://xcx.wenxikeji.com//bill360/record/my',
                                  method: 'POST',
                                  data: {
                                    token: res.data.data.token,
                                    size: 2
                                  },
                                  header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                  },
                                  success: function success(res) {
                                    // that.historyData = res.data.data.content;
                                    // console.log(that.historyData);
                                    wx.setStorage({
                                      key: 'historyData',
                                      data: res.data.data.content
                                    });
                                  }
                                });
                                // 热门搜索 OK
                                wx.request({
                                  url: 'https://xcx.wenxikeji.com//bill360/record/hot',
                                  method: 'POST',
                                  data: {
                                    token: res.data.data.token
                                  },
                                  header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                  },
                                  success: function success(res) {
                                    console.log(res);
                                    wx.setStorage({
                                      key: 'hotData',
                                      data: res.data.data
                                    });
                                  }
                                });
                              }
                            });
                            // 获取openid后和名字头像登录
                          }
                        });
                        // } else {
                        console.log('获取用户登录态失败！' + res.errMsg);
                      }
                      // }

                    });
                  }
                  // 不授权直接获取
                  else {
                      wx.getUserInfo({
                        success: function success(res) {
                          console.log('3333');
                          console.log(res);
                          that.name = res.userInfo.nickName;
                          that.headerImg = res.userInfo.avatarUrl;
                          wx.setStorage({
                            key: 'userName',
                            data: that.name
                          });
                          wx.setStorage({
                            key: 'userHeaderImg',
                            data: that.headerImg
                          });
                          wx.request({
                            url: 'https://xcx.wenxikeji.com//bill360//user/login',
                            data: {
                              openid: that.openId,
                              name: that.name,
                              head: that.headerImg
                            },
                            method: 'POST',
                            header: {
                              'content-type': 'application/x-www-form-urlencoded'
                            },
                            success: function success(res) {
                              console.log('4444');
                              console.log(res.data);
                              wx.setStorage({
                                key: 'token',
                                data: res.data.data.token
                              });
                              that.switchLogin = res.data.data.user.phone;
                              that.token = res.data.data.token;
                              that.cardLogin = res.data.data.user.card;
                              wx.setStorage({
                                key: 'switchLogin',
                                data: res.data.data.user
                              });
                              // 历史搜索 OK
                              wx.request({
                                url: 'https://xcx.wenxikeji.com//bill360/record/my',
                                method: 'POST',
                                data: {
                                  token: res.data.data.token,
                                  size: 2
                                },
                                header: {
                                  'content-type': 'application/x-www-form-urlencoded'
                                },
                                success: function success(res) {
                                  // that.historyData = res.data.data.content;
                                  // console.log(that.historyData);
                                  wx.setStorage({
                                    key: 'historyData',
                                    data: res.data.data.content
                                  });
                                }
                              });
                              // 热门搜索 OK
                              wx.request({
                                url: 'https://xcx.wenxikeji.com//bill360/record/hot',
                                method: 'POST',
                                data: {
                                  token: res.data.data.token,
                                  size: 4
                                },
                                header: {
                                  'content-type': 'application/x-www-form-urlencoded'
                                },
                                success: function success(res) {
                                  console.log(res.data.data);
                                  wx.setStorage({
                                    key: 'hotData',
                                    data: res.data.data
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                }
              });
            }
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiY29tcG9uZW50cyIsImRhdGEiLCJuYW1lIiwiaGVhZGVySW1nIiwib3BlbklkIiwiaGludExvZ2luIiwic3dpdGNoTG9naW4iLCJjYXJkTG9naW4iLCJ0b2tlbiIsImNvbXB1dGVkIiwibWV0aG9kcyIsInBlcnNvbkNlbnRlciIsInRoYXQiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZSIsImtleSIsIm5hdmlnYXRlVG8iLCJldmVudHMiLCJnZXRTdG9yYWdlIiwibG9naW4iLCJjb2RlIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiYXV0aG9yaXplIiwic2NvcGUiLCJnZXRVc2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwib3BlbmlkIiwiaGVhZCIsInVzZXIiLCJwaG9uZSIsImNhcmQiLCJzaXplIiwiY29udGVudCIsImVyck1zZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFOd0M7QUFDVDtBQUNRO0FBQ1A7OztBQUloQztBQUNBO0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBS1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxjQUFRLEVBSEg7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UixtQ0FBZDtBQUlEO0FBbEJRLCtCQUFYO0FBb0JBO0FBQ0E5QixpQ0FBR0MsT0FBSCxDQUFXO0FBQ1RDLHFDQUNFLCtDQUZPO0FBR1RDLHdDQUFRLE1BSEM7QUFJVGYsc0NBQU07QUFDSk8seUNBQU9XLElBQUlsQixJQUFKLENBQVNBLElBQVQsQ0FBY08sS0FEakI7QUFFSmtDLHdDQUFNO0FBRkYsaUNBSkc7QUFRVHpCLHdDQUFRO0FBQ04sa0RBQ0U7QUFGSSxpQ0FSQztBQVlUQyx5Q0FBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTixxQ0FBR08sVUFBSCxDQUFjO0FBQ1pDLHlDQUFLLFNBRE87QUFFWnBCLDBDQUFNa0IsSUFBSWxCLElBQUosQ0FBU0E7QUFGSCxtQ0FBZDtBQUlEO0FBakJRLCtCQUFYO0FBbUJEO0FBaEVRLDJCQUFYO0FBa0VEO0FBbEZZLHVCQUFmO0FBb0ZEO0FBQ0Y7QUE1TFcsZUFBZDtBQThMRDtBQXpNUSxXQUFYO0FBMk1EO0FBL01NLE9BQVQ7QUFpTkQ7Ozs7RUFqUmdDLGVBQUs0QyxJOztrQkFBbkJsRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCc7XG5pbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJzsgLy8gYWxpYXMgZXhhbXBsZVxuaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcic7IC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7IC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcbmltcG9ydCBtb2R1bGVBIGZyb20gJ21vZHVsZS1hJzsgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnO1xuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCc7XG4vLyBpbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnO1xuLy8gY29uc29sZS5sb2coJ21vZHVsZUEgaWdub3JlZDogJywgbW9kdWxlQSkgLy8gPT4gbW9kdWxlQSBpZ25vcmVkOiB7fVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeelqDM2MCcsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMjQ5QTAnLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgaGVhZGVySW1nOiAnJyxcbiAgICBvcGVuSWQ6ICcnLFxuICAgIGhpbnRMb2dpbjogJycsXG4gICAgc3dpdGNoTG9naW46ICcnLFxuICAgIGNhcmRMb2dpbjogJycsXG4gICAgdG9rZW46ICcnXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIHBlcnNvbkNlbnRlcigpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIC8vIOW3sue7keWumuaJi+acuuWPt+WSjOWQjeeJh1xuICAgICAgaWYgKHRoYXQuc3dpdGNoTG9naW4gIT0gJycgJiYgdGhhdC5jYXJkTG9naW4gPT0gMSkge1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwL2NhcmQvbXknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRva2VuOiB0aGF0LnRva2VuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAga2V5OiAnY2FyZEluZm8nLFxuICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdwZXJzb25fbG9naW4nXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGF0LnN3aXRjaExvZ2luICE9ICcnICYmIHRoYXQuY2FyZExvZ2luID09IDApIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAncGVyc29uQ2VudGVyJ1xuICAgICAgICAgIC8vIHVybDogJ2xvZ2luJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2xvZ2luJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdoaW50TG9naW4nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHRoYXQuaGludExvZ2luID0gcmVzLmRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGlmIChyZXMuY29kZSkge1xuICAgICAgICAvL+aLv+WIsOW+ruS/oWNvZGXlkI7lj5HotbfnvZHnu5zor7fmsYJcbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC8vdXNlci9vcGVuaWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB0aGF0Lm9wZW5JZCA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyDlvLnnqpforqnnlKjmiLfmjojmnYNcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICAgICAgd3guYXV0aG9yaXplKHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdzY29wZS51c2VySW5mbycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCczMzMzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0NDQ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5oZWFkZXJJbWcgPSByZXMudXNlckluZm8uYXZhdGFyVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd1c2VyTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhhdC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd1c2VySGVhZGVySW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGF0LmhlYWRlckltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8veGN4Lndlbnhpa2VqaS5jb20vL2JpbGwzNjAvL3VzZXIvbG9naW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pZDogdGhhdC5vcGVuSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGF0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkOiB0aGF0LmhlYWRlckltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3Rva2VuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS50b2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN3aXRjaExvZ2luID0gcmVzLmRhdGEuZGF0YS51c2VyLnBob25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50b2tlbiA9IHJlcy5kYXRhLmRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNhcmRMb2dpbiA9IHJlcy5kYXRhLmRhdGEudXNlci5jYXJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3N3aXRjaExvZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWOhuWPsuaQnOe0oiBPS1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC9yZWNvcmQvbXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuZGF0YS5kYXRhLnRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0Lmhpc3RvcnlEYXRhID0gcmVzLmRhdGEuZGF0YS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQuaGlzdG9yeURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGlzdG9yeURhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g54Ot6Zeo5pCc57SiIE9LXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwL3JlY29yZC9ob3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuZGF0YS5kYXRhLnRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2hvdERhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5ZvcGVuaWTlkI7lkozlkI3lrZflpLTlg4/nmbvlvZVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOS4jeaOiOadg+ebtOaOpeiOt+WPllxuICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzMzMzMnKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0NDQ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhhdC5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaGVhZGVySW1nID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybDtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndXNlck5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhhdC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd1c2VySGVhZGVySW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoYXQuaGVhZGVySW1nXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwLy91c2VyL2xvZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmlkOiB0aGF0Lm9wZW5JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhhdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkOiB0aGF0LmhlYWRlckltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0b2tlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS50b2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zd2l0Y2hMb2dpbiA9IHJlcy5kYXRhLmRhdGEudXNlci5waG9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50b2tlbiA9IHJlcy5kYXRhLmRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY2FyZExvZ2luID0gcmVzLmRhdGEuZGF0YS51c2VyLmNhcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3N3aXRjaExvZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWOhuWPsuaQnOe0oiBPS1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3hjeC53ZW54aWtlamkuY29tLy9iaWxsMzYwL3JlY29yZC9teScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcy5kYXRhLmRhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0Lmhpc3RvcnlEYXRhID0gcmVzLmRhdGEuZGF0YS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhhdC5oaXN0b3J5RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGlzdG9yeURhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeDremXqOaQnOe0oiBPS1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly94Y3gud2VueGlrZWppLmNvbS8vYmlsbDM2MC9yZWNvcmQvaG90JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVzLmRhdGEuZGF0YS50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdob3REYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGV2ZW50cyA9IHt9O1xufVxuIl19