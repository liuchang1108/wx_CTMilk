<template>
  <view class="index">
     <AppHeaderVue></AppHeaderVue>
     <AppMainVue></AppMainVue>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import AppHeaderVue from './AppHeader.vue';
import AppMainVue from './AppMain.vue';
export default {
  name: 'Index',
  components: {
    AppHeaderVue,
    AppMainVue
  },
  setup(){
    
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
