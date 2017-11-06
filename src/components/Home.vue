<template>
  <div>
    <app-header title="微客"></app-header>
    <div style="height: .88rem;"></div>
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller" style="position: relative;">
      <swiper auto :list="demo03_list" style="width:100%;" height="2.6rem" dots-class="custom-bottom"
              dots-position="center" :show-desc-mask="false"></swiper>
      <div>
        <ul class="nav-small">
          <router-link tag="li" to="/home/hot">
            <img src="../assets/logo.png">
            <span>热门</span>
          </router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>家居</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>家纺</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>电器</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>数码</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>美妆</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>服饰</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>汽车</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>母婴</span></router-link>
          <router-link tag="li" to="/home/classify"><img src="../assets/logo.png">
            <span>美食</span></router-link>
        </ul>
      </div>
      <div class="main">
        <div class="nav-bigger">
          <div class="yuanBaoShop" @click="toYuanBaoShop">

          </div>
          <div class="zhiNan">

          </div>
          <div class="m_r">
            <router-link to="/home/xianBao">
              <!--@click="toXianBao"-->
              <div class="m_r_t"></div>
            </router-link>

            <router-link to="/home/fuLi">
              <div class="m_r_b"></div>
            </router-link>
          </div>
        </div>
        <div class="main_goods">
          <ul class="goods">
            <li class="goods_list" v-for="goods in goodsList">
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
    </scroller>
  </div>
</template>
<script>
  import {Swiper} from 'vux'
  import Vue from 'vue'
  import AppHeader from './Header'
  import VueScroller from 'vue-scroller'

  Vue.use(VueScroller)
  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]
  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))
  export default {
    name: 'Home',
    components: {
      Swiper,
      Vue,
      AppHeader
    },
    ready() {

    },
    data() {
      return {
        demo03_list: demoList,
        noData: '',
        goodsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      }
    },
    methods: {
      toYuanBaoShop() {
        this.$router.push({
          path: '/home/yuanBaoShop'
        })
      },
      infinite(done) {
        if (this.noData) {
          console.log(this.noData)
          if (this.noData) {
            setTimeout(() => {
              this.$refs.myscroller.finishInfinite(2);
            })
          }
          return;
        }
        let self = this;//this指向问题
        let start = this.goodsList.length;

        setTimeout(() => {
          for (let i = start + 1; i < start + 10; i++) {
            self.goodsList.push(i)
          }
          if (start >= 18) {
            self.noData = "没有更多数据"
          }
          self.$refs.myscroller.resize();
          done()
        }, 1500)
      },

//done()表示这次异步加载数据完成，加载下一次
//因为这个是同步的，加了setTimeout就是异步加载数据；
//因为涉及到this指向问题，所以将他放在一个变量里。
      refresh(done) {
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
          }
          self.top = self.top - 10;
          done();
        }, 1500)
      }
    },
    mounted: function () {
      this.$nextTick(function () {

      })
    }
  }
</script>
<style scoped>
  .nav-small {
    overflow: hidden;
    padding: .38rem .2rem .1rem .2rem;
    background-color: white;
  }

  .nav-small li {
    margin-bottom: .25rem;
    width: 20%;
    float: left;
    list-style: none;
    text-align: center;
  }

  .nav-small li img {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    margin: 0 auto;
  }

  .nav-small li span {
    font-size: .24rem;
    color: #333333;
    display: block;
  }

  .nav-bigger {
    width: 100%;
    height: 1.88rem;
    background-color: white;
    font-size: 0;
    margin: .2rem 0;
  }

  .yuanBaoShop {
    width: 28%;
    height: 100%;
    display: inline-block;
    border-right: .02rem solid #f4f4f4;
    box-sizing: border-box;
    background-color: yellow;
  }

  .zhiNan {
    width: 28%;
    height: 100%;
    display: inline-block;
    border-right: .02rem solid #f4f4f4;
    box-sizing: border-box;
    background-color: red;
  }

  .m_r {
    width: 44%;
    height: 100%;
    display: inline-block;
    background-color: green;
  }

  .m_r_t, .m_r_b {
    height: 50%;
  }

  .m_r_t {
    border-bottom: .02rem solid #f4f4f4;
    box-sizing: border-box;
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
<style>
  .vux-slider > .vux-indicator > a > .vux-icon-dot.active {
    background-color: #ff7171 !important;
  }
</style>
