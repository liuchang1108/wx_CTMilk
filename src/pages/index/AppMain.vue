<template>
  <view class="appMain">
    <view class="appNav">
      <view class="appNav-avatar">
        <nut-avatar
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          shape="round"
          class="appNav-avatarImg"
        ></nut-avatar>
        <p class="appNav-text">C_Flipped_Y</p>
      </view>
      <view class="appNav-grid">
        <nut-grid :column-num="2" :border="false">
          <nut-grid-item
            icon="footprint"
            icon-size="16"
            text="积分"
          ></nut-grid-item>
          <nut-grid-item
            icon="cart"
            icon-size="16"
            text="优惠券"
          ></nut-grid-item>
        </nut-grid>
      </view>
    </view>
    <view class="appMainContent">
      <nut-grid :column-num="2">
        <nut-grid-item
          icon="https://imusae-download.90sheji.com/imusae/download/2020/12/23/9ed9e3749cb882f00c21138f5cad7d0c.png?sign=66a50afaa364141a2356b164fba44191&t=626c0b80&imageMogr2/thumbnail/804x/crop/!x800-0a0/auto-orient/interlace/1/sharpen/1/quality/85/format/webp"
          icon-size="80"
          text="立即点单"
          @click="goto"
        ></nut-grid-item>

        <nut-grid-item
          icon="https://pic.90sheji.com/design/01/11/96/52/5959a0427eee9.png!/fwfh/804x804/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true"
          icon-size="80"
          text="外卖"
        ></nut-grid-item>
      </nut-grid>
    </view>
    <view class="appFoot">
      <view class="appFoot-box1">
        <view class="appFoot-box__title">积分商城</view>
        <view class="appFoot-box__text">乐享积分好礼</view>

        <img
          src="https://pic.90sheji.com/original_origin_pic/18/06/20/5edaf9915fa605fc6b492d4e9a7dc16c.png!/fwfh/804x804/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true    "
          alt=""
        />
      </view>
      <view class="appFoot-box2">
        <view class="appFoot-box__title">零售商城</view>
        <view class="appFoot-box__text">优惠券领取</view>

        <img
          src="https://pic.90sheji.com/original_origin_pic/18/06/20/5edaf9915fa605fc6b492d4e9a7dc16c.png!/fwfh/804x804/clip/0x800a0a0/quality/90/unsharp/true/compress/true/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true    "
          alt=""
        />
      </view>
    </view>
    <view class="appFoot-container">
      <nut-icon
        name="star-fill-n"
        size="10"
        color="rgb(238, 125, 144)"
        class="nut-icon-am-blink nut-icon-am-infinite"
      ></nut-icon>
      <p class="appFoot-text">公告:有任何问题请联系：12345678</p></view
    >
  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Taro from "@tarojs/taro";

export default defineComponent({
  name: "AppMain",
  components: {},
  setup() {
    const goto = () => {
      Taro.switchTab({
        url: "/pages/showGoods/index",
      });
    };
    return {
      goto,
    };
  },
});
</script>
<style lang="scss">
.appMain {
  height: 70vh;
  background-color: rgb(247, 247, 247);
}
.appNav {
  padding: 0;
  display: flex;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 12px;
  // justify-content: space-around;
  align-items: center;
  justify-content: space-between;
  .nut-grid-item {
    width: 60px;
    height: 50px;
  }
}
.appNav-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  .appNav-text {
    font-size: 12px;
    margin-left: 8px;
  }
}

.appNav-grid {
  margin-top: 15px;
  margin-right: 10px;
}
.appNav-avatarImg {
  // flex:1;
  margin-left: 10px;
}
.appMainContent {
  padding: 0;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  //   border: 1px solid #fff;
  //   border-radius: 20px;
  background-color: #fff;
  .nut-grid-item {
    height: 150px;
    color: rgb(0, 80, 146);
  }
  .nut-grid-item__text {
    font-family: "微软雅黑";
    font-weight: 600;
    color: rgb(54, 54, 54);
    font-size: 14px;
  }
}
.appFoot {
  width: 85%;
  border-radius: 12px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 20px;
  img {
    width: 50px;
    height: 50px;
    margin-left: 100px;
  }
}
.appFoot-box1,
.appFoot-box2 {
  display: flex;
  flex-direction: column;
  height: 80px;
  flex: 1;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  margin-right: 7px;
  line-height: 20px;
  padding: 10px 0 0 12px;
}
.appFoot-box2 {
  margin-right: 0;
}
.appFoot-box__title,
.appFoot-box__text {
  align-self: flex-start;
  font-family: "微软雅黑";
  font-size: 10px;
  margin-left: 4px;
}
.appFoot-box__title {
  font-weight: 600;
  font-size: 13px;
}
.appFoot-container {
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  font-family: "微软雅黑";
  font-size: 13px;
  border-radius: 10px;
  .nut-icon {
    --animate-duration: 1s;
    --animate-delay: 0s;
  }
}
.appFoot-text {
  margin-left: 5px;
}
</style>