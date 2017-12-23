<template>
  <div>
    <img src="/static/images/draw.png" alt="" style="width: 100%;height: 100%;">
  </div>
</template>
<script>
  export default {
    methods:{
      is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          return true;
        } else {
          return false;
        }
      },
    },
    created () {
      var a = this.$route.query.url
      var sef = this
      var isWeixin = this.is_weixin()
      if(isWeixin){

      }else{
        location.href=a
      }
    }

  }

</script>
<style scoped>

</style>
