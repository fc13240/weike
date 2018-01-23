<template>
  <div>
        <nav>
          <img  :src="type1.image" style="width: 100%;height: 100%;" :onerror="defaultImg">
          <img src="../assets/sanjiao.png" alt="" class="sanjiao">
        </nav>
    <router-link :to="{name:'subjects',query:{type_id:type1.type_id}}">
        <p class="title">
          <img src="/static/images/youhui_bd_img.png" alt="" >
          <span v-text="type1.store_name" class="subject_name"></span>
          <span class="to_subject">进入专场<img src="/static/images/gt_white.png" alt=""></span>
        </p>
    </router-link>
      <scroller lock-y :scrollbar-x=false>
        <div class="box1" ref="nav1">
          <router-link :to="{name:'goodsDetail',query:{id:goods1.id}}" v-for="(goods1,index) in goods1" id="box1-item" style="width: 2.18rem;" class="box1-item" :key="index">
          <div class="box_content">
              <img :src="goods1.pict_url" alt="" :onerror="defaultImg">
              <span class="dess">
            <p class="des_name" v-text="goods1.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods1.zk_final_price.rmb}}<span v-show="goods1.zk_final_price.corner!=='00'">.{{goods1.zk_final_price.corner}}</span></span>
              <!--<del class="old_price">￥{{goods1.reserve_price.rmb}}<span v-show="goods1.reserve_price.corner!=='00'">.{{goods1.reserve_price.corner}}</span></del>-->
            </p>
          </span>
          </div>
          </router-link>
        </div>
      </scroller>
      <nav>
        <img :src="type2.image" alt="" style="width: 100%;height: 100%;" :onerror="defaultImg">
        <img src="../assets/sanjiao.png" alt="" class="sanjiao">
      </nav>
    <router-link to="/YouHui/subjects" :to="{name:'subjects',query:{type_id:type2.type_id}}">
      <p class="title">
        <img src="/static/images/youhui_bd2_img.png" alt="" >
        <span v-text="type2.store_name" class="subject_name"></span>
        <span class="to_subject">进入专场<img src="/static/images/gt_white.png" alt=""></span>
      </p>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav2">
        <router-link :to="{name:'goodsDetail',query:{id:goods2.id}}" style="width: 2.18rem;" class="box1-item" v-for="(goods2,index) in goods2" id="box2-item" :key="index">
        <div class="box_content">
          <img :src="goods2.pict_url" alt="" :onerror="defaultImg">
          <span class="dess">
            <p class="des_name" v-text="goods2.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods2.zk_final_price.rmb}}<span v-show="goods2.zk_final_price.corner!=='00'">.{{goods2.zk_final_price.corner}}</span></span>
              <!--<del class="old_price">￥{{goods2.reserve_price.rmb}}<span v-show="goods2.reserve_price.corner!=='00'">.{{goods2.reserve_price.corner}}</span></del>-->
            </p>
          </span>
        </div>
        </router-link>
      </div>
    </scroller>
      <nav>
        <img :src="type3.image" alt="" style="width: 100%;height: 100%;" :onerror="defaultImg">
        <img src="../assets/sanjiao.png" alt="" class="sanjiao">
      </nav>
    <router-link to="/YouHui/discount">
    <p class="title">
        <img src="/static/images/youhui_bd3_img.png" alt="" >
        <span v-text="type3.store_name" class="subject_name"></span>
        <span class="to_subject">进入专场<img src="/static/images/gt_white.png" alt=""></span>
      </p>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav3">
        <router-link :to="{name:'goodsDetail',query:{id:goods3.id}}" class="box1-item" v-for="(goods3,index) in goods3" id="box3-item" style="width: 2.18rem;" :key="index">
        <div class="box_content">
          <img :src="goods3.pict_url" alt="" :onerror="defaultImg">
          <span class="dess">
            <p class="des_name" v-text="goods3.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods3.zk_final_price.rmb}}<span v-show="goods3.zk_final_price.corner!=='00'">.{{goods3.zk_final_price.corner}}</span></span>
              <!--<del class="old_price">￥{{goods3.reserve_price.rmb}}<span v-show="goods3.reserve_price.corner!=='00'">.{{goods3.reserve_price.corner}}</span></del>-->
            </p>
          </span>
        </div>
        </router-link>
      </div>
    </scroller>
      <nav>
        <img :src="type4.image" alt="" style="width: 100%;height: 100%;" :onerror="defaultImg">
        <img src="../assets/sanjiao.png" alt="" class="sanjiao">
      </nav>
    <router-link to="/YouHui/essential">
      <p class="title">
        <img src="/static/images/youhui_bd4_img.png" alt="" >
        <span class="subject_name" v-text="type4.store_name"></span>
        <span class="to_subject">进入专场<img src="/static/images/gt_white.png" alt=""></span>
      </p>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav4">
        <router-link :to="{name:'goodsDetail',query:{id:goods4.id}}" class="box1-item" v-for="(goods4,index) in goods4" id="box3-item" style="width: 2.18rem;" :key="index">
          <div class="box_content">
            <img :src="goods4.pict_url" alt="" :onerror="defaultImg">
            <span class="dess">
            <p class="des_name" v-text="goods4.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods4.zk_final_price.rmb}}<span v-show="goods4.zk_final_price.corner!=='00'">.{{goods4.zk_final_price.corner}}</span></span>
              <!--<del class="old_price">￥{{goods4.reserve_price.rmb}}<span v-show="goods4.reserve_price.corner!=='00'">.{{goods4.reserve_price.corner}}</span></del>-->
            </p>
          </span>
          </div>
        </router-link>
      </div>
    </scroller>
    <div style=" height: 1.06rem;"></div>
    <loading v-model="showLoading" :text="loadText"></loading>

    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->

  </div>
