<template>
  <div style="background-color: white;">
    <!--<x-header :left-options="{backText: ''}"-->
    <!--style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 100;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;height: .88rem;">-->
    <!--每日签到-->
    <!--</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="top">
      <!--<img src="../assets/sign_left.png" alt="">-->
      <div class="sign_s" @click="sign">签到</div>
      <p style="font-size: .28rem;color: #ffe2e4;text-align: center;margin-top: .9rem;">今日签到可领取 <span
        style="font-size: .28rem;color: #ffe979;font-weight: bold;">4</span> 元宝</p>
      <p style="color: #ffaeaf;font-size: .2rem;text-align: center;margin-top: .05rem;">连续签到有更多惊喜哦</p>
      <div class="step" style="width: 90%;margin: 0 auto;">
        <ul class="step_m">
          <li class="active">+2 <i class="litter_dot"></i>周日</li>
          <li class="active">+2 <i class="litter_dot"></i>周一</li>
          <li>+2 <i class="litter_dot"></i>周二</li>
          <li>+2 <i class="litter_dot"></i>周三</li>
          <li>+2 <i class="litter_dot"></i>周四</li>
          <li>+2 <i class="litter_dot"></i>周五</li>
          <li>+2 <i class="litter_dot"></i>周六</li>
        </ul>
        <div class="step_x"></div>
      </div>
    </div>
    <div style="text-align: center;margin: .6rem;">
      <p style="font-size: .32rem;color: #666;">您已连续签到<span>1</span>天</p>
      <p style="font-size: .28rem;color: #666;">元宝: <span
        style="font-size: .28rem;font-weight:bold;color: #fe425f;">88</span></p>
      <router-link to="/personCenter/shareList">
        <div
          style="line-height: .76rem; font-weight: bold; margin:.3rem auto 0;font-size: .32rem;color: #fe425f;border: 1px solid #fe425f;border-radius: .5rem;height: .76rem;width: 5.2rem;">
          晒单赚元宝
        </div>
      </router-link>
    </div>
    <div style="border-top: .2rem solid #f4f4f4;">
      <group style="position: relative;">
        <cell title="兑换记录" value="去元宝商城" is-link link="/home/yuanBaoShop"></cell>
        <i
          style="width: .06rem;background-color: #ff526d;height: .28rem;display: inline-block;position: absolute;top: .26rem;left: 0;"></i>
      </group>
      <div class="list_m">
        <div class="list">
          <img src="../assets/logo.png" alt="">
          <div class="list_c">
            <p class="title">10元现金红包</p>
            <p class="date">日期：2017.10.28</p>
          </div>
        </div>
        <div class="list">
          <img src="../assets/logo.png" alt="">
          <div class="list_c">
            <p class="title">10元现金红包</p>
            <p class="date">日期：2017.10.28</p>
          </div>
        </div>
        <div class="list">
          <img src="../assets/logo.png" alt="">
          <div class="list_c">
            <p class="title">10元现金红包</p>
            <p class="date">日期：2017.10.28</p>
          </div>
        </div>
        <div class="list">
          <img src="../assets/logo.png" alt="">
          <div class="list_c">
            <p class="title">10元现金红包</p>
            <p class="date">日期：2017.10.28</p>
          </div>
        </div>
      </div>
      <router-link style="background-color: #f4f4f4;font-size: .28rem;color: #999;text-align: center;" tag="p"
                   to="/home/Exchange">点击此处查看更多记录
      </router-link>
    </div>
    <div v-show="show" class="model">
      <div class="model_bd">
      </div>
      <div class="model_main">
         <div class="model_main_des">
           <p class="big">恭喜您，获得 <span class="big_num">4</span> 个元宝</p>
            <p class="small">连续签到有更多奖励哦</p>
         </div>
        <img src="../../static/images/cancel_img.png" alt="" @click="cancel">
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, Cell} from 'vux'

  export default {
    name: 'Exchange',
    components: {
      XHeader,
      Group,
      Cell
    },
    mounted() {
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color = '#333'
    },
    data() {
      return {
        count: 3,
        show: false
      }
    },
    methods: {
      sign() {
        document.body.style.overflow = 'hidden'
        this.show = true
      },
      cancel(){
        document.body.style.overflow = 'scroll'
        this.show=false
      }
    }
  }
</script>

<style scoped>
  ul li {
    list-style: none;
    float: left;
  }

  .top {
    width: 100%;
    height: 5.28rem;
    background-image: url("../assets/sign_bd.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
  }

  /*.top > img {*/
    /*width: .32rem;*/
    /*height: .32rem;*/
    /*position: absolute;*/
    /*right: .3rem;*/
    /*top: .2rem;*/
  /*}*/

  .sign_s {
    color: white;
    text-align: center;
    margin-top: 1.14rem;
  }

  .step {
    position: relative;
  }

  .step_m {
    display: flex;
    justify-content: space-between;
    z-index: 10;
  }

  .step_m li {
    color: #ffaeaf;
    text-align: center;
    font-size: .24rem;
    margin-top: .3rem;
  }

  .litter_dot {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #ffaeaf;
    display: block;
    margin: .05rem auto;
    position: relative;
    z-index: 10;
  }

  .step_x {
    width: 93%;
    height: .02rem;
    background-color: #ffaeaf;
    position: absolute;
    bottom: .51rem;
    left: .3rem;
    z-index: 1;
  }

  .active {
    color: #ffe979 !important;
  }

  .active i {
    background-color: #ffe979;
  }

  .list {
    padding: .3rem;
    border-bottom: .02rem solid #f4f4f4;
  }

  .list img {
    width: 1.9rem;
    height: 1.1rem;
    border: 1px solid red;
    float: left;
  }

  .title {
    font-size: .24rem;
    color: #333;
    line-height: .6rem;
  }

  .date {
    font-size: .2rem;
    color: #999;
    line-height: .4rem;
  }

  .list_c {
    height: 1.1rem;
    display: inline-block;
    margin-left: .3rem;
  }

  /*签到弹出层*/
  .model_bd {
    width: 100%;
    height: 100%;
    opacity: .5;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: 100;
  }

  .model_main {
    z-index: 200;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('../../static/images/model_bd.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 80%;
    height: 5.7rem;
    margin: 1rem calc((100% - 80%) / 2);
  }
  .model_main img{
    width: .5rem;
    height: .5rem;
    position: absolute;
    top: .7rem;
    right: .6rem;
  }
  .model_main_des{
    position: absolute;
    bottom: .7rem;
    left: 1.4rem;
    text-align: center;
  }
  .big{
    font-size: .32rem;
    color: #666;
    margin-bottom: .1rem;
  }
  .big_num{
    color: #ff526d;
  }
  .small{
    font-size: .24rem;
    color: #999;
  }
</style>
