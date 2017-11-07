<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;border-bottom: 1px solid #e1e1e1;position: fixed;z-index: 10;width: 100%;top: 0;">意见反馈</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <p style="padding-left: .3rem;line-height: 1rem;font-size: .28rem;color: #333;">反馈内容 <span style="font-size: .24rem;color: #ff526d;">*</span></p>
    <group>
      <x-textarea   @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :show-counter="false" style="height: 3.36rem; font-size: .28rem;color: #cecece;" placeholder="请填写您的建议" ></x-textarea>
    </group>
    <p style="padding-left: .3rem;line-height: 1rem;font-size: .28rem;color: #333;">手机号码 <span style="font-size: .24rem;color: #ff526d;">*</span></p>
    <group>
      <x-input  name="mobile" placeholder="请填写您的手机号" keyboard="number" is-type="china-mobile" style="font-size: .28rem;color: #cecece;"></x-input>
    </group>
    <div class="btn">
      <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">提交</x-button>
    </div>
  </div>
</template>
<script>
import {XHeader,Group,XTextarea,XInput,XButton} from 'vux'
  export default {
  name:'feedback',
    components:{
    XHeader,
      Group,
      XTextarea,
      XInput,
      XButton
    },
    mounted() {
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color = '#333'
    },
    methods: {
      onEvent (event) {
        console.log('on', event)
      }
    }
  }
</script>
<style scoped>
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
</style>
