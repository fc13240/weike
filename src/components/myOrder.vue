<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">我的订单</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div>
      <tab :line-width=3 active-color='#ff425f' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff425f">
        <!--@click="type = item" -->
        <tab-item class="vux-center" :selected="type === index" v-for="(item, index) in list2" :key="index"  @on-item-click="change(list2,index)">{{item}}</tab-item>
      </tab>
    </div>
    <div class="main">
      <div class="page1" v-show="index==0">
        <div>
            <x-input title="订单号" placeholder="请输入订单号" keyboard="number" type="number" style="color: #333;font-size: .32rem;border-top: .16rem solid #f4f4f4;border-bottom: .16rem solid #f4f4f4;padding: .4rem .5rem" v-model="orderNum"></x-input>
         <div style="padding: .20rem .34rem 0;">
           <img src="/static/images/myOrder_header.png" alt="" style="height: 1.8rem;width: 100%;">
           <p style="padding: .2rem 0 .15rem;font-size: .24rem;color: #333;">以下情况无法参与下单返元宝活动</p>
           <div style="font-size: .22rem;color: #999999;line-height: .4rem;margin-left: .15rem;">
             <p>1. 未使用本站淘口令或链接购买</p>
             <p>2. 打开商品后没有直接下单</p>
             <p>3. 同一个淘宝订单号提交多次</p>
             <p>注：本活动最终解释权归本平台所有，如有疑问请联系客服。</p>
           </div>
           <p style="padding: .2rem 0 .2rem;border-bottom: 1px solid #f4f4f4;font-size: .24rem;color: #333;">如何找到返元宝订单号？</p>
         </div>
          <img src="/static/images/detail2.png" alt="" style="width: 100%;">
          <div style="height: 1.34rem;"></div>
          <div class="btn">
            <x-button @click.native="submit()" action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;">确认提交</x-button>
          </div>
        </div>
      </div>
      <div class="page2" v-show="index !==0">
        <figure style="text-align: center;padding: 1rem 0;" v-show="orderList.length==0">
          <img src="/static/images/nothing_img.png" alt="" style="width:1.52rem;height:1.4rem;">
          <figcaption style="font-size: .28rem;color: #666;">暂时没有相关订单记录~</figcaption>
        </figure>
        <div class="order_list" v-show="orderList.length" v-for="list in orderList">
          <p class="orderNum"><span style="color: #999;">订单号: </span><span class="order_num" v-text="list.order_num">8089808080800808080</span>
            <span style="color: #ff526d;float: right;" v-show="list.back_status=='1'">已返</span>
            <span style="color: #ff526d;float: right;" v-show="list.back_status=='2'">待返</span>
            <span style="color: #ff526d;float: right;" v-show="list.back_status=='3'">拒绝</span>
          </p>
          <div class="order_main" style="position: relative;">
            <img src="/static/images/order_img.png" alt="">
            <div class="order_main_des" style="width: calc(100% - 1.44rem);">
              <div style="padding: 0 .2rem;">
                <p style="margin-bottom: .1rem;"> <span class="btn1">返{{list.back_acer}}元宝</span></p>
                <p style="font-size: .2rem;color: #999999;">日期：{{list.create_time}}</p>
                <router-link :to="{name:'toShowList',query:{order_num:list.order_num}}"><span class="btn2" style="position: absolute;">去晒单</span></router-link>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->

  </div>
</template>
<script>
  import { XHeader,Tab, TabItem, XInput,XButton,Toast,Loading} from 'vux'
  const list = () => ['添加订单', '全部订单', '待返订单','已返订单'];

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Toast,
      XHeader,
      XInput,
      XButton,
      Loading
    },
    data () {
      return {
        showLoading:false,
        loadText:'加载中...',
        orderNum:'',
        type:'',
        list2: list(),
        index: 0,
        orderList:[],
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      //      获取订单列表
      getOrderList: function (e) {
        this.type = this.$route.params.type;
        this.showLoading = true
        this.$http({
          method: 'POST',
          url: '/api/myOrder',
          data: {back_status: e}
        }).then((res) => {
          if (res.data.code == '200') {
            this.showLoading = false
            this.orderList = res.data.data.order_list
            //       console.log(this.orderList)
          }
        }, (err) => {
          console.log(err)
        })
      },
      //      提交订单操作
      submit: function () {
        if(this.orderNum !==''){
          this.$http({
            method: 'POST',
            url: '/api/addOrder',
            data: {order_num: this.orderNum}
          }).then((res) => {
            if (res.data.code == '200') {
              this.orderNum = ''
              this.$vux.toast.show({
                text: res.data.data.message
              })

            } else {
              this.$vux.toast.show({
                text: res.data.data.message
              })
            }
          }, (err) => {
            console.log(err)
          })
        }else{
          this.$vux.toast.show({
            type:'warn',
            text: "订单号不能为空！"
          })
        }

      },
      change: function (list2, index) {
        this.orderList='';
        this.showLoading = true
        this.type = index;
        this.getOrderList(this.type)
      },
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      }
    },
    mounted(){

      const add_b = document.getElementsByClassName('weui-cell__primary');
      add_b[0].style.borderBottom='1px solid #f4f4f4'
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
      this.type = this.$route.params.type;
      this.getOrderList(this.type)

    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
  .main{
    height: 100vh;
    background-color: white;
  }
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
  .order_list{
    border-bottom: .16rem solid #f4f4f4;
  }
  .orderNum{
    font-size: .24rem;padding: .2rem .7rem .15rem .36rem;background-color: white;
  }
  .order_num{
    color: #333;
  }
  .order_main{
    padding: 0rem .36rem .3rem;font-size: 0;
  }
  .order_main>img{
    width: .8rem;height: .8rem;vertical-align: middle;
  }
  .order_main_des{
    display: inline-block;vertical-align: middle;width: calc(100% - 1.44rem);
  }
  .btn1{
    color: #ff526d;font-size: .2rem;border: .01rem solid #ff526d;border-radius: .05rem;padding:0 .1rem;
  }
  .num{
    font-size: .28rem;color: #333;float: right;
  }
  .btn2{
    color: #ff526d;border: 1px solid #ff526d;border-radius: .5rem;
    padding: .05rem .3rem;
    font-size: .24rem;
    position: absolute;
    right: .38rem;
    bottom: .5rem;
  }
</style>
