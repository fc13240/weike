<template>
  <div>
    <app-header title="个人中心"></app-header>
    <div style="height: .88rem;"></div>
    <router-link tag="div" to="/PersonCenter/notice" style="position: absolute;right: .3rem;top:.3rem;z-index: 10000;">
      <img src="../assets/message.png" alt="" style="width: .36rem;height: .28rem;">
      <span style="width: .16rem;height: .16rem;border-radius: 50%;background-color:#ffde0d;opacity: .9;display: block;position: relative;right: -.27rem;top: -.45rem; "></span>
    </router-link>
    <router-link class="top" to="/personCenter/userInfo" tag="div">
      <img src="../assets/1.jpg" alt="" class="photo">
      <div class="info">
        <p class="name">昵称</p>
        <p class="num"><img src="../assets/logo.png" alt="" class="yuanBao">元宝 88</p>
      </div>
      <img src="../assets/gt.png" alt=""
           style="width: .16rem;height: .28rem;position: absolute;right: .34rem; top: .9rem;">
    </router-link>
    <group>
      <cell title="我的订单" value="查看全部" is-link link="/PersonCenter/myOrder"></cell>
    </group>
    <div>
      <ul class="nav-small">
        <router-link to="/PersonCenter/myOrder" tag="li">
          <img src="../assets/logo.png">
          <span>添加</span></router-link>
        <router-link to="/PersonCenter/myOrder" tag="li"><img src="../assets/logo.png">
          <span>全部</span></router-link>
        <router-link to="/PersonCenter/myOrder" tag="li"><img src="../assets/logo.png">
          <span>待返</span></router-link>
        <router-link to="/PersonCenter/myOrder" tag="li"><img src="../assets/logo.png">
          <span>已返</span></router-link>
      </ul>
      <ul class="nav-big">
        <router-link tag="li" to="/PersonCenter/myOrder"><img src="../assets/logo.png">
          <span>收货管理</span></router-link>
        <router-link tag="li" to="/PersonCenter/myOrder"><img src="../assets/logo.png">
          <span>我的足迹</span></router-link>
        <router-link tag="li" to="/PersonCenter/myOrder"><img src="../assets/logo.png">
          <span>我的兑换</span></router-link>
        <router-link tag="li" to="/PersonCenter/sign"><img src="../assets/logo.png">
          <span>每日签到</span></router-link>
      </ul>
    </div>
    <panel :list="list" :type="type"></panel>
  </div>

</template>
<script>
  import Vue from 'vue'
  import AppHeader from './Header'
  import {Group, Cell, CellBox} from 'vux'
  import {Panel, Radio} from 'vux'

  export default {
    name: 'PersonCenter',
    components: {
      Vue,
      AppHeader,
      Group,
      Cell,
      CellBox,
      Panel,
      Radio
    },
    methods: {},
    data() {
      return {
        type: '3',
        list: [
          {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '晒单赚元宝<span style="float: right;font-size: .24rem;color: #999;margin-top: .03rem;">评价晒单赚元宝</span>',
            url: '/personCenter/shareList'
          },
          {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '我要分羹<span style="float: right;font-size: .24rem;color: #999;margin-top: .03rem;">功能升级中</span>',
            url: '/component/cell'
          },
          {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '帮助中心',
            url: '/component/cell'
          },
          {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '意见反馈',
            url: '/personCenter/feedback'
          },
          {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '官方客服',
            url: '/component/cell'
          }
        ]
      }
    }
  }
</script>
<style scoped="">
  .top {
    background-color: #ff526d;
    padding: .44rem .34rem;
    position: relative;
  }

  .photo {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  .info {
    color: white;
    display: inline-block;
    vertical-align: middle;
    line-height: .6rem;
    margin-left: .3rem;
  }

  .name {
    font-size: .36rem;
  }

  .num {
    font-size: .2rem;
  }

  .yuanBao {
    width: .3rem;
    height: .24rem;
    margin-right: .1rem;
    vertical-align: middle
  }

  .nav-small, .nav-big {
    overflow: hidden;
    padding: .38rem .2rem .1rem .2rem;
    background-color: white;
    margin-bottom: .16rem;
  }

  .nav-small li, .nav-big li {
    margin-bottom: .25rem;
    width: 25%;
    float: left;
    list-style: none;
    text-align: center;
  }

  .nav-small li img {
    width: .4rem;
    height: .36rem;
    margin: 0 auto;
  }

  .nav-big li img {
    width: .48rem;
    height: .48rem;
    margin: 0 auto;
  }

  .nav-small li span, .nav-big li span {
    font-size: .24rem;
    color: #333333;
    display: block;
  }
</style>
<style>
  .vux-label {
    font-size: .28rem;
    color: #333;
  }

  .weui-cell__ft {
    font-size: .24rem;
    color: #999;
  }

  .weui-cell_access .weui-cell__ft:after {
    border-color: #999;
  }

  .weui-cells {
    margin-top: 0 !important;
  }
  .weui-cell__bd p{
    font-size: .28rem;
    color: #333;
    margin: 0 5px;
  }
</style>




