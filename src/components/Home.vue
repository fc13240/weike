<template>
  <div>
    <app-header title="微客"></app-header>
    <swiper :list="demo03_list" auto style="width:100%;margin:.88rem auto 0;" height="2.6rem" dots-class="custom-bottom" dots-position="center" show-desc-mask></swiper>
    <div>
      <ul class="nav-small">
        <li>
          <img  src="../assets/logo.png">
          <span>热门</span></li>
        <li><img src="../assets/logo.png">
          <span>家居</span></li>
        <li><img src="../assets/logo.png">
          <span>家纺</span></li>
        <li><img src="../assets/logo.png">
          <span>电器</span></li>
        <li><img src="../assets/logo.png">
          <span >数码</span></li>
        <li><img src="../assets/logo.png">
          <span>美妆</span></li>
        <li><img src="../assets/logo.png">
          <span>服装</span></li>
        <li><img src="../assets/logo.png">
          <span>汽车</span></li>
        <li><img src="../assets/logo.png">
          <span>母婴</span></li>
        <li><img src="../assets/logo.png">
          <span>美食</span></li>
      </ul>
    </div>
    <div class="main">
      <div class="nav-bigger">
         <div class="jiFen" @click="toJiFen">

         </div>
         <div class="zhiNan">

         </div>
          <div class="m_r">
            <div class="m_r_t"></div>
            <div class="m_r_b"></div>
          </div>
      </div>
      <div class="main_goods">
        <ul class="goods">
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
               <div class="des_b">
                 <span class="price">￥88.8</span>
                 <span class="num">518件已售</span>
               </div>
            </div>
          </li>
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price">￥88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price">￥88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
          <li class="goods_list">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price">￥88.8</span>
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
  import { Swiper} from 'vux'
  import  Vue from 'vue'
  import AppHeader from './Header'
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
    name:'Home',
    components: {
      Swiper,
      Vue,
      AppHeader
    },
    ready () {

    },
    data () {
      return {
        demo03_list: demoList
      }
    },
    methods:{
      toJiFen(){
        this.$router.push({
          path:'/home/jiFen'
        })
      }
    }
  }
</script>
<style scoped>
  .nav-small{
    overflow: hidden;
    padding: .38rem .2rem .1rem .2rem;
    background-color: white;
  }
  .nav-small li{
    margin-bottom: .25rem;
    width: 20%;
    float: left;
    list-style: none;
    text-align: center;
  }
  .nav-small li img{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    margin: 0 auto;
  }
  .nav-small li span{
    font-size: .24rem;
    color: #333333;
    display: block;
  }
  .nav-bigger{
    width: 100%;
    height: 1.88rem;
    background-color: white;
    font-size: 0;
    margin: .2rem 0;
  }
  .jiFen{
    width:28%;
    height: 100%;
    display: inline-block;
    border-right: .02rem solid #f4f4f4;
    box-sizing: border-box;
    background-color: yellow;
  }
  .zhiNan{
    width: 28%;
    height: 100%;
    display: inline-block;
    border-right: .02rem solid #f4f4f4;
    box-sizing: border-box;
    background-color: red;
  }
  .m_r{
    width: 44%;
    height: 100%;
    display: inline-block;
    background-color: green;
  }
  .m_r_t,.m_r_b{
   height: 50%;
  }
  .m_r_t{
    border-bottom: .02rem solid #f4f4f4;
    box-sizing: border-box;
  }
  .main{
    margin-bottom: 1.06rem;
  }
  .goods{
    overflow: hidden;
  }
  .goods_list{
    background-color: white;
    list-style: none;
    float: left;
    width: 50%;
    box-sizing: border-box;
    border-bottom:.1rem solid  #f4f4f4;
  }
  .goods_list img{
    width: 100%;
    height: 3.6rem;
  }
  .goods_list:nth-of-type(odd){
    border-right:.05rem solid  #f4f4f4;
  }
  .goods_list:nth-of-type(even){
    border-left:.05rem solid  #f4f4f4;
  }
  .content{
    padding: .15rem;
  }
  .des{
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
  .price{
    font-size: .32rem;
    color: #ff7171;
  }
  .num{
    font-size: .24rem;
    color: #999;
    float: right;
    margin-top: .1rem;
    margin-right: .15rem;
  }
</style>
