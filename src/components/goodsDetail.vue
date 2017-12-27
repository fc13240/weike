<template>
  <div>
    <div>
      <div class="pic">
        <img :src="goodsDetail.pict_url" alt="" :onerror="defaultImg">
      </div>
      <div class="detail">
        <p class="name">{{goodsDetail.title}}</p>
        <span class="prices"><small>￥</small>{{goodsDetail.zk_final_price.rmb}}<small
          v-show="goodsDetail.zk_final_price.corner!=='00'">.{{goodsDetail.zk_final_price.corner}}</small></span>
        <div style="margin-left: .2rem;display: inline-block;">
          <span class="juan_style">
                      <span class="juan_style_left">券</span>
                      <span class="juan_style_right">{{goodsDetail.coupon_number}}元</span>
                    </span>
          <span class="return_num_style" v-show="goodsDetail.fans_acer!==0">返{{goodsDetail.fans_acer}}元宝</span>
        </div>
        <!--<span class="juan"><span class="juan_l">劵</span><span class="juan_r">20元</span></span>-->
        <!--<span class="return_yuanBao">返100元宝</span>-->
        <p class="old_price">价格<del>￥{{goodsDetail.reserve_price.rmb}}<span
            v-show="goodsDetail.reserve_price.corner!=='00'">.{{goodsDetail.reserve_price.corner}}</span></del>
          <span>销量{{goodsDetail.volume}}件</span></p>
      </div>
    </div>
    <cell
      title="商品图文详情(点击查看)"
      is-link
      :border-intent="false"
      :arrow-direction="show ? 'up' : 'down'"
      @click.native="show = !show" class="pic_detail"></cell>

    <div class="slide" :class="show?'animate':''" style="font-size: 0;">
      <img :src="img" alt="" v-for="img in goodsDetail.small_images" :onerror="defaultImg">
    </div>
    <div class="guss_main">
      <p class="guss">猜你喜欢</p>
      <div class="main_goods">
        <ul class="goods">
          <li v-for="(goods,index) in goodsList" class="goods_list" @click="click(goods.id)" :key="index">
            <img :src="goods.pict_url" alt="" :onerror="defaultImg">
            <div class="content">
              <div class="des">{{goods.title}}</div>
              <div style="margin: .15rem 0rem;">
                      <span class="juan_style">
                      <span class="juan_style_left">券</span>
                      <span class="juan_style_right">{{goods.coupon_number}}元</span>
                      </span>
                <!--<span class="return_num_style" v-show="goods.fans_acer !==0">返{{goods.fans_acer}}元宝</span>-->
              </div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goods.zk_final_price.rmb}}<span
                  style="font-size: .20rem;" v-show="goods.zk_final_price.corner!=='00'">.{{goods.zk_final_price.corner}}</span></span>
                <!--<del style="font-size: .20rem;color: #999;" >￥{{goods.reserve_price.rmb}}<span v-show="goods.reserve_price.corner!=='00'">.{{goods.reserve_price.corner}}</span></del>-->
                <span class="num">{{goods.volume}}件已售</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="height: .98rem;"></div>
    <div class="footer">
      <div class="f_1 f1_l" @click="toHome">
        <img src="/static/images/home.png" alt="">
        <span>首页</span>
      </div>
      <div class="f_1 " @click="toService">
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
          <p class="model_title">淘口令购买</p>
          <input type="text" :value="command" class="word" id="kouling">
          <p class="des">在点击复制后，打开淘宝APP购买</p>
          <p class="des">若一键复制失败，请长按虚线内文字</p>
          <button class="m_btn" data-clipboard-target="#kouling">
            一键复制
          </button>
        </div>
        <img src="../../static/images/cancel_img.png" alt="" @click="cancel1">
      </div>
    </div>
    <div v-show="show2" class="model">
      <div class="model_bd"></div>
      <img src="/static/images/qr.jpg" alt="" class="model_main rq">
      <img src="../../static/images/cancel_img.png" alt="" @click="cancel2" class="cancel">
    </div>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->
  </div>
</template>
<script>
  import {Cell, CellBox, CellFormPreview, Group, Badge, Loading} from 'vux'
  import Clipboard from 'clipboard'

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
        showLoading: false,
        show2: false,
        show1: false,
        show: false,
        goodsDetail: {
          title: '',
          pict_url: '',
          small_images: [],
          reserve_price: {
            rmb: '',
            corner: ''
          },
          zk_final_price: {
            rmb: '',
            corner: ''
          },
          volume: '',
          category:''
        },
        goodsList: [],
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
        command: '',
