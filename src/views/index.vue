<template>
<!-- 首页 -->
  <div class="index">
      <Top/>
    <Wallpaper/>
    <Focusinfo/>
    <!-- <Bottom/>  -->
     <Xue/>  
  </div>
 
</template>
<script>
import Xue from "@/components/Xue.vue";
import Top from "@/components/Top.vue";
import Wallpaper from "@/components/Wallpaper.vue";
import Bottom from "@/components/Bottom.vue";
import Focusinfo from "@/components/Focusinfo.vue";
export default {
  name: "Index",
  components: { Top,Xue, Wallpaper, Bottom,Focusinfo },
  data() {
    return {
    };
  },
    mounted(){
    //加载html后调用
    },
  methods:{
  //清除缓存  https://purge.jsdelivr.net/
  }
};
</script>
<style>
.index {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>