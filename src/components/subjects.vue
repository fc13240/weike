<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;border-bottom: 1px solid #e1e1e1;position: fixed;z-index: 10;width: 100%;top: 0;">9.9专区</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff526d"
         style="border-bottom: 1px solid #e1e1e1;">
      <tab-item class="vux-center" :selected="index==0" v-for="(item, index) in sortsType" @on-item-click="change(sortsType,index)"
                :key="index">{{item.sort_name}}
      </tab-item>
    </tab>

    <div class="goods_list">
      <ul class="goods">
        <li v-for="list in goodsList">
          <router-link :to="{name:'goodsDetail',query:{id:list}}">
            <img :src="list.pict_url" alt="" class="pic">
          </router-link>
          <div class="content">
            <p class="title" v-text="list.title">产品标题产品标题</p>
            <p class="des" v-text="list.title">产品补充介绍</p>
            <div style="margin-top: .35rem;position: relative;">
              <span style="font-size: .24rem;color: #999;">已售 <span style="color: #ff526d;" v-text="list.volume">411</span>件</span>
              <div>
                <span class="new_num"><span style="font-size: .2rem;">￥</span>{{list.zk_final_price.rmb}}<span v-show="list.zk_final_price.corner!=='00'" style="font-size: .2rem">.{{list.zk_final_price.corner}}</span></span>
                <del class="old_num">￥{{list.zk_final_price.rmb}}<span v-show="list.zk_final_price.corner!=='00'">.{{list.zk_final_price.corner}}</span></del>
              </div>
              <div style="position: absolute;right: 0;bottom: .05rem;text-align: center;">
                <p style="font-size: .24rem;color: #ff526d;">领券立减{{list.volume}}元</p>
                <router-link :to="{name:'goodsDetail',query:{id:list}}">
                  <span style="border-radius: .5rem; width: 1.16rem;font-size: .24rem;color: white;background-color: #ff526d;line-height: .46rem;display: inline-block;margin-top: .05rem;">立刻抢 <img src="../assets/lt_white.png" alt="" style="width: .10rem;height: .16rem;"></span>
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
    <div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>

  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import {Tab, TabItem,Loading} from 'vux'

//  const list = () => ['综合排序', '销量优先', '价格优先', '优惠幅度']

  export default {
    name: 'subject',
    components: {
      Tab,
      TabItem,
      XHeader,
      Loading
    },
    data() {
      return {
        sortsType:[],
        goodsList:[],
        type_id:'',
        index: 0,
        sorts:'',
        showLoading:false,
        loadText:'加载中...',
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      //      9.9专区排序
      getSortsType:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/nine_sort'
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.sortsType = res.data.data.sorts_type
            this.sort = this.sortsType[this.index].id
            this.getGoods()
          }else if(res.data.code=='400'){
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      9.9专区商品====19.9专区商品
      getGoods:function(){
        console.log(this.sort)
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/nine',
          data:{sort:this.sort,type_id:this.type_id}
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.goodsList = res.data.data.nine_products
          }else if(res.data.code=='400'){
//            this.$vux.toast.show({
//              type:"cancel",
//              text:res.data.message
//            })
          }
        },(err)=>{
          console.log(err)
        })
      },
      change(sortsType,index){
        this.goodsList=[]
        this.sort = sortsType[index].id
//        console.log(this.sort)
        this.getGoods()
      },
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      }
    },
    mounted() {
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color = '#333'
      // 返回顶部
      let back_btn = document.getElementsByClassName('toTop')[0];
      window.onscroll = function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 800) {
          back_btn.style.display = 'block';
        } else {
          back_btn.style.display = 'none';
        }
      }
    },
    created:function(){
      this.type_id = this.$route.query.type_id
      this.getSortsType()
    }
  }
</script>
<style scoped>
  ul {
    font-size: 0;
    overflow: hidden;
  }

  .goods {
    background-color: white;
  }

  .goods li {
    overflow: hidden;
    padding: .22rem .2rem;
    border-bottom: 1px solid #f4f4f4;
  }

  .pic {
    width: 2.4rem;
    height: 2.24rem;
    float: left;
  }

  .content {
    width: calc(100% - 2.4rem - .44rem);
    padding: 0 .22rem;
    display: inline-block;
  }

  .title {
    font-size: .32rem;
    color: #333333;
    height: .5rem;
    overflow: hidden;
  }

  .des {
    height: .38rem;
    overflow: hidden;
    font-size: .24rem;
    color: #ff526d;
  }

  .new_num {
    font-size: .4rem;
    color: #ff526d;
  }

  .old_num {
    font-size: .2rem;
    color: #999999;
    margin-left: .1rem;
  }
</style>
