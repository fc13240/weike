<template>
  <div>
    <img src="/static/images/draw.png" alt="" style="width: 100%;height: 100%;">
  </div>
</template>
<script>
  export default {
    created () {
      var a = this.$route.query.url
      var sef = this
      var url = ''
      // 判断是否是ios微信浏览器
      if (window.__wxjs_is_wkwebview === true) {
//        url = this.$store.state.url.split('#')[0]

      } else {
        window.location.href=a
      }
    }
  }

</script>
<style scoped>

</style>
