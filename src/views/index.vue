<template>
  <!-- 首页 -->
  <div class="index" :style="{ height: scrollerHeight }">
    <el-scrollbar style="height: 100%">
        <a 
          title="语雀"
          href="https://yuque.com/kups"
        >
        <button class="custom-btn btn-3">
          <span>进入</span>
        </button>
        </a>

      <Xue/>
      <Top />

      <div class="index_bottom_a" align="center">
        <a
          target="_blank"
          title="发送邮件"
          href="mailto:kupszz@163.com?subject=主题&body=来自rs7.top"
        >
          ©2021 Kups-長樂
        </a>|
        <a href="http://beian.miit.gov.cn/" target="_blank"
          >冀ICP备2021005651号</a
        >
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import Xue from "@/components/Xue.vue";
import Top from "@/components/Top.vue";
export default {
  name: "Index",
  components: { Top, Xue },
  data() {
    return {
    };
  },
  mounted() {
    this.print();
  },
  methods: {
    print() {
      console.log(
        "%c 祝你越来越好趟过难关便生长.",
        'color:#276ace;padding:10px 10px;font: normal 500 20px "黑体";'
      );
    },
    show() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    scrollerHeight() {
      return window.innerHeight + "px";
    },
  },
};
</script>
<style>
/* element 横向滚动条去除 */
.el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}

.index_bottom_a {
  color: rgb(219, 219, 219);
  position: absolute;
  z-index: 1000;
  bottom: 1px;
  left: 36%;
}
.index_bottom_a a {
  text-decoration: none;
  color: rgb(219, 219, 219);
}

@media screen and (max-width: 640px) {
  .index_bottom_a {
    font-size: 12px;
    left: 20%;
  }
}

.custom-btn {
position: absolute;
left: 50%;
bottom: 10%;
width: 180px;
margin-left: -100px; 
  z-index: 1000;
}
@import url("../assets/css/btn.css");
</style>