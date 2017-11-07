<template>
  <div>
    <!--<x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: #ff526d;position: fixed;z-index: 10;width: 100%;top: 0;">服饰</x-header>-->
    <!-- style="position: fixed;top: .88rem;z-index: 10;"-->
    <div class="allSort">
      <div class="sortMenu clearfix" style="position: fixed;z-index: 10;">
        <ul class="sortMenu-ul">
          <li class="cell" v-for="item in sortMenu">
            <a href="">{{item.sortname}}</a>
          </li>
        </ul>
        <div class="all" v-on:click="subitemsExpanded=!subitemsExpanded">
          <img src="../assets/down.png" alt="" style="width: 10px;height: 10px;">
        </div>
        <div v-show="subitemsExpanded" class="pull-down">
          <ul class="pull-down-sort">
            <li class="" v-for="pulldow in sortName">
              <a href="">{{pulldow.sortname}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
      <div class="main_goods">
        <ul class="goods">
          <li class="goods_list" v-for="goods in goodsList">
            <img src="../assets/logo.png" alt="">
            <div class="content">
              <div class="des">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>88.8</span>
                <span class="num">518件已售</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)

  export default {
    name: 'jiFen',
    components: {
      Vue,
      XHeader,
      VueScroller
    },
    methods: {
      toExchange() {
        this.$router.push({
          path: '/home/Exchange'
        })
      }
    },
    data() {
      return {
        noData: '',
        goodsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        sortMenu: [
          { sortname: '全部' },
          { sortname: '家用电器' },
          { sortname: '大家电' },
          { sortname: '生活用品' },
          { sortname: '食品' },
          { sortname: '美妆' },
          { sortname: '书籍' },
          { sortname: '洗护用品' },
          { sortname: '母婴用品' },
          { sortname: '家居' }
        ],
        sortName: [
          { sortname: '家用电器' },
          { sortname: '母婴' },
          { sortname: '百货' },
          { sortname: '珠宝配饰' },
          { sortname: '运动户外' },
          { sortname: '食品' },
          { sortname: '美妆' },
          { sortname: '家装' },
          { sortname: '家居家纺' },
          { sortname: '鲜花宠物' },
          { sortname: '图书乐器' },
          { sortname: '生活服务' },
          { sortname: '游戏动漫' }
        ],
        subitemsExpanded: false
      }
    },
    methods: {
      infinite(done) {
        if (this.noData) {
          console.log(this.noData)
          if (this.noData) {
            setTimeout(() => {
              this.$refs.myscroller.finishInfinite(2);
            })
          }
          return;
        }
        let self = this;//this指向问题
        let start = this.goodsList.length;

        setTimeout(() => {
          for (let i = start + 1; i < start + 10; i++) {
            self.goodsList.push(i)
          }
          if (start >= 18) {
            self.noData = "没有更多数据"
          }
          self.$refs.myscroller.resize();
          done()
        }, 1500)
      },

//done()表示这次异步加载数据完成，加载下一次
//因为这个是同步的，加了setTimeout就是异步加载数据；
//因为涉及到this指向问题，所以将他放在一个变量里。
      refresh(done) {
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
          }
          self.top = self.top - 10;
          done();
        }, 1500)
      }
    },
    mounted: function () {
      this.$nextTick(function () {

      })
    }
  }
</script>
<style scoped>
  /* 分类菜单*/
  li{
    list-style: none;
  }
  .sortMenu a{
    font-size: .28rem;
    color: #333;
  }
  .sortMenu{
    width: 100%;
    background-color:#fff;
    overflow-x: scroll;
     -webkit-overflow-x: scroll;
  }
  .sortMenu::-webkit-scrollbar{
    width: 0;
    height: 0;
    background-color: #fff;
  }
  .sortMenu-ul {
    min-width:500px;
    display: flex;
    justify-content: flex-start;
  }
  .sortMenu .cell{
    display: inline-block;
    margin: 0px .2rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    position: relative;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .sortMenu .all{
    right: 0;
    top: .0rem;
    height: .8rem;
    width: 24px;
    position: fixed;
    background: #fff;
    z-index: 10;
    display: flex;
    justify-content:center;
    align-items:center;
    border-left: 1px solid #e1e1e1;
  }
  .sortMenu .all img{
    display: block;
    width: 16px;
  }
  .sortMenu .pull-down{
    position: fixed;
    left: 0;
    /*top: 1.68rem;*/
    height:auto;
    width: 100%;
    background: #fff;
    z-index: 11;
    border-top: 1px solid #f2f2f2;

  }
  .pull-down-sort{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: space-around;
    flex-wrap: wrap;
    flex-direction: row
  }
  .pull-down-sort li{
    float: left;
    padding: .1rem
  }
  /* 分类菜单*/
  .goods {
    overflow: hidden;
  }

  .goods_list {
    background-color: white;
    list-style: none;
    float: left;
    width: 50%;
    box-sizing: border-box;
    border-bottom: .1rem solid #f4f4f4;
  }

  .goods_list img {
    width: 100%;
    height: 3.6rem;
  }

  .goods_list:nth-of-type(odd) {
    border-right: .05rem solid #f4f4f4;
  }

  .goods_list:nth-of-type(even) {
    border-left: .05rem solid #f4f4f4;
  }

  .content {
    padding: .15rem;
  }

  .des {
    height: .8rem;
    font-size: .28rem;
    color: #333;
    line-height: .4rem;
    word-wrap: break-word;
      -webkit-line-clamp: 2;
    display: -webkit-box;
      -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price {
    font-size: .32rem;
    color: #ff7171;
  }

  .num {
    font-size: .24rem;
    color: #999;
    float: right;
    margin-top: .1rem;
    margin-right: .15rem;
  }
</style>

