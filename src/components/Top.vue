<template>
  <div class="top">
    <el-row :gutter="20">
      <el-col type="flex" justify="center"  align="middle" :span="6">
        <div class="div"><span id="login">rs7.top</span></div></el-col
      >
      <el-col :span="14">
        <div class="div">
          <el-input
            class="input"
            size="medium"
            v-model="input"
            clearable
          />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="div">
          <!-- <img src="@/assets/search.png" /> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style >
.top{
  border:1px solid red;
}
/* logo */
#login {
  background-image: linear-gradient(to right, #ff9569, #e92758);
  -webkit-background-clip: text;
  color: transparent;
  font: normal 800 60px "黑体";
}
.div {
vertical-align: middle;
  /* width: 60%; */
  display: inline-block;
}
.input{
  background: transparent;;
}

</style>