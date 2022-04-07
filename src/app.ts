import { createApp } from 'vue'
import { Button, Toast,Swiper,SwiperItem,Grid, GridItem,Avatar,Icon, Cell, CellGroup,NoticeBar,Tabs, TabPane,Card,Tag,Price, Sku, Popup, InputNumber,OverLay,Input,Picker} from '@nutui/nutui-taro';
import './app.scss'


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast).use(Swiper).use(SwiperItem).use(Grid).use(GridItem).use(Avatar).use(Icon).use(Cell).use(CellGroup).use(NoticeBar).use(Tabs).use(TabPane)
.use(Card).use(Tag).use(Price).use(Sku).use(Popup).use(InputNumber).use(OverLay).use(Input).use(Picker)
export default App
