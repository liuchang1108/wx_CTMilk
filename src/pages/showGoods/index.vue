<template>
  <view class="showGoods">
    <view class="showGoods-title">
      <p class="showGoods-content" @click="goto">畅通奶茶(哈尔滨理工大学店)</p>
    </view>
    <view class="showGoods-detail" @click="searchShopContent"
      >查看门店信息
      <nut-icon name="arrow-right" size="10"></nut-icon>
    </view>
    <nut-noticebar
      text="小店新开，欢迎顾客光临！新店开张，优惠满满，活动期间可享受五折优惠！快来品尝"
      :scrollable="true"
      :background="`rgba(213, 124, 139, 3)`"
      :color="`#fff`"
      class="showGoods-noticeBar"
    >
    </nut-noticebar>
    <nut-tabs
      v-model="topMenuState.tabValue"
      color="#d57c8b"
      background="#fff"
      class="showGoods-tabs"
    >
      <nut-tabpane title="经典菜单">
        <nut-tabs
          style="height: 500px"
          v-model="leftMenuState.tabValue"
          type="smile"
          title-scroll
          direction="vertical"
          class="showGoods-tabPane"
          color="#d57c8b"
          background="#fafafa"
          size="small"
        >
          <nut-tabpane title="人气Top ☆">
            <view class="drinkMenu">
              <nut-swiper
                :init-page="page"
                :pagination-visible="true"
                pagination-color="#426543"
                auto-play="3000"
              >
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
              </nut-swiper>
            </view>
            <view
              class="drinkCard"
              v-for="(item, index) in drinkState"
              :key="index"
            >
              <nut-card
                :img-url="item.imgUrl"
                :title="item.title"
                :price="item.price"
                :vipPrice="item.vipPrice"
                :delivery="item.delivery"
              >
                <template #footer>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="minus"
                    color="#d1576b"
                    class="drinkCard-button-min"
                    @click="decreaseDrinkStatePrice(index)"
                  ></nut-button>
                  <p class="drinkCard-number">{{ drinkState[index].number }}</p>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="plus"
                    color="#d1576b"
                    class="drinkCard-button-increase"
                    @click="increaseDrinkStatePrice(index)"
                  ></nut-button>
                </template>
              </nut-card>
            </view>
          </nut-tabpane>
          <nut-tabpane title="清爽果茶 ♔">
            <view class="drinkMenu">
              <nut-swiper
                :init-page="page"
                :pagination-visible="true"
                pagination-color="#426543"
                auto-play="3000"
              >
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
              </nut-swiper>
            </view>
            <!-- <view
              class="drinkCard"
              v-for="(item, index) in fruitDrinkData"
              :key="index"
            >
              <nut-card
                :img-url="item.imgUrl"
                :title="item.title"
                :price="item.price"
                :vipPrice="item.vipPrice"
                :delivery="item.delivery"
              >
                <template #footer>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="minus"
                    color="#d1576b"
                    class="drinkCard-button-min"
                    @click="decreaseFruitPrice(index)"
                  ></nut-button>
                  <p class="drinkCard-number">{{ fruitDrinkData[index].number }}</p>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="plus"
                    color="#d1576b"
                    class="drinkCard-button-increase"
                    @click="increaseFruitPrice(index)"
                  ></nut-button>
                </template>
              </nut-card>
            </view> -->
          </nut-tabpane>
          <nut-tabpane title="香醇奶茶 ♬">
            <view class="drinkMenu">
              <nut-swiper
                :init-page="page"
                :pagination-visible="true"
                pagination-color="#426543"
                auto-play="3000"
              >
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
              </nut-swiper>
            </view>
            <!-- <view
              class="drinkCard"
              v-for="(item, index) in MilkTeaDrinkData"
              :key="index"
            >
              <nut-card
                :img-url="item.imgUrl"
                :title="item.title"
                :price="item.price"
                :vipPrice="item.vipPrice"
                :delivery="item.delivery"
              >
                <template #footer>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="minus"
                    color="#d1576b"
                    class="drinkCard-button-min"
                    @click="decreaseMilkTeaPrice(index)"
                  ></nut-button>
                  <p class="drinkCard-number">{{ MilkTeaDrinkData[index].number }}</p>

                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="plus"
                    color="#d1576b"
                    class="drinkCard-button-increase"
                    @click="increaseMilkTeaPrice(index)"
                  ></nut-button>
                </template>
              </nut-card> </view
          > -->
          </nut-tabpane>
          <nut-tabpane title="丝滑拿铁 ☞">
            <view class="drinkMenu">
              <nut-swiper
                :init-page="page"
                :pagination-visible="true"
                pagination-color="#426543"
                auto-play="3000"
              >
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
              </nut-swiper>
            </view>
            <!-- <view
              class="drinkCard"
              v-for="(item, index) in CoffeeDrinkData"
              :key="index"
            >
              <nut-card
                :img-url="item.imgUrl"
                :title="item.title"
                :price="item.price"
                :vipPrice="item.vipPrice"
                :delivery="item.delivery"
              >
                <template #footer>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="minus"
                    color="#d1576b"
                    class="drinkCard-button-min"
                    @click="decreaseCoffeePrice(index)"
                  ></nut-button>
                  <p class="drinkCard-number">{{ CoffeeDrinkData[index].number }}</p>
                  <nut-button
                    size="small"
                    plain
                    type="primary"
                    icon="plus"
                    color="#d1576b"
                    class="drinkCard-button-increase"
                    @click="increaseCoffeePrice(index)"
                  ></nut-button>
                </template>
              </nut-card>
            </view> -->
          </nut-tabpane>
          <nut-tabpane title="经典饮品 ✌">
            <view class="drinkMenu">
              <nut-swiper
                :init-page="page"
                :pagination-visible="true"
                pagination-color="#426543"
                auto-play="3000"
              >
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
                <nut-swiper-item>
                  <img
                    src="https://pic.90sheji.com/design/02/99/83/59/5db569936b2a8.png!/fwfh/804x459/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
                    alt=""
                  />
                </nut-swiper-item>
              </nut-swiper>
            </view>
          </nut-tabpane>
        </nut-tabs>
      </nut-tabpane>
      <nut-tabpane title="来店必喝"> Tab 2 </nut-tabpane>
      <nut-tabpane title="小店公告"> Tab 3 </nut-tabpane>
    </nut-tabs>
  </view>
  <view class="showGoods-cart">
    <view class="showGoods-number">{{ totalCount }}</view>
    <nut-button
      type="primary"
      plain
      icon="cart"
      color="#d1576b"
      size="normal"
      class="showGoods-cart__icon"
    ></nut-button>
    <nut-price
      :price="totalPrice"
      size="large"
      :need-symbol="true"
      :thousands="true"
      class="showGoods-cart__price"
    />
    <nut-button
      shape="square"
      type="primary"
      color="#d1576b"
      class="showGoods-cart__totalPrice"
      @click="goCart"
      >去结算</nut-button
    >
  </view>
