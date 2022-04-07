<template>
  <view class="shopDetail">
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
    <nut-cell
      title="畅通奶茶"
      desc="哈尔滨理工大学西区东门"
      icon="dshop"
    ></nut-cell>
    <nut-cell
      icon="star-n"
      title="本店特色"
      desc="奶茶香甜可口，甜而不腻，值得品尝"
    ></nut-cell>
    <nut-cell title="营业时间" desc="8:00-22:00" icon="clock"></nut-cell>

    <nut-cell
      title="联系我们"
      is-link
      icon="tips"
      desc="12345678"
      @click="state.showBasic = true"
    ></nut-cell>
    <nut-popup
      pop-class="popclass"
      closeable
      round
      :style="{ padding: '50px 35px 40px 35px' }"
      v-model:visible="state.showBasic"
      :z-index="100"
      >拨打12345678?</nut-popup
    >
    <nut-cell
      title="查看地图"
      @click="getLocation"
      icon="location2"
      is-link
      desc="导航到店"
    ></nut-cell>
    <map
      id="map"
      style="width: 100%; height: 300px"
      longitude="126.61665"
      latitude="45.714676"
      scale="14"
      :markers="markers"
      :show-location="true"
      :enable-3D="true"	
      :show-compass="true" 
      :show-scale="true"	
      :enable-rotate="true"	
      :enable-traffic="true"
    />
  </view>
</template>
<script>
import { defineComponent,props,reactive } from "vue";
import Taro from "@tarojs/taro";

export default defineComponent({
  name: "ShowGoods",
  props:{},
  setup() {
      const state = reactive({
        showBasic: false
      });
    const getLocation = () => {
      const name = "畅通奶茶(哈尔滨理工大学店)";
      const address = "哈尔滨市南岗区哈尔滨理工大学西区东门";
      const latitude = 45.714676;
      const longitude = 126.61665;
      Taro.openLocation({
        latitude: latitude,
        longitude: longitude,
        name: name,
        address: address,
      });
    };
    const markers=[{
        iconPath: 'https://i.52112.com/icon/jpg/256/20160411/18154/85743.jpg',
        id: 0,
        latitude: 45.714676,
        longitude: 126.61665,
        width: 30,
        height: 30
      }];
    return {
      getLocation,
      state,
      markers
    };
  },
});
</script>
<style lang="scss">
.shopDetail .nut-swiper-item {
font-family: "微软雅黑";
  line-height: 200px;
  font-weight: 500;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>