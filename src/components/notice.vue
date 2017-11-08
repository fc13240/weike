<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">通知</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <!--<router-link to="/PersonCenter/myTracks">-->
      <!--<img src="../assets/trash.png" alt="" style="width: .35rem;height: .35rem;position: absolute;top:.25rem;right: .3rem;z-index: 100;">-->
    <!--</router-link>-->
    <div class="main">
       <div class="notice_list">
         <div class="notice_top">
           <img src="../assets/notice.png" alt="">
           <div class="notice_top_r">
             <p class="title">消息标题</p>
             <p class="time">10-28 13:01</p>
           </div>
         </div>
         <p class="des">内容舒服点搜都是废话抖擞佛山的房间都是覅电视机of觉得搜附近低司法鉴定搜覅觉得死哦</p>
       </div>
      <div class="notice_list">
        <div class="notice_top">
          <img src="../assets/notice.png" alt="">
          <div class="notice_top_r">
            <p class="title">消息标题</p>
            <p class="time">10-28 13:01</p>
          </div>
        </div>
        <p class="des">内容舒服点搜都是废话抖擞佛山的房间都是覅电视机of觉得搜附近低司法鉴定搜覅觉得死哦</p>
      </div>
      <p style="font-size: .28rem;color: #999;text-align: center; background-color: #f4f4f4;padding-top: 2rem;">您还没有收到任何通知呢</p>
    </div>
    <div class="btn">
      <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">清空</x-button>
    </div>
  </div>
</template>
<script>
import {XButton} from 'vux'
  export default {
  name:'notice',
    components:{
     XButton
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
    }
  }
</script>
<style scoped>
.main{
  background-color: white;
}
  .notice_list{
    border-bottom: .02rem solid #f4f4f4;
  }
  .notice_top{
    padding: .4rem .38rem 0;
  }
  .notice_top img{
    width: .6rem;height: .6rem;border-radius: 50%;
  }
  .notice_top_r{
    display: inline-block;
  }
  .title{
    color: #333;font-size: .28rem;
  }
  .time{
    color: #999;font-size: .24rem;
  }
  .des{
    font-size: .28rem;
    color: #999;
    padding: 0 1.05rem;
    margin: .05rem 0;
  }
.btn{
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #e9e9e9;
}
</style>
