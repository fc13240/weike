<template>
  <div style="background-color: white;">
    <!--<x-header :left-options="{backText: ''}"-->
              <!--style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 100;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;height: .88rem;">-->
      <!--搜索-->
    <!--</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <search placeholder="请输入商品名称" cancel-text="取消"
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="keywords"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <div v-show="searchResults" id="hot">
      <p style="font-size: .28rem;color: #666;padding: .2rem .3rem">热门搜索</p>
      <ul class="hot_list">
        <li v-for="hotList in hotList" v-text="hotList.keywords" @click="onSubmit(hotList.keywords)">冬装</li>
      </ul>
      <p style="font-size: .28rem;color: #666;padding:0 .3rem .2rem ;">历史搜索 <img src="../assets/trash.png" alt="" style="margin-top:.05rem;width: .28rem;height: .28rem;float: right;" @click="del"></p>
      <ul class="hot_list">
        <li v-for="historyList in historyList" v-text="historyList.keywords" @click="onSubmit(historyList.keywords)">冬装</li>
      </ul>
    </div>
    <div v-show="!searchResults" id="results">
      <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff526d"
           style="border-bottom: 1px solid #e1e1e1;">
        <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in list" @on-item-click="change(item.id)"
                  :key="index">{{item.sort_name}}
        </tab-item>
      </tab>

      <div class="main_goods">
        <ul class="goods">
          <li class="goods_list" v-for="goods in goodsList">
            <img :src="goods.pict_url" alt="">
            <div class="content">
              <div class="des" v-text="goods.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>{{goods.zk_final_price.rmb}} <span v-show="goods.zk_final_price.corner=='00'">.{{goods.zk_final_price.corner}}</span></span>
                <span class="num">{{goods.volume}}件已售</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
  import {Search, XHeader,Tab, TabItem,Loading} from 'vux'
  export default {
    name: 'searchPage',
    components: {
      XHeader,
      Search,
      Tab,
      TabItem,
      Loading
    },
    data() {
      return {
        sort_id:'',
        goodsList:[],
        showLoading:false,
        loadText:'加载中...',
        hotList:[],
        historyList:[],
        searchResults:true,
        results: [],
        keywords: '',
        list:[],
//        demo2: '全部',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    mounted() {
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color = '#333'
      const search = document.getElementsByClassName('weui-search-bar__cancel-btn')
      search[0].style.cssText="color:#333;font-size:.28rem;"
    },
    methods: {
      //      执行搜索
      doSearch:function(e){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/doSearch',
          data:{keywords:this.keywords,sort:this.sort_id}
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.searchResults=false;
            this.goodsList=res.data.data.product_list
            console.log(this.goodsList)
          }else if(res.data.code=='400'){
//            this.$vux.toast.show({
//              type:"cancel",
//              text:res.data.message
//            })
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      热门推荐列表
      getType:function(){
        this.$http({
          method:'POST',
          url:'/api/serrchSort'
        }).then((res)=>{
          if(res.data.code=='200'){
            this.list = res.data.data.sorts_type
          }else{

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      热门推荐列表
      getHotList:function(){
        this.$http({
          method:'POST',
          url:'/api/searchHot'
        }).then((res)=>{
          if(res.data.code=='200'){
            this.hotList = res.data.data.hot
          }else{

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      搜索历史列表
      getHistoryList:function(){
        this.$http({
          method:'POST',
          url:'/api/searchPage'
        }).then((res)=>{
          if(res.data.code=='200'){
            this.historyList = res.data.data.history
          }else{

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      清除历史列表
      del:function(){
        this.$http({
          method:'POST',
          url:'/api/delSearch'
        }).then((res)=>{
          if(res.data.code=='200'){
            this.$vux.toast.show({
              text:res.data.data.message
            })
            this.historyList=[]
          }else{

          }
        },(err)=>{
          console.log(err)
        })
      },
      setFocus() {
        this.$refs.search.setFocus()
      },
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult(val) {
//        this.results = val ? getResult(this.value) : []
      },
      onSubmit(e) {
        console.log(e)
        this.$refs.search.setBlur();
        this.keywords=e
        this.showLoading=true
        this.doSearch()

//        console.log('开始搜索')
//        console.log(this.keywords)

      },
      onFocus() {
        this.searchResults=true
        const hot = document.getElementById('hot');
        hot.style.marginTop='.88rem';
        const results = document.getElementById('results');
        results.style.marginTop='.88rem';
      },
      onCancel() {
//        this.searchResults=false
//  应该返回到智搜首页
        history.go(-1)
      },
//      onItemClick(index) {
//        console.log('on item click:', index)
//      },
//      addTab() {
//        if (this.list2.length < 5) {
//          this.list2 = list().slice(0, this.list2.length + 1)
//        }
//      },
//      removeTab() {
//        if (this.list2.length > 1) {
//          this.list2 = list().slice(0, this.list2.length - 1)
//        }
//      },
//      next() {
//        if (this.index === this.list2.length - 1) {
//          this.index = 0
//        } else {
//          ++this.index
//        }
//      },
//      prev() {
//        if (this.index === 0) {
//          this.index = this.list2.length - 1
//        } else {
//          --this.index
//        }
//      },
      change(e){
        console.log(e)
        this.sort_id = e
        this.goodsList=''
        this.doSearch()

      }
    },
    created:function(){
      this.getHotList()
      this.getHistoryList()
      this.getType()
    }
  }
//  function getResult (val) {
//    let rs = []
//    for (let i = 0; i < 20; i++) {
//      rs.push({
//        title: `${val} result: ${i + 1} `,
//        other: i
//      })
//    }
//    return rs
//  }
</script>
<style scoped>
  .hot_list{
    margin: 0 .3rem;
  }
ul li{
  list-style: none;
}
  .hot_list li{
    display: inline-block;
    border: .01rem solid #999;
    border-radius: .5rem;
    line-height: .6rem;
    padding: 0rem .3rem;
    font-size: .28rem;
    color: #333;
    margin: 0 .2rem .2rem 0;
  }

  .main {
    margin-bottom: 1.06rem;
  }

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
