<template>
<!-- 首页 -->
  <div class="index">
    <Wallpaper />
     <Top />
    <Shade />
    <Bottom />
  </div>
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
    return {};
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