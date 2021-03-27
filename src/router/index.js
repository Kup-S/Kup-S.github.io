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
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})

export default router;
