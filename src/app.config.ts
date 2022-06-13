export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/showGoods/index',
    'pages/mine/index',
    'pages/shopCart/index',
    'pages/shopDetail/index',
    'pages/order/index',
    'pages/showAddress/index',
    'pages/showGoodsOut/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      { 
      pagePath: "pages/index/index",
      iconPath:"images/index2.png",
      selectedIconPath:"images/index.png",
      text: "首页"
      },
      {
        pagePath:"pages/showGoods/index",
        iconPath:"images/milkTea2.png",
        selectedIconPath:"images/milkTea.png",
        text:'点餐'
      },
      {
        pagePath:"pages/mine/index",
        iconPath:"images/mine.png",
        selectedIconPath:"images/mine1.png",
        text:'我的'
      }
  ],
  'color': '#000',
  'selectedColor': '#56abe4',
  'backgroundColor': '#fff',
  'borderStyle': 'white'
  }
})
