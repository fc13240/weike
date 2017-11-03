<template>
  <div>
    <x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">每日签到</x-header>
    <div style="height: .88rem;"></div>
    <div class="top" style="position: relative;">
      <img src="../assets/logo.png" alt="" style="width: .32rem;height: .32rem;position: absolute;right: .3rem;top:.2rem;">
      <div class="sign_b">
        <div class="sign_s">签到</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name:'Exchange',
    components: {
      XHeader
    },
    mounted(){
      const title = document.getElementsByClassName('vux-header-title');
      title[0].style.color='#333'
    },
  data () {
    return {
      count: 3
    }
  }
  }
</script>

<style  scoped>
.top{
  width: 100%;
  height: 5.28rem;
  background-image: url("../assets/sign_bd.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.sign_b{
  width: 1.76rem;
  height: 1.76rem;
  border-radius: 50%;
  background-color: #ff6d7e;
  padding: 0.13rem;
}
.sign_s{
  width: 1.76rem;height: 1.76rem;background-color: #fe425f;color: white;border-radius: 50%;text-align: center;vertical-align: middle;line-height: 1.76rem;
}
</style>
