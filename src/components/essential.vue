<template>
  <!--<div> {{$route.params.time}}</div>-->
  <div>
    <!--<x-header :left-options="{backText: ''}" style="background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">应季必备</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
   <div style="font-size: 0;">
     <nav>
       <img :src="banner" alt="" style="width: 7.5rem;height: 2.6rem;" :onerror="defaultImg">>
     </nav>
     <p style="text-align: center;font-size: .28rem;color: #333;background-color: white;padding: .2rem 0;"><img src="/static/images/essential_img.png" alt="" style="vertical-align: middle;width: .4rem;height: .4rem;margin-right: .1rem;">每天早10点晚9点上新</p>
   </div>
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller" style="margin-top: 3.44rem;">
    <div class="main_goods">
      <ul class="goods">
        <router-link tag="li" class="goods_list" v-for="(list,index) in goodsList" :to="{name:'goodsDetail',query:{id:list.id}}" :key="index">
          <img :src="list.pict_url" alt="" :onerror="defaultImg">
          <div class="content">
            <div class="des" v-text="list.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
            <!--<p style="position: relative;margin-top: .1rem;"><span class="left">送元宝</span><span class="right">剩余2000张劵</span></p>-->
            <div style="margin: .15rem 0rem;">
                      <span class="juan_style">
                      <span class="juan_style_left">券</span>
                      <span class="juan_style_right">{{list.coupon_number}}元</span>
                      </span>
              <!--<span class="return_num_style" v-show="goods.fans_acer !==0">返{{goods.fans_acer}}元宝</span>-->
            </div>
            <p class="des_b" style="position: relative;margin-top: .1rem;">
              <span class="price"><span style="font-size: .2rem;">￥</span>{{list.zk_final_price.rmb}}<span v-show="list.zk_final_price.corner!=='00'" style="font-size: .2rem;">.{{list.zk_final_price.corner}}</span>
                <del style="font-size: .2rem;color: #999;margin-left: .1rem;"><i>￥{{list.reserve_price.rmb}}<span v-show="list.reserve_price.corner!=='00'">.{{list.reserve_price.corner}}</span></i></del>
              </span>
              <span class="num">{{list.volume}}件已售</span>
            </p>
          </div>
        </router-link>
      </ul>
    </div>
    </scroller>
    <loading v-model="showLoading" :text="loadText"></loading>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->

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
        pageIndex:1,
        limit:10,
        totalPage:0,
        noData: false,
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
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
        this.$http({
          method:'POST',
          url:'/api/seasonindex',
          data:{page:this.pageIndex,limit:this.limit}
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            if(res.data.data.season_products.length==0){
              this.noData=true
              this.$refs.myscroller.finishInfinite(2);
            }else{
              this.goodsList=this.goodsList.concat(res.data.data.season_products)
              this.$refs.myscroller.finishPullToRefresh()
            }
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
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      },
      infinite(done) {
        if (this.noData) {
          setTimeout(() => {
            this.$refs.myscroller.finishInfinite(2);
          })
          return;
        }
        else{
          let self = this;//this指向问题
          setTimeout(()=>{
            self.pageIndex += 1
            self.getGoods()
            done()
          },1500)
        }

      },
      refresh(done) {
        var self = this
        this.pageIndex=1
        this.goodsList=[]
        this.getGoods()
        setTimeout(function () {
          self.top = self.top - 10;
          done()
        }, 1500)
      },
    },
    created:function(){
     this.getGoods()
      this.getBanner()
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
//      // 返回顶部
//      let back_btn = document.getElementsByClassName('toTop')[0];
//      window.onscroll = function () {
//        let top = document.documentElement.scrollTop || document.body.scrollTop;
//        if (top > 800) {
//          back_btn.style.display = 'block';
//        } else {
//          back_btn.style.display = 'none';
//        }
//      }
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
    font-size: 0;
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
    color: #ff425f;
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
