<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: #ff526d;position: fixed;z-index: 10;width: 100%;top: 0;">元宝商城</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
    <nav >
      <a href="javascript:">
        <img src="../assets/yuanBao_gray.png" alt="">
        <span>元宝 <span class="nums">{{member_acer}}</span></span>
      </a>
      <a href="javascript:" @click="toExchange">
        <img src="../assets/exchange_gray.png" alt="">
        <span>兑换记录</span>
      </a>
    </nav>
    <div class="main">
      <h3><i></i>优先推荐</h3>
      <ul class="goods_list">
        <router-link tag="li" :to="{name:'exchangeDetail',query:{id:acerList.product_id}}" class="goods" v-for="(acerList,index) in acer_list" :key="index">
          <img :src="acerList.product_image" alt="" class="photo" :onerror="defaultImg">
          <div class="content">
            <p class="des">{{acerList.product_name}}</p>
            <div class="des_b">
               <span class="yuanBao">{{acerList.exchange_acer}}</span>
              <img src="../assets/yuanBao_red.png" alt="" class="y_img">
              <del>￥{{acerList.market_price.rmb+'.'+acerList.market_price.corner}}</del>
              <span class="num">库存 <span>{{acerList.stock}}</span></span>
            </div>
          </div>
        </router-link>
      </ul>

    </div>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->
    </scroller>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import  Vue from 'vue'
  export default {
    name:'jiFen',
  components:{
      Vue,
      XHeader
  },
    data (){
      return{
        member_acer:[],
        acer_list:[],
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
        pageIndex:1,
        limit:10,
        noData: false,
      }
    },
    methods:{
      toExchange(){
        this.$router.push({
          path:'/home/Exchange'
        })
      },
      //      获取用户元宝
      getNum:function(){
        this.$http({
          method:'POST',
          url:'/api/member_acer'
        }).then((res)=>{
          if(res.data.code=='200'){
            console.log(res.data)
            this.member_acer = res.data.data.member_acer
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      获取商品列表
      getAcerList:function(){
        this.$http({
          method:'POST',
          url:'/api/acerList',
          data:{page:this.pageIndex,limit:this.limit}
        }).then((res)=>{
          if(res.data.code=='200'){
            if(res.data.data.acer_list.length==0){
              this.noData=true
              this.$refs.myscroller.finishInfinite(2);
            }else{
              this.acer_list=this.acer_list.concat(res.data.data.acer_list)
              this.$refs.myscroller.finishPullToRefresh()
            }
          }
        },(err)=>{
          console.log(err)
        })
      },
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      },
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
            self.getAcerList()
            done()
          },1500)
        }
      },
      refresh(done){
        var self =this
        this.acer_list=[]
        this.pageIndex=1;
        this.getAcerList();
        setTimeout(function () {
          self.top = self.top - 10;
          done()
        }, 1500)
      },
    },
    created:function(){
     this.getNum()
      this.getAcerList()
    },
    mounted(){
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
<style scoped>
  ul{
    overflow: hidden;
  }
  ul li{
    background-color: white;
    list-style: none;
    float: left;
    width: 50%;
    box-sizing: border-box;
  }
  nav{
    background-color: white;
    margin-bottom: .2rem;
    font-size: 0;
    text-align: center;
    padding: .3rem 0;
  }
  nav a{
    width: 50%;
    display: inline-block;
    font-size: .28rem;
    color: #333;
    border-right: .04rem solid #f4f4f4;
    box-sizing: border-box;
    padding: .07rem 0;
  }
 .nums{
    color: #ff425f;
  }
  nav img{
    vertical-align: bottom;
    width: .42rem;
    height: .4rem;
  }
  h3{
    font-size: .32rem;
    color: #333;
    background-color: white;
    padding:.4rem .4rem .4rem 0;
    font-weight: 500;
  }
  h3 i{
    border-left: .06rem solid #ff425f;
    margin-right: .2rem;
  }
  .goods{
    margin-top: .1rem;
  }
  .goods:nth-of-type(old){
    border-right: .05rem solid #f4f4f4;
  }
  .goods:nth-of-type(even){
    border-left: .05rem solid #f4f4f4;
  }
  .photo{
    width: calc(100% - .4rem);
    height: 2rem;
    padding: .14rem .2rem;
  }
  .content{
    padding: 0 .1rem .2rem .2rem;
  }
  .des{
    width: 100%;
    font-size: .28rem;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
  .yuanBao{
    color: #ff425f;
    font-size: .28rem;
  }
  .y_img{
    width: .26rem;
    height:  .22rem;
    margin-left: -.05rem;
  }
  .des_b del{
    font-size: .2rem;
    color: #999;
  }
  .des_b{
    position: relative;
  }
  .num{
    font-size: .2rem;
    color: #999;
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
<style>
  .vux-header-title{
    font-size: .32rem!important;
  }
</style>
