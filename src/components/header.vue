<template>
  <tabbar class="tabbar">
    <div class="title">{{title}}</div>
  </tabbar>

</template>
<style scoped>
  .tabbar{
    background-color:#ff526d;
    height:.88rem;
    position:fixed;
    top:0;
  }
  .title{
    text-align:center;
    margin:auto;
    color:white;
    font-size:.32rem;
    font-weight: bold;
  }
</style>
<script>
  import {Tabbar,TabbarItem} from 'vux'
  export default{
    name: 'AppHeader',
    components: {
      Tabbar,
      TabbarItem
    },
    props:{
      title:{
        default:'微客'
      }
    },
    methods: {
      resultClick (item) {
        alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val
      }
    },
  }

</script>
