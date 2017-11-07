<template>
   <div>
     <!--<app-header title="淘宝天猫专场"></app-header>-->
     <div class="sub_header">
       <div class="sub_header_left">
         <img slot="icon" src="../assets/logo.png">
         <span slot="label">大家都在买</span>
       </div>
       <div class="sub_header_right">
         <img slot="icon" src="../assets/logo.png">
         <span slot="label">精选折扣</span>
       </div>
     </div>
     <div class="hot">
       <div>
         <img slot="icon" src="../assets/logo.png">
         <span slot="label">热门推荐</span>
       </div>
     </div>
     <div class="main">
       <ul class="goods">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
       </ul>
     </div>
   </div>
</template>
<script>
  import  Vue from 'vue'
  import AppHeader from './Header'
  export default {
    name:'Tmall',
  components:{
    Vue,
    AppHeader
  }
  }
</script>
<style scoped>

  .sub_header{
    padding: 20px;
    font-size: 0;
    border: 1px solid black;
  }
  .sub_header span{
    font-size: 12px;
    display: inline-block;
  }
  .sub_header div{

    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    text-align: center;
  }
  .sub_header div img{
    width: 30px;
    height: 30px;
    vertical-align: -10px;
    margin-right: 20px;
  }
  .sub_header_left{
    border-right: 2px solid gray;
  }
  .hot{
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    margin: 10px 0;
  }
  .hot img{
    width: 20px;
    display: inline-block;
    vertical-align: -4px;
  }
  .goods li{
    float: left;
    list-style: none;
    width: 50%;
    border: 1px solid black;
    box-sizing: border-box;
    height: 100px;
  }
</style>
