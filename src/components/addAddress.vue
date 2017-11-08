<template>
  <div>
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" style="font-size: .28rem;"></x-input>
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" style="font-size: .28rem;"></x-input>
      <x-address title="所在地区" v-model="value" raw-value :list="addressData" value-text-align="center" style="font-size: .28rem;"></x-address>
      <textarea name="des" placeholder="详细地址" class="des">
    </textarea>
    </group>
    <checklist required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
    <div class="btn">
      <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">保存</x-button>
    </div>
  </div>
</template>
<script>
  import {ChinaAddressV4Data,Group, XAddress,XInput,Checklist,XButton} from 'vux'

  export default {
    name: 'addAddress',
    components: {
      ChinaAddressV4Data,
      Group,
      XAddress,
      XInput,
      Checklist,
      XButton
    },
    data () {
      return {
        value: [],
        addressData: ChinaAddressV4Data,
        commonList: [ '设为默认'],
        checklist001: [],
      }
    },
    methods: {
      doShowAddress () {
        this.showAddress = true
        setTimeout(() => {
          this.showAddress = false
        }, 2000)
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      changeData () {
        this.value2 = ['430000', '430400', '430407']
      },
      changeDataByLabels () {
        this.value2 = ['广东省', '广州市', '天河区']
      },
      changeDataByLabels2 () {
        this.value2 = ['广东省', '中山市', '--']
      },
      getName (value) {
        return value2name(value, ChinaAddressV4Data)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      },
      change (val, label) {
        console.log('change', val, label)
      },
      selectFirst () {
        this.checklist001 = ['China']
      }
    }

  }
</script>
<style scoped>
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