</template>
<script>
  import {Scroller,Loading} from 'vux'

  export default {
    name: 'ChaoShiHui',
    components: {
      Loading,
      Scroller

    },
    data() {
      return {
        type1:{},
        goods1:[],
        type2:{},
        goods2:[],
        type3:{},
        goods3:[],
        type4:{},
        goods4:[],
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20,
        showLoading:false,
        loadText:'加载中...',
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
      }
    },
    methods: {
      //      9.9专区
      getlist1:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_nine',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type1 = res.data.data.type
            this.goods1 = res.data.data.goods
          }else if(res.data.code=='400'){
          }
        },(err)=>{
          console.log(err)
        })
      },

      //      19.9专区
      getlist2:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_nineteen',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type2 = res.data.data.type
            this.goods2 = res.data.data.goods
          }else if(res.data.code=='400'){

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      应季必备专区
      getlist3:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_discount',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type3 = res.data.data.type
            this.goods3 = res.data.data.goods
          }else if(res.data.code=='400'){

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      聚折扣专区
      getlist4:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_season',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type4 = res.data.data.type
            this.goods4 = res.data.data.goods
            console.log(this.goods4)
            console.log(this.type4)
          }else if(res.data.code=='400'){


          }
        },(err)=>{
          console.log(err)
        })
      },
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      },

    },
    created:function(){
      this.getlist1()
      this.getlist2()
      this.getlist3()
      this.getlist4()
    },
    mounted() {
      this.$nextTick(function(){
//        setTimeout(()=>{
//          //      动态的更改scroller的宽度
//          const self = this;
//          const w = document.getElementById('box1-item').offsetWidth;
//          const n1 = self.goods1.length;
//          const n2 = self.goods2.length;
//          const n3 = self.goods3.length;
//          const n4 = self.goods4.length;
//          self.$refs.nav1.style.width = (w * n1) + 'px';
//          self.$refs.nav2.style.width = (w * n2) + 'px';
//          self.$refs.nav3.style.width = (w * n3) + 'px';
//          self.$refs.nav4.style.width = (w * n4) + 'px';
//        },1000)
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

    }
  }
</script>
<style scoped>
  nav {
    width: 100%;
    height: 3.58rem;
    position: relative;
  }
  .sanjiao {
    width: .30rem;
    height: .22rem;
    bottom: 0;
    left: calc(50% - .15rem);
    position: absolute;
  }

  .box1 {
    /*height: 3.38rem;*/
    height: 2.8rem;
    min-width: 13.3rem;
    position: relative;
    background-color: white;
    padding-bottom: .34rem;
    margin-bottom: .16rem;
  }
  .box_content{
    margin: 0 0 0 .18rem;
    /*border: .01rem solid #e8e8e8;*/
  }
  .box1-item {
    box-sizing: border-box;
    float: left;
  }

  .box1-item img {
    /*width: 2.02rem;*/
    width: 100%;
    height: 2rem;
    border-radius: .08rem;
  }

  .box1-item:first-child {
    /*border-left: 0 solid white;*/
  }

  .dess {
    text-align: center;
    font-size: .24rem;
  }

  .des_name {
    /*height: .60rem;*/
    height: .3rem;
    color: #333;
    padding: 0 .1rem .1rem;
    word-wrap: break-word;
    /*-webkit-line-clamp: 2;*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .des_price {
    margin: .05rem 0 .1rem;
  }

  .new_price {
    color: #ff425f;
    margin-right: .1rem;
  }

  .old_price {
    color: #999;
    font-size: .2rem;
  }

  /*.main {*/
    /*margin-bottom: 1.06rem;*/
    /*border-top: .1rem solid #f4f4f4;*/
  /*}*/

  /*.goods {*/
    /*overflow: hidden;*/
  /*}*/

  /*.goods_list {*/
    /*background-color: white;*/
    /*list-style: none;*/
    /*float: left;*/
    /*width: 50%;*/
    /*box-sizing: border-box;*/
    /*border-bottom: .1rem solid #f4f4f4;*/
  /*}*/

  /*.goods_list img {*/
    /*width: 100%;*/
    /*height: 3.6rem;*/
  /*}*/

  /*.goods_list:nth-of-type(odd) {*/
    /*border-right: .05rem solid #f4f4f4;*/
  /*}*/

  /*.goods_list:nth-of-type(even) {*/
    /*border-left: .05rem solid #f4f4f4;*/
  /*}*/

  /*.content {*/
    /*padding: .15rem;*/
  /*}*/

  /*.des {*/
    /*height: .8rem;*/
    /*font-size: .28rem;*/
    /*color: #333;*/
    /*line-height: .4rem;*/
    /*word-wrap: break-word;*/
    /*-webkit-line-clamp: 2;*/
    /*display: -webkit-box;*/
    /*-webkit-box-orient: vertical;*/
    /*overflow: hidden;*/
  /*}*/

  /*.price {*/
    /*font-size: .32rem;*/
    /*color: #ff425f;*/
  /*}*/

  /*.num {*/
    /*font-size: .24rem;*/
    /*color: #999;*/
    /*float: right;*/
    /*margin-top: .1rem;*/
    /*margin-right: .15rem;*/
  /*}*/
  .title{
    background-color: white;position: relative;line-height: 1rem;padding:0 .28rem 0 .2rem;
  }
  .title>img{
    width: .28rem;height: .28rem;
  }
  .subject_name{
    font-size: .32rem;color: #333;
  }
  .to_subject{
    font-size: .24rem;color: #999;position: absolute;right: .2rem;
  }
  .to_subject>img{
    width: .2rem;height: .2rem;margin-left: .1rem;
  }
</style>
