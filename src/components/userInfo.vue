<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">用户信息</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="userInfo">
      <p>头像 <img :src="info.head_image" alt="" class="photo" :onerror="defaultImg"></p>
      <p>昵称 <span style="position: absolute;right: .36rem; color: #999;" v-text="info.user_name">昵称</span></p>
      <p>性别 <span style="position: absolute;right: .36rem;color: #999;" v-text="info.sex==1?'男':'女'">女</span></p>
  </div>
    <!--<div class="btn">-->
      <!--<x-button @click.native="userInfo()" action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;">同步微信资料</x-button>-->
    <!--</div>-->
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
import {XHeader,XButton,Loading} from 'vux'
  export default {
  name:'userInfo',
    components:{
    XHeader,
      XButton,
      Loading
    },
    data(){
    return{
          info:{},
      defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
      showLoading:false,
      loadText:'加载中...',
    }
    },
    methods:{
      //      用户信息
      userInfo:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/userinfo',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.info = res.data.data
            this.$router.replace({name: 'userInfo'})
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
    },
    created:function(){
         this.userInfo()
    }
  }
</script>
<style scoped>
.userInfo{
  background-color: white;color: #333;font-size: .28rem;
}
  .userInfo p{
    height: 1.04rem;line-height:1.04rem;position: relative;
    border-bottom: 1px solid #f4f4f4;
    padding: 0 .36rem;
  }
  .photo{
    position:absolute;right: .36rem;top:.15rem; width: .76rem;height: .76rem;border-radius: 50%;
  }
.btn{
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #e9e9e9;
}
</style>
