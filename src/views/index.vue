<template>
<!-- 首页 -->
  <div class="index">
    <Wallpaper />
     <Top />
    <Shade />
    <Bottom />
  </div>
  <!-- 这里知识临时代码，为了推送 -->
</template>
<script>
import Top from "@/components/Top.vue";
import Wallpaper from "@/components/Wallpaper.vue";
import Bottom from "@/components/Bottom.vue";
import Shade from "@/components/Shade.vue";
export default {
  name: "Index",
  components: { Top, Wallpaper,Shade, Bottom },
  data() {
    return {

      aa:"",
    };
  },
};
</script>
<style>
.index {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  z-index: 99999;
}
</style>