<template>
  <div>
    <x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;border-bottom: 1px solid #e1e1e1;position: fixed;z-index: 10;width: 100%;top: 0;">我的足迹</x-header>
    <div style="height: .88rem;"></div>
    <div class="goods_list">
      <ul class="goods">
        <p style="line-height: .6rem;font-size: .2rem;color: #999;background-color: #f4f4f4;padding-left: .3rem;">2017/11/01</p>
        <li>
          <img src="../assets/logo.png" alt="" class="pic">
          <div class="content">
            <p class="title">产品标题产品标题</p>
            <p class="des">产品补充介绍</p>
            <div style="margin-top: .35rem;position: relative;">
              <span style="font-size: .24rem;color: #999;">已售 <span style="color: #ff526d;">411</span>件</span>
              <div>
                <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                <del class="old_num">￥124.00</del>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <p style="font-size: .24rem;color: #999;text-align: center;padding: .5rem 0;">已经到底了，快去挑几件好货吧~</p>

    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import Vue from 'vue'

  export default {
    name: 'myTracks',
    components: {
      Vue,
      XHeader
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {
      const title = document.getElementsByClassName('vux-header-title');
      title[0].style.color = '#333'
    }
  }
</script>
<style scoped>
  ul {
    font-size: 0;
    overflow: hidden;
  }

  .goods {
    background-color: white;
  }

  .goods li {
    overflow: hidden;
    padding: .22rem .2rem;
    border-bottom: 1px solid #f4f4f4;
  }

  .pic {
    width: 2.4rem;
    height: 2.24rem;
    float: left;
  }

  .content {
    width: calc(100% - 2.4rem - .44rem);
    padding: 0 .22rem;
    display: inline-block;
  }

  .title {
    font-size: .32rem;
    color: #333333;
  }

  .des {
    font-size: .24rem;
    color: #ff526d;
  }

  .new_num {
    font-size: .4rem;
    color: #ff526d;
  }

  .old_num {
    font-size: .2rem;
    color: #999999;
    margin-left: .1rem;
  }
</style>
