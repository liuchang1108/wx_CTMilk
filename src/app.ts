import { createApp } from 'vue'
import { Button, Toast,Swiper,SwiperItem,Grid, GridItem,Avatar,Icon, Cell, CellGroup,NoticeBar,Tabs, TabPane,Card,Tag,Price, Sku, Popup, InputNumber,OverLay,Input,Picker,Dialog,Navbar} from '@nutui/nutui-taro';
import './app.scss'


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  // onLoad(option){
  //   console.log(option.query)
  //   const eventChannel = this.getOpenerEventChannel()
  //   eventChannel.emit('pass', {data: 'test'});
  //   // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
  //   eventChannel.on('pass', function(data) {
  //     console.log(data)
  //   })
  // }
})

App.use(Button).use(Toast).use(Swiper).use(SwiperItem).use(Grid).use(GridItem).use(Avatar).use(Icon).use(Cell).use(CellGroup).use(NoticeBar).use(Tabs).use(TabPane)
.use(Card).use(Tag).use(Price).use(Sku).use(Popup).use(InputNumber).use(OverLay).use(Input).use(Picker).use(Dialog).use(Navbar);
export default App
