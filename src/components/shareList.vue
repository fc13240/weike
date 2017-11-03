<template>
   <div>
     <x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">晒单赚元宝</x-header>
     <div style="height: .88rem;"></div>
     <div>
       <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ffa4a4" style="background-color: #ff526d;">
         <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index" style="color: white;">{{item}}</tab-item>
       </tab>
       <!--<swiper v-model="index" :show-dots="false">-->
       <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
       <!--<div class="tab-swiper vux-center">{{item}}</div>-->
       <!--</swiper-item>-->
       <!--</swiper>-->
     </div>
     <div class="main">
        <div class="list_m">
          <div class="list">
            <div class="user_info">
              <img src="../assets/1.jpg" alt="" class="user_pic">
              <div class="user_des">
                <p class="user_name">昵称</p>
                <p class="user_time">2017-10-14</p>
              </div>
            </div>
            <p class="message">留言内容留言内容留言内容留言内容留言内容留言内容内容留言内容留言内容</p>
            <div class="m_pic">
              <img src="../assets/1.jpg" alt="">
              <img src="../assets/1.jpg" alt="">
              <img src="../assets/1.jpg" alt="">
              <img src="../assets/1.jpg" alt="">
              <img src="../assets/1.jpg" alt="">
            </div>
          </div>
        </div>
       <div class="list_m">
         <div class="list">
           <div class="user_info">
             <img src="../assets/1.jpg" alt="" class="user_pic">
             <div class="user_des">
               <p class="user_name">昵称</p>
               <p class="user_time">2017-10-14</p>
             </div>
           </div>
           <p class="message">留言内容留言内容留言内容留言内容留言内容留言内容内容留言内容留言内容</p>
           <div class="m_pic">
             <img src="../assets/1.jpg" alt="">
             <img src="../assets/1.jpg" alt="">
           </div>
         </div>
       </div>
       <div class="list_m">
         <div class="list">
           <div class="user_info">
             <img src="../assets/1.jpg" alt="" class="user_pic">
             <div class="user_des">
               <p class="user_name">昵称</p>
               <p class="user_time">2017-10-14</p>
             </div>
           </div>
           <p class="message">留言内容留言内容留言内容留言内容留言内容留言内容内容留言内容留言内容</p>
           <div class="m_pic">
             <img src="../assets/1.jpg" alt="">
             <img src="../assets/1.jpg" alt="">
             <img src="../assets/1.jpg" alt="">
             <img src="../assets/1.jpg" alt="">
             <img src="../assets/1.jpg" alt="">
           </div>
         </div>
       </div>
     </div>
   </div>
</template>
<script>
  import {XHeader,Tab, TabItem, Swiper, SwiperItem } from 'vux'
  const list = () => ['晒单广场','我的晒单']
  export default {
    name:'shareList',
    components:{
      XHeader,
      Tab, TabItem, Swiper, SwiperItem

    },
    data () {
      return {
        list2: list(),
        demo2: '晒单广场',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    },
    mounted(){
      const title = document.getElementsByClassName('vux-header-title');
      title[0].style.color='#333'
    }
  }
</script>
<style scoped>
  .main{
    background-color: white;
  }
  .list_m{
    border-bottom: .08rem solid #f4f4f4;
  }
.list{
  padding: .22rem;
}
  .user_pic{
    width:.72rem;
    height: .72rem;
    border-radius: 50%;
    margin-right: .1rem;
  }
  .user_des{
    display: inline-block;
  }
  .user_pic{
    font-size: .28rem;
    color: #333;
  }
  .user_time{
    font-size: .2rem;
    color: #d1d1d1;
  }
  .message{
    font-size: .28rem;
    color: #666;
    line-height: .35rem;
  }
  .m_pic{
    margin-top: .24rem;
  }
  .m_pic img{
    width: 2.28rem;
    height: 2.28rem;
  }

</style>
