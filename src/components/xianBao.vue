<template>
  <div>
    <x-header :left-options="{backText: ''}" style="background-color: white;">超值线报</x-header>
    <swiper auto :list="demo03_list" style="width:100%;margin:0 auto;" height="1.8rem" dots-class="custom-bottom" dots-position="center" :show-desc-mask="false"></swiper>
    <div class="main">
      <ul class="timeTab">
        <!--<router-link tag="li" to="/home/xianBao/list1" :class="{active:isActive}">09:00抢购中</router-link>-->
        <!--<router-link tag="li" to="/home/xianBao/list2">13:00开抢</router-link>-->
        <!--<router-link tag="li" to="/home/xianBao/list3">19:00开抢</router-link>-->
        <!--<router-link tag="li" to="/home/xianBao/list4">21:00开抢</router-link>-->
        <!--<router-link tag="li" to="/home/xianBao/list1" :class="[item.active ? activeClass:'']" v-for="item in items" v-on:click="navClickEvent(item,index)">{{item.text}}</router-link>-->
        <li :class="[item.active ? activeClass:'']" v-for="(item,index) in items"
            v-on:click="navClickEvent(items,index)">{{item.text+item.texts}}
        </li>
      </ul>
      <!--<router-view></router-view>-->
      <div class="goods_list">
        <ul class="goods">
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">200</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: 0;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <img src="../assets/logo.png" alt="" style="width: 1.16rem;height: .46rem;">
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">20</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: 0;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <img src="../assets/logo.png" alt="" style="width: 1.16rem;height: .46rem;">
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">20</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: 0;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <img src="../assets/logo.png" alt="" style="width: 1.16rem;height: .46rem;">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {Swiper} from 'vux'
  import Vue from 'vue'
  import {XHeader} from 'vux'
  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ];
  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }));
  export default {
    name: 'xianBao',
    components: {
      Swiper,
      Vue,
      XHeader
    },
    data: function () {
      return {
        demo03_list: demoList,
        activeClass: 'active',
        items: [
          {
            text: '09:00',
            texts:'抢购中',
            active: true
          },
          {
            text: '13:00',
            texts:'开抢',
            active: false
          },
          {
            text: '19:00',
            texts:'开抢',
            active: false
          },
          {
            text: '21:00',
            texts:'开抢',
            active: false
          }
        ]
      }
    },
    methods: {
      navClickEvent: function (items, index) {
        /*默认切换类的动作*/
        items.forEach(function (el) {
          el.active = false;
          el.texts="开抢";
        });
        items[index].active = true;
        items[index].texts = "抢购中"
      }
    },
    mounted(){
      const title = document.getElementsByClassName('vux-header-title');
      title[0].style.color='#333'
    }
  }

</script>
<style scoped>
  ul{
    font-size: 0;
    overflow: hidden;
  }

  .timeTab li {
    width: 25%;
    font-size: .28rem;
    text-align: center;
    padding: .15rem 0;
    list-style: none;
    float: left;
    color: white;
    background-color: #414141;
  }

  .active {
    background-color: #ff526d !important;
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

  .juan {
    display: inline-block;
    width: 47px;
    height: 14px;
    background-image: url('../assets/juan.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .j_num {
    font-size: 10px;
    color: #ff526d;
    line-height: 14px;
    margin-left: 22.5px;
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
