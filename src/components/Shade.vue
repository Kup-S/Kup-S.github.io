<template>
<!-- 遮罩组件 -->
  <div class="shade">
    <div class="headertop filter-dot"/>
  </div>
</template>

<script>
export default {
  name: "Shade",
  data() {
    return {
    }
  },
 
};
</script>

<style>
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
    background-image:url(~@/assets/image/pixel.png);
}
.headertop:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* z-index: -5; */
    background-attachment: fixed;
}
</style>