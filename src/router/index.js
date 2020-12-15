import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [   //配置路由
    {
      path: '/',
      redirect :'index'
    },
    {
      path: '/index',//路径
      name: 'Index',//此模块
      component:() =>import('@/views/index/index.vue') //此路径下对应的文件
    },
    {
      path: '/hide',
      name: 'Hide',
      component: () => import('@/views/hide/hide.vue')
    },
  ]
})