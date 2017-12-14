<template>
  <div style="background-color: white;">
    <!--<x-header :left-options="{backText: ''}"-->
    <!--style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 100;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;height: .88rem;">-->
    <!--每日签到-->
    <!--</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="top">
      <!--<img src="../assets/sign_left.png" alt="">-->
      <div class="sign_s" @click="sign" v-text="is_sign=='1'?'已签到':'签到'">签到</div>
      <p style="font-size: .28rem;color: #ffe2e4;text-align: center;margin-top: .9rem;"><span v-text="is_sign=='1'?'明日':'今日'"></span>签到可领取 <span
        style="font-size: .28rem;color: #ffe979;font-weight: bold;" v-text="getNums">4</span> 元宝</p>
      <p style="color: #ffaeaf;font-size: .2rem;text-align: center;margin-top: .05rem;">连续签到有更多惊喜哦</p>
      <div class="step" style="width: 90%;margin: 0 auto;">
        <ul class="step_m">
          <li :class="list.sign=='1'?'active':''" v-for="list in signList">
            <!--<span v-show="list.sign==1">+{{list.sign_acer}}</span> -->
            <i class="litter_dot"></i>{{list.week}}</li>
        </ul>
        <div class="step_x"></div>
      </div>
    </div>
    <div style="text-align: center;margin: .6rem;">
      <p style="font-size: .32rem;color: #666;">您已连续签到 <span v-text="continue_days" style="color: #ff526d;font-weight: bold;">1</span> 天</p>
      <p style="font-size: .28rem;color: #666;">元宝: <span
        style="font-size: .28rem;font-weight:bold;color: #fe425f;" v-text="member_acer">88</span></p>
      <router-link to="/personCenter/shareList">
        <div
          style="line-height: .76rem; font-weight: 500; margin:.3rem auto 0;font-size: .32rem;color: #fe425f;border: 1px solid #fe425f;border-radius: .5rem;height: .76rem;width: 5.2rem;">
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
        <figure style="text-align: center;padding-top: 1.1rem;" v-show="!historyList.length">
          <img src="/static/images/empty_img.png" alt="" style="width:1.86rem;height:1.8rem;">
          <figcaption style="font-size: .28rem;color: #666;">暂时没有兑换记录~</figcaption>
        </figure>
        <div class="list" v-for="list in historyList">
          <img :src="list.product_image" alt="" :onerror="defaultImg">
          <div class="list_c">
            <p class="title" v-text="list.product_name">10元现金红包</p>
            <p class="date">日期：{{list.update_time}}</p>
          </div>
        </div>
      </div>
      <router-link style="background-color: #f4f4f4;font-size: .28rem;color: #999;text-align: center;" tag="p"
                   to="/home/Exchange" v-show="historyList.length">点击此处查看更多记录
      </router-link>
    </div>
    <div v-show="show" class="model">
      <div class="model_bd">
      </div>
      <div class="model_main">
         <div class="model_main_des">
           <p class="big">恭喜您，获得 <span class="big_num" v-text="getNums">4</span> 个元宝</p>
            <p class="small">连续签到有更多奖励哦</p>
         </div>
        <img src="../../static/images/cancel_img.png" alt="" @click="cancel">
      </div>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
    <div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>

  </div>
</template>
<script>
  import {XHeader, Group, Cell,Loading} from 'vux'

  export default {
    name: 'Exchange',
    components: {
      XHeader,
      Group,
      Cell,
      Loading
    },
    mounted() {
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color = '#333'
    },
    data() {
      return {
        historyList:[],
        count: 3,
        show: false,
        getNums:'',
        member_acer:'',
        showLoading:false,
        loadText:'加载中...',
        is_sign:'',
        continue_days:'',
        signList:'',
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
      }
    },
    methods: {
      //      今日签到奖励元宝数
      getNum:function(){
//        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/signpage_reward',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.getNums = res.data.data.acer
            this.is_sign = res.data.data.is_sign;
            this.member_acer = res.data.data.member_acer
//            console.log(res.data.data.is_sign)
          }else if(res.data.code=='400'){

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      今日签到详情
      getSignDes:function(){
//        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/signpage_week',
        }).then((res)=>{
          if(res.data.code=='200'){

            this.continue_days = res.data.data.continue_days
            this.signList = res.data.data.week;
          }else if(res.data.code=='400'){

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      签到页面----兑换记录
      getHistory:function(){
//        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/signpage_history',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.historyList = res.data.data.exchange_order
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      签到请求
      sign:function(){
        if(this.is_sign=='1'){
          return
        }else{

        }
        this.showLoading=true
        document.body.style.overflow = 'hidden';
        if(this.is_sign =='2'){
          this.$http({
            method:'POST',
            url:'/api/dosign',
          }).then((res)=>{
            if(res.data.code=='200'){
              this.showLoading=false
              document.body.style.overflow = 'hidden';
              this.show = true;
              this.is_sign='1'
              this.getNum()
              this.getSignDes()
            }else if(res.data.code=='400'){
              this.showLoading=false
            }
          },(err)=>{
            console.log(err)
          })
        }else{

        }
      },
      cancel(){
        document.body.style.overflow = 'scroll';
        this.show=false
        this.$router.replace({name: 'sign'})
      },
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      }
    },
    created:function(){
      this.showLoading=true
      this.getNum()
      this.getHistory();
      this.getSignDes()
    },
    mounted(){
      // 返回顶部
      let back_btn = document.getElementsByClassName('toTop')[0];
      window.onscroll = function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 800) {
          back_btn.style.display = 'block';
        } else {
          back_btn.style.display = 'none';
        }
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
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .model_main {
    z-index: 200;
    position: fixed;
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
    text-align: center;
    width: 100%;
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
