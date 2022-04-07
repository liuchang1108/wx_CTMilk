<template>
    <div class="drinkNorms">
                    <nut-cell
                      title="选规格"
                      desc=""
                      @click="customBySlot = true"
                    ></nut-cell>
                    <nut-sku
                      v-model:visible="customBySlot"
                      :sku="sku"
                      :goods="goods"
                      :btnOptions="['buy', 'cart']"
                      @selectSku="selectSku"
                      @clickBtnOperate="clickBtnOperate" 
                    >
                      <!-- 商品展示区，价格区域 -->
                      <template #sku-header-price>
                        <div class="drinkNorms-box">
                          <nut-price
                            :price="drinkState.vipPrice"
                            :needSymbol="true"
                            :thousands="false"
                          >
                          </nut-price>
                          <span class="tag"></span>
                        </div>
                      </template>
                      <!-- 商品展示区，编号区域 -->
                      <template #sku-header-extra>
                        <span class="nut-sku-header-right-extra"
                          >{{drinkState.title}}
                        </span>
                      </template>
                      <!-- sku 展示区上方与商品信息展示区下方区域，无默认展示内容 -->
                      <template #sku-select-top>
                       
                      </template>
                      <!-- 底部按钮操作区 -->
                      <template #sku-operate>
                        <div class="sku-operate-box">
                          <nut-button
                            class="sku-operate-item"
                            shape="square"
                            type="primary"
                            color="#d1576b"
                            >加入购物车</nut-button
                          >
                        </div>
                      </template>
                    </nut-sku>
                  </div>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs,ref,onMounted } from "vue";
import fetch from "../../pages/utils/fetch";

export default defineComponent({
    name:'ShowGoods',
    setup(){
         const customBySlot = ref(false);
    const showAddressPopup = ref(false);
     const drinkState = reactive({
      imgUrl:
        "https://img1.baidu.com/it/u=2746809737,313183955&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500",
      title: "人气Top柠檬水",
      price: "4",
      vipPrice: "2",
      delivery: "清爽一夏",
    });
    const data = reactive({
      sku: [
        {
          id: 1,
          name: "糖度",
          list: [
            {
              name: "标准糖",
              active: true,
              disable: false,
            },
            {
              name: "五分糖",
              active: false,
              disable: false,
            },
            {
              name: "无糖",
              active: false,
              disable: false,
            },
          ],
        },{
          id: 2,
          name: "温度",
          list: [
            {
              name: "常温",
              active: true,
              disable: false,
            },
            {
              name: "去冰",
              active: false,
              disable: false,
            },
            {
              name: "热",
              active: false,
              disable: false,
            },
            {
              name: "多冰",
              active: false,
              disable: false,
            },
          ],
        }
      ],
      goods: {
        skuId: "", // 商品信息展示区，商品编号
        price: "0", // 商品信息展示区，商品价格
        imagePath: drinkState.imgUrl, // 商品信息展示区，商品图
      },
    });
    onMounted(() => {
      fetch("https://storage.360buyimg.com/nutui/3x/data.js")
        .then((response) => response.json())
        .then((res) => {
          const { Sku, Goods } = res;
          data.sku = Sku;
          data.goods = Goods;
        }) //执行结果是 resolve就调用then方法
        .catch((err) => console.log("Oh, error", err)); //执行结果是 reject就调用catch方法
    });
    const selectSku = (ss: any) => {
      const { sku, parentIndex } = ss;
      if (sku.disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s.active = s.name == sku.name;
      });
      data.goods = {
        skuId: sku.id,
        price: drinkState.price,
        imagePath:drinkState.imgUrl,
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op: string) => {
      console.log("点击了操作按钮", op);
    };
    return { 
       customBySlot,
      selectSku,
      clickBtnOperate,
      ...toRefs(data),
      showAddressPopup,
      drinkState
     };
    }
})
</script>
<style lang="scss">

</style>