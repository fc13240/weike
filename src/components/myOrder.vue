<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">我的订单</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div>
      <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff526d">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
    </div>
    <div class="main">
      <div class="page1" v-show="index==0">
        <figure style="text-align: center;padding: 1rem 0;">
          <img src="../assets/logo.png" alt="" style="width:1.52rem;height:1.4rem;">
          <figcaption style="font-size: .28rem;color: #666;">暂时没有相关订单记录~</figcaption>
        </figure>
        <div>
            <x-input title="订单号" placeholder="请输入订单号" keyboard="number" type="number" style="color: #333;font-size: .32rem;border-top: .16rem solid #f4f4f4;border-bottom: .16rem solid #f4f4f4;padding: .4rem .5rem"></x-input>
            <p style="border-bottom: 1px solid #f4f4f4;padding: .4rem 0 .2rem;margin: 0 .5rem;font-size: .24rem;color: #333;">如何找到返元宝订单号？</p>
          <img src="../assets/detail2.png" alt="" style="width: 100%;">
          <div style="height: 1.56rem;"></div>
          <div class="btn">
            <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">确认提交</x-button>
          </div>
        </div>
      </div>
      <div class="page2" v-show="index==1">
        <div class="order_list">
          <p class="orderNum"><span style="color: #999;">订单号: </span><span class="order_num">8089808080800808080</span><span style="color: #ff526d;float: right;">待返</span></p>
          <div class="order_main">
            <img src="../assets/1.jpg" alt="">
            <div class="order_main_des" style="width: calc(100% - 1.44rem);">
              <div style="padding: 0 .15rem;">
                <p style="font-size: .28rem;color: #333;">产品名称 <span style="float: right;">￥88.8</span></p>
                <p style="font-size: .24rem;color: #999;">产品标签 <del style="float: right;">￥108.5</del></p>
                <p style="margin-top: .3rem;"> <span class="btn1">返100元宝</span><span class="num">×1</span></p>
              </div>
             </div>
          </div>
          <p class="orderNum" style="color: #999;">总价: <span style="font-size: .24rem;color: #ff526d;">￥</span><span style="color: #ff526d;font-size: .32rem;">88.8</span><span class="btn2">去晒单</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import { Tab, TabItem, XInput,XButton} from 'vux'
  import Vue from 'vue'
  const list = () => ['添加订单', '全部订单', '待返订单','已返订单'];

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Vue,
      XHeader,
      XInput,
      XButton
    },
    data () {
      return {
        list2: list(),
        demo2: '全部',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'

      const add_b = document.getElementsByClassName('weui-cell__primary');
      add_b[0].style.borderBottom='1px solid #f4f4f4'
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
  .main{
    height: 100vh;
    background-color: white;
  }
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
  .order_list{
    border-bottom: .16rem solid #f4f4f4;
  }
  .orderNum{
    font-size: .24rem;padding: .3rem .36rem;background-color: white;
  }
  .order_num{
    color: #333;
  }
  .order_main{
    background-color: #f4f4f4;padding: .2rem;font-size: 0;
  }
  .order_main>img{
    width: 1.44rem;height: 1.44rem;vertical-align: middle;
  }
  .order_main_des{
    display: inline-block;vertical-align: middle;width: calc(100% - 1.44rem);
  }
  .btn1{
    color: #ff526d;font-size: .2rem;border: .01rem solid #ff526d;border-radius: .05rem;padding:0 .1rem;
  }
  .num{
    font-size: .28rem;color: #333;float: right;
  }
  .btn2{
    color: #ff526d;border: 1px solid #ff526d;border-radius: .5rem;
    float: right;
    padding: .05rem .3rem;
  }
</style>
