<template>
  <view class="orderVue-mainContainer">
    <h3 class="orderVue-h3">订单如下</h3>
    <view 
      class="orderVue-list"
      v-for="(item, index) in goodsList"
      :key="index"
    >
      <view>{{ item.name }}</view>
      <view class="orderVue-number">×{{ item.count }}</view>
      <view
        ><nut-price
          :price="item.price"
          size="normal"
          decimal-digits="0"
          :thousands="true"
          :need-symbol="true"
          class="orderVue-price"
      /></view>
    </view>
    <view class="orderVue-total"
      >共计{{ totalCount }}件商品，小计：<nut-price
        :price="totalPrice"
        size="normal"
        decimal-digits="0"
        :thousands="true"
        :need-symbol="true"
    /></view>
  </view>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { Router } from "tarojs-router-next";
import Taro from "@tarojs/taro";

export default defineComponent({
  name: "ShowGoods",
  setup() {
    Taro.setNavigationBarTitle({
  title: '我的订单'
})
  Taro.getStorage({
  key: 'key',
  success: function (res) {
   var totalPrice=res.data.totalPrice;
  var goodsList=res.goodsList;
   console.log(totalPrice);
  }
})
  console.log(goodsList);
     const data = Router.getData();
    const { goodsList,totalCount,totalPrice} = data;
    console.log(goodsList,totalCount,totalPrice);
return {
      goodsList,
      totalCount,
      totalPrice,
    };
  },
});
</script>
<style lang="scss">
.orderVue-mainContainer {
  margin-top: 25px;
  margin-left: 25px;
}
.orderVue-h3 {
  font-size: 14px;
  font-weight: bold;
}
.orderVue-list {
  font-size: 14px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.orderVue-number {
  position: absolute;
  right: 66px;
  margin-top: 1.5px;
  font-size: 15px;
}
.orderVue-price {
  margin-right: 22px;
  color: #000;
}
.orderVue-total {
  float: right;
  margin-top: 20px;
  font-size: 14px;
  margin-right: 22px;
  font-family: "微软雅黑";
  letter-spacing: 0.5px;
  .nut-price {
    color: #d1576b;
  }
}
</style>