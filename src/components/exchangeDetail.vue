<template>
  <div>
    <x-header :left-options="{backText: ''}"
              style="padding: 2px 0 ;background-color: #ff526d;position: fixed;z-index: 10;width: 100%;top: 0;">兑换详情
    </x-header>
    <div style="height: .88rem;"></div>
    <div class="main">
      <div class="goods">
          <img src="../assets/1.jpg" alt="" class="pic">
          <div style="display: inline-block;vertical-align: middle;">
            <p class="goods_title">10元现金红包</p>
            <p><span style="font-size: .36rem;color: #ff526d;">1000</span> <img src="../assets/logo.png" alt=""
                                                                                class="yuanBao">
              <del style="font-size: .24rem;color: #999;">￥10.0</del>
            </p>
          </div>
          <p class="has_num">剩余 <span style="color: #ff526d;">88</span> 件</p>
      </div>
        <x-number :value="1"  fillable :title="'请输入兑换数量'" style="padding: 10px 0;font-size: .24rem;color: #666666;border-bottom: 1px solid #e9e9e9;"></x-number>
      <p style="font-size: .24rem;color: #666;line-height: .8rem;">请输入您提现的支付宝账号</p>
      <div style="margin: .2rem 0 .5rem;">
        <img src="../assets/logo.png" alt="" style="width: 1.38rem;height: .48rem;border: 1px solid red;vertical-align: middle">
        <input type="text" style="vertical-align: middle;outline: none;width: 4.5rem;padding: .12rem .2rem; float: right;border: 1px solid #b1b1b1;border-radius: .05rem;">
      </div>
    </div>
    <div class="des">
      <h4>兑换说明：</h4>
      <p style="font-size: .24rem;color: #999;">成功提交后奖品将在1-3个工作日内发放到提交账户内。</p>
      <p style="font-size: .24rem;color: #999;">请耐心等待并在我的兑换内进行查看。</p>
      <h4>商品详情：</h4>
      <p class="contents">介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容</p>
      <div class="picture">
        <img src="../assets/1.jpg" alt="">
        <img src="../assets/1.jpg" alt="">
        <img src="../assets/1.jpg" alt="">
      </div>
    </div>
    <div style="height: 1.56rem;"></div>
    <div class="btn">
      <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">立刻兑换</x-button>
    </div>
  </div>
</template>
<script>
  import {XHeader, XNumber,XButton} from 'vux'

  export default {
    name: 'exchangeDetail',
    components: {
      XHeader,
      XNumber,
      XButton
    },
    data () {
      return {
        roundValue: 0
      }
    },
    methods: {
      change (val) {
        console.log('change', val)
      }
    },
    mounted(){
      const svg = document.getElementsByTagName('svg');
      const sub = document.getElementsByClassName('vux-number-selector-sub');
      const plus = document.getElementsByClassName('vux-number-selector-plus');
      const num =document.getElementsByClassName('vux-number-input');
      num[0].style.cssText="font-size:.24rem;color:#666;width:.64rem;outline:none";
      sub[0].style.cssText="background-color:#e1e1e1;width:.38rem;padding:4px 4px 2px;";
      plus[0].style.cssText="background-color:#e1e1e1;width:.38rem;padding:4px 4px 2px;";
      svg[0].style.fill='#878787';
      svg[1].style.fill='#878787';
    }
  }
</script>
<style scoped>
  .main {
    background-color: white;
    padding: .2rem .3rem;
  }

  .goods {
    margin: 0 auto;
    padding: .24rem .18rem 0;
    border-width: 0.06rem 0.01rem 0.02rem;
    border-style: solid;
    border-color: #ff526d #e9e9e9 #e9e9e9;
    border-radius: .08rem;
  }

  .pic {
    width: 1.28rem;
    height: 1.28rem;
    vertical-align: middle;
    margin-right: .1rem;
  }

  .goods_title {
    font-size: .32rem;
    color: #333;
  }

  .yuanBao {
    width: .26rem;
    height: .26rem;
  }

  .has_num {
    font-size: .24rem;
    border-top: 1px dashed #ff526d;
    margin-top: .15rem;
    color: #999;
    line-height: .5rem;
  }
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
  .des{
    margin-top: .2rem;
    background-color: white;
    padding: .2rem .3rem;
    font-size: 0;
  }
  .des h4{
    font-size: .28rem;
    color: #333333;
    padding: .2rem 0;
  }
  .des .contents{
    font-size: .28rem;
    color: #333;
  }
  .des .picture{
    width: 100%;
    margin-top: .2rem;
  }
  .des .picture img{
    display: block;
    width: 100%;
    height: 3.6rem;
  }
</style>