</template>
<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import Taro from "@tarojs/taro";
import { Router } from "tarojs-router-next";
// import drinkMenuVue from "./drinkMenu.vue";
export default defineComponent({
  name: "ShowGoods",
  components: {},
  setup() {
    Taro.setNavigationBarTitle({
      title: "商品详情",
    });
    const topMenuState = reactive({
      tabValue: "0",
    });
    const leftMenuState = reactive({
      tabValue: "0",
    });
    const state = reactive({
      page: 2,
    });
    const drinkState = reactive([
      {
        id: 1,
        imgUrl:
          "https://img1.baidu.com/it/u=2746809737,313183955&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500",
        title: "人气Top柠檬水",
        price: 2,
        vipPrice: 4,
        delivery: "清爽一夏",
        number: 0,
      },
      {
        id: 2,
        imgUrl:
          "https://img2.baidu.com/it/u=711876027,2433041885&fm=253&fmt=auto&app=138&f=JPEG?w=725&h=500",
        title: "雪顶焦糖奶茶",
        price: 3,
        vipPrice: 6,
        delivery: "很好喝",
        number: 0,
      },
      {
        id: 3,
        imgUrl:
          "https://img0.baidu.com/it/u=3526730769,377536299&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        title: "芋泥波波奶茶",
        price: 9,
        vipPrice: 18,
        delivery: "要芋泥也要波波",
        number: 0,
      },
      {
        id: 4,
        imgUrl:
          "https://img1.baidu.com/it/u=336399744,2972811656&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        title: "南瓜汁汁奶茶",
        price: 13,
        vipPrice: 26,
        delivery: "不一样的新鲜",
        number: 0,
      },
      {
        id: 5,
        imgUrl:
          "https://img1.baidu.com/it/u=1768916679,3083656168&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        title: "那么多凤梨水果茶",
        price: 12,
        vipPrice: 24,
        delivery: "清爽一夏",
        number: 0,
      },
    ]);
    // const fruitDrinkData = [
    //   {
    //     id: 6,
    //     imgUrl:
    //       "https://img1.baidu.com/it/u=2746809737,313183955&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500",
    //     title: "人气Top柠檬水",
    //     price: 3,
    //     vipPrice: 6,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    //   {
    //     id: 7,
    //     imgUrl:
    //       "https://img0.baidu.com/it/u=762744802,199886767&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     title: "草莓樱桃水果茶",
    //     price: 9,
    //     vipPrice: 18,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    //   {
    //     id: 7,
    //     imgUrl:
    //       "https://img0.baidu.com/it/u=1139227651,1623789256&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=759",
    //     title: "西柚火龙果水果茶",
    //     price: 13,
    //     vipPrice: 26,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    //   {
    //     id: 8,
    //     imgUrl:
    //       "https://img1.baidu.com/it/u=1768916679,3083656168&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     title: "那么多凤梨水果茶",
    //     price: 12,
    //     vipPrice: 24,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    // ];
    // const CoffeeDrinkData = [
    //   {
    //     id: 9,
    //     imgUrl:
    //       "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00017-2119.jpg",
    //     title: "浓郁意式咖啡",
    //     price: 3,
    //     vipPrice: 6,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    //   {
    //     id: 10,
    //     imgUrl: "https://img2.baidu.com/it/u=685652074,40492938&fm=26&fmt=auto",
    //     title: "一杯美式",
    //     price: 9,
    //     vipPrice: 18,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    //   {
    //     id: 11,
    //     imgUrl:
    //       "https://img2.baidu.com/it/u=1097700801,148175039&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=500",
    //     title: "牛奶咖啡",
    //     price: 13,
    //     vipPrice: 26,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    //   {
    //     id: 12,
    //     imgUrl:
    //       "https://img0.baidu.com/it/u=3958759922,2882971296&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
    //     title: "摩卡咖啡",
    //     price: 12,
    //     vipPrice: 24,
    //     delivery: "清爽一夏",
    //      number: 0,
    //   },
    // ];
    // const MilkTeaDrinkData = [
    //   {
    //     id: 13,
    //     imgUrl:
    //       "https://img2.baidu.com/it/u=711876027,2433041885&fm=253&fmt=auto&app=138&f=JPEG?w=725&h=500",
    //     title: "雪顶焦糖奶茶",
    //     price: 3,
    //     vipPrice: 6,
    //     delivery: "很好喝",
    //      number: 0,
    //   },
    //   {
    //     id: 14,
    //     imgUrl:
    //       "https://img0.baidu.com/it/u=3526730769,377536299&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     title: "芋泥波波奶茶",
    //     price: 9,
    //     vipPrice: 18,
    //     delivery: "要芋泥也要波波",
    //      number: 0,
    //   },
    //   {
    //     id: 15,
    //     imgUrl:
    //       "https://img1.baidu.com/it/u=336399744,2972811656&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
    //     title: "南瓜汁汁奶茶",
    //     price: 13,
    //     vipPrice: 26,
    //     delivery: "不一样的新鲜",
    //      number: 0,
    //   },
    //   {
    //     id: 16,
    //     imgUrl:
    //       "https://img2.baidu.com/it/u=3386650925,2970685805&fm=253&fmt=auto&app=138&f=JPEG?w=334&h=500",
    //     title: "抹茶珍珠奶茶",
    //     price: 12,
    //     vipPrice: 24,
    //     delivery: "浓郁的抹茶清香",
    //      number: 0,
    //   },
    //   {
    //     id: 17,
    //     imgUrl:
    //       "https://img2.baidu.com/it/u=2936801006,1598405033&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
    //     title: "榴莲布丁奶茶",
    //     price: 12,
    //     vipPrice: 24,
    //     delivery: "丝滑一夏",
    //      number: 0,
    //   },
    // ];
    var totalPrice = ref(0);
    var totalCount = ref(0);
    var newValue = ref(0);
    let goodsList = [];
    const increaseDrinkStatePrice = (index) => {
      totalPrice.value = drinkState[index].price + totalPrice.value;
      // count1.value += 1;
      drinkState[index].number++;
      totalCount.value += 1;
      // console.log(count1.value);
      // console.log(totalCount.value);
      // DataChange.name = drinkState[index].title;
      for (let i = 0; i < goodsList.length; i++) {
        if (drinkState[index].title === goodsList[i].name) {
          goodsList[i].count = drinkState[index].number;
          goodsList[i].price = drinkState[index].price;
          return;
        }
      }
      goodsList.push({
        name: drinkState[index].title,
        count: drinkState[index].number,
        price: drinkState[index].number * drinkState[index].price,
      });
      console.log(goodsList);
      console.log(goodsList.length);
    };
    const decreaseDrinkStatePrice = (index) => {
      if (totalPrice.value <= 0) {
        console.log("总金额至少为1元！！");
        return;
      }

      if (newValue.value < 0) {
        console.log("总金额至少为0元");
        return;
      }

      if (drinkState[index].number <= 0) {
        console.log("不能再减少了！不能让我们赔钱啊！");
        return;
      }
      drinkState[index].number--;
      if (totalCount.value <= 0) {
        Notify.text("不能再减少了！不能让我们赔钱啊！");
        return;
      }
      newValue.value = totalPrice.value - drinkState[index].price;
      totalPrice.value = newValue.value;

      totalCount.value -= 1;
      for (let i = 0; i < goodsList.length; i++) {
        if (drinkState[index].title === goodsList[i].name) {
          goodsList[i].count = drinkState[index].number;
          goodsList[i].price = drinkState[index].price;
          if (goodsList[i].count === 0) {
            goodsList.splice(i, 1);
          }
          return;
        }
      }
      // console.log(count1.value);
      // console.log(totalCount.value);
    };
    // const decreaseFruitPrice = (index: number) => {
    //  if (totalPrice.value <= 0) {
    //     console.log("总金额至少为1元！！");
    //     return;
    //   }
    //   newValue.value = totalPrice.value - fruitDrinkData[index].price;
    //   if (newValue.value < 0) {
    //     console.log("总金额至少为0元");
    //     return;
    //   }
    //   totalPrice.value = newValue.value;

    //   if (fruitDrinkData[index].number < 0) {
    //     console.log("不能再减少了！不能让我们赔钱啊！");
    //     return;
    //   }
    //   fruitDrinkData[index].number--;
    //   if (totalCount.value <= 0) {
    //     Notify.text("不能再减少了！不能让我们赔钱啊！");
    //     return;
    //   }
    //   totalCount.value -= 1;
    //   // console.log(count1.value);
    //   // console.log(totalCount.value);
    // };
    // const increaseFruitPrice = (index: number) => {
    //   totalPrice.value = fruitDrinkData[index].price + totalPrice.value;
    //   fruitDrinkData[index].number++;
    //   totalCount.value += 1;
    //   // DataChange.name = fruitDrinkData[index].title;
    // };
    // const decreaseCoffeePrice = (index: number) => {
    //    if (totalPrice.value <= 0) {
    //     console.log("总金额至少为1元！！");
    //     return;
    //   }
    //   newValue.value = totalPrice.value - CoffeeDrinkData[index].price;
    //   if (newValue.value < 0) {
    //     console.log("总金额至少为0元");
    //     return;
    //   }
    //   totalPrice.value = newValue.value;

    //   if (CoffeeDrinkData[index].number < 0) {
    //     console.log("不能再减少了！不能让我们赔钱啊！");
    //     return;
    //   }
    //   CoffeeDrinkData[index].number--;
    //   if (totalCount.value <= 0) {
    //     Notify.text("不能再减少了！不能让我们赔钱啊！");
    //     return;
    //   }
    //   totalCount.value -= 1;
    //   // console.log(count1.value);
    //   // console.log(totalCount.value);
    // };
    // const increaseCoffeePrice = (index: number) => {
    //   totalPrice.value = CoffeeDrinkData[index].price + totalPrice.value;
    //  CoffeeDrinkData[index].number++;
    //   totalCount.value += 1;
    //   // DataChange.name = CoffeeDrinkData[index].title;
    // };
    // const decreaseMilkTeaPrice = (index: number) => {
    //    if (totalPrice.value <= 0) {
    //     console.log("总金额至少为1元！！");
    //     return;
    //   }
    //   newValue.value = totalPrice.value - MilkTeaDrinkData[index].price;
    //   if (newValue.value < 0) {
    //     console.log("总金额至少为0元");
    //     return;
    //   }
    //   totalPrice.value = newValue.value;

    //   if (MilkTeaDrinkData[index].number < 0) {
    //     console.log("不能再减少了！不能让我们赔钱啊！");
    //     return;
    //   }
    //   MilkTeaDrinkData[index].number--;
    //   if (totalCount.value <= 0) {
    //     Notify.text("不能再减少了！不能让我们赔钱啊！");
    //     return;
    //   }
    //   totalCount.value -= 1;
    //   // console.log(count1.value);
    //   // console.log(totalCount.value);
    // };
    // const increaseMilkTeaPrice = (index: number) => {
    //   totalPrice.value = MilkTeaDrinkData[index].price + totalPrice.value;
    //   // DataChange.name = MilkTeaDrinkData[index].title;
    //   MilkTeaDrinkData[index].number++;
    //   totalCount.value += 1;
    // };
    const pass = (data) => {
      console.log("传送数据" + data);
    };
    const goCart = () => {
      if (totalPrice.value > 0) {
        Router.navigate(
          {
            url: "/pages/shopCart/index",
          },
          {
            data: {
              totalCount: totalCount.value,
              totalPrice: totalPrice.value,
              goodsList: goodsList,
            },
          }
        );
      } else {
        console.log("您需要至少买一杯喝的~");
      }
    };
    // Taro.setStorage({
    //   key: "key",
    //   data: {
    //     drinkState,
    //     CoffeeDrinkData,
    //     MilkTeaDrinkData,
    //     fruitDrinkData,
    //     totalCount,
    //     totalPrice,
    //     DataChange,
    //   },
    // });
    try {
      Taro.setStorageSync("key", {
        drinkState,
      });
    } catch (e) {}
    const goto = () => {
      console.log("hh");
    };
    const searchShopContent = () => {
      Taro.navigateTo({
        url: "/pages/shopDetail/index",
      });
    };
    return {
      ...toRefs(state),
      topMenuState,
      leftMenuState,
      drinkState,
      increaseDrinkStatePrice,
      totalPrice,
      goCart,
      goto,
      searchShopContent,
      totalCount,
      pass,
      decreaseDrinkStatePrice,
    };
  },
});
</script>
<style lang="scss">
.showGoods-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "微软雅黑";
  margin-left: 12px;
  .showGoods-content {
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
  }
}
.showGoods-noticeBar {
  margin-top: 10px;
}
.showGoods-tabs {
  display: flex;
}
.nut-tabpane {
  padding: 0;
  // margin-left:20px;
}
.showGoods-tabpane {
  position: absolute;
  margin-top: 10px;
  right: 0;
}
.nut-tabs.vertical .nut-tabs__titles {
  padding: 0 !important;
}
.drinkMenu .nut-swiper-item {
  line-height: 120px;
  img {
    width: 74%;
    height: 110%;
  }
}
.drinkMenu {
  width: 274px;
  background-color: rgb(248, 230, 230);
  border-radius: 12px;
}
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
}
.search_prolist_attr > span {
  float: left;
  padding: 0 5px;
  border-radius: 1px;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  color: #999;
  background-color: #f2f2f7;
  margin-right: 5px;
}
.tag {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 2px;
  height: 14px;
}
.customize {
  font-size: 12px;
}
.drinkCard {
  margin-top: 10px;
  width: 276px;
}
.nut-card .nut-card__left > .h5-img {
  width: 60%;
  height: 60%;
  margin-left: 25px;
  border-radius: 5px;
}
.nut-card .nut-card__right {
  padding: 5 10px 0 0;
}
.nut-card .nut-card__left {
  width: 110px;
  height: 110px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.sku-operate-box {
  width: 100%;
  display: flex;
  padding: 8px 10px;
  box-sizing: border-box;
}
.sku-operate-item {
  flex: 1;
}
.sku-operate-item:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.sku-operate-item:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
// .showGoods-norms {
//   width: 50px;
//   height: 46px;
//   font-size: 5px;
//   position: absolute;
//   right: 4px;
//   top: 280px;
//   z-index: 1;
//   background-color: #fff;
// }
.nut-cell__title {
  font-size: 10px;
  font-family: "微软雅黑";
  color: #fff;
}
.nut-cell {
  background-color: #d1576b;
  padding: 3px 6px;
}
.nut-tabs.vertical .nut-tabs__titles {
  padding: 0 !important;
}
.nut-card .nut-card__right .nut-card__right__shop {
  margin-top: -34px;
  margin-right: -6px;
}
.nut-popup {
  margin-left: -100px;
  width: 384px;
  height: 85% !important;
}
.nut-card .nut-card__right .nut-card__right__shop {
  margin-top: -33px;
  margin-right: -6px;
  width: 50px;
  margin-left: 90px;
}
.drinkCard-button-min {
  width: 10px;
  height: 15px;
  margin-right: 5px;
  margin-left: -3px;
  margin-top: 15px;
}
.drinkCard-button-increase {
  width: 10px;
  height: 15px;
  margin-top: 15px;
  margin-left: 1px;
}
.drinkCard-number {
  margin-top: 14px;
  font-size: 14px;
  margin-right: 2px;
  margin-left: -2px;
  color: #c46978;
}
.nut-icon {
  font-size: 10px;
}
.showGoods-cart {
  width: 100%;
  position: fixed;
  bottom: -2px;
  background-color: rgb(241, 240, 240);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__icon {
    position: relative;
    margin-left: 20px;
    width: 63px;
    height: 36px;
    .nut-icon {
      font-size: 16px;
    }
  }
  &__price {
    margin-left: -130px;
    color: #d1576b;
  }
  &__totalPrice {
    height: 45px;
  }
}
.sku-operate-box {
  z-index: 1;
  margin-bottom: 40px;
}
.showGoods-number {
  width: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #b0495a;
  color: #fff;
  margin-left: 60px;
  border-radius: 20px;
  z-index: 1;
  text-align: center;
}
.showGoods-detail {
  position: relative;
  left: 280px;
  font-size: 11px;
}
</style>