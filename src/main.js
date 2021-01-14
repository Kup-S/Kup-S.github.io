import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

Vue.config.productionTip = false
Vue.use(element)


Vue.prototype.$http = axios

var _hmt = _hmt || [];
window._hmt = _hmt; 
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fcc26fec4235841efbea6c4893612b4e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//清除缓存  https://purge.jsdelivr.net/
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

