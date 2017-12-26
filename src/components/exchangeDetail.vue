<template>
  <div>
    <!--<x-header :left-options="{backText: ''}"-->
              <!--style="padding: 2px 0 ;background-color: #ff526d;position: fixed;z-index: 10;width: 100%;top: 0;">兑换详情-->
    <!--</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="main">
      <div class="goods">
          <img :src="data.product_image" alt="" class="pic" :onerror="defaultImg">
          <div style="display: inline-block;vertical-align: middle;">
            <p class="goods_title" v-text="data.product_name">10元现金红包</p>
            <p><span style="font-size: .36rem;color: #ff526d;" v-text="data.exchange_acer">1000</span> <img src="/static/images/yuanbao_red.png" alt=""
                                                                                class="yuanBao">
              <del style="font-size: .24rem;color: #999;">￥{{rmb}} <span v-show="corner!=='00'">.{{corner}}</span></del>
            </p>
          </div>
          <p class="has_num">剩余 <span style="color: #ff526d;" v-text="data.stock">88</span> 件</p>
      </div>
        <x-number v-model="value"  fillable :title="'请输入兑换数量'" style="padding: 10px 0;font-size: .24rem;color: #666666;border-bottom: 1px solid #e9e9e9;"></x-number>
    </div>
    <div style=" background-color: white;">
      <div style="padding: .2rem .3rem;" v-show="data.type==2">
        <p style="font-size: .24rem;color: #666;padding: .2rem  0 .1rem;">请输入您提现的支付宝账号</p>
        <div style="margin: .2rem 0 .5rem;">
          <img src="../assets/alipay_img.png" alt="" style="width: 1.38rem;height: .48rem;vertical-align: middle">
          <input type="text" v-model="alipay"
                 style="vertical-align: middle;outline: none;width: 4.8rem;padding: .12rem .2rem; float: right;border: 1px solid #b1b1b1;border-radius: .05rem;">
        </div>
      </div>
      <div style="padding: .2rem .3rem;" v-show="data.type==1">
        <p style="font-size: .24rem;color: #666;margin: .2rem  0 .1rem;">请输入您要充值的手机号</p>
        <div style="display: inline-block;">
          <input type="number"
                 style="-webkit-appearance: none;-webkit-tap-highlight-color:rgba(255,0,0,0);vertical-align: middle;outline: none;width: 4.5rem;padding: .12rem .2rem; float: right;border: 1px solid #b1b1b1;border-radius: .05rem;" v-model="tel">
        </div>
      </div>
      <div style="padding-bottom: .25rem;" v-show="data.product_type==2">
          <cell title="配送至:" value="修改地址" is-link :link="{name:'addressList',query:{type:'1',id:id}}"></cell>
        <div style="font-size: .24rem;border: 1px solid #f4f4f4;width: 5.8rem;margin: 0 auto;padding: .26rem .3rem;">
          <p style="color: #666;"><span style="margin-right: .24rem; padding: .01rem .1rem;color: #ff526d;border: 1px solid #ff526d;" v-text="addressInfo.is_default==1?'默认':'地址'">默认</span>{{addressInfo.address_array+addressInfo.address}}</p>
          <p style="color: #999;margin-left: .95rem;"><span style="margin-right: .1rem;" v-text="addressInfo.person_name">姓名</span><span v-text="addressInfo.telephone">13298309372</span></p>
        </div>
      </div>
    </div>
    <div class="des">
      <h4>兑换说明：</h4>
      <p style="font-size: .24rem;color: #999;" v-text="data.exchange_brief">成功提交后奖品将在1-3个工作日内发放到提交账户内。</p>
      <!--<p style="font-size: .24rem;color: #999;">请耐心等待并在我的兑换内进行查看。</p>-->
      <h4>商品详情：</h4>
      <p class="contents" v-text="data.content">介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容</p>
      <div class="picture">
        <img :src="list.image" alt="" :onerror="defaultImg" v-for="list in data.small_images">
      </div>
    </div>
    <div style="height: 1.34rem;"></div>
    <div class="btn">
      <x-button @click.native="toExchange()" action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;">立刻兑换</x-button>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
  import {XHeader, XNumber,XButton,Group,Cell,Loading} from 'vux'

  export default {
    name: 'exchangeDetail',
    components: {
      XHeader,
      XNumber,
      XButton,
      Group,
      Cell,
      Loading
    },
    data () {
      return {
        showLoading:false,
        loadText:'加载中...',
        roundValue: 0,
        data:{},
        rmb:'',
        corner:'',
        address:{},
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
        type:1,
        value:1,
        id:'',
        tel:'',
        alipay:'',
        address_id:'',
        addressInfo:{}
      }
    },
    methods: {
      //      兑换详情-商品详情
      getExchangeInfo:function(){
        this.ids = this.$route.query.address_id
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/exchangeinfo',
          data:{product_id:this.id}
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            const data = res.data.data.product_info
            this.data= data
            this.address_id = res.data.data.default_address.address_id
            this.corner = data.market_price.corner
            this.rmb = data.market_price.rmb
//            console.log(res.data.data.)
            if(this.ids){
              this.getAddressDetail(this.ids)
            }else{
              this.getAddressDetail(res.data.data.default_address.address_id)
            }

          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      收货地址详情
      getAddressDetail:function(e){
        this.showLoading=true;
        this.$http({
          method:'GET',
          url:'/api/updateAddress',
          params:{address_id:e}
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false;
            this.addressInfo=res.data.data.address_info
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      兑换商品
      toExchange:function(){

        if(this.ids){
          var data={
            number:this.value,
            product_id:this.id,
            telephone:this.tel,
            alipay:this.alipay,
            address_id:this.ids
          }
        }else{
          var data={
            number:this.value,
            product_id:this.id,
            telephone:this.tel,
            alipay:this.alipay,
            address_id:this.address_id
          }
        }
        console.log(data)
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/exchange',
          data:data
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.$vux.toast.show({
              text:res.data.data.message
            })
            this.$router.replace({name: 'yuanBaoShop'})

          }else if(res.data.code=='400'){
            this.$vux.toast.show({
              text:res.data.error,
              type:'cancel'
            })
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      change (val) {
        console.log('change', val)
      }
    },
    mounted(){
      const svg = document.getElementsByTagName('svg');
      const sub = document.getElementsByClassName('vux-number-selector-sub');
      const plus = document.getElementsByClassName('vux-number-selector-plus');
      const num =document.getElementsByClassName('vux-number-input');
      num[0].style.cssText="font-size:.24rem;color:#666;width:.64rem;outline:none";
      sub[0].style.cssText="background-color:#e1e1e1;width:.38rem;padding:4px 4px 2px;";
      plus[0].style.cssText="background-color:#e1e1e1;width:.38rem;padding:4px 4px 2px;";
      svg[0].style.fill='#878787';
      svg[1].style.fill='#878787';
    },
    created:function(){

      this.showLoading=true
      this.id = this.$route.query.id
      this.getExchangeInfo()
    }
  }
</script>
<style scoped>
  .main {
    background-color: white;
    padding: .2rem .3rem 0;
  }

  .goods {
    margin: 0 auto;
    padding: .24rem .18rem 0;
    border-width: 0.06rem 0.01rem 0.02rem;
    border-style: solid;
    border-color: #ff526d #e9e9e9 #e9e9e9;
    border-radius: .08rem;
  }

  .pic {
    width: 1.5rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: .1rem;
  }

  .goods_title {
    font-size: .32rem;
    color: #333;
  }

  .yuanBao {
    width: .26rem;
    height: .20rem;
  }

  .has_num {
    font-size: .24rem;
    border-top: 1px dashed #ff526d;
    margin-top: .15rem;
    color: #999;
    line-height: .5rem;
  }
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
  .des{
    margin-top: .2rem;
    background-color: white;
    padding: .2rem .3rem;
    font-size: 0;
  }
  .des h4{
    font-size: .28rem;
    color: #333333;
    padding: .2rem 0;
  }
  .des .contents{
    font-size: .28rem;
    color: #333;
  }
  .des .picture{
    width: 100%;
    margin-top: .2rem;
  }
  .des .picture img{
    display: block;
    width: 100%;
    height: 3.6rem;
  }
</style>
