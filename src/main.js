import Vue from 'vue'
import store from './store/index'
import App from './App.vue'
import './utils'
import './common/stylus/index.styl'
import router from './route'

Vue.config.silent = true

if (module.hot) {
  module.hot.accept()
}

new Vue({
  extends: App,
  router,
  el: '#app',
  store
})
