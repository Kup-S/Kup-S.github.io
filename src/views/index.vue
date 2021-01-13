<template>
<!-- 首页 -->
  <div class="index">
    <Wallpaper />
   <Top/>
    <!-- <Shade/> -->
    <Bottom/> 
     <Xue/>  
  </div>
 
</template>
<script>

import Xue from "@/components/Xue.vue";
import Top from "@/components/Top.vue";
import Wallpaper from "@/components/Wallpaper.vue";
import Bottom from "@/components/Bottom.vue";
// import Shade from "@/components/Shade.vue";
export default {
  name: "Index",
  components: { Top,Xue, Wallpaper, Bottom },
  data() {
    return {
    };
  },
    mounted(){
    //加载html后调用
    },
  methods:{
   
  }
};
</script>
<style>
.index {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  /* z-index: 99999; */
  /* background-color: red */
}
</style>