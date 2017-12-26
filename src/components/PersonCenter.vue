<template>
  <div>
    <router-link class="top" to="/personCenter/userInfo" tag="div">
      <img :src="info.head_image" alt="" class="photo" :onerror="defaultImg">
      <div class="info">
        <p class="name" v-text="info.user_name">昵称</p>
        <p class="num"><img src="../assets/yuanBao_white.png" alt="" class="yuanBao">元宝 {{info.user_acer}}</p>
      </div>
      <img src="../../static/images/gt.png" alt=""
           style="width: .16rem;height: .28rem;position: absolute;right: .34rem; top: .9rem;">
    </router-link>
    <group>
      <cell title="我的订单" value="查看全部" is-link :link="{name:'myOrder',params:{type: 0}}"></cell>
    </group>
    <div>
      <ul class="nav-small">
        <router-link :to="{name:'myOrder',params:{type: 0}}" tag="li">
          <img src="../assets/add_order.png">
          <span>添加</span></router-link>
        <router-link :to="{name:'myOrder',params:{type: 1}}" tag="li"><img src="../assets/all_order.png">
          <span>全部</span></router-link>
        <router-link :to="{name:'myOrder',params:{type: 2}}" tag="li"><img src="../assets/stay_order.png">
          <span>待返</span></router-link>
        <router-link :to="{name:'myOrder',params:{type: 3}}" tag="li"><img src="../assets/return_order.png">
          <span>已返</span></router-link>
      </ul>
      <ul class="nav-big">
        <router-link tag="li" :to="{name:'addressList',query:{type:2}}"><img src="../assets/receive_manage.png">
          <span>收货管理</span></router-link>
        <router-link tag="li" to="/PersonCenter/myTracks"><img src="../assets/my_footer.png">
          <span>我的足迹</span></router-link>
        <router-link tag="li" to="/home/Exchange"><img src="../assets/exchange.png">
          <span>我的兑换</span></router-link>
        <router-link tag="li" to="/PersonCenter/sign"><img src="../assets/sign.png">
          <span>每日签到</span></router-link>
      </ul>
    </div>
    <div style="position: relative;background-color: white;">
      <img src="../assets/message.png" alt="" style="width: 20px;height: 20px;margin-right: 5px;position: absolute;left: 14px;top: 10px;">
      <cell title="消息中心" is-link link="/PersonCenter/notice" style="padding-left: 45px;">
        <div class="badge-value">
          <span class="vertical-middle"> &nbsp;</span>
          <badge :text="info.message_count" v-show="info.message_count!==0"></badge>
        </div>
      </cell>
    </div>
    <panel :list="list" :type="type" style="margin-bottom: 1.06rem;margin-top: 0;"></panel>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>

</template>
<script>
  import {Badge,Group, Cell, CellBox,Panel,Loading} from 'vux'
  import  share_list from '../assets/share_list.png'
  import share_oters from '../assets/share_others.png'
  import help_center from '../assets/help_center.png'
  import feedback_icon from '../assets/feedback_icon.png'
  import server_icon from '../assets/server_icon.png'
  export default {
    name: 'PersonCenter',
    components: {
      Group,
      Cell,
      CellBox,
      Panel,
      Badge,
      Loading
    },
    data() {
      return {
        info:{},
        from:'',
        type: '3',
        showLoading:false,
        loadText:'加载中...',
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
        list: [
          {
            src: share_list,
            title: '我的晒单<span style="float: right;font-size: .24rem;color: #999;margin-top: .03rem;">评价晒单赚元宝</span>',
            url: '/personCenter/shareList'
          }
//          ,
//          {
//            src: share_oters,
//            title: '我要分羹<span style="float: right;font-size: .24rem;color: #999;margin-top: .03rem;">功能升级中</span>',
//            url: '/component/cell'
//          }
          ,
//          {
//            src:help_center ,
//            title: '帮助中心',
//            url: '/component/cell'
//          },

          {
            src: feedback_icon ,
            title: '意见反馈',
            url: '/personCenter/feedback'
          },
//          {
//            src: server_icon,
//            title: '官方客服',
//            url: '/component/cell'
//          }

        ]
      }
    },
    methods: {
//      用户信息
      userInfo:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/center',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.info = res.data.data
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
    },
    created:function(){
     this.userInfo()
    },
    mounted:function(){

    }
  }
</script>
<style scoped="">
  .top {
    background-color: #ff526d;
    padding: .44rem .34rem;
    position: relative;
  }

  .photo {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  .info {
    color: white;
    display: inline-block;
    vertical-align: middle;
    line-height: .6rem;
    margin-left: .3rem;
  }

  .name {
    font-size: .36rem;
  }

  .num {
    font-size: .2rem;

  }

  .yuanBao {
    width: .3rem;
    height: .24rem;
    margin-right: .1rem;
  }

  .nav-small, .nav-big {
    overflow: hidden;
    padding: .38rem .2rem .1rem .2rem;
    background-color: white;
    margin-bottom: .16rem;
  }

  .nav-small li, .nav-big li {
    margin-bottom: .25rem;
    width: 25%;
    float: left;
    list-style: none;
    text-align: center;
  }

  .nav-small li img {
    width: .4rem;
    height: .36rem;
    margin: 0 auto;
  }

  .nav-big li img {
    width: .48rem;
    height: .48rem;
    margin: 0 auto;
  }

  .nav-small li span, .nav-big li span {
    font-size: .24rem;
    color: #333333;
    display: block;
  }
</style>
<style>
  .vux-label {
    font-size: .28rem;
    color: #333;
  }

  .weui-cell__ft {
    font-size: .24rem;
    color: #999;
  }

  .weui-cell_access .weui-cell__ft:after {
    border-color: #999;
  }

  .weui-cells {
    margin-top: 0 !important;
  }
  .weui-cell__bd p{
    font-size: .28rem;
    color: #333;
    margin: 0 5px;
  }
</style>




