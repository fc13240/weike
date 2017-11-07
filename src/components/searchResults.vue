<template>
  <div style="background-color: white;">
    <!--<x-header :left-options="{backText: ''}"-->
              <!--style="padding: 2px 0 ;background-color: white;position: fixed;z-index: 100;width: 100%;top: 0;border-bottom: 1px solid #e1e1e1;height: .88rem;">-->
      <!--搜索-->
    <!--</x-header>-->
    <!--<div style="height: .88rem;"></div>-->
    <search placeholder="请输入商品名称" cancel-text="搜索"
            @result-click="resultClick"
            @on-change="getResult"
            :results="results"
            v-model="value"
            top=".88rem"
            @on-focus="onFocus"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
            ref="search"></search>
    <p id="hot" style="font-size: .28rem;color: #666;padding: .3rem">热门搜索</p>
    <ul class="hot_list">
      <li>冬装</li>
      <li>雪地靴</li>
      <li>iPhone手机壳</li>
      <li>火锅</li>
      <li>烤箱</li>
    </ul>
    <p style="font-size: .28rem;color: #666;padding: .3rem;">历史搜索 <img src="../assets/trash.png" alt="" style="margin-top:.05rem;width: .28rem;height: .28rem;float: right;"></p>
    <ul class="hot_list">
      <li>冬装</li>
      <li>雪地靴</li>
      <li>机壳</li>
      <li>火锅</li>
      <li>烤箱</li>
    </ul>
  </div>
</template>
<script>
  import {Search, XHeader} from 'vux'

  export default {
    name: 'searchPage',
    components: {
      XHeader,
      Search
    },
    mounted() {
//      const title = document.getElementsByClassName('vux-header-title');
//      title[0].style.color = '#333'
      const search = document.getElementsByClassName('weui-search-bar__cancel-btn')
      console.log(search)
      search[0].style.cssText="color:#333;font-size:.28rem;"
    },
    methods: {
      setFocus() {
        this.$refs.search.setFocus()
      },
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult(val) {
//        this.results = val ? getResult(this.value) : []
      },
      onSubmit() {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus() {
        const add_margin = document.getElementById('hot')
        add_margin.style.marginTop='.88rem'
      },
      onCancel() {
        const add_margin = document.getElementById('hot')
        add_margin.style.marginTop='.0rem'
      }
    },
    data() {
      return {
        results: [],
        value: ''
      }
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
    padding: .1rem .3rem;
    font-size: .28rem;
    color: #333;
    margin: 0 .2rem .2rem 0;
  }
</style>
