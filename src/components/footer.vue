<template>
  <tabbar class="footer">
    <tabbar-item link="/home" :selected="$route.path == '/home'">
      <img slot="icon" src="../assets/home_gray.png" v-show="$route.path !== '/home'">
      <img slot="icon" src="../assets/home_red.png" v-show="$route.path == '/home'">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/Search" :selected="$route.path == '/Search'">
      <img slot="icon" src="../assets/search_gray.png" v-show="$route.path !== '/Search'">
      <img slot="icon" src="../assets/search_red.png" v-show="$route.path == '/Search'">
      <span slot="label">智搜</span>
    </tabbar-item>
    <tabbar-item  link="/YouHui" :selected="$route.path == '/YouHui'">
      <img slot="icon" src="../assets/youhui_gray.png" v-show="$route.path !== '/YouHui'">
      <img slot="icon" src="../assets/youhui_red.png" v-show="$route.path == '/YouHui'">
      <span slot="label">超实惠</span>
    </tabbar-item>
    <tabbar-item link="/PersonCenter" :selected="$route.path == '/PersonCenter'">
      <img slot="icon" src="../assets/personcenter_gray.png" v-show="$route.path !== '/PersonCenter'">
      <img slot="icon" src="../assets/personcenter_red.png" v-show="$route.path == '/PersonCenter'">
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem} from 'vux'
  export  default {
    name:'AppFooter',
    components:{
      Tabbar,
      TabbarItem,
    }

  }
</script>
<style scoped>
   .footer {
     position: fixed;
   }
</style>
<style>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color:#ff425f!important;
  }
</style>
