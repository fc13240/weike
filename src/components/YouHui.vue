<template>
  <div>
    <app-header title="超实惠"></app-header>
    <div style="height: .88rem;"></div>
    <router-link to="/YouHui/subjects">
      <nav>
        <img src="../assets/logo.png" alt="" class="nav_btn">
        <img src="../assets/sanjiao.png" alt="" style="border: 1px solid red" class="sanjiao">
      </nav>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav1">
        <div class="box1-item" v-for="i in item1" id="box1-item" style="width: 2.49rem;">
          <img src="../assets/logo.png" alt="">
          <span class="dess">
            <p class="des_name">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥8.8</span><del class="old_price">￥48</del></p>
          </span>
        </div>
      </div>
    </scroller>
    <router-link to="/YouHui/subjects">
      <nav>
        <img src="../assets/logo.png" alt="" class="nav_btn">
        <img src="../assets/sanjiao.png" alt="" style="border: 1px solid red" class="sanjiao">
      </nav>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav2">
        <div class="box1-item" v-for="i in item2" id="box2-item" style="width: 2.49rem;">
          <img src="../assets/logo.png" alt="">
          <span class="dess">
            <p class="des_name">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥8.8</span><del class="old_price">￥48</del></p>
          </span>
        </div>
      </div>
    </scroller>
    <router-link to="/YouHui/discount">
      <nav>
        <img src="../assets/logo.png" alt="" class="nav_btn">
        <img src="../assets/sanjiao.png" alt="" style="border: 1px solid red" class="sanjiao">
      </nav>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav3">
        <div class="box1-item" v-for="i in item2" id="box3-item" style="width: 2.49rem;">
          <img src="../assets/logo.png" alt="">
          <span class="dess">
            <p class="des_name">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥8.8</span><del class="old_price">￥48</del></p>
          </span>
        </div>
      </div>
    </scroller>
    <router-link to="/YouHui/essential">
      <nav>
        <img src="../assets/logo.png" alt="" class="nav_btn">
      </nav>
    </router-link>
    <div class="main">
      <div class="main_goods">
        <ul class="goods">
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
  import {Scroller} from 'vux'
  import Vue from 'vue'
  import AppHeader from './Header'

  export default {
    name: 'ChaoShiHui',
    components: {
      Vue,
      AppHeader,
      Scroller

    },
    data() {
      return {
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20,
        item1: [0, 1, 3, 4, 4, 4, 4, 4],
        item2: [0, 1, 3, 4, 4, 4, 4, 4],
        item3: [0, 1, 3, 4, 4, 4, 4, 4]
      }
    },
    mounted() {
      this.init()
    },
    methods: {
//      动态的更改scroller的宽度
      init() {
        const self = this;
        const w = document.getElementById('box1-item').offsetWidth;
        console.log(w)
        const n1 = self.item1.length;
        const n2 = self.item2.length;
        const n3 = self.item3.length;
//        屏幕大小变化时会报错
        self.$refs.nav1.style.width = (w * n1) + 'px';
        self.$refs.nav2.style.width = (w * n2) + 'px';
        self.$refs.nav3.style.width = (w * n3) + 'px';
      }
    }
  }
</script>
<style scoped>
  nav {
    width: 100%;
    height: 2.96rem;
    position: relative;
    background-image: url(../assets/logo.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .nav_btn {
    position: absolute;
    border: 1px solid red;
    width: 2.28rem;
    height: .88rem;
    border-radius: .44rem;
    top: .2rem;
    left: .2rem;
  }

  .sanjiao {
    width: .30rem;
    height: .22rem;
    bottom: 0;
    left: calc(50% - .15rem);
    position: absolute;
  }

  .box1 {
    height: 3.12rem;
    min-width: 7.50rem;
    position: relative;
    background-color: white;
  }

  .box1-item {
    height: 3.12rem;
    border-left: .04rem solid white;
    box-sizing: border-box;
    float: left;
  }

  .box1-item img {
    width: 2.42rem;
    height: 1.5rem;
  }

  .box1-item:first-child {
    border-left: 0 solid white;
  }

  .dess {
    text-align: center;
    font-size: .24rem;
  }

  .des_name {
    color: #333;
    padding: 0 .1rem;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .des_price {
    padding: 0 .1rem;
  }

  .new_price {
    color: #ff526d;
    font-weight: bold;
    margin-right: .1rem;
  }

  .old_price {
    color: #999;
    font-size: .2rem;
  }

  .main {
    margin-bottom: 1.06rem;
  }

  .goods {
    overflow: hidden;
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
    height: .8rem;
    font-size: .28rem;
    color: #333;
    line-height: .4rem;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price {
    font-size: .32rem;
    color: #ff7171;
  }

  .num {
    font-size: .24rem;
    color: #999;
    float: right;
    margin-top: .1rem;
    margin-right: .15rem;
  }
</style>
