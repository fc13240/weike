<template>
  <div>
    <x-header :left-options="{backText: ''}" style="padding: 2px 0 ;background-color: white;border-bottom: 1px solid #e1e1e1;position: fixed;z-index: 10;width: 100%;top: 0;">9.9专区</x-header>
    <div style="height: .88rem;"></div>
    <tab :line-width=3 active-color='#ff526d' v-model="index" custom-bar-width="1.2rem" bar-active-color="#ff526d"
         style="border-bottom: 1px solid #e1e1e1;">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item"
                :key="index">{{item}}
      </tab-item>
    </tab>

    <div class="goods_list">
      <ul class="goods">
        <li>
          <img src="../assets/logo.png" alt="" class="pic">
          <div class="content">
            <p class="title">产品标题产品标题</p>
            <p class="des">产品补充介绍</p>
            <div style="margin-top: .35rem;position: relative;">
              <span style="font-size: .24rem;color: #999;">已售 <span style="color: #ff526d;">411</span>件</span>
              <div>
                <span class="new_num"><span style="font-size: .28rem;">￥</span>88.8</span>
                <del class="old_num">￥124.00</del>
              </div>
              <div style="position: absolute;right: 0;bottom: 0;">
                <p style="font-size: .24rem;color: #ff526d;">领劵立减3元</p>
                <img src="../assets/logo.png" alt="" style="width: 1.16rem;height: .46rem;">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  import Vue from 'vue'

  const list = () => ['综合排序', '销量优先', '价格优先', '优惠幅度']

  export default {
    name: 'subject',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Vue,
      XHeader
    },
    data() {
      return {
        list2: list(),
        demo2: '全部',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      onItemClick(index) {
        console.log('on item click:', index)
      },
      addTab() {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab() {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next() {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev() {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    },
    mounted() {
      const title = document.getElementsByClassName('vux-header-title');
      title[0].style.color = '#333'
    }
  }
</script>
<style scoped>
  ul {
    font-size: 0;
    overflow: hidden;
  }

  .goods {
    background-color: white;
  }

  .goods li {
    overflow: hidden;
    padding: .22rem .2rem;
    border-bottom: 1px solid #f4f4f4;
  }

  .pic {
    width: 2.4rem;
    height: 2.24rem;
    float: left;
  }

  .content {
    width: calc(100% - 2.4rem - .44rem);
    padding: 0 .22rem;
    display: inline-block;
  }

  .title {
    font-size: .32rem;
    color: #333333;
  }

  .des {
    font-size: .24rem;
    color: #ff526d;
  }

  .new_num {
    font-size: .4rem;
    color: #ff526d;
  }

  .old_num {
    font-size: .2rem;
    color: #999999;
    margin-left: .1rem;
  }
</style>
