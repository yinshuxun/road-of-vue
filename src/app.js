import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from './store/index'

import App from './App.vue'
import routerConfig from './ssr-router'
// import "./utils";
// import "./common/stylus/index.styl"

Vue.config.silent = true

const router = new VueRouter(routerConfig)

if (module.hot) {
  module.hot.accept()
}

const app = new Vue({
  extends: App,
  router,
  el: '#app',
  store
})

export {
    app,
    store,
    router
}

