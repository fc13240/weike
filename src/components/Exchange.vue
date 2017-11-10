<template>
  <div>
    <div>
      <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width=".8rem" bar-active-color="#ff526d">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in exchangeType" @click="demo2 = item" :key="index">{{item.type_name}}</tab-item>
      </tab>
      <swiper v-model="index"  :show-dots="false" style="height: calc(100vh - 44px);overflow: scroll;">
        <swiper-item v-for="(item, index) in exchangeType" :key="index" style="overflow: scroll;">
          <div class="tab-swiper vux-center">
            <div class="main">
              <div class="page1">
                <figure style="text-align: center;padding-top: 1.1rem;">
                  <img src="/static/images/empty_img.png" alt="" style="width:1.86rem;height:1.8rem;">
                  <figcaption style="font-size: .28rem;color: #666;">暂时没有兑换记录~</figcaption>
                </figure>
                <div class="list_m">
                  <p class="tip">累计为您成功免单14324元</p>
                  <div class="list">
                    <img src="../assets/logo.png" alt="">
                    <div class="list_c">
                      <p class="title">10元现金红包</p>
                      <p class="date">日期：2017.10.28</p>
                    </div>
                  </div>
                </div>
                <div class="list_m">
                  <p class="tip">累计为您成功免单14324元</p>
                  <div class="list">
                    <img src="../assets/logo.png" alt="">
                    <div class="list_c">
                      <p class="title">10元现金红包</p>
                      <p class="date">日期：2017.10.28</p>
                    </div>
                  </div>
                </div>
                <div class="list_m">
                  <p class="tip">累计为您成功免单14324元</p>
                  <div class="list">
                    <img src="../assets/logo.png" alt="">
                    <div class="list_c">
                      <p class="title">10元现金红包</p>
                      <p class="date">日期：2017.10.28</p>
                    </div>
                  </div>
                </div>
                <div class="list_m">
                  <p class="tip">累计为您成功免单14324元</p>
                  <div class="list">
                    <img src="../assets/logo.png" alt="">
                    <div class="list_c">
                      <p class="title">10元现金红包</p>
                      <p class="date">日期：2017.10.28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>

  </div>
</template>
<script>
  import {XHeader,Tab, TabItem,Swiper,SwiperItem} from 'vux'

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Swiper,SwiperItem
    },
    data () {
      return {
        exchangeType:[],
        exchangeTypeList:[],
        demo2:"全部",
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      //      获取兑换记录分类
      getExchangeType:function(){
        this.$http({
          method:'POST',
          url:'/api/myexchange_type'
        }).then((res)=>{
          if(res.data.code=='200'){
            const exchangeType=res.data.data.acer_type
            this.exchangeType= exchangeType
          }
        },(err)=>{})
      },
    },
    created:function(){
      this.getExchangeType()
    },
    mounted(){
      console.log(document.getElementsByClassName('vux-swiper')[0].style.height='500px')
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
