<template>
  <div class="urlCard">
    <div class="cards">
      <div class="card"  v-for="(timp, index) in webList" :key="index" @click="skupUrl(timp.href)" @mouseover="mouseOver"  @mouseleave="mouseLeave" >
        <img
          class="img"
          :src="timp.icon"
        />
        <div class="text">{{timp.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UrlCard",
  props: ['webList'],
  data() {
    return {
      // webList: this['web-list'],
    };
  },
  methods:{
      skupUrl(url){
          console.log(url)
          var tempwindow=window.open('_blank');
          tempwindow.location=url;
          //  window.location.href = 
      },
       mouseOver(){
        //改变样式
              this.active = 'background-color: rgb(235,235,235)';
        },
        mouseLeave() {
        //清空样式
            this.active = '';
        }
  }
};
</script>

<style >
.cards {
  border: 1px solid rebeccapurple;
  padding: 10px 50px;
}
.img {
  width: 35px;
  height: 35px;
  z-index: 1;
  padding-top: 10px;
}

/* 父级 */
.card {
  /* border: 1px solid blue; */
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.0);
  display: inline-block;
  margin:10px 2px;
   cursor: pointer;
}
/* 文字 */
.text {
  margin: 0 auto;
  font: normal 520 12px "黑体";
  color: rgb(0, 0, 0);
  z-index: 1;
}
</style>