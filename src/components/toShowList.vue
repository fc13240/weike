<template>
  <div>
    <div class="main">
      <textarea name="des" placeholder="说说你的晒单感受吧~" class="des" v-model="evaluate">
    </textarea>
      <div class="up_img">
        <!--<uploader v-model="evaluate_url"></uploader>-->
        <div class="vue-uploader">
          <div class="file-list">
            <section v-for="(file, index) in imgList" class="file-item draggable-item">
              <img :src="file.image_url" alt="" ondragstart="return false;">
              <!--<p class="file-name">{{file.name}}</p>-->
              <span class="file-remove" @click="remove(index)">+</span>
            </section>
            <section class="file-item">
              <!--<div @click="add" class="add">-->

              <!--</div>-->
              <label for="file" class="add"></label>
            </section>
          </div>
          <input type="file" accept="image/*" @change="fileChanged" ref="file"id="file">
        </div>
      </div>
    </div>
    <x-input title="订单号" placeholder="请输入订单号" keyboard="number" type="number"
             style="background-color:white;color: #333;font-size: .32rem;border-top: .16rem solid #f4f4f4;border-bottom: .16rem solid #f4f4f4;padding: .4rem .5rem"
             v-model="order_num"></x-input>

    <div class="introduce">
      <p style="color: #999999;vertical-align: middle;"><img src="../assets/litter_sanjiao.png" alt="">晒单说明</p>
      <p style="color: #666;padding:.2rem;" v-text="brief">说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容</p>
    </div>
    <div style="height: 1.34rem;"></div>
    <div class="btn">
      <x-button action-type="reset"
                style="background-color: #ff526d;color: white;font-size: .32rem;width: 90%;margin: .3rem auto;"
                @click.native="submit()">发布
      </x-button>
    </div>
    <loading v-model="showLoading" :text="loadText"></loading>

  </div>
</template>
<script>
  import {XButton, XInput, Loading} from 'vux'
  //import uploader from './uploader.vue'
  export default {
    name: 'toShowList',
    components: {
      XButton,
      XInput,
      Loading
//      uploader
    },
    data() {
      return {
        showLoading: false,
        loadText: '加载中...',
        order_num: '',
        evaluate: '',
        files: [],
        point: {},
        uploading: false,
        percent: 0,
        imgList: [],
        brief: ''
      }
    },
    methods: {
      //      晒单说明
      getShareBrief: function () {
        this.showLoading = true
        this.$http({
          method: 'POST',
          url: '/api/shareBrief'
        }).then((res) => {
          this.showLoading = false
          if (res.data.code == '200') {
            this.brief = res.data.data.brief
          } else if (res.data.code == '400') {
//            this.$vux.toast.show({
//              type:"cancel",
//              text:res.data.message
//            })
          }
        }, (err) => {
          console.log(err)
        })
      },
//      晒单发布
      submit: function () {
        if (this.evaluate == '') {
          this.$vux.toast.show({
            type: 'cancel',
            text: '内容不能为空！'
          })
          return
        }
        if (this.imgList.length == 0) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '请上传晒单图片！'
          })
          return
        }
        if (!this.order_num) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '订单号不能为空'
          })
          return
        } else {
        }
        this.showLoading = true
        this.$http({
          method: 'POST',
          url: '/api/shareOrder_front',
          data: {evaluate: this.evaluate, order_num: this.order_num, evaluate_url: JSON.stringify(this.imgList)}
        }).then((res) => {
          this.showLoading = false
          if (res.data.code == '200') {
            this.$vux.toast.show({
              text: res.data.data.message
            })
            history.go(-1)
          } else if (res.data.code == '400') {
            this.$vux.toast.show({
              text: res.data.error,
              type:'cancel'
            })
          }
        }, (err) => {
          console.log(err)
        })
      },
      add() {
        this.$refs.file.click()
      },
      remove(index) {
        this.imgList.splice(index, 1)
      },
      fileChanged(e) {
//        const list = e.target.files
//        for (let i = 0; i < list.length; i++) {
//          if (!this.isContain(list[i])) {
//            const item = {
//              name: list[i].name,
//              size: list[i].size,
//              file: list[i]
//            }
//            this.html5Reader(list[i], item)
//            this.files.push(item)
//          }
//        }
//        const formData = new FormData();
//        this.files.forEach((item) => {
//          formData.append('images[]', item.file)
//        })
//        for(var i =0 ;i<e.target.files.length;i++){
//          formData.append('images[]',e.target.files[i]);
//        }
        var file=e.target.files[0]
        var self = this
        const formData = new FormData();
//          调用压缩图片的方法
          this.compress(file, 0.2, function (err, data) {
            if (err) {console.log(err);return;}else{
              formData.append('images[]', data);
              // 接下来就可以用 ajax 提交 fromdData
              self.$http({
                method: 'POST',
                url: '/api/upload',
                dataType: 'formData',
                data: formData
              }).then((res) => {
                if (res.data.code == '200') {
                  let j
                  for (j in res.data.data.image_url) {
                    self.imgList.push(res.data.data.image_url[j])
                    self.files=[]
                  }
                }
              }, (err) => {
              })
            }
          });
//        console.log(formData)
//        this.$http({
//          method: 'POST',
//          url: '/api/upload',
//          dataType: 'formData',
//          data: formData
//        }).then((res) => {
//          if (res.data.code == '200') {
//            let j
//            for (j in res.data.data.image_url) {
//              this.imgList.push(res.data.data.image_url[j])
//              this.files=[]
////              console.log(this.imgList)
//            }
//          }
//        }, (err) => {
//        })
      },
