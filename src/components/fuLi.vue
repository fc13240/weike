<template>
  <!--<div> {{$route.params.time}}</div>-->
  <div>
    <app-header title="粉丝福利"></app-header>
    <div class="banner">banner</div>
    <div>
      <tab :line-width=4 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff526d">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <!--<swiper v-model="index" :show-dots="false">-->
      <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
      <!--<div class="tab-swiper vux-center">{{item}}</div>-->
      <!--</swiper-item>-->
      <!--</swiper>-->
    </div>
    <div class="main_goods">
      <ul class="goods">
        <li class="goods_list">
          <img src="../assets/logo.png" alt="">
          <div class="content">
            <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <div class="des_b">
              <span class="price">￥88.8</span>
              <span class="num">518件已售</span>
            </div>
          </div>
        </li>
        <li class="goods_list">
          <img src="../assets/logo.png" alt="">
          <div class="content">
            <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <div class="des_b">
              <span class="price">￥88.8</span>
              <span class="num">518件已售</span>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import Vue from 'vue'
  import AppHeader from './Header'
  const list = () => ['价格优先', '销量优先', '元宝优先','时间优先']

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Vue,
      AppHeader
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
  .banner {
    width: 100%;
    height: 1.8rem;
    background-color: red;
    margin-top: .88rem;
  }

  ul {
    font-size: 0;
    overflow: hidden;
  }
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
  .main{
    margin-bottom: 1.06rem;
  }
  .goods{
    overflow: hidden;
    margin-top: .1rem;
  }
  .goods_list{
    background-color: white;
    list-style: none;
    float: left;
    width: 50%;
    box-sizing: border-box;
    border-bottom:.1rem solid  #f4f4f4;
  }
  .goods_list img{
    width: 100%;
    height: 3.6rem;
  }
  .goods_list:nth-of-type(odd){
    border-right:.05rem solid  #f4f4f4;
  }
  .goods_list:nth-of-type(even){
    border-left:.05rem solid  #f4f4f4;
  }
  .content{
    padding: .15rem;
  }
  .des{
    font-size: .28rem;
    color: #333;
    line-height: .4rem;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .price{
    font-size: .32rem;
    color: #ff7171;
  }
  .num{
    font-size: .24rem;
    color: #999;
    float: right;
    margin-top: .1rem;
    margin-right: .15rem;
  }
</style>
