<template>
  <view class="mine">
    <view class="mine-header">
      <nut-avatar
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        shape="round"
        class="mine-header__avatar"
      ></nut-avatar>
      <p class="mine-header__avatarInfo">C_Flipped_Y</p>

      <view class="mine-header__mainInfo">
        <view v-for="i in arr" :key="i" class="mainInfo-Item">
          <p class="mainInfo-item__number">{{ i.factNumber }}</p>
          <p class="mainInfo-item__text">{{ i.describeText }}</p>
        </view>
      </view>
    </view>
    <nut-cell-group>
      <nut-cell
        title="回到首页"
        icon="home"
        is-link
        @click="goIndex"
      ></nut-cell>
      <nut-cell
        title="每日签到"
        icon="footprint"
        is-link
        @click="state.showBasic = true"
      ></nut-cell>
      <nut-popup
        pop-class="popclass"
        :style="{ padding: '48px 56px' }"
        v-model:visible="state.showBasic"
        :z-index="100"
        closeable
        round
      >
        <p class="orderVue-popupTitle">提示</p>
        <p class="orderVue-popupContent">签到成功！</p></nut-popup
      >
      <nut-cell
        title="收货地址"
        icon="locationg3"
        is-link
        @click="showAddress"
      ></nut-cell>
      <nut-cell
        title="关于我们"
        icon="ask2"
        is-link
        @click="searchShopContent"
      ></nut-cell>
    </nut-cell-group>
  </view>
</template>
<script>
import { defineComponent, reactive } from "vue";
import Taro from "@tarojs/taro";

export default defineComponent({
  name: "MineVue",
  setup() {
    Taro.setNavigationBarTitle({
      title: "我的",
    });
    const arr = [
      {
        factNumber: "0",
        describeText: "优惠券",
      },
      {
        factNumber: "0",
        describeText: "余额",
      },
      {
        factNumber: "10",
        describeText: "积分",
      },
    ];
    const goOrder = () => {
      Taro.navigateTo({
        url: "/pages/order/index",
      });
    };
    const goSignIn = () => {};
    const goIndex = () => {
      Taro.switchTab({
        url: "/pages/index/index",
      });
    };
    const state = reactive({
      showBasic: false,
    });
    const searchShopContent = () => {
      Taro.navigateTo({
        url: "/pages/shopDetail/index",
      });
    };
    const showAddress = () => {
      Taro.chooseAddress({
        success: function (res) {
          console.log(res.userName);
          console.log(res.postalCode);
          console.log(res.provinceName);
          console.log(res.cityName);
          console.log(res.countyName);
          console.log(res.detailInfo);
          console.log(res.nationalCode);
          console.log(res.telNumber);
        },
      });
    };
    return {
      arr,
      goOrder,
      state,
      goIndex,
      searchShopContent,
      showAddress,
    };
  },
});
</script>
<style lang="scss">
.mine-header {
  width: 100%;
  height: 150px;
  display: flex;
  background-color: rgb(203, 133, 149);
  // justify-content: center;
  align-items: center;
}
.mine-header__mainInfo {
  display: flex;
  align-self: flex-end;
  margin-left: -30px;
}
.mainInfo-Item {
  width: 50px;
  margin-bottom: 10px;
  text-align: center;
  margin-right: 30px;
  font-family: "微软雅黑" ；;
}
.mainInfo-item__number {
  font-size: 16px;
}
.mainInfo-item__text {
  font-size: 12px;
}
.mine-header__avatar,
.mine-header__avatarInfo {
  margin-top: -30px;
  margin-left: 5px;
}
.mine-header__avatarInfo {
  font-size: 13px;
  margin-left: 5px;
  font-family: "微软雅黑";
}
.orderVue-popupTitle {
  margin-left: 12px;
  font-family: "微软雅黑";
  font-size: 19px;
  margin-bottom: 28px;
}
.orderVue-popupContent {
  font-family: "微软雅黑";
  font-size: 15px;
}
</style>
