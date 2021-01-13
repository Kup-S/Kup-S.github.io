<template>
  <!-- 拦截组件 -->
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/image/404.png" alt="404" />
        <img
          class="pic-404__child left"
          src="@/assets/image/404_cloud.png"
          alt="404"
        />
        <img
          class="pic-404__child mid"
          src="@/assets/image/404_cloud.png"
          alt="404"
        />
        <img
          class="pic-404__child right"
          src="@/assets/image/404_cloud.png"
          alt="404"
        />
      </div>
      <div class="bullshit"></div>
      <div class="bullshit__headline">{{ message }}</div>
      <!-- <a href="" class="bullshit__return-home"> -->
      <router-link to="/">
        <button class="custom-btn btn-3">
          <span>返回首页</span>
        </button>
      </router-link>

      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  computed: {
    message() {
      return "小伙子,骨骼如此惊奇！";
    },
  },
};
</script>
<style>
@import url("../assets/css/404.css");
</style>