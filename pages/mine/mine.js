//获取应用实例
var app = getApp();
var util = require("../../utils/util.js");
Page({
  data: {
    userInfo: {},
    item: {
      signinHidden: false,
      userlocal: {
        nickName: '',
        nickPwd: ''
      },
      mine: [],
    }
  },
  onLoad: function(options) {
    console.log('onLoad mine');
    var that = this;
    var mineArr = util.getMine();
    that.setData({
      mine: mineArr
    });
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.getUserInfo(function(userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  modalconfirm: function() {
    wx.setStorageSync('username', this.data.item.userlocal.nickName);
    wx.setStorageSync('password', this.data.item.userlocal.nickPwd);
    this.setData({
      'item.signinHidden': true
    })
  },
  modalcancel: function() {

  },
  saveusername: function(event) {
    this.setData({
      'item.userlocal.nickName': event.detail.value
    });
  },
  saveuserpwd: function(event) {
    this.setData({
      'item.userlocal.nickPwd': event.detail.value
    });
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})