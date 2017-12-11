<template>
  <div style="font-size: 0;">
    <img :src="banner" alt="" style="height: 1.8rem;width: 100%">
    <div class="main">
      <ul class="timeTab">
        <li :class="[item.active? activeClass:'']" v-for="(item,index) in time"
            v-on:click="navClickEvent(time,index)">{{item.start_time}}
          <span v-show="item.status==3">已开抢</span>
          <span v-show="item.status==2">抢购中</span>
          <span v-show="item.status==1">待开抢</span>
        </li>
      </ul>
      <!--<router-view></router-view>-->
      <div class="goods_list">
        <ul class="goods">
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">200</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: .05rem;text-align: center;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <span style="border-radius: .5rem; margin-top:.05rem;width: 1.16rem;font-size: .24rem;color: white;background-color: #ff526d;line-height: .46rem;display: inline-block;">立刻抢 <img
                    src="../assets/lt_white.png" alt="" style="width: .10rem;height: .16rem;"></span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">20</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: .05rem;text-align: center;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <span style="border-radius: .5rem; margin-top:.05rem;width: 1.16rem;font-size: .24rem;color: white;background-color: #ff526d;line-height: .46rem;display: inline-block;">立刻抢 <img
                    src="../assets/lt_white.png" alt="" style="width: .10rem;height: .16rem;"></span>                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">20</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: .5rem;text-align: center;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <span style="border-radius: .5rem; margin-top:.05rem;width: 1.16rem;font-size: .24rem;color: white;background-color: #ff526d;line-height: .46rem;display: inline-block;">立刻抢 <img
                    src="../assets/lt_white.png" alt="" style="width: .10rem;height: .16rem;"></span>                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/logo.png" alt="" class="pic">
            <div class="content">
              <p class="title">产品标题产品标题</p>
              <p class="des">产品补充介绍</p>
              <div style="margin-top: .35rem;position: relative;">
                <div>
                  <div class="juan">
                    <span class="j_num">20</span>
                  </div>
                  <span style="font-size: .2rem;color: #ff526d;margin-left: .1rem;">折上折</span>
                </div>
                <div>
                  <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                  <del class="old_num">￥124.00</del>
                </div>
                <div style="position: absolute;right: 0;bottom: .05rem;text-align: center;">
                  <p style="font-size: .24rem;color: #ff526d;">已抢101件</p>
                  <span style="border-radius: .5rem; margin-top:.05rem;width: 1.16rem;font-size: .24rem;color: white;background-color: #ff526d;line-height: .46rem;display: inline-block;">立刻抢 <img
                    src="../assets/lt_white.png" alt="" style="width: .10rem;height: .16rem;"></span>                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {XHeader} from 'vux'
  export default {
    name: 'xianBao',
    components: {
      Vue,
      XHeader
    },
    data: function () {
      return {
        banner:'',
        activeClass: 'active',
        time:[],
      }
    },
    methods: {
      navClickEvent: function (time, index) {
        /*默认切换类的动作*/
        time.forEach(function (el) {
          el.active = false;
        });
        time[index].active = true;
      },
      //      获取超值线报banner
      getBanner:function(){
        this.$http({
          method:'POST',
          url:'/api/newspaper_banner'
        }).then((res)=>{
          const banner = res.data.data.banner[0].banner_image;
          this.banner = banner;
        },(err)=>{
          console.log(err)
        })
      },
      //      获取超值线报抢购时间
      getTime:function(){
        this.$http({
          method:'POST',
          url:'/api/newspaper_time'
        }).then((res)=>{
          const time = res.data.data.time;
          this.time = time;
          console.log(time)
        },(err)=>{
          console.log(err)
        })
      },
//      //      获取超值线报抢购商品
//      getGoodsList:function(){
//        this.$http({
//          method:'POST',
//          url:'/api/newspaper_goods'
//        }).then((res)=>{
//          const time = res.data.data.time;
//          this.time = time;
//          console.log(time)
//        },(err)=>{
//          console.log(err)
//        })
//      },
    },
    mounted(){

    },
    created:function(){
      this.getBanner()
      this.getTime()
//      this.getGoodsList()
    }
  }

</script>
<style scoped>
  ul{
    font-size: 0;
    overflow: hidden;
  }

  .timeTab li {
    width: 25%;
    font-size: .28rem;
    text-align: center;
    padding: .15rem 0;
    list-style: none;
    float: left;
    color: white;
    background-color: #414141;
  }

  .active {
    background-color: #ff526d !important;
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
  }

  .des {
    font-size: .24rem;
    color: #ff526d;
  }

  .juan {
    display: inline-block;
    width: 47px;
    height: 14px;
    background-image: url('../assets/juan.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .j_num {
    font-size: 10px;
    color: #ff526d;
    line-height: 14px;
    margin-left: 22.5px;
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
