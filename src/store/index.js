import Vue from 'vue'
import Vuex from 'vuex'
// 导入刚才写的js文件
import state from './state.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations:{
    changeUser(state,userInfo){
      state.userInfo=userInfo
    }
  }
})

export default store