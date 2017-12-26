<template>
  <div id="app">
    <!--<keep-alive>-->
      <router-view v-wechat-title="$route.meta.title"></router-view>
    <!--</keep-alive>-->
    <!--<keep-alive>-->
      <app-footer v-show="$route.meta.showFooter"></app-footer>
    <!--</keep-alive>-->
    <div class="toTop" @click="toTop()">
      <img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;">
      <span>顶部</span>
    </div>
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
    this.$nextTick(function() {
      // 返回顶部
      let back_btn = document.getElementsByClassName('toTop')[0];
      window.onscroll=function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 800) {
          back_btn.style.display = 'block';
        } else {
          back_btn.style.display = 'none';
        }
      }
    })
  },
  watch:{
//    '$route':'fetchPath'
  },
  methods:{
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      },
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #f4f4f4;
}
</style>
