<template>
  <div>
    <!--<div class="allSort" v-show="cate_id !==1">-->
      <!--<div class="sortMenu clearfix" style="position: fixed;z-index: 10;">-->
        <!--<div style="width: calc(100% - 24px)">-->
          <!--<ul class="sortMenu-ul">-->
            <!--<li class="cell" v-for="item in typeList">-->
              <!--<a href="">{{item.cate_name}}</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="all" v-on:click="subitemsExpanded=!subitemsExpanded">-->
          <!--<img src="../assets/down.png" alt="" style="width: 10px;height: 10px;">-->
        <!--</div>-->
        <!--<div v-show="subitemsExpanded" class="pull-down">-->
          <!--<ul class="pull-down-sort">-->
            <!--<li class="cell" v-for="item in typeList">-->
              <!--<a href="">{{item.cate_name}}</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
      <div class="main_goods">
        <ul class="goods">
          <router-link tag="li" class="goods_list" v-for="(goods,index) in goodsList" :to="{name:'goodsDetail',query:{id:goods.id}}" :key="index">
            <img :src="goods.pict_url" alt="" :onerror="defaultImg">
            <div class="content">
              <div class="des" v-text="goods.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div style="margin: .15rem 0rem;">
                      <span class="juan_style">
                      <span class="juan_style_left">券</span>
                      <span class="juan_style_right">{{goods.coupon_number}}元</span>
                    </span>
                <span class="return_num_style"  v-show="goods.fans_acer !==0">返{{goods.fans_acer}}元宝</span>
              </div>
              <div class="des_b">
                <!--<p>                <del style="font-size: .20rem;color: #999;" >￥{{goods.reserve_price.rmb}}<span v-show="goods.reserve_price.corner!=='00'">.{{goods.reserve_price.corner}}</span></del>-->
                <!--</p>-->
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goods.zk_final_price.rmb}}<span style="font-size: .20rem;" v-show="goods.zk_final_price.corner!=='00'">.{{goods.zk_final_price.corner}}</span></span>
                <span class="num">{{goods.volume}}件已售</span>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </scroller>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->

  </div>
</template>
<script>
//  import {XHeader} from 'vux'
//  import Vue from 'vue'
//  import VueScroller from 'vue-scroller'
//  Vue.use(VueScroller)
  export default {
    name: 'jiFen',
    components: {
//      Vue,
//      XHeader,
//      VueScroller
    },
    data() {
      return {
        totalCount:'',
        goodsList: [],
        cate_id:'',
        typeList:[],
        subitemsExpanded: false,
        pageIndex:1,
        limit:10,
        noData: false,
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
      }
    },
    methods: {
      toExchange() {
        this.$router.push({
          path: '/home/Exchange'
        })
      },
      //      获取商品列表
      getGoodsList:function(){
        const routerParams = this.$route.params.id;
        this.cate_id = routerParams;
//        console.log(this.cate_id);
        this.$http({
          method:'POST',
          url:'/api/goodslist',
          data:{
            cate_id:this.cate_id,page:this.pageIndex,limit:this.limit
          }
        }).then((res)=>{
          if(res.data.code == '200'){
            if(res.data.data.goodsList.length==0){
              this.noData=true
              this.$refs.myscroller.finishInfinite(2);
            }else{
              this.goodsList=this.goodsList.concat(res.data.data.goodsList)
              this.$refs.myscroller.finishPullToRefresh()
            }
          }
        },(err)=>{})
      },
      //      获取商品分类
      getTypeList:function(){
        const routerParams = this.$route.params.id;
        this.cate_id = routerParams;
        this.$http({
          method:'POST',
          url:'/api/goodslist_type',
          data:{
            cate_id:this.cate_id
          }
        }).then((res)=>{
         if(res.data.code=='200'){
           const typeList =res.data.data.allGoodsType
           this.typeList = typeList
           console.log(typeList)
         }
        },(err)=>{
          console.log(err)
        })
      },
      infinite(done){
        if(this.noData){
          setTimeout(()=>{
            this.$refs.myscroller.finishInfinite(2);
          })
          return;
        }
        else{
          let self = this;//this指向问题
          setTimeout(()=>{
            self.pageIndex += 1
            self.getGoodsList()
            done()
          },1500)
        }
      },
      refresh(done){
        var self =this
        this.goodsList=[]
        this.pageIndex=1;
        this.getGoodsList();
        setTimeout(function () {
          self.top = self.top - 10;
          done()
        }, 1500)
      },
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      }
    },
    mounted: function () {
//      if(this.cate_id==1){
//        document.getElementsByClassName('main_goods')[0].style.marginTop='0px'
//      }else{
//        document.getElementsByClassName('main_goods')[0].style.marginTop='40px'
//      }
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
    },
    created:function(){
      this.getGoodsList();
      this.getTypeList();
    }
  }
</script>
<style scoped>
  /* 分类菜单*/
  li{
    list-style: none;
  }
  /*.sortMenu a{*/
    /*font-size: .28rem;*/
    /*color: #333;*/
  /*}*/
  /*.sortMenu{*/
    /*width: 100%;*/
    /*background-color:#fff;*/
    /*overflow-x: scroll;*/
     /*-webkit-overflow-x: scroll;*/
  /*}*/
  /*.sortMenu::-webkit-scrollbar{*/
    /*width: 0;*/
    /*height: 0;*/
    /*background-color: #fff;*/
  /*}*/
  /*.sortMenu-ul {*/
    /*min-width:500px;*/
    /*display: flex;*/
    /*justify-content: flex-start;*/
  /*}*/
  /*.sortMenu .cell{*/
    /*display: inline-block;*/
    /*margin: 0px .2rem;*/
    /*height: .8rem;*/
    /*line-height: .8rem;*/
    /*text-align: center;*/
    /*position: relative;*/
    /*text-overflow: ellipsis;*/
    /*word-break: keep-all;*/
  /*}*/
  /*.sortMenu .all{*/
    /*right: 0;*/
    /*top: .0rem;*/
    /*height: .8rem;*/
    /*width: 24px;*/
    /*position: fixed;*/
    /*background: #fff;*/
    /*z-index: 10;*/
    /*display: flex;*/
    /*justify-content:center;*/
    /*align-items:center;*/
    /*border-left: 1px solid #e1e1e1;*/
  /*}*/
  /*.sortMenu .all img{*/
    /*display: block;*/
    /*width: 16px;*/
  /*}*/
  /*.sortMenu .pull-down{*/
    /*position: fixed;*/
    /*left: 0;*/
    /*!*top: 1.68rem;*!*/
    /*height:auto;*/
    /*width: 100%;*/
    /*background: #fff;*/
    /*z-index: 11;*/
    /*border-top: 1px solid #f2f2f2;*/

  /*}*/
  /*.pull-down-sort{*/
    /*width: 100%;*/
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*align-items: center;*/
    /*align-content: space-around;*/
    /*flex-wrap: wrap;*/
    /*flex-direction: row*/
  /*}*/
  /*.pull-down-sort li{*/
    /*float: left;*/
    /*padding: .1rem*/
  /*}*/
  /* 分类菜单*/
  .goods {
    overflow: hidden;
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
    color: #ff425f;
  }

  .num {
    font-size: .24rem;
    color: #999;
    float: right;
    margin-top: .1rem;
    margin-right: .15rem;
  }
</style>

