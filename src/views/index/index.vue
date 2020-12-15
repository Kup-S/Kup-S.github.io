<template>
  <div class="index" :style="{ backgroundImage: 'url(' + coverImgUrl + ')' }">
    <!-- <div class="img"></div> -->
    <Top />
    {{ msg }}
    <Url-Card :web-list="webList" />
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import UrlCard from "@/components/UrlCard.vue";
export default {
  name: "Index",
  components: { Top, UrlCard },
  data() {
    return {
      msg: "hello Vue!!!",
      webList: [],
      coverImgUrl:
        "https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/blogs/CN-wp1.jpg",
    };
  },
  created() {
    this.assemble();
  },
  methods: {
    assemble: function () {
      //   发送get请求
      this.$http.get("/admin/auth/url").then((res) => {
        res.data.forEach((v) => {
          v.icon = "https://api.qqsuu.cn/api/favicon/get.php?url=" + v.href;
          var reg = /[\u4e00-\u9fa5]/g, //专业匹配中文
            slice = v.text.substring(0, 6),
            chineseCharNum = ~~(slice.match(reg) && slice.match(reg).length),
            realen = slice.length * 2 - chineseCharNum;
          v.text =
            v.text.substr(0, realen) + (realen < v.text.length ? "." : "");
          this.webList.push(v);
        });
      });
    },
  },
};
</script>

<style >
.index {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>