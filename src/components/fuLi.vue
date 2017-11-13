<template>
  <!--<div> {{$route.params.time}}</div>-->
  <div>
    <!--<x-header :left-options="{backText: ''}" style="background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">粉丝福利</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <img :src="banner" alt="" style="height: 1.8rem;width: 100%">
    <div>
      <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff526d">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item"
                  :key="index">{{item}}
        </tab-item>
      </tab>
      <!--<swiper v-model="index" :show-dots="false">-->
      <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
      <!--<div class="tab-swiper vux-center">{{item}}</div>-->
      <!--</swiper-item>-->
      <!--</swiper>-->
    </div>
    <div class="main_goods">
      <div v-show="index==0">
        <ul class="goods" v-for="goodList1 in goodList1">
          <li class="goods_list">
            <img :src="goodList1.small_images" alt="" :onerror="defaultImg">
            <div class="content">
              <div class="des" v-text="goodList1.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <p style="position: relative;margin-top: .2rem;"><span class="left">送{{goodList1.volume}}元宝</span>
                <!--<span class="right">剩余<span style="color: #ffb205;">-->
                  <!--{{goodList1.volume}}</span>件</span>-->
              </p>
              <p class="des_b" style="position: relative;margin-top: .1rem;">
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goodList1.zk_final_price}}</span>
                <span class="num">{{goodList1.volume}}件已售</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="index==1">
        <ul class="goods" v-for="goodList2 in goodList2">
          <li class="goods_list">
            <img :src="goodList2.small_images" alt="" :onerror="defaultImg">
            <div class="content">
              <div class="des" v-text="goodList2.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <p style="position: relative;margin-top: .2rem;"><span class="left">送{{goodList2.volume}}元宝</span><span class="right">剩余<span
                style="color: #ffb205;">{{goodList2.volume}}</span>件</span></p>
              <p class="des_b" style="position: relative;margin-top: .1rem;">
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goodList2.zk_final_price}}</span>
                <span class="num">{{goodList2.volume}}件已售</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="index==2">
        <ul class="goods" v-for="goodList3 in goodList3">
          <li class="goods_list">
            <img :src="goodList3.small_images" alt="" :onerror="defaultImg">
            <div class="content">
              <div class="des" v-text="goodList3.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <p style="position: relative;margin-top: .2rem;"><span class="left">送{{goodList3.volume}}元宝</span><span class="right">剩余<span
                style="color: #ffb205;">{{goodList3.volume}}</span>件</span></p>
              <p class="des_b" style="position: relative;margin-top: .1rem;">
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goodList3.zk_final_price}}</span>
                <span class="num">{{goodList3.volume}}件已售</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="index==3">
        <ul class="goods" v-for="goodList4 in goodList4">
          <li class="goods_list">
            <img :src="goodList4.small_images" alt="" :onerror="defaultImg">
            <div class="content">
              <div class="des" v-text="goodList4.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <p style="position: relative;margin-top: .2rem;"><span class="left">送{{goodList4.volume}}元宝</span><span class="right">剩余<span
                style="color: #ffb205;">{{goodList4.volume}}</span>件</span></p>
              <p class="des_b" style="position: relative;margin-top: .1rem;">
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goodList4.zk_final_price}}</span>
                <span class="num">{{goodList4.volume}}件已售</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {Tab, TabItem, Swiper, SwiperItem,XHeader} from 'vux'
  import Vue from 'vue'

  const list = () => ['价格优先', '销量优先', '元宝优先', '时间优先']
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
    name: 'Exchange',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Vue,
      XHeader
    },
    data() {
      return {

        goodList1:[],
        goodList2:[],
        goodList3:[],
        goodList4:[],
        defaultImg: 'this.src="' + require('../../static/images/empty_img.png') + '"',
        banner:'',
        demo03_list: demoList,
        list2: list(),
        demo2: '全部',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      //      获取粉丝福利banner
      getBanner:function(){
        this.$http({
          method:'POST',
          url:'/api/fanswelfare_banner'
        }).then((res)=>{
          const banner = res.data.data.banner[0].banner_image
          this.banner = banner
        },(err)=>{
          console.log(err)
        })
      },
      //      获取粉丝福利商品列表====价格
      getList1:function(){
        this.$http({
          method:'POST',
          url:'/api/fanswelfare',
          data:{sorts_type:5}
        }).then((res)=>{
          const goodList1 = res.data.data.goods_list
          this.goodList1 = goodList1
//          console.log(priceList)
        },(err)=>{
          console.log(err)
        })
      },
      //      获取粉丝福利商品列表====销量
      getList2:function(){
        this.$http({
          method:'POST',
          url:'/api/fanswelfare',
          data:{sorts_type:6}
        }).then((res)=>{
          const goodList2 = res.data.data.goods_list
          this.goodList2= goodList2
//          console.log(priceList)
        },(err)=>{
          console.log(err)
        })
      },
      //      获取粉丝福利商品列表====元宝
      getList3:function(){
        this.$http({
          method:'POST',
          url:'/api/fanswelfare',
          data:{sorts_type:7}
        }).then((res)=>{
          const goodList3 = res.data.data.goods_list
          this.goodList3 = goodList3
//          console.log(priceList)
        },(err)=>{
          console.log(err)
        })
      },
      //      获取粉丝福利商品列表====时间
      getList4:function(){
        this.$http({
          method:'POST',
          url:'/api/fanswelfare',
          data:{sorts_type:8}
        }).then((res)=>{
          const goodList4 = res.data.data.goods_list
          this.goodList4 = goodList4
//          console.log(priceList)
        },(err)=>{
          console.log(err)
        })
      },

      onItemClick(index) {
        console.log('on item click:', index)
      },
      addTab() {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab() {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next() {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev() {
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
    },
    created:function(){
      this.getBanner();
      this.getList1();
      this.getList2();
      this.getList3();
      this.getList4();
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
    padding: 0 3px;
    border-radius: .05rem;
  }

  .price {
    font-size: .32rem;
    color: #ff7171;
  }

  .num {
    font-size: .24rem;
    color: #999;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .right {
    position: absolute;
    right: 0;
    font-size: .24rem;
    color: #999999;
  }
</style>
