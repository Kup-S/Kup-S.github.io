import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

Vue.config.productionTip = false
Vue.use(element)


Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
  router
}).$mount('#app')