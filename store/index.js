// 这里跟vue2有点区别，vue2中是直接导入vue，然后通过vue.use(xxx)
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import map from './modules/map.js'
Vue.use(Vuex);//vue的插件机制

const store = new Vuex.Store({
  getters,
  modules:{
	  map,
  }
})

// 调用createStore
export default store