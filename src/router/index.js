import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [   //配置路由
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
      path: '/',//路径
      name: 'Index',//此模块
      component: () => import('@/views/index.vue'), //此路径下对应的文件
    },
    {
      path: '/404',//路径
      name: '404',//此模块
      component: () => import('@/views/404.vue') //此路径下对应的文件
    },
    {
      path: '*',
      redirect: '404'
    },
  ]
})

