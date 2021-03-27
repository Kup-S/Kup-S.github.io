  <template>
  <div>
    <!-- 头部 log -->
     <div class="top">
        <div class="div"><span id="login">rs7.top</span></div>
    </div>
  
  <!-- 壁纸组件 -->
  <div class="bizhidiv">
  <div class="backGroundImageDiv headertop filter-dot" v-if="nowImage" :style="{height: scrollerHeight}">
     <div
        class="main-header2"
        :style="{ backgroundImage: 'url(' + nowImage.url + ')' }"
      ></div>
     
  </div>
    <!-- 头像
     <div class="focusinfo">
           <div class="block"><a target=_blank title="联系我" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=S3l7enx9ent_cnsLOjplKCQm"><el-avatar :size="100" :src="circleUrl" :alt="Kups"/></a></div>
           <div>Kups的技术分享站</div>
    </div> -->
  </div>
  
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      nowImage: "", //当前url(仅作为默认值)
      imageList: [], //获取到的全部url
      index: 0, //当前url下标
      path:
        "https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/api/imgList.json", //获取收藏夹图片列表
      mobilePath:
        "https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/api/mobileList.json", //手机端图片列表
    };
  },
  created() {
    this.assemble();
  },
  computed: {
    scrollerHeight() {
      return window.innerHeight + "px";
    },
  },
  methods: {
    assemble: function () {
      let path = "";
      // console.log("宽度",window.screen.width)
      if (window.screen.width > 1000) {
        path = this.path; //电脑端
      } else {
        path = this.mobilePath; //手机端
      }
      //  发送get请求
      this.$http.get(path).then((res) => {
        this.imageList = res.data;
        this.index =
          Math.floor(Math.random() * (this.imageList.length - 1 - 0 + 1)) + 0; //随机图片
        this.nowImage = this.imageList[this.index];
      });
    },
  },
};
</script>

<style>
 @import url("../assets/css/Top.css");

/**主页头图   原：不会跟随上下滑动*/
.main-header {
  display: table;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  text-align: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  box-shadow: 0 1px 2px rgba(150, 150, 150, 0.7);
}
.main-header2 {
  display: block;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  z-index: -10;
}
/* 改版 */
.backgroundImage {
  width: auto;
  height: 100%;
}
.backGroundImageDiv {
  width: 100%;
}

/* 设置遮罩范围 */
.bizhidiv{
  position: relative;
}

/* 遮罩网格 */
/*网格遮罩*/
.headertop {
  overflow: hidden;
  height: 0;
}
.headertop,
.pattern-center {
  animation: header 1s;
}
.headertop.filter-dot:before {
  background-image: url(~@/assets/image/pixel.png);
}
.headertop:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -5;
  background-attachment: fixed;
} 
</style>
