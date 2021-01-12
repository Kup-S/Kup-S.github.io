<template>
<!-- 头部组件 -->
  <div class="top">
    <el-row :gutter="20">
      <el-col type="flex" justify="center" align="middle" :span="6">
        <div class="div"><span id="login">rs7.top</span></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {};
  },
};
</script>
<style>
@import url("../assets/css/Top.css");
</style>