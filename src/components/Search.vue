<template>
  <div>
    <app-header title="搜索分类"></app-header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </search>
    <div class="main">
      <div class="left_nav">
        <ul>
          <li v-for="(item,index) in items" :class="[item.active ? activeClass:'']" v-on:click="navClickEvent(items,index)">
            <a href="javascript:">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="right_goods">
      </div>
    </div>
  </div>
</template>
<script>
  import {Search} from 'vux'
  import  Vue from 'vue'
  import AppHeader from './Header'
  export default {
    name:'SearchPage',
    components:{
      Search,
      Vue,
      AppHeader
    },
    methods:{
      setFocus (){
        this.$refs.search.setFocus()
      },
      resultClick(item){
        window.alert('you click the result item'+JSON.stringify(item))
      },
      getResult(val){
        this.results = val ? getResult(this.value):[]
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      navClickEvent:function(items,index){
        /*默认切换类的动作*/
        items.forEach(function(el){
          el.active = false;
        });
        items[index].active = true;
      }
    },
    data:function(){
      return {
        activeClass:'active',
        results:[],
        value:'',
        items:[
          {
            text: '热门',
            active : true
          },
          {
            text: '服饰',
            active : false
          },
          {
            text: '家居',
            active : false
          },
          {
            text: '家纺',
            active : false
          },
          {
            text: '母婴',
            active : false
          },
          {
            text:'电器',
            active:false
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .left_nav{
    width: 30%;
    border: 1px solid black;
    display: inline-block;
    text-align: center;
  }
  .left_nav li a{
    display: block;
    padding: 15px;
  }
  .active{
    background: gray;
  }
</style>
