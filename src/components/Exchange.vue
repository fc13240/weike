<template>
  <div style="">
    <div style="position: fixed;z-index: 99999;width: 100%;">
      <tab :line-width=3 active-color='#ff425f' v-model="index" custom-bar-width=".8rem" bar-active-color="#ff425f">
        <tab-item class="vux-center" :selected="type === index" v-for="(item, index) in typeList" :key="index" @on-item-click="change(typeList,index)">{{item}}</tab-item>
      </tab>
    </div>
    <div class="main" style="overflow: hidden;">
      <div class="page1" style="margin-top: 44px;">
        <figure style="text-align: center;padding-top: 1.1rem;" v-show="!list1.length">
          <img src="/static/images/empty_img.png" alt="" style="width:1.86rem;height:1.8rem;">
          <figcaption style="font-size: .28rem;color: #999;">暂时没有兑换记录~</figcaption>
        </figure>
        <div class="list_m" v-show="list1.length" style="background-color: white;">
          <p class="tip">累计为您成功免单{{free_money}}元</p>
          <div class="list"  v-for="list1 in list1">
            <img :src="list1.product_image" alt="" :onerror="defaultImg">
            <div class="list_c">
              <p class="title" style="line-height: .4rem;">
                <span style="display: inline-block;width: 1.6rem;overflow: hidden;height: .4rem;">{{list1.product_name}}</span>
                <span style="float: right;font-size: .24rem;color: #ff425f;" v-show="list1.express_status==1">未发货</span>
                <span style="float: right;font-size: .24rem;color: #ff425f;" v-show="list1.express_status==2">已发货</span>
                <span style="float: right;font-size: .24rem;color: #ff425f;" v-show="list1.express_status==3">已发货</span>
              </p>
              <p style="line-height: .3rem;margin-top: -.1rem;"><span style="font-size: .2rem;color: #333333;">x{{list1.exchange_num}}</span></p>
              <p class="date">日期：{{list1.update_time}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->

    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
  import {XHeader,Tab, TabItem,Loading} from 'vux'
  const list = () =>['全部','虚拟类','实物类']
  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Loading
    },
    data () {
      return {
        typeList:list(),
        showLoading:false,
        loadText:'加载中...',
        list1:[],
        free_money: '',
        type: '',
        index:0,
        acer_type:3,
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
//      //      获取兑换记录分类
//      getExchangeType:function(){
//        this.showLoading = true
//        this.$http({
//          method:'POST',
//          url:'/api/myexchange_type'
//        }).then((res)=>{
//          if(res.data.code=='200'){
//            this.showLoading = false
//            const exchangeType=res.data.data.acer_type
//            this.exchangeType= exchangeType
//          }
//        },(err)=>{})
//      },
      //      获取兑换记录列表
      getList1:function(e){
        this.showLoading = true
        this.$http({
          method:'POST',
          url:'/api/myexchange',
          data:{acer_type:e}
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading = false
            const list1 = res.data.data.acer_goods
            const free_money = res.data.data.free_money
            this.free_money = free_money
            this.list1 = list1
          }
        },(err)=>{})
      },
      change:function(typList,index){
        this.free_money = '';
        this.list1 = '';
        this.showLoading = true;
        if(index==2){
          this.acer_type=2
        }else if(index==1){
          this.acer_type=1
        }else{
          this.acer_type=3
        }
        this.getList1(this.acer_type)
      },
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      }
    },
    created:function(){
      this.showLoading = true
//      this.getExchangeType();
      this.getList1(this.acer_type);
    },
    mounted:function(){
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
  .tab-swiper {
    background-color: #fff;
  }
  .main{
    height: 100%;
    width: 100%;
    /*background-color: white;*/
  }
  .tip{
    background-color: #f4f4f4;
    text-align: center;
    font-size: .24rem;
    color: #666;
    line-height: .5rem;
  }
  .list{
    padding: .3rem;
    border-bottom: .02rem solid #f4f4f4;
  }
  .list img{
    width: 2.0rem;
    height: 1.1rem;
    float: left;
  }
  .title{
    font-size: .24rem;
    color: #333;
  }
  .date{
    font-size: .2rem;
    color: #999;
    line-height: .4rem;
  }
  .list_c{
    height: 1.1rem;
    margin-left: 2.1rem;
  }
</style>
