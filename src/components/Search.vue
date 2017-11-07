<template>
  <div>
    <!--<app-header title="智搜"></app-header>-->
    <!--<div style="height: .88rem;">-->
    <!--</div>-->
    <div class="search">
     <router-link to="/search/searchPage">
       <img src="../assets/search_img.png" alt="">
     </router-link>
    </div>
    <img src="../assets/detail.png" alt="" class="detail">
  </div>
</template>
<script>
import AppHeader from './Header'
  export  default {
  name:'Search',
    components:{
    AppHeader
    }
  }
</script>
<style scoped>
.search{
  background-image: url("../assets/search_bd.png");background-size: 100% 100%;background-repeat: no-repeat;
  height: 1.52rem;
  text-align: center;
}
  .search img{
    width: 90%;
    height: .64rem;
    margin-top: .4rem;
  }
  .detail{
    width: 100%;
    margin-bottom: 1.56rem;
  }
</style>
