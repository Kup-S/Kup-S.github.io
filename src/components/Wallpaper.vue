<template>
<!-- 壁纸组件 -->
  <div class="wallpaper">
    
      <Shade/>
      <div v-if="nowImage" class="main-header" :style="{backgroundImage:'url('+nowImage.url+')'}">
      </div>
  </div>
</template>

<script>

import Shade from "@/components/Shade.vue";
export default {
  name: "Wallpaper",
  components: { Shade},
  data() {
    return {
      nowImage: "" ,//当前url(仅作为默认值)
      imageList: [], //获取到的全部url
      index: [], //当前url下标
      path:"https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/api/imgList.json",//获取收藏夹图片列表
    };
  },
  created() {
    this.assemble();
  },
  methods: {
    assemble: function () {
      //  发送get请求
      this.$http.get(this.path).then((res) => {
        this.imageList = res.data;
        let index =Math.floor(Math.random() * (this.imageList.length-1 - 0 + 1)) + 0;//随机图片
        this.nowImage = this.imageList[index];
      });
    },
  },
};
</script>

<style>

/*主页样式*/
/**主页头图*/
.main-header {
display: table;
width: 100%;
height: 100vh;
max-height: 100vh;
text-align: center;
/* background-image: url("1646268-20190806172418911-2037584311.jpg"); */
/* background-image: url("rs7.top_app.vue_001.jpg"); */
/* background-image: url(https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190806114008215-138720377.jpg); */
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
overflow: hidden;
position: absolute;
top: 0;
left: 0;
z-index: -10;
box-shadow: 0 1px 2px rgba(150, 150, 150, .7);
}
</style>