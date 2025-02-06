import App from './App'
import uView from "uview-ui";//ui库
import store from './store'//状态管理
// #ifndef VUE3
// vue2框架
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.use(uView);
Vue.config.productionTip = false
//原形挂载
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif