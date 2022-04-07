<template>
  <view class="orderVue">
    <nut-icon
      name="location2"
      color="#d1576b"
      class="orderVue-icon"
      size="15"
    ></nut-icon>
    <p class="orderVue-title">畅通奶茶(哈尔滨理工大学店)</p>
    <p class="orderVue-desc" @click="getLocation">
      哈尔滨市南岗区哈尔滨理工大学西区东门 >
    </p>
    <nut-input
      v-model="state.val4"
      @change="change"
      max-length="11"
      placeholder="请输入11位手机号"
      label="联系电话"
      class="orderVue-input"
    />
    <!-- <nut-cell title="取餐时间" :desc="desc" sub-title="预计30分钟后可取"></nut-cell> -->
    <nut-input v-model="state.val3" @change="change" readonly="true" label="取餐时间" class="orderVue-getTime" />
    <view>
        <h2>商品明细</h2>
        <p></p>

    </view>
  </view>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Taro from "@tarojs/taro";

export default defineComponent({
  name: "OrderVue",
  setup() {
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
    const change = (value: string | number, event: Event) => {
      console.log("change: ", value, event);
    };
    const show = ref(false);
    const desc = ref("");
    //   const currentHour=new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const date = new Date();
    date.setMinutes(currentMinute + 30);
    const toHour = date.getHours();
    const toMinute = date.getMinutes();
    desc.value = toHour + "点" + toMinute + "分 "+" (预计30分钟后可取餐)";
    const state = reactive({
      val4: "",
      val3: desc.value,
    });
    return {
      getLocation,
      state,
      change,
      show,
      desc,
    };
  },
});
</script>
<style lang="scss">
.orderVue{
    font-family: "微软雅黑";
}
.orderVue-icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
.orderVue-title,
.orderVue-desc {
  margin-left: 30px;
  margin-top: 6px;
  font-size: 16px;
  font-family: "微软雅黑";
}
.orderVue-desc {
  color: rgb(148, 148, 148);
  font-size: 14px;
}
// .nut-cell__value {
//   color: rgb(21, 21, 21);
//   margin-top: 5px;
// }
// .nut-cell {
//   color: #000;
//   box-shadow: none;
// }
.orderVue-getTime{
  nut-input .input-text, .nut-input__text--readonly {
    color:#d1576b;
}
}
.orderVue-input{
    margin-top:40px;
    margin-bottom:15px;
}
</style>