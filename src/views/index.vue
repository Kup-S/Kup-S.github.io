<template>
<!-- 首页 -->
  <div class="index">
      <Top/>
    <Wallpaper/>
    <Focusinfo/>
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
      this.print()
    },
  methods:{
    print(){
      console.log('%c 祝你越来越好趟过难关便生长.','color:#276ace;padding:10px 10px;font: normal 500 20px "黑体";')
    }
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