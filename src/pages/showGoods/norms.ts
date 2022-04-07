import { ref, reactive, toRefs,onMounted} from "vue";
export default()=>{
    const customBySlot = ref(false);
    const showAddressPopup = ref(false);
    const data = reactive({
      sku: [],
      goods: {}
    });

    const addressDesc = ref('(配送地会影响库存，请先确认)');
    const existAddress = ref([
      {
        id: 1,
        addressDetail: 'th ',
        cityName: '石景山区',
        countyName: '城区',
        provinceName: '北京',
        selectedAddress: true,
        townName: ''
      },
      {
        id: 2,
        addressDetail: '12 ',
        cityName: '电饭锅',
        countyName: '扶绥县',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      },
      {
        id: 3,
        addressDetail: '发大水比 ',
        cityName: '放到',
        countyName: '广宁街道',
        provinceName: '钓鱼岛全区',
        selectedAddress: false,
        townName: ''
      },
      {
        id: 4,
        addressDetail: '还是想吧百度吧 ',
        cityName: '研发',
        countyName: '八里庄街道',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      }
    ]);

    onMounted(() => {
        fetch('https://storage.360buyimg.com/nutui/3x/data.js')
          .then((response) => response.json())
          .then((res) => {
            const { Sku, Goods, imagePathMap } = res;
            data.sku = Sku;
            data.goods = Goods;
          }) //执行结果是 resolve就调用then方法
          .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    });

    // 切换规格类目
    // const selectSku = (ss: any) => {
    //   const { sku, skuIndex, parentSku, parentIndex } = ss;
    //   if (sku.disable) return false;
    //   data.sku[parentIndex].list.forEach((s) => {
    //     s.active = s.id == sku.id;
    //   });
    //   data.goods = {
    //     skuId: sku.id,
    //     price: '6002.10',
    //     imagePath:
    //       '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg' 
    //   };
    // };
    const selectedAddress = (prevExistAdd: any, nowExistAdd: any) => {
      const { provinceName, countyName, cityName } = nowExistAdd;
      addressDesc.value = `${provinceName}${countyName}${cityName}`;
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { customBySlot,  clickBtnOperate,existAddress,addressDesc,selectedAddress,...toRefs(data) };
}