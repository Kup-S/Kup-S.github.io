<template>
  <!-- 个人信息 -->
  <div class="focusinfo">
    <div class="focusinfo no-select">
      <h1 class="center-text glitch Ubuntu-font" :data-text="title">
        {{ title }}
      </h1>
      <div class="header-info">
        <p>
          <i class="fa fa-quote-left"></i> {{ subtitle
          }}<i class="fa fa-quote-right"></i>
        </p>
        <div class="top-social_v2">
          <li id="bg-pre" @click="up" style="cursor : pointer;">
            <img class="flipx" src="../assets/image/right.png" />
          </li>
          <li v-for="(Link, index) in socializingList" :key="index">
            <a
              :href="Link.href"
              target="_blank"
              class="social-github"
              :title="Link.title"
              ><img :src="Link.icon" class="link_img"
            /></a>
          </li>
          <li id="bg-next" @click="down" style="cursor : pointer;">
            <img class="flipx2" src="../assets/image/right.png" />
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from "../assets/js/util.js";
export default {
  name: "Focusinfo",
  data() {
    return {
      title: "", //主标题
      subtitle: "", //子标题
      socializingList: [], //外链接列表
      path:
        "https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/api/info.json", //访问地址
    };
  },
  created() {
    this.loadInfo();
  },
  methods: {
    loadInfo: function () {
      this.$http.get(this.path).then((res) => {
        this.title = res.data.title;
        let index =
          Math.floor(Math.random() * (res.data.subtitle.length - 1 - 0 + 1)) +
          0; //随机子标题
        this.subtitle = res.data.subtitle[index].text;
        this.socializingList = res.data.socializingList;
      });
    },
    //上一页
    up() {
      Utils.$emit("cut", "up");
    },
    // 下一页
    down() {
      Utils.$emit("cut", "down");
    },
  },
};
</script>
<style>
@import url("../assets/css/focusinfo.css");
@import url("https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css");
</style>