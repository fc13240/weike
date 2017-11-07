<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">用户信息</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="userInfo">
      <p>头像 <img src="../assets/1.jpg" alt="" class="photo"></p>
      <p>昵称 <span style="position: absolute;right: .36rem; color: #999;">昵称</span>
      <p>性别 <span style="position: absolute;right: .36rem;color: #999;">女</span></p>
  </div>
    <div class="btn">
      <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">同步微信资料</x-button>
    </div>
  </div>
</template>
<script>
import {XHeader,XButton} from 'vux'
  export default {
  name:'userInfo',
    components:{
    XHeader,
      XButton
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
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
