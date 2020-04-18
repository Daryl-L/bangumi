//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 1,
    bangumis: []
  },

  switchTab(e) {
    this.setData({
      currentTab: e.detail.current + 1,
      bangumis: [
        {
          "title": "神之塔",
          "time": "19:00",
          "copyright": "哔哩哔哩",
          "avatar": "https://i0.hdslb.com/bfs/bangumi/image/b7ce6fd3aacb2edd1bd75e368e8838c2d768dab8.png"
        }
      ]
    })
  }
})
