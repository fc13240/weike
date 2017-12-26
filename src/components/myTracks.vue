<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;border-bottom: 1px solid #e1e1e1;position: fixed;z-index: 10;width: 100%;top: 0;">我的足迹</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <div class="goods_list">
      <ul class="goods" v-for="lists in history">
        <p style="line-height: .6rem;font-size: .2rem;color: #999;background-color: #f4f4f4;padding-left: .3rem;" v-text="lists.date">2017/11/01</p>
        <li v-for="list in lists.object">
          <img :src="list.pict_url" alt="" class="pic" :onerror="defaultImg">
          <div class="content">
            <p class="title" v-text="list.title">产品标题产品标题</p>
            <!--<p class="des" v-text="list.title">产品补充介绍</p>-->
            <div style="margin-top: .35rem;position: relative;">
              <span style="font-size: .24rem;color: #999;">已售{{list.volume}}件</span>
              <div>
                <span class="new_num"><span style="font-size: .24rem;">￥</span>{{list.reserve_price.rmb}}<span style="font-size: .28rem" v-show="list.reserve_price!==''">.{{list.reserve_price.corner}}</span></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <p style="font-size: .28rem;color: #999;text-align: center; background-color: #f4f4f4;padding-top: 2rem;" v-show="history.length==0">亲，你还没有浏览过商品~</p>
      <p style="font-size: .24rem;color: #999;text-align: center;padding: .5rem 0;"v-show="history.length!==0">已经到底了，快去挑几件好货吧~</p>

    </div>
    <div style="height: 1.34rem;"></div>
    <div class="btn" v-show="history.length!==0">
      <x-button @click.native="clear()"  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;">清空</x-button>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
    <!--<div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>-->

  </div>
</template>
<script>
  import {XButton,Loading} from 'vux'

  export default {
    name: 'myTracks',
    components: {
      XButton,Loading
    },
    data() {
      return {
           history:[],
        showLoading:false,
        loadText:'加载中...',
        defaultImg: 'this.src="' + require('../../static/images/default_img.png') + '"',
      }
    },
    methods: {
      //      获取我的足迹列表
      getFootprintList:function(){
        this.showLoading = true
        this.$http({
          method:'POST',
          url:'/api/footprint',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading = false
            this.history = res.data.data.history
            console.log(this.history)
          }
        },(err)=>{
          console.log(err)
        })
      },
      //     清空我的足迹列表
      clear:function(){
        const _this = this
        this.$vux.confirm.show({
          content:'确定清空所有我的足迹列表？',
          onCancel(){
            console.log('取消')
          },
          onConfirm(){
            _this.showLoading = true;
            _this.$http({
              method: 'POST',
              url: '/api/delPrint',
            }).then((res) => {
              if (res.data.code == '200') {
                _this.showLoading = false
                _this.$vux.toast.show({
                  text:res.data.data.message
                })
                _this.history = ''
              }
            }, (err) => {
              console.log(err)
            })
          }
        })
      },
//      toTop(){
//        document.documentElement.scrollTop = document.body.scrollTop =0;
//      }
    },
    mounted() {
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
      this.getFootprintList()
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
    height: .9rem;
    overflow: hidden;
    font-size: .28rem;
    color: #333;
  }

  /*.des {*/
    /*height: .4rem;*/
    /*overflow: hidden;*/
    /*font-size: .24rem;*/
    /*color: #ff526d;*/
  /*}*/

  .new_num {
    font-size: .36rem;
    color: #ff526d;
  }
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
</style>
