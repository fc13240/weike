<template>
  <div>
    <!--<router-link to="/PersonCenter/addAddress">-->
    <!--<p style="color: #ff526d;font-size: .28rem;text-align: center;line-height: .88rem;background-color: white;border-bottom: .02rem solid #f4f4f4;">+添加地址</p>-->
    <!--</router-link>-->
    <div>
      <div>
        <router-link to="/PersonCenter/addAddress">
          <group>
            <div style="padding: .3rem .3rem;">
              <p><span style="font-size: .28rem;color: #333;margin-right: .3rem;">李静</span><span
                style="font-size: .24rem;color: #666;">13298309372</span></p>
              <p style="font-size: .24rem;color: #666;margin-top: .1rem;">浙江省杭州市某某某地区</p>
            </div>
            <div class="right_ft"></div>
          </group>
        </router-link>
        <p
          style="background-color: white; color: #ff526d;font-size: .20rem;padding: .1rem .3rem .1rem .3rem;margin-bottom: .1rem;">
          <img src="../assets/checked.png" alt=""
               style="width: .28rem;height: .28rem;vertical-align: middle;margin-top: -.09rem;">
          默认地址 <span style="color: #333;float: right;"><img src="../assets/trash.png" alt=""
                                                            style="margin: -.09rem .1rem 0 0; width: .28rem;height: .28rem;vertical-align: middle;">删除</span>
        </p>
      </div>
      <div>
        <router-link to="/PersonCenter/addAddress">
          <group>
            <div style="padding: .3rem .3rem;">
              <p><span style="font-size: .28rem;color: #333;margin-right: .3rem;">李静</span><span
                style="font-size: .24rem;color: #666;">13298309372</span></p>
              <p style="font-size: .24rem;color: #666;margin-top: .1rem;">浙江省杭州市某某某地区</p>
            </div>
            <div class="right_ft"></div>
          </group>
        </router-link>
        <p
          style="background-color: white; color: #ff526d;font-size: .20rem;padding: .1rem .3rem .1rem .3rem;margin-bottom: .1rem;overflow: hidden;">
          <span style="color: #333;float: right;"><img src="../assets/trash.png" alt=""
                                                       style="margin: -.09rem .1rem 0 0; width: .28rem;height: .28rem;vertical-align: middle;">删除</span>
        </p>
      </div>
      <div>
        <router-link to="/PersonCenter/addAddress">
          <group>
            <div style="padding: .3rem .3rem;">
              <p><span style="font-size: .28rem;color: #333;margin-right: .3rem;">李静</span><span
                style="font-size: .24rem;color: #666;">13298309372</span></p>
              <p style="font-size: .24rem;color: #666;margin-top: .1rem;">浙江省杭州市某某某地区</p>
            </div>
            <div class="right_ft"></div>
          </group>
        </router-link>
        <p
          style="background-color: white; color: #ff526d;font-size: .20rem;padding: .1rem .3rem .1rem .3rem;margin-bottom: .1rem;overflow: hidden;">
          <span style="color: #333;float: right;"><img src="../assets/trash.png" alt=""
                                                       style="margin: -.09rem .1rem 0 0; width: .28rem;height: .28rem;vertical-align: middle;">删除</span>
        </p>
      </div>
    </div>
    <router-link to="/PersonCenter/addAddress">
      <div class="btn">
        <x-button action-type="reset"
                  style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">添加地址
        </x-button>
      </div>
    </router-link>
  </div>
</template>
<script>
  import {Group, Cell, XButton} from 'vux'

  export default {
    name: 'addressList',
    components: {
      Group,
      Cell,
      XButton
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
</style>
