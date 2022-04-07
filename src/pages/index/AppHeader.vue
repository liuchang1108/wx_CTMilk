<template>
  <view class="appHeader">
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
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Banner",
  setup() {
    const state = reactive({
      page: 2,
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss">
.appHeader{
  background-color: rgb(247, 247, 247);
}
 .appHeader .nut-swiper-item {
    line-height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>