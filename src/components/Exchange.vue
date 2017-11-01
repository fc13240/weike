<template>
  <div>
    <x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: #ff526d;">兑换记录</x-header>
    <div>
      <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width=".8rem" bar-active-color="#ff526d">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <!--<swiper v-model="index" :show-dots="false">-->
      <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
      <!--<div class="tab-swiper vux-center">{{item}}</div>-->
      <!--</swiper-item>-->
      <!--</swiper>-->
    </div>
    <div class="main">
      <div class="page1">
        <figure style="text-align: center;padding-top: 1.1rem;">
          <img src="../assets/logo.png" alt="" style="width:1.86rem;height:1.8rem;">
          <figcaption style="font-size: .28rem;color: #666;">暂时没有兑换记录~</figcaption>
        </figure>
        <div class="list_m">
          <p class="tip">累计为您成功免单14324元</p>
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
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import Vue from 'vue'
  const list = () => ['全部', '虚拟类', '实物类']

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Vue,
      XHeader
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
  .tip{
    background-color: #f4f4f4;
    text-align: center;
    font-size: .24rem;
    color: #666;
    line-height: .5rem;
  }
  .list{
    padding: .3rem;
    border-bottom: .02rem solid #f4f4f4;
  }
  .list img{
    width: 1.9rem;
    height: 1.1rem;
    border: 1px solid red;
    float: left;
  }
  .title{
    font-size: .24rem;
    color: #333;
    line-height: .6rem;
  }
  .date{
    font-size: .2rem;
    color: #999;
    line-height: .4rem;
  }
  .list_c{
    height: 1.1rem;
    display: inline-block;
    margin-left: .3rem;
  }
</style>
