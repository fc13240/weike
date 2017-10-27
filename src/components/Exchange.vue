<template>
   <div>
     <app-header title="兑换记录"></app-header>
     <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
         <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
       </tab>
       <swiper v-model="index" height="100px" :show-dots="false">
         <swiper-item v-for="(item, index) in list2" :key="index">
           <div class="tab-swiper vux-center">{{item}} Container</div>
         </swiper-item>
       </swiper>
     </div>
   </div>
</template>
<script>
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import Vue from 'vue'
  import AppHeader from './Header'
  const list = () => ['精选', '美食', '电影', '酒店', '外卖']

  export default {
    name:'Exchange',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Vue,
      AppHeader
    },
    data () {
      return {
        list2: list(),
        demo2: '美食',
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
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
