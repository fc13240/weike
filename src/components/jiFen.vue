<template>
  <div>
    <app-header title="积分商城"></app-header>
    <nav>
      <a href="javascript:">
        <img src="../assets/logo.png" alt="">
        <span>元宝 <span class="nums">88</span></span>
      </a>
      <a href="javascript:" @click="toExchange">
        <img src="../assets/logo.png" alt="">
        <span>兑换记录</span>
      </a>
    </nav>
    <div class="main">
      <h3><i></i>优先推荐</h3>
      <ul class="goods_list">
        <li class="goods">
          <img src="../assets/logo.png" alt="" class="photo">
          <div class="content">
            <p class="des">10元现金红包啊哈哈哈哈啊哈哈哈哈</p>
            <div class="des_b">
               <span class="yuanBao">1000</span>
              <img src="../assets/logo.png" alt="" class="y_img">
              <del>￥88.8</del>
              <span class="num">库存 <span>888</span></span>
            </div>
          </div>
        </li>
        <li class="goods">
          <img src="../assets/logo.png" alt="" class="photo">
          <div class="content">
            <p class="des">10元现金红包</p>
            <div class="des_b">
              <span class="yuanBao">1000</span>
              <img src="../assets/logo.png" alt="" class="y_img">
              <del>￥88.8</del>
              <span class="num">库存 <span>888</span></span>
            </div>
          </div>
        </li>
        <li class="goods">
          <img src="../assets/logo.png" alt="" class="photo">
          <div class="content">
            <p class="des">10元现金红包</p>
            <div class="des_b">
              <span class="yuanBao">1000</span>
              <img src="../assets/logo.png" alt="" class="y_img">
              <del>￥88.8</del>
              <span class="num">库存 <span>888</span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import  Vue from 'vue'
  import AppHeader from './Header'
  export default {
    name:'jiFen',
  components:{
      Vue,
    AppHeader
  },
    methods:{
      toExchange(){
        this.$router.push({
          path:'/home/Exchange'
        })
      }
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
    margin-top: .88rem;
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
    color: #ff426d;
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
  }
  h3 i{
    border-left: .06rem solid #ff526d;
    margin-right: .2rem;
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
    border:1px solid red;
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
    color: #ff526d;
    font-size: .28rem;
    font-weight: bold;
  }
  .y_img{
    width: .26rem;
    height:  .22rem;
    border: 1px solid red;
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