//      // 将图片文件转成BASE64格式
//      html5Reader(file, item) {
//        const reader = new FileReader()
//        reader.onload = (e) => {
//          this.$set(item, 'src', e.target.result)
//        }
//        reader.readAsDataURL(file)
//      },
//      isContain(file) {
//        console.log(file)
//        this.files.forEach((item) => {
//          if (item.name === file.name && item.size === file.size) {
//            return true
//          }
//        })
//        return false
//      },
//      uploadProgress(evt) {
//        const component = this
//        if (evt.lengthComputable) {
//          const percentComplete = Math.round((evt.loaded * 100) / evt.total)
//          component.percent = percentComplete / 100
//        } else {
//          console.warn('upload progress unable to compute')
//        }
//      },
//      图片压缩方法
      compress(file, quality, callback) {
        if (!window.FileReader || !window.Blob) {
          return errorHandler('您的浏览器不支持图片压缩')();
        }

        var reader = new FileReader();
        var mimeType = file.type || 'image/jpeg';

        reader.onload = createImage;
        reader.onerror = errorHandler('图片读取失败！');
        reader.readAsDataURL(file);

        function createImage() {
          var dataURL = this.result;
          var image = new Image();
          image.onload = compressImage;
          image.onerror = errorHandler('图片加载失败');
          image.src = dataURL;
        }

        function compressImage() {
          var canvas = document.createElement('canvas');
          var ctx;
          var dataURI;
          var result;

          canvas.width = this.naturalWidth;
          canvas.height = this.naturalHeight;
          ctx = canvas.getContext('2d');
          ctx.drawImage(this, 0, 0);
          dataURI = canvas.toDataURL(mimeType, quality);
          result = dataURIToBlob(dataURI);

          callback(null, result);
        }

        function dataURIToBlob(dataURI) {
          var type = dataURI.match(/data:([^;]+)/)[1];
          var base64 = dataURI.replace(/^[^,]+,/, '');
          var byteString = atob(base64);

          var ia = new Uint8Array(byteString.length);
          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ia], {type: type});
        }

        function errorHandler(message) {
          return function () {
            var error = new Error('Compression Error:', message);
            callback(error, null);
          };
        }
  }
    },
    created: function () {
      this.order_num = this.$route.query.order_num
      this.getShareBrief()
    }
  }
</script>
<style scoped>
  .main, .introduce {
    background-color: white;
    padding: .3rem;
  }

  .des {
    width: 100%;
    height: 170px;
    outline: none;
    border: none;
    resize: none;
    font-size: .32rem;
  }

  .up_img {
    width: 100%;
  }

  .up_img img {

  }

  .introduce {
    margin-top: .08rem;
    font-size: .28rem;
  }

  .introduce img {
    width: .12rem;
    height: .12rem;
    vertical-align: middle;
    margin: -.1rem .1rem 0 0;
  }

  /*上传图片样式*/
  .vue-uploader .file-list {
    padding: 10px 0px;
  }

  .vue-uploader .file-list:after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size: 0;
  }

  .vue-uploader .file-list .file-item {
    float: left;
    position: relative;
    width: 2rem;
    text-align: center;
    margin-right: .3rem;
  }

  .vue-uploader .file-list .file-item img {
    width: 2rem;
    height: 2rem;
    border: 1px solid #ececec;
  }

  .vue-uploader .file-list .file-item .file-remove {
    position: absolute;
    right: 0;
    display: none;
    top: 0;
    width: .4rem;
    height: .4rem;
    color: white;
    cursor: pointer;
    line-height: .35rem;
    border-radius: 100%;
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.5);
  }

  .vue-uploader .file-list .file-item:hover .file-remove {
    display: inline;
  }

  .vue-uploader .file-list .file-item .file-name {
    margin: 0;
    height: 40px;
    word-break: break-all;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .vue-uploader .add {
    width: 2rem;
    height: 2rem;
    margin-right: .1rem;
    float: left;
    text-align: center;
    line-height: 2rem;
    border: 1px dashed #ececec;
    font-size: 30px;
    cursor: pointer;
    background-image: url("/static/images/upload.png");
    background-size: 100% 100%;
  }

  .vue-uploader .upload-func {
    display: flex;
    padding: 10px;
    margin: 0px;
    background: #f8f8f8;
    border-top: 1px solid #ececec;
  }

  .vue-uploader .upload-func .progress-bar {
    flex-grow: 1;
  }

  .vue-uploader .upload-func .progress-bar section {
    margin-top: 5px;
    background: #00b4aa;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    transition: all .5s ease;
  }

  .vue-uploader .upload-func .operation-box {
    flex-grow: 0;
    padding-left: 10px;
  }

  .vue-uploader .upload-func .operation-box button {
    padding: 4px 12px;
    color: #fff;
    background: #007ACC;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  .vue-uploader > input[type="file"] {
    display: none;
  }

  .btn {
    width: 100%;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e9e9e9;
  }
</style>
