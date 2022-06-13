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
    <nut-input
      v-model="state.val3"
      @change="change"
      readonly
      label="预计送达时间"
      class="orderVue-getTime"
    />
    <nut-input
      v-model="userInfo.address"
       @change="change"
      placeholder="请选择送达地址"
      label="送餐地址"
      @click="selectAddress"
    />
    <view class="orderVue-mainContainer">
      <h3 class="orderVue-h3">商品明细</h3>
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
    <nut-input
      class="orderVue-addition"
      v-model="state.val"
      @change="change"
      label="备注"
      max-length="50"
      placeholder="请输入备注"
      show-word-limit="true"
      input-align="right"
    />
    <view class="orderVue-foot">
      <view class="orderVue-footText"
        >合计：<nut-price
          :price="totalPrice"
          size="normal"
          decimal-digits="0"
          :thousands="true"
          :need-symbol="true"
        />
      </view>
      <nut-button
        color="#d1576b"
        type="primary"
        class="orderVue-footButton"
        @click="state.showBasic = true"
        >立即支付</nut-button
      >
      <nut-popup
        pop-class="popclass"
        :style="{ padding: '48px 56px' }"
        v-model:visible="state.showBasic"
        :z-index="100"
        closeable
        round
        @close="goOrder"
      >
        <p class="orderVue-popupTitle">提示</p>
        <p class="orderVue-popupContent">支付成功！</p>
      </nut-popup>
    </view>
  </view>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Taro from "@tarojs/taro";
import { Router } from "tarojs-router-next";
export default defineComponent({
  name: "OrderVue",
  setup() {
    Taro.setNavigationBarTitle({
  title: '支付页面'
})
    const userInfo = reactive({
      userName: "",
      postalCode: "",
      provinceName: "",
      cityName: "",
      countyName: "",
      detailInfo: "",
      nationalCode: "",
      telNumber: "",
      address:"张三广东省广州市海珠区新港中路397号510000020-81167888"
    });
    const selectAddress = () => {
      Taro.chooseAddress({
        success: function (res) {          
          userInfo.userName=res.userName;
          userInfo.postalCode=res.postalCode;
          userInfo.provinceName=res.provinceName;
          userInfo.cityName=res.cityName;
          userInfo.countyName=res.countyName;
          userInfo.detailInfo=res.detailInfo;
          userInfo.nationalCode=res.nationalCode;
          userInfo.telNumber=res.telNumber;
          userInfo.address=userInfo.userName+ userInfo.postalCode+userInfo.provinceName+userInfo.cityName+ userInfo.countyName+userInfo.detailInfo+userInfo.nationalCode+userInfo.telNumber;
         console.log(userInfo.address);
       },
      });
    };
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
    desc.value = toHour + "点" + toMinute + "分 " + " (预计30分钟后可取餐)";
    const state = reactive({
      val4: "",
      val3: desc.value,
      val: "",
      showBasic: false
    });

    const data = Router.getData();
    const { totalCount, totalPrice, goodsList } = data;
    console.log(totalCount, totalPrice, goodsList);
    Taro.setStorage({
      key: "key",
      data: {
        totalCount,
        totalPrice,
        goodsList,
      },
    });
    //     Taro.setStorage({
    //   key:"key",
    //   data:goodsList
    // })
    const goOrder = () => {
      Router.navigate(
        {
          url: "/pages/order/index",
        },
        {
          data: {
            totalCount: totalCount,
            totalPrice: totalPrice,
            goodsList: goodsList,
          },
        }
      );
    };
    return {
      getLocation,
      state,
      change,
      show,
      desc,
      data,
      totalCount,
      totalPrice,
      goodsList,
      goOrder,
      selectAddress,
      userInfo,
    };
  },
});
</script>
<style lang="scss">
.orderVue {
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
.orderVue-getTime {
  .nut-input .input-text,
  .nut-input__text--readonly {
    color: #d1576b;
  }
}
.orderVue-input {
  margin-top: 40px;
  margin-bottom: 15px;
}
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
.orderVue-addition {
  margin-top: 55px;
}
.orderVue-foot {
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background-color: #f3f2f2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.orderVue-footText {
  line-height: 10px;
  margin-right: 12px;
  .nut-price {
    color: #d1576b;
  }
}
.orderVue-footButton {
  margin-right: 18px;
  color: #fff;
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