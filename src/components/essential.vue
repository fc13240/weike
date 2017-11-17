<template>
  <!--<div> {{$route.params.time}}</div>-->
  <div>
    <!--<x-header :left-options="{backText: ''}" style="background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">应季必备</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <nav>
      <img :src="banner" alt="" style="width: 7.5rem;height: 2.6rem;">
    </nav>
    <p style="text-align: center;font-size: .28rem;color: #333;background-color: white;padding: .2rem 0;"><img src="../assets/logo.png" alt="" style="vertical-align: middle;width: .4rem;height: .4rem;margin-right: .1rem;">每天早上10点晚9点上新</p>
    <div class="main_goods">
      <ul class="goods">
        <li class="goods_list" v-for="list in goodsList">
          <img :src="list.pict_url" alt="">
          <div class="content">
            <div class="des" v-text="list.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <!--<p style="position: relative;margin-top: .1rem;"><span class="left">送元宝</span><span class="right">剩余2000张劵</span></p>-->
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">￥</span>{{list.zk_final_price.rmb}}<span v-show="list.zk_final_price.corner!=='00'" style="font-size: .2rem;">.{{list.zk_final_price.corner}}</span>
                <del style="font-size: .2rem;color: #999;margin-left: .1rem;"><i>￥{{list.reserve_price.rmb}}<span v-show="list.reserve_price.corner!=='00'">.{{list.reserve_price.corner}}</span></i></del>
              </span>
              <span class="num">{{list.volume}}件已售</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
  import {Tab,TabItem,Loading} from 'vux'
  export default {
    name: 'essential',
    components: {
      Tab,
      TabItem,
      Loading
    },
    data() {
      return {
        goodsList:[],
        banner:'',
        showLoading:false,
        loadText:'加载中...',
      }
    },
    methods: {
      //      应季必备banner
      getBanner:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/season_banner'
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.banner = res.data.data.banner[0].banner_image
          }else if(res.data.code=='400'){
//            this.$vux.toast.show({
//              type:"cancel",
//              text:res.data.message
//            })
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      应季必备专区商品
      getGoods:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/seasonindex'
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.goodsList = res.data.data.season_products
          }else if(res.data.code=='400'){
//            this.$vux.toast.show({
//              type:"cancel",
//              text:res.data.message
//            })
          }
        },(err)=>{
          console.log(err)
        })
      },
    },
    created:function(){
     this.getGoods()
      this.getBanner()
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
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
