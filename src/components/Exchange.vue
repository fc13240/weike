<template>
  <div>
    <div>
      <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width=".8rem" bar-active-color="#ff526d">
        <tab-item class="vux-center" :selected="index === demo2" v-for="(item, index) in exchangeType" :key="index" @on-item-click="change(exchangeType,index)">{{item.type_name}}</tab-item>
      </tab>
    </div>
    <div class="main">
      <div class="page1">
        <figure style="text-align: center;padding-top: 1.1rem;" v-show="!list1.length">
          <img src="/static/images/empty_img.png" alt="" style="width:1.86rem;height:1.8rem;">
          <figcaption style="font-size: .28rem;color: #666;">暂时没有兑换记录~</figcaption>
        </figure>
        <div class="list_m" v-show="list1.length">
          <p class="tip">累计为您成功免单{{free_money}}元</p>
          <div class="list"  v-for="list1 in list1">
            <img :src="list1.product_image" alt="" :onerror="defaultImg">
            <div class="list_c">
              <p class="title">{{list1.product_name}}</p>
              <p class="date">日期：{{list1.update_time}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="page2" v-show="index==1">-->
        <!--<figure style="text-align: center;padding-top: 1.1rem;" v-show="!list2.length">-->
          <!--<img src="/static/images/empty_img.png" alt="" style="width:1.86rem;height:1.8rem;">-->
          <!--<figcaption style="font-size: .28rem;color: #666;">暂时没有兑换记录~</figcaption>-->
        <!--</figure>-->
        <!--<div class="list_m" v-show="list2.length">-->
          <!--<p class="tip">累计为您成功免单{{free_money}}元</p>-->
          <!--<div class="list"  v-for="list2 in list2">-->
            <!--<img :src="list2.product_image" alt="">-->
            <!--<div class="list_c">-->
              <!--<p class="title">{{list2.product_name}}</p>-->
              <!--<p class="date">日期：{{list2.update_time}}</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="page2" v-show="index==2">-->
        <!--<figure style="text-align: center;padding-top: 1.1rem;" v-show="!list3.length">-->
          <!--<img src="/static/images/empty_img.png" alt="" style="width:1.86rem;height:1.8rem;">-->
          <!--<figcaption style="font-size: .28rem;color: #666;">暂时没有兑换记录~</figcaption>-->
        <!--</figure>-->
        <!--<div class="list_m" v-show="list3.length">-->
          <!--<p class="tip">累计为您成功免单{{free_money}}元</p>-->
          <!--<div class="list"  v-for="list3 in list3">-->
            <!--<img :src="list3.product_image" alt="">-->
            <!--<div class="list_c">-->
              <!--<p class="title">{{list3.product_name}}</p>-->
              <!--<p class="date">日期：{{list3.update_time}}</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
  import {XHeader,Tab, TabItem,Loading} from 'vux'

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Loading
    },
    data () {
      return {
        exchangeType:[],
        exchangeTypeList:[],
        showLoading:false,
        loadText:'加载中...',
        list1:[],
        list2:[],
        list3:[],
        free_money: '',
        demo2: 0,
        index: 0,
        acer_type:3,
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      //      获取兑换记录分类
      getExchangeType:function(){
        this.showLoading = true
        this.$http({
          method:'POST',
          url:'/api/myexchange_type'
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading = false
            const exchangeType=res.data.data.acer_type
            this.exchangeType= exchangeType
          }
        },(err)=>{})
      },
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
      change:function(exchangeType,index){
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
      }
    },
    created:function(){
      this.showLoading = true
      this.getExchangeType();
      this.getList1(this.acer_type);
    },
    mounted:function(){

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
    background-color: white;
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
    width: 1.9rem;
    height: 1.1rem;
    border: 1px solid red;
    float: left;
  }
  .title{
    font-size: .24rem;
    color: #333;
    line-height: .6rem;
  }
  .date{
    font-size: .2rem;
    color: #999;
    line-height: .4rem;
  }
  .list_c{
    height: 1.1rem;
    display: inline-block;
    margin-left: .3rem;
  }
</style>
