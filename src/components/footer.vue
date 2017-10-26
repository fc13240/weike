<template>
  <tabbar class="footer">
    <tabbar-item link="/" :selected="$route.path == '/'">
      <img slot="icon" src="../assets/logo.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/Tmall" :selected="$route.path == '/Tmall'">
      <img slot="icon" src="../assets/logo.png">
      <span slot="label">智搜</span>
    </tabbar-item>
    <tabbar-item  link="/YouHui" :selected="$route.path == '/YouHui'">
      <img slot="icon" src="../assets/logo.png">
      <span slot="label">超实惠</span>
    </tabbar-item>
    <tabbar-item link="/PersonCenter" :selected="$route.path == '/PersonCenter'">
      <img slot="icon" src="../assets/logo.png">
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
   .footer{
     position: fixed;
   }
</style>
