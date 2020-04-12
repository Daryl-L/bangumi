//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 1
  },

  switchTab(e) {
    this.setData({
      currentTab: e.detail.current + 1
    })
  }
})
