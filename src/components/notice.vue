<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 10;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;">通知</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <!--<router-link to="/PersonCenter/myTracks">-->
      <!--<img src="../assets/trash.png" alt="" style="width: .35rem;height: .35rem;position: absolute;top:.25rem;right: .3rem;z-index: 100;">-->
    <!--</router-link>-->
    <div class="main">
       <div class="notice_list" v-for="list in noticeList" v-show="noticeList.length">
         <div class="notice_top">
           <img src="../assets/notice.png" alt="">
           <div class="notice_top_r">
             <p class="title" v-text="list.title">消息标题</p>
             <p class="time" v-text="list.add_time">10-28 13:01</p>
           </div>
         </div>
         <p class="des" v-text="list.msg">内容舒服点搜都是废话抖擞佛山的房间都是覅电视机of觉得搜附近低司法鉴定搜覅觉得死哦</p>
       </div>
      <p style="font-size: .28rem;color: #999;text-align: center; background-color: #f4f4f4;padding-top: 2rem;" v-show="!noticeList.length">您还没有收到任何通知呢</p>
    </div>
    <div class="btn" v-show="noticeList.length">
      <x-button  @click.native="clear()" action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">清空</x-button>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
import {XButton,Loading} from 'vux'
  export default {
  name:'notice',
    components:{
     XButton,
      Loading
    },
    data(){
    return{
      noticeList:[],
      showLoading:false,
      loadText:'加载中...',

    }
    },
    mounted(){
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color='#333'
    },
    methods:{
      //      获取消息列表
      getNoticeList:function(){
        this.showLoading = true
        this.$http({
          method:'POST',
          url:'/api/getmessage',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading = false
            this.noticeList = res.data.data.message_list
            //       console.log(this.orderList)
          }
        },(err)=>{
          console.log(err)
        })
      },
      //     清空消息列表
      clear:function(){
        const _this = this
        this.$vux.confirm.show({
          content:'确定清空所有消息列表？',
          onCancel(){
            console.log('取消')
          },
          onConfirm(){
            _this.showLoading = true;
            _this.$http({
              method: 'POST',
              url: '/api/delMessage',
            }).then((res) => {
              if (res.data.code == '200') {
                _this.showLoading = false
                _this.$vux.toast.show({
                  text:res.data.data.message
                })
                _this.noticeList = ''
              }
            }, (err) => {
              console.log(err)
            })
          }
        })
      }
    },
    created:function(){
      this.getNoticeList()
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
