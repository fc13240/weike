<template>
  <div id="app">
    <!--<keep-alive>-->
      <router-view v-wechat-title="$route.meta.title"></router-view>
    <!--</keep-alive>-->
    <!--<keep-alive>-->
      <app-footer v-show="$route.meta.showFooter"></app-footer>
    <!--</keep-alive>-->
  </div>
</template>
<script>
  import AppFooter from '@/components/footer'
export default {
  name: 'app',
  components:{
    AppFooter
  },
  data:function(){
    return{
//      showFooter:true
    }
  },
  mounted:function(){

  },
  watch:{
//    '$route':'fetchPath'
  },
  methods:{

  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #f4f4f4;
}
</style>
