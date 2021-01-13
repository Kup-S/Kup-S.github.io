<template>
  <!-- 底部组件 -->
  <div class="xue">
        <canvas id="canvas_snow"></canvas>
  </div>
</template>
<script>
import mySnow from "../assets/js/xue.js"; //注意路径
export default {
  name: "Xue",
  data() {
    return {};
  },
  mounted(){
       mySnow.startSnow();
  },
};
</script>

<style>
/* .xue{
    border: 1px solid red;
    width:100%;
    z-index: 99999;
} */
</style>