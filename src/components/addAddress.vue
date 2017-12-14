<template>
  <div>
    <div>
      <group>
        <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" style="font-size: .28rem;" v-model="name"></x-input>
        <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" style="font-size: .28rem;" v-model="tel"></x-input>
        <x-address title="所在地区" v-model="address"  :list="addressData" value-text-align="center" style="font-size: .28rem;" ></x-address>
        <textarea name="des" placeholder="详细地址" class="des" v-model="detail">
    </textarea>
      <checklist :options="commonList" v-model="checkValue" @on-change="change" ref="check" v-show="is_default!==1"></checklist>
        </group>
      <div style="height: 1.34rem;"></div>
      <div class="btn">
        <x-button @click.native="click()"  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;">保存</x-button>
      </div>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>
<script>
  import {Cell,ChinaAddressV4Data,Group,XAddress,XInput,Checklist,XButton,Loading,Value2nameFilter as value2name } from 'vux'

  export default {
    name: 'addAddress',
    components: {
      ChinaAddressV4Data,
      Group,
      XAddress,
      XInput,
      Checklist,
      XButton,
      Loading,
      Cell
    },
    data () {
      return {
        addressData: ChinaAddressV4Data,
        commonList: [{key:'1', value:'设为默认'}],
        checkValue: [],
        address_id:'',
        showLoading:false,
        loadText:'加载中...',
        name:'',
        tel:'',
        address:[],
        detail:'',
        type:'',
        value2name:'',
        is_default:'',
        from:'',
        pro_id:''
      }
    },
    methods: {
      //      新增收货地址
      addAddress:function(){
        this.getName(this.address)
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/addAddress',
          data:{
            person_name:this.name,
            telephone:this.tel,
            detail:this.detail,
            address:this.value2name,
            is_default:this.type
          }
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.$router.push({path: '/personCenter/addressList',query:{type:this.from,id:this.pro_id}})
          }else if(res.data.code=='400'){
            this.$vux.toast.show({
              text:res.data.error,
              type:'warn'
            })
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      修改收货地址详情
      update:function(){
        this.getName(this.address)
        this.showLoading=true
        this.$http({
          method:'POST',
          url:'/api/updateAddress',
          data:{
            address_id:this.address_id,
            person_name:this.name,
            telephone:this.tel,
            detail:this.detail,
            address:this.value2name,
            is_default:this.type
          }
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.$router.push({path: '/personCenter/addressList',query:{id:this.pro_id,type:this.from}})
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      //      收货地址详情
  getAddressDetail:function(){
        this.showLoading=true
        this.$http({
          method:'GET',
          url:'/api/updateAddress',
          params:{address_id:this.address_id}
        }).then((res)=>{
          if(res.data.code=='200'){
            this.showLoading=false
            this.name=res.data.data.address_info.person_name
            this.tel=res.data.data.address_info.telephone
            this.address=res.data.data.address_info.address_array
            this.type = res.data.data.address_info.is_default
            this.is_default=res.data.data.address_info.is_default
            this.detail=res.data.data.address_info.address
            if(res.data.data.address_info.is_default=='1'){
              this.checkValue=['1']
            }else{
              this.checkValue=[]
            }
          }else if(res.data.code=='400'){
            this.showLoading=false
          }
        },(err)=>{
          console.log(err)
        })
      },
      doShowAddress () {
        this.showAddress = true
        setTimeout(() => {
          this.showAddress = false
        }, 2000)
      },
      change (val, label) {
          if (val == '1') {
            this.type = '1'
          } else {
            this.type = '2'
          }
      },
      getName:function(value){
        this.value2name= value2name(value, ChinaAddressV4Data)
      },
      click(){
        if(this.address_id){
           this.update()
        }else{
           this.addAddress()
        }
      }
    },
    created:function(){
      const address_id = this.$route.query.id
      const from = this.$route.query.from
      this.address_id = address_id
      this.from =from
      this.pro_id=this.$route.query.pro_id
      this.getAddressDetail()
    },
    mounted:function(){

    }

  }
</script>
<style scoped="">
  .des{
    width: 100%;height: 1.94rem;outline: none;border: none;resize: none;
    font-size: .28rem;
    color: #666;
    margin: 0 .3rem;
    padding: .3rem 0;
    border-top: 1px solid #f4f4f4;
  }
  .btn{
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
</style>
