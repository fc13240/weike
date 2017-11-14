<template>
  <div>
    <!--<app-header title="微客"></app-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller" style="position: relative;">
      <swiper auto :list="demoList" style="width:100%;" height="2.6rem" dots-class="custom-bottom"
              dots-position="center" :show-desc-mask="false"></swiper>
      <div>
        <ul class="nav-small">
          <router-link tag="li" v-for="type in typeList" :to="{name:'classify',params:{id:type.id}}">
            <img :src="type.image_url" :onerror="defaultImg">
            <span>{{type.cate_name}}</span>
          </router-link>
        </ul>
      </div>
      <div class="main">
        <div class="nav-bigger">
          <router-link to="/home/yuanBaoShop">
          <img class="yuanBaoShop" src="static/images/yuanbaoShop_img.png">
          </router-link>
          <router-link to="">
          <img class="zhiNan" src="/static/images/zhinan_img.png">
          </router-link>
          <div class="m_r">
            <router-link to="/home/xianBao">
              <img class="m_r_t" src="static/images/xianbao_img.png">
            </router-link>
            <router-link to="/home/fuLi">
              <img class="m_r_b" src="static/images/fuli_img.png">
            </router-link>
          </div>
        </div>
        <div class="main_goods">
          <ul class="goods">
            <router-link tag="li" v-for="goods in goodsList" class="goods_list" to="">
                <img :src="goods.pict_url" alt="" :onerror="defaultImg">
                <div class="content">
                  <div class="des">{{goods.title}}</div>
                  <div class="des_b">
                    <span class="price"><span style="font-size: .2rem;">￥</span>{{goods.zk_final_price.rmb}}<span style="font-size: .20rem;" v-show="goods.zk_final_price.corner!=='00'">.{{goods.zk_final_price.corner}}</span></span>
                    <!--<del style="font-size: .20rem;color: #999;" >￥{{goods.reserve_price.rmb}}<span v-show="goods.reserve_price.corner!=='00'">.{{goods.reserve_price.corner}}</span></del>-->
                    <span class="num">{{goods.volume}}件已售</span>
                  </div>
                </div>
            </router-link>
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
  export default {
    name: 'Home',
    components: {
      Swiper,
      Vue,
      AppHeader
    },
    data() {
      return {
        demoList: [],
        typeList:[],
        storeTypeList:[],
        goodsList:[],
        noData: '',
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',

      }
    },
    methods: {
      //      获取首页轮播图
      getBannerList:function(){
        this.$http({
          method:'POST',
          url:'/api/index_banner'
        }).then((res)=>{
          if(res.data.code=='200'){
            const imgList = res.data.data.index_banner
            const demoList = imgList.map((item, index) => ({
              url: 'javascript:',
              img: item.banner_image
            }))
            this.demoList = demoList
//          console.log(imgList)
          }
        },(err)=>{
          console.log(err)
        })
      },
//      获取商品分类
      getTypeList:function(){
        this.$http({
          method:'POST',
          url:'/api/index_type'
        }).then((res)=>{
         if(res.data.code=='200'){
           const typeList = res.data.data.goods_type_up
           this.typeList = typeList
         }
        },(err)=>{
          console.log(err)
        })
      },
//      获取商店分类
      getGoodsList:function(){
        this.$http({
          method:'POST',
          url:'/api/index_goods'
        }).then((res)=>{
         if(res.data.code=='200'){
           this.goodsList = res.data.data.goods
//          console.log(this.goodsList)
         }
        },(err)=>{
          console.log(err)
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
    },
    created: function(){
      this.getBannerList()
      this.getTypeList()
      this.getGoodsList()
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
  }

  .zhiNan {
    width: 28%;
    height: 100%;
    display: inline-block;
    border-right: .02rem solid #f4f4f4;
    box-sizing: border-box;
  }

  .m_r {
    width: 44%;
    height: 100%;
    display: inline-block;
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
