import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// mode: 'history',
const routes = [   //配置路由
  // {
  //   path: '/',
  //   redirect :'index'
  // },
  // {
  //   path: '/index',//路径
  //   name: 'Index',//此模块
  //   component:() =>import('@/views/index.vue') //此路径下对应的文件
  // },
  {
    path: '',//路径
    name: 'Index',//此模块
    component: () => import('@/views/index.vue'), //此路径下对应的文件
  },
  {
    path: '/404',//路径
    name:"Page404",
    component: () => import('@/views/404.vue') //此路径下对应的文件
  },
  { path: '*', redirect: '/404' }
]


const router = new Router({
  routes: routes
})
// // 百度统计
// router.beforeEach((to, from, next) => {
//   if (window._hmt) {
//     if (to.path) {
//       window._hmt.push(['_trackPageview', '/#' + to.fullPath])
//     }
//   }
//   next()
// })

export default router;
