import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store' //vue会自动调用目录下的index.js


import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

Vue.config.productionTip = false
Vue.use(element)


// 设置拦截器，在header中插入token
// axios.interceptors.request.use(
//   config => {
//     //在所有请求头部添加token值
//     const token = store.state.userInfo.token;
// 	console.log(token)
//     if (token) {
// 		// header 中添加数据
// 		//          数据key  value
//       config.headers.token = token;
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );


Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')