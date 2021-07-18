import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [   //配置路由

  {
    path: '/',//路径
    name: 'Index',//此模块
    component: () => import('@/views/index.vue'), //此路径下对应的文件
  },
  // {
  //   path: '/404',//路径
  //   name:"Page404",
  //   component: () => import('@/views/404.vue') //此路径下对应的文件
  // },
  { path: '*',redirect:"/" }
]


const router = new Router({
  routes: routes,
  mode: 'history'

})
// 百度统计
router.beforeEach((to, from, next) => {
  // 短链接生成跳转预留 代码
  // console.log("目标",to.redirectedFrom)
  // var target=to.redirectedFrom;
  // if(target!=undefined&&target.slice(1)=='aa'){
    // 此处将 路径代码发送到后端获取url
  //   window.location.replace("https://www.runoob.com");
  // }
  
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})

export default router;
