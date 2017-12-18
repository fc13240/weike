<template>
  <div>
    <!--<router-link to="/PersonCenter/addAddress">-->
    <!--<p style="color: #ff526d;font-size: .28rem;text-align: center;line-height: .88rem;background-color: white;border-bottom: .02rem solid #f4f4f4;">+添加地址</p>-->
    <!--</router-link>-->
    <div>
      <div v-for="list in addressList">
        <router-link :to="{name:'addAddress',query:{id:list.address_id,pro_id:id,from:from}}">
          <group>
            <div style="padding: .3rem .3rem;">
              <p><span style="font-size: .28rem;color: #333;margin-right: .3rem;" v-text="list.person_name">李静</span><span
                style="font-size: .24rem;color: #666;" v-text="list.telephone">13298309372</span></p>
              <p style="font-size: .24rem;color: #666;margin-top: .1rem;" v-text="list.province+list.country+list.district+list.address">浙江省杭州市某某某地区</p>
            </div>
            <div class="right_ft"></div>
          </group>
        </router-link>
        <p class="address_bottom">
           <span v-show="list.is_default==1" style="color: #ff526d;" @click="defaultClick(list.address_id)"> <img src="../assets/checked.png" alt=""
                                                   style="width: .28rem;height: .28rem;vertical-align: middle;margin-top: -.09rem;margin-right: .1rem;">默认地址 </span>
          <router-link :to="{name:'exchangeDetail',query:{id:id,address_id:list.address_id}}" v-show="from==1">
            <span style="border: 1px solid #999;color: #666;padding: 0 .1rem;border-radius: .05rem;" v-show="list.is_default==2">使用</span>
          </router-link>
          <span style="color: #333;float: right;" @click="del(list.address_id)"><img src="../assets/trash.png" alt=""
                                                            style="margin: -.09rem .1rem 0 0; width: .28rem;height: .28rem;vertical-align: middle;">删除</span>
        </p>
      </div>
    </div>
    <div style="height: 1.34rem;"></div>
    <router-link :to="{name:'addAddress',query:{from:from,pro_id:id}}">
      <div class="btn">
        <x-button action-type="reset"
                  style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;">添加地址
        </x-button>
      </div>
    </router-link>
    <loading v-model="showLoading" :text="loadText"></loading>
    <div class="toTop" @click="toTop()"><img src="/static/images/top.png" alt="" style="width: .35rem;height: .15rem;display: block;margin: .2rem auto .1rem;"><span>顶部</span></div>

  </div>
</template>
<script>
  import {Group, Cell, XButton,Loading} from 'vux'

  export default {
    name: 'addressList',
    components: {
      Group,
      Cell,
      XButton,
      Loading
    },
    data() {
      return {
        showLoading:false,
        loadText:'加载中...',
        addressList:[],
        from:'',
        id:'',
      }
    },
    methods:{
      //      收货地址列表
      getAddressList:function(){
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/address_list',
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.addressList = res.data.data.address_list
          }else if(res.data.code=='400'){
             this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      刪除选中的收货地址
      del(e){
        this.showLoading=true
        console.log(e)
        this.$http({
          method:'POST',
          url:'/api/delAddress',
          data:{address_id:e}
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.$vux.toast.show({
              text:res.data.data.message
            })
            this.getAddressList()
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      },
      defaultClick(e){
        if(this.from==1){
          this.$router.push({name:'exchangeDetail',query:{id:this.id,address_id:e}})
        }else{

        }
      }
    },
    created:function(){
      this.id = this.$route.query.id
//      判断该页面是从兑换商品还是个人中心跳转过来的 1.从兑换商品  2.从个人中心
      this.from = this.$route.query.type
      this.getAddressList()
    },
    mounted:function(){
      // 返回顶部
      let back_btn = document.getElementsByClassName('toTop')[0];
      window.onscroll = function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 800) {
          back_btn.style.display = 'block';
        } else {
          back_btn.style.display = 'none';
        }
      }
    }
  }
</script>
<style scoped>
  .right_ft:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: .32rem;
  }

  .btn {
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
  .address_bottom{
    overflow:hidden;background-color: white; color: #ff526d;font-size: .20rem;padding: .1rem .3rem .1rem .3rem;margin-bottom: .1rem;
  }
</style>
