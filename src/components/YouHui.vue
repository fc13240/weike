<template>
  <div>
    <div>
      <router-link :to="{name:'subjects',query:{type_id:type1.type_id}}">
        <nav>
          <img  :src="type1.image" style="width: 100%;height: 100%;">
          <div class="nav_btn" style="background-image: url(/static/images/youhui_bd1.png);background-size: 100%;">
            <p style="font-size: .28rem;" v-text="type1.store_name">XX专区</p>
            <img src="/static/images/youhui_bd_img.png" alt="" style="width: 1.42rem;height: .22rem;margin-bottom: .3rem;">
          </div>
          <img src="../assets/sanjiao.png" alt="" class="sanjiao">
        </nav>
      </router-link>
      <scroller lock-y :scrollbar-x=false>
        <div class="box1" ref="nav1">
          <div class="box1-item" v-for="goods1 in goods1" id="box1-item" style="width: 2.49rem;">
            <img :src="goods1.pict_url" alt="">
            <span class="dess">
            <p class="des_name" v-text="goods1.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods1.zk_final_price.rmb}}<span v-show="goods1.zk_final_price.corner!=='00'">.{{goods1.zk_final_price.corner}}</span></span>
              <del class="old_price">￥{{goods1.reserve_price.rmb}}<span v-show="goods1.reserve_price.corner!=='00'">.{{goods1.reserve_price.corner}}</span></del>
            </p>
          </span>
          </div>
        </div>
      </scroller>
    </div>
    <router-link to="/YouHui/subjects" :to="{name:'subjects',query:{type_id:type2.type_id}}">
      <nav>
        <img :src="type2.image" alt="" style="width: 100%;height: 100%;">
        <div class="nav_btn" style="background-image: url(/static/images/youhui_bd2.png);background-size: 100%;">
          <p style="font-size: .28rem;" v-text="type2.store_name">XX专区</p>
          <img src="/static/images/youhui_bd2_img.png" alt="" style="width: 1.42rem;height: .22rem;margin-bottom: .3rem;">
        </div>
        <img src="../assets/sanjiao.png" alt="" class="sanjiao">
      </nav>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav2">
        <div class="box1-item" v-for="goods2 in goods2" id="box2-item" style="width: 2.49rem;">
          <img :src="goods2.pict_url" alt="">
          <span class="dess">
            <p class="des_name" v-text="goods2.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods2.zk_final_price.rmb}}<span v-show="goods2.zk_final_price.corner!=='00'">.{{goods2.zk_final_price.corner}}</span></span>
              <del class="old_price">￥{{goods2.reserve_price.rmb}}<span v-show="goods2.reserve_price.corner!=='00'">.{{goods2.reserve_price.corner}}</span></del>
            </p>
          </span>
        </div>
      </div>
    </scroller>
    <router-link to="/YouHui/discount">
      <nav>
        <img :src="type3.image" alt="" style="width: 100%;height: 100%;">
        <div class="nav_btn" style="background-image: url(/static/images/youhui_bd3.png);background-size: 100%;">
          <p style="font-size: .28rem;" v-text="type3.store_name">XX专区</p>
          <img src="/static/images/youhui_bd3_img.png" alt="" style="width: 1.42rem;height: .22rem;margin-bottom: .3rem;">
        </div>
        <img src="../assets/sanjiao.png" alt="" class="sanjiao">
      </nav>
    </router-link>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1" ref="nav3">
        <div class="box1-item" v-for="goods3 in goods3" id="box3-item" style="width: 2.49rem;">
          <img :src="goods3.pict_url" alt="">
          <span class="dess">
            <p class="des_name" v-text="goods3.title">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</p>
            <p class="des_price"><span class="new_price">￥{{goods3.zk_final_price.rmb}}<span v-show="goods3.zk_final_price.corner!=='00'">.{{goods3.zk_final_price.corner}}</span></span>
              <del class="old_price">￥{{goods3.reserve_price.rmb}}<span v-show="goods3.reserve_price.corner!=='00'">.{{goods3.reserve_price.corner}}</span></del>
            </p>
          </span>
        </div>
      </div>
    </scroller>
    <router-link to="/YouHui/essential">
      <nav>
        <img :src="type4.image" alt="" style="width: 100%;height: 100%;">
        <div class="nav_btn" style="background-image: url(/static/images/youhui_bd2.png);background-size: 100%;">
          <p style="font-size: .28rem;" v-text="type4.store_name">XX专区</p>
          <img src="/static/images/youhui_bd4_img.png" alt="" style="width: 1.42rem;height: .22rem;margin-bottom: .3rem;">
        </div>
      </nav>
    </router-link>
    <div class="main">
      <div class="main_goods">
        <ul class="goods">
          <li class="goods_list" v-for="list in goods4">
            <img :src="list.pict_url" alt="">
            <div class="content">
              <div class="des" v-text="list.title">产品介绍产品介绍产品介绍产品介绍产品介绍</div>
              <div class="des_b">
                <span class="price"><span style="font-size: .2rem;">￥</span>88.8</span>
                <span class="num">518件已售</span>
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
  import {Scroller,Loading} from 'vux'

  export default {
    name: 'ChaoShiHui',
    components: {
      Loading,
      Scroller

    },
    data() {
      return {
        type1:{},
        goods1:[],
        type2:{},
        goods2:[],
        type3:{},
        goods3:[],
        type4:{},
        goods4:[],
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20,
        showLoading:false,
        loadText:'加载中...',
      }
    },
    methods: {
      //      9.9专区
      getlist1:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_nine',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type1 = res.data.data.type
            this.goods1 = res.data.data.goods
          }else if(res.data.code=='400'){
          }
        },(err)=>{
          console.log(err)
        })
      },

      //      19.9专区
      getlist2:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_nineteen',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type2 = res.data.data.type
            this.goods2 = res.data.data.goods
          }else if(res.data.code=='400'){

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      应季必备专区
      getlist3:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_discount',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type3 = res.data.data.type
            this.goods3 = res.data.data.goods
          }else if(res.data.code=='400'){

          }
        },(err)=>{
          console.log(err)
        })
      },
      //      聚折扣专区
      getlist4:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/c_index_season',
        }).then((res)=>{
          this.showLoading=false
          if(res.data.code=='200'){
            this.type4 = res.data.data.type
            this.goods4 = res.data.data.goods
          }else if(res.data.code=='400'){


          }
        },(err)=>{
          console.log(err)
        })
      },
    },
    created:function(){
      this.getlist1()
      this.getlist2()
      this.getlist3()
      this.getlist4()
    },
    mounted() {
      this.$nextTick(function(){
        //      动态的更改scroller的宽度
        const self = this;
        const w = document.getElementById('box1-item').offsetWidth;
        const n1 = self.goods1.length;
        const n2 = self.goods2.length;
        const n3 = self.goods3.length;
        self.$refs.nav1.style.width = (w * n1) + 'px';
        self.$refs.nav2.style.width = (w * n2) + 'px';
        self.$refs.nav3.style.width = (w * n3) + 'px';
      })

    }
  }
</script>
<style scoped>
  nav {
    width: 100%;
    height: 2.96rem;
    position: relative;
  }

  .nav_btn {
    position: absolute;
    color: white;
    height: .76rem;
    border-radius: .44rem;
    top: .08rem;
    left: .08rem;
    text-align: center;
    padding: 0 .4rem;
  }

  .sanjiao {
    width: .30rem;
    height: .22rem;
    bottom: 0;
    left: calc(50% - .15rem);
    position: absolute;
  }

  .box1 {
    height: 3.12rem;
    min-width: 7.50rem;
    position: relative;
    background-color: white;
  }

  .box1-item {
    height: 3.12rem;
    border-left: .04rem solid white;
    box-sizing: border-box;
    float: left;
  }

  .box1-item img {
    width: 2.42rem;
    height: 2rem;
  }

  .box1-item:first-child {
    border-left: 0 solid white;
  }

  .dess {
    /*text-align: center;*/
    font-size: .24rem;
  }

  .des_name {
    color: #333;
    padding: 0 .1rem .1rem;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .des_price {
    padding: 0 .1rem;
  }

  .new_price {
    color: #ff526d;
    font-weight: bold;
    margin-right: .1rem;
  }

  .old_price {
    color: #999;
    font-size: .2rem;
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
