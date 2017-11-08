<template>
  <div>
   <div class="main">
      <textarea name="des" placeholder="说说你的晒单感受吧~" class="des">
    </textarea>
     <div class="up_img">
       <img src="../assets/up_img_bd.png" alt="">
     </div>
   </div>
    <div class="introduce">
      <p style="color: #999999;vertical-align: middle;"><img src="../assets/litter_sanjiao.png" alt="">晒单说明</p>
      <p style="color: #666;padding:.2rem;">说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容</p>
    </div>
    <div class="btn">
        <x-button  action-type="reset" style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .4rem auto;">发布</x-button>
    </div>
  </div>
</template>
<script>
import {XButton} from 'vux'
  export default {
  name:'toShowList',
    components:{
       XButton
    }
  }
</script>
<style scoped>
  .main,.introduce{
    background-color: white;
    padding: .3rem;
  }
.des{
  width: 100%;height: 170px;outline: none;border: none;resize: none;
  font-size: .32rem;
  color: #cecece;
}
  .up_img{
    width: 100%;
  }
  .up_img img{
    width: 2.28rem;
    height: 2.28rem;
  }
  .introduce{
    margin-top: .08rem;
    font-size: .28rem;
  }
  .introduce img{
    width: .12rem;
    height: .12rem;
    vertical-align: middle;
    margin: -.1rem .1rem 0 0;
  }

</style>
