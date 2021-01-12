<template>
<!-- 底部组件 -->
  <div class="bottom">
    <div class="email">
    <a target="view_window" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=S3l7enx9ent_cnsLOjplKCQm" title="发送邮件">Email</a>   
  </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      msg: "bottom",
    };
  },
};
</script>

<style>
.bottom{
  position: absolute;
    bottom: 5px;
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    text-align: center;
    width:100%;

}
a{
 text-decoration: none;
}
 
/* 未访问的链接 */
.email a:visited {
   color: rgb(255, 255, 255);
   text-decoration: line-through;
 } /* 已访问的链接 */
 .email a:hover {
   color: red;
   text-decoration: underline;
 } /* 鼠标移动到链接上 */
 .email a:active {
   color: #ff9569;
 }
</style>