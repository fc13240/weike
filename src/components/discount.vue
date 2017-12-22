<template>
  <!--<div> {{$route.params.time}}</div>-->
  <div>
    <!--<x-header :left-options="{backText: ''}" style="background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">聚折扣</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="main_goods">
      <ul class="goods">
        <router-link tag="li" class="goods_list" v-for="(list,index) in goodsList" :to="{name:'goodsDetail',query:{id:list.id,type:3}}" :key="index">
          <img :src="list.pict_url" alt="">
          <div class="content">
            <div class="des" v-text="list.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <div style="margin: .15rem 0rem;">
              <span class="left">{{list.discount}}折</span>
                      <span class="juan_style">
                      <span class="juan_style_left">券</span>
                      <span class="juan_style_right">{{list.coupon_number}}元</span>
                      </span>
              <!--<span class="return_num_style" v-show="goods.fans_acer !==0">返{{goods.fans_acer}}元宝</span>-->
            </div>
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">￥</span>{{list.zk_final_price.rmb}}<span v-show="list.zk_final_price.corner!=='00'" style="font-size: .2rem;">.{{list.zk_final_price.corner}}</span></span>
              <del style="font-size: .2rem;color: #999;margin-left: .1rem;"><i>￥{{list.reserve_price.rmb}}<span v-show="list.reserve_price.corner!=='00'">.{{list.reserve_price.corner}}</span></i></del>
              <span class="num">{{list.volume}}件已售</span>
            </p>
          </div>
        </router-link>
      </ul>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
    <div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>

  </div>
</template>
<script>
  import {Tab,TabItem,XHeader,Loading} from 'vux'
  export default {
    name: 'discount',
    components: {
      Tab,
      TabItem,
      XHeader,
      Loading
    },
    data() {
      return {
        goodsList:[],
        showLoading:false,
        loadText:'加载中...',
      }
    },
    methods: {
      //      聚折扣专区商品
      getGoods:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/discount'
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.goodsList = res.data.data.discount_products
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
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      }
    },
    created:function(){
          this.getGoods()
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
      // 返回顶部
      let back_btn = document.getElementsByClassName('toTop')[0];
      window.onscroll = function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 800) {
          back_btn.style.display = 'block';
        } else {
          back_btn.style.display = 'none';
        }
      }
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
    color: white;
    background-color: #ff425f;
    padding: 0 3px;
    border-radius: .02rem;
    display: inline-block;
    border: .01rem solid #ff425f;
    margin-right: .2rem;
  }

  .price {
    font-size: .32rem;
    color: #ff425f;
  }

  .num {
    font-size: .24rem;
    color: #999;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .right {
    padding: 0 .1rem;
    margin-left: .1rem;
    font-size: .20rem;
    color: #ff425f;
    background-image: url("../assets/j_bd.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