//        click_url:''
        id:'',
        type:'',
      }
    },
    methods: {
      //      商品详情
      getGoodsDetail: function () {
        this.id = this.$route.query.id;
        this.type=this.$route.query.type
        this.$http({
          method: 'POST',
          url: '/api/goodsDetail',
          data: {goods_id: this.id,type:this.type}
        }).then((res) => {
          if (res.data.code == '200') {
            this.goodsDetail = res.data.data
            this.click_url=res.data.data.click_url
          }
        }, (err) => {
          console.log(err)
        })
      },
      //     淘口令
      getCommand: function () {
        this.id = this.$route.query.id;
        this.$http({
          method: 'POST',
          url: '/api/command',
          data: {click_url:this.goodsDetail.click_url,pict_url:this.goodsDetail.pict_url,title:this.goodsDetail.title}
        }).then((res) => {
          if (res.data.code == '200') {
            this.command = res.data.data.command
          }
        }, (err) => {
          console.log(err)
        })
      },
      //      获取猜你喜欢商品列表
      getGoodsList: function () {
        this.id = this.$route.query.id;
        this.$http({
          method: 'POST',
          url: '/api/relevance',
          data:{id:this.id}
        }).then((res) => {
          if (res.data.code == '200') {
            this.goodsList = res.data.data.goodsList
//          console.log(this.goodsList)
          }
        }, (err) => {
          console.log(err)
        })
      },
      toHome() {
        this.$router.push({path: '/home'})
      },
      toDraw() {
        var isWeixin = this.is_weixin()
        if(isWeixin){
//          this.$router.push({path: '/goodsDetail/draw',query:{url:this.goodsDetail.click_url}})
          location.href='http://www.dxvke.com/goodsDetail/draw?url='+this.goodsDetail.click_url
        }else{
          location.href=this.goodsDetail.click_url
        }

      },
      toService() {
        this.show2 = true
        document.body.style.overflow = 'hidden';
      },
      cancel2() {
        document.body.style.overflow = 'scroll';
        this.show2 = false
      },
      toShow() {
        this.getCommand()
        this.show1 = true
        document.body.style.overflow = 'hidden';
      },
      cancel1() {
        document.body.style.overflow = 'scroll';
        this.show1 = false
      },
      click(id){
//        this.id=id
//        this.$router.push({name:'goodsDetail',query:{id:id}})
        location.href='http://www.dxvke.com/goodsDetail/?id='+id
//        this.toTop()
//        this.getGoodsDetail()
      },
      is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          return true;
        } else {
          return false;
        }
      },
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      }
    },
    created: function () {
      this.id=this.$route.query.id
      this.type=this.$route.query.type
      this.getGoodsList()
      this.getGoodsDetail()

    },
    mounted:function(){
      this.$nextTick(function () {
        let self = this
        const clipboard = new Clipboard('.m_btn')
        clipboard.on('success', function (e) {
          self.$vux.toast.show({
            text: "复制成功",
          })
          e.clearSelection();
        });
        clipboard.on('error', function (e) {
          self.$vux.toast.show({
            text: "请选择“拷贝”进行复制!",
            type: 'warn'
          })
        });
//        // 返回顶部
//        let back_btn = document.getElementsByClassName('toTop')[0];
//        window.onscroll = function () {
//          let top = document.documentElement.scrollTop || document.body.scrollTop;
//          if (top > 800) {
//            back_btn.style.display = 'block';
//          } else {
//            back_btn.style.display = 'none';
//          }
//        }
      })

    },
//    beforeRouteEnter(to,from,next){
//      next(vm=>{
//        vm.id=vm.$route.query.id
//        vm.type=vm.$route.query.type
//        vm.getGoodsList()
//        vm.getGoodsDetail()
//      })
//    }
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
    font-size: 0;
    background: white;
    padding: .22rem .22rem .3rem;
  }

  .detail .name {
    font-size: .32rem;
    color: #333333;
  }

  .prices {
    font-size: .6rem;
    color:#ff425f;
  }

  .prices small {
    font-size: .36rem;
  }

  .juan {
    font-size: .2rem;
    color: #ff425f;
    border: .01rem solid #ff425f;
    border-radius: .05rem;
    margin-left: .2rem;
  }

  .juan_l {
    border-right: .01rem dotted #ff425f;
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

  .slide img {
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

  .guss {
    font-size: .32rem;
    color: #333333;
    padding-left: .2rem;
    border-left: .05rem solid #ff425f;
    background-color: white;
    line-height: .35rem;
    margin: .2rem 0;
  }

  .guss_main {
    background-color: white;
    overflow: hidden;
  }

  /*猜你喜欢商品*/
  .goods {
    overflow: hidden;
  }
  .goods li{
    font-size: 0;
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
    color: #ff425f;
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
    border-top: .01rem solid #eeeeee;
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
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .model_main {
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    width: 5.98rem;
    height: 3.46rem;
    margin: 2.5rem calc((100% - 5.98rem) / 2);
    background-color: white;
    border-radius: .15rem;
  }

  .model_main_des {
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .model_main_des > .des {
    font-size: .2rem;
    color: #666666;
    margin: 0 .16rem;
    line-height: .45rem;
    height: .45rem;
  }

  .m_btn {
    display: inline-block;
    font-size: .24rem;
    color: white;
    width: 4.64rem;
    line-height: .42rem;
    border-radius: .3rem;
    border: none;
    background: -webkit-linear-gradient(left, #ff526d, #f8214f); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, #ff526d, #f8214f); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, #ff526d, #f8214f); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, #ff526d, #f8214f); /* 标准的语法 */
  }

  .model_main img {
    width: .5rem;
    height: .5rem;
    position: absolute;
    top: -.7rem;
    right: -.6rem;
  }

  .model_title {
    color: white;
    font-size: .32rem;
    text-align: center;
    line-height: .72rem;
    border-radius: .15rem .15rem 0 0;
    background: -webkit-linear-gradient(left, #ff526d, #f8214f); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, #ff526d, #f8214f); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, #ff526d, #f8214f); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, #ff526d, #f8214f); /* 标准的语法 */
  }

  .word {
    border: .01rem dotted #ff425f;
    text-align: center;
    background-color: #ffe7eb;
    font-size: .32rem;
    line-height: .88rem;
    color: #666666;
    margin: .10rem .16rem;
    border-radius: .1rem;
  }

  .rq {
    width: 2.2rem;
    height: 2.2rem;
    margin: calc((100% - 2.2rem) / 2) calc((100% - 2.2rem) / 2);
  }

  .cancel {
    width: .5rem;
    height: .5rem;
    position: fixed;
    right: calc(((100% - 2.2rem) / 2) - .5rem);
    top: calc(((100% - 2.2rem) / 2) - 3rem);
    z-index: 200;
  }
</style>
