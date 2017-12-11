<template>
  <div>
    <div>
      <div class="pic">
        <img :src="goodsDetail.pict_url" alt="" :onerror="defaultImg">
      </div>
      <div class="detail">
        <p class="name">{{goodsDetail.title}}</p>
        <span class="prices"><small>￥</small>{{goodsDetail.zk_final_price.rmb}}<small v-show="goodsDetail.zk_final_price.corner!=='00'">.{{goodsDetail.zk_final_price.corner}}</small></span>
        <!--<span class="juan"><span class="juan_l">劵</span><span class="juan_r">20元</span></span>-->
        <!--<span class="return_yuanBao">返100元宝</span>-->
        <p class="old_price">价格
          <del>￥{{goodsDetail.reserve_price.rmb}} <span v-show="goodsDetail.reserve_price.corner!=='00'">.{{goodsDetail.reserve_price.corner}}</span></del>
          <span>销量{{goodsDetail.volume}}件</span></p>
      </div>
    </div>
    <cell
      title="商品图文详情(点击查看)"
      is-link
      :border-intent="false"
      :arrow-direction="show ? 'up' : 'down'"
      @click.native="show = !show" class="pic_detail"></cell>

    <div class="slide" :class="show?'animate':''">
      <img :src="img" alt="" v-for="img in goodsDetail.small_images" :onerror="defaultImg">
    </div>
   <div class="guss_main">
     <p class="guss">猜你喜欢</p>
     <div class="main_goods">
       <ul class="goods">
         <router-link tag="li" v-for="(goods,index) in goodsList" class="goods_list" to="" :key="index">
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
    <div style="height: .98rem;"></div>
    <div class="footer">
        <div class="f_1 f1_l" @click="toHome">
          <img src="/static/images/home.png" alt="">
          <span>首页</span>
        </div>
      <div class="f_1 ">
        <img src="/static/images/service.png" alt="">
        <span>客服</span>
      </div>
      <div class="f_2 f2_l" @click="toDraw">
        <span>浏览器领券</span>
      </div>
      <div class="f_2 f2_r" @click="toShow">
        <span>淘口令领券</span>
      </div>
    </div>
    <div v-show="show1" class="model">
      <div class="model_bd">
      </div>
      <div class="model_main">
        <div class="model_main_des">

        </div>
        <img src="../../static/images/cancel_img.png" alt="" @click="cancel">
      </div>
    </div>
  </div>
</template>
<script>
  import {Cell, CellBox, CellFormPreview, Group, Badge,Loading} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge,
      Loading
    },
    data() {
      return {
        showLoading:false,
        show1:false,
        show: false,
        id:'',
        goodsDetail:{
          title:'',
          pict_url:'',
          small_images:[],
          reserve_price:{
            rmb:'',
            corner:''
          },
          zk_final_price:{
            rmb:'',
            corner:''
          },
          volume:'',
        },
        goodsList:[ ],
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
      }
    },
    methods:{
      //      商品详情
      getGoodsDetail:function(){
        this.id=this.$route.query.id;
        console.log(this.id)
        this.$http({
          method:'POST',
          url:'/api/goodsDetail',
          data:{goods_id:1}
        }).then((res)=>{
          if(res.data.code=='200'){
            this.goodsDetail = res.data.data
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      获取猜你喜欢商品列表
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
      toHome(){
        this.$router.push({path:'/home'})
      },
      toDraw(){
        this.$router.push({path:'/goodsDetail/draw'})
      },
      toShow(){
        this.show1=true
        document.body.style.overflow = 'hidden';
      },
      cancel(){
        document.body.style.overflow = 'scroll';
        this.show=false
      }
    },
    created:function(){
      this.getGoodsDetail()
      this.getGoodsList()

    }
  }
</script>
<style scoped="">
  .pic {
    width: 100%;
    height: 7.5rem;
  }

  .pic img {
    width: 100%;
    height: 100%;
  }

  .detail {
    background: white;
    padding: .22rem .22rem .3rem;
  }

  .detail .name {
    font-size: .32rem;
    color: #333333;
  }

  .prices {
    font-size: .6rem;
    color: #ff0137;
  }

  .prices small {
    font-size: .36rem;
  }

  .juan {
    font-size: .2rem;
    color: #ff0137;
    border: .01rem solid #ff0137;
    border-radius: .05rem;
    margin-left: .2rem;
  }

  .juan_l {
    border-right: .01rem dotted #ff0137;
    padding: 0 .05rem;
  }

  .juan_r {
    padding: 0 .05rem;
  }

  .return_yuanBao {
    font-size: .2rem;
    color: #ff8a1e;
    padding: 0 .05rem;
    border: .01rem solid #ff8a1e;
    border-radius: .05rem;
    margin-left: .05rem;
  }

  .old_price {
    font-size: .24rem;
    color: #999999;
  }

  .old_price > del {
    margin: 0 .3rem 0 .05rem;
  }

  .sub-item {
    color: #888;
  }

  .slide {
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
    background-color: white;
  }
  .slide img{
    width: 100%;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

  .pic_detail {
    background-color: white;
    margin-top: .16rem;
    border-bottom: .01rem solid #f4f4f4;
  }
  .guss{
    font-size: .32rem;color: #333333;padding-left: .2rem;border-left: .05rem solid #ff526d;background-color: white;
    line-height: .35rem;
    margin: .2rem 0;
  }
.guss_main{
  background-color: white;
  overflow: hidden;
}
/*猜你喜欢商品*/
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


/*footer*/
  .footer {
    width: 100%;
    text-align: center;
    font-size: 0;
    background-color: white;
    height: .98rem;
    position: fixed;
    bottom: 0;
    border-top:.01rem solid #eeeeee;
  }

  .f_1 {
    width: 20%;
    font-size: .2rem;
    color: #444444;
  }

  .f_1 img {
    width: .4rem;
    height: .4rem;
    padding-top: .2rem;
  }

  .f_1 span {
    display: block;
    margin-top: -.1rem;
  }

  .f1_l {
    border-right: .01rem solid #eeeeee;
    box-sizing: border-box;
  }

  .f_2 {
    width: 30%;
    font-size: .28rem;
    color: white;
  }

  .f2_l {
    height: 100%;
    line-height: .98rem;
    background: -webkit-linear-gradient(left, #ffc801, #ff9803); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, #ffc801, #ff9803); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, #ffc801, #ff9803); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, #ffc801, #ff9803); /* 标准的语法 */
  }

  .f2_r {
    height: 100%;
    line-height: .98rem;
    vertical-align: middle;
    background: -webkit-linear-gradient(left, #ff526d, #f8214f); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, #ff526d, #f8214f); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, #ff526d, #f8214f); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, #ff526d, #f8214f); /* 标准的语法 */
  }

  .footer > div {
    float: left;
  }
  /*签到弹出层*/
  .model_bd {
    width: 100%;
    height: 100%;
    opacity: .5;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: 100;
  }

  .model_main {
    z-index: 200;
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 5.7rem;
    margin: 2.5rem calc((100% - 75%) / 2);
    background-color: white;
    border-radius: .15rem;
  }
  .model_main_des{
    position: absolute;
    bottom: .7rem;
    text-align: center;
    width: 100%;
  }
  .model_main img{
    width: .5rem;
    height: .5rem;
    position: absolute;
    top: -.7rem;
    right: -.6rem;
  }

</style>
