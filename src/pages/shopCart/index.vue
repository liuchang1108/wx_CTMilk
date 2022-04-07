<template>
  <view class="orderVue">
     <nut-icon name="location2" color="#d1576b" class="orderVue-icon" size="15"></nut-icon>
      <p class="orderVue-title">畅通奶茶(哈尔滨理工大学店)</p>
      <p class="orderVue-desc" @click="getLocation">哈尔滨市南岗区哈尔滨理工大学西区东门 ></p>
      <nut-input v-model="state.val4" @change="change" max-length="11" placeholder="请输入11位手机号" label="联系电话" />
      <nut-cell title="取餐时间" :desc="desc" @click="()=>{show=true}" is-link></nut-cell>
    <nut-picker
      v-model:visible="show"
      :columns="multipleColumns"
      title="取餐时间"
      @confirm="confirm"
      @change="optionChange"
    >
    </nut-picker>
  </view>
</template>
<script lang="ts">
import { defineComponent,reactive,ref } from "vue";
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
     const state = reactive({
        val4: ''
      });
     const change = (value: string | number,event:Event) => {
        console.log('change: ', value,event);
      };
       const show = ref(false);
      const desc = ref('请选择取餐时间');
      const currentMinute=new Date().getMinutes();  
      const date=new Date();
       date.setMinutes(currentMinute+30);
      const toHour=  date.getHours();
      const toMinute=date.getMinutes();
      const multipleColumns = ref([
        // 第一列
        [
          { text: toHour+"点", value: 'hour' },
          { text: toHour+1+"点", value: 'hour' },
          { text: toHour+2+"点", value: 'hour' },
          { text: toHour+3+"点", value: 'hour' },
          { text: toHour+4+"点", value: 'hour' }
        ],
        // 第二列
        [
          { text: toMinute, value: 'Morning' },
          { text: toMinute+10, value: 'Afternoon' },
          { text: toMinute+20, value: 'Evening' }
        ]
      ]);
      const confirm = ( { selectedValue })=>{
        desc.value = selectedValue.join(',');
      }
      const optionChange = ({ selectedValue }) => {
        console.log(selectedValue);
      };
      return{
          getLocation,
          state,
          change,
          multipleColumns,
          confirm,
          optionChange,
          show,
          desc
      }
  },
});
</script>
<style lang="scss">
.orderVue-icon{
    position:absolute;
    top:10px;
    left:10px;
}
.orderVue-title,.orderVue-desc{
    margin-left:30px;
    margin-top: 6px;
    font-size: 16px;
    font-family: "微软雅黑";
}
.orderVue-desc{
    color:rgb(148, 148, 148);
    font-size: 14px; 
}
</style>