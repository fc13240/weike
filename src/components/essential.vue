<template>
  <!--<div> {{$route.params.time}}</div>-->
  <div>
    <x-header :left-options="{backText: ''}" style="background-color: white;">应季必备</x-header>
    <nav style="width: 7.5rem;height: 2.6rem;background-color: red;"></nav>
    <p style="text-align: center;font-size: .28rem;color: #333;background-color: white;padding: .2rem 0;"><img src="../assets/logo.png" alt="" style="vertical-align: middle;width: .4rem;height: .4rem;margin-right: .1rem;">每天早上10点晚9点上新</p>
    <div class="main_goods">
      <ul class="goods">
        <li class="goods_list">
          <img src="../assets/logo.png" alt="">
          <div class="content">
            <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <p style="position: relative;margin-top: .1rem;"><span class="left">送50元宝</span><span class="right">剩余2000张劵</span></p>
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">劵后 ￥</span>88.8</span>
              <span class="num">518件已售</span>
            </p>
          </div>
        </li>
        <li class="goods_list">
          <img src="../assets/logo.png" alt="">
          <div class="content">
            <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <p style="position: relative;margin-top: .1rem;"><span class="left">送50元宝</span><span class="right">剩余2000张劵</span></p>
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">劵后 ￥</span>88.8</span>
              <span class="num">518件已售</span>
            </p>
          </div>
        </li>
        <li class="goods_list">
          <img src="../assets/logo.png" alt="">
          <div class="content">
            <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <p style="position: relative;margin-top: .1rem;"><span class="left">送50元宝</span><span class="right">剩余2000张劵</span></p>
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">劵后 ￥</span>88.8</span>
              <span class="num">518件已售</span>
            </p>
          </div>
        </li>
        <li class="goods_list">
          <img src="../assets/logo.png" alt="">
          <div class="content">
            <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <p style="position: relative;margin-top: .1rem;"><span class="left">送50元宝</span><span class="right">剩余2000张劵</span></p>
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">劵后 ￥</span>88.8</span>
              <span class="num">518件已售</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {Tab,TabItem,XHeader} from 'vux'
  import Vue from 'vue'
  export default {
    name: 'essential',
    components: {
      Tab,
      TabItem,
      Vue,
      XHeader
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted(){
      const title = document.getElementsByClassName('vux-header-title');
      title[0].style.color='#333'
    }
  }
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  ul {
    font-size: 0;
    overflow: hidden;
  }

  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }

  .main {
    margin-bottom: 1.06rem;
  }

  .goods {
    overflow: hidden;
    margin-top: .1rem;
  }

  .goods_list {
    background-color: white;
    list-style: none;
    float: left;
    width: 50%;
    box-sizing: border-box;
    border-bottom: .1rem solid #f4f4f4;
  }

  .goods_list img {
    width: 100%;
    height: 3.6rem;
  }

  .goods_list:nth-of-type(odd) {
    border-right: .05rem solid #f4f4f4;
  }

  .goods_list:nth-of-type(even) {
    border-left: .05rem solid #f4f4f4;
  }

  .content {
    padding: .15rem;
  }

  .des {
    font-size: .28rem;
    color: #333;
    line-height: .4rem;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .left {
    font-size: .20rem;
    color: #ff526d;
    border: 1px solid #ff526d;
    padding: 0 .1rem;
    border-radius: .05rem;
  }

  .price {
    font-size: .32rem;
    color: #ff7171;
  }

  .num {
    font-size: .20rem;
    color: #999;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .right {
    padding: 0 .1rem;
    margin-left: .1rem;
    font-size: .20rem;
    color: #ff526d;
    border: 1px solid #ff526d;
    background-color: #ffeff2;
  }
</style>
