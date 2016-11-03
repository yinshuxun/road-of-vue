import Vue from "vue";
import VueTouch from "vue-touch";
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// Vue.use(VueTouch);
Vue.use(VueRouter);
Vue.use(VueResource);

import App from './App'

import routerConfig from "./router";
import "./utils";
import "./stylus/index.styl"

Vue.config.silent = false


const router = new VueRouter(routerConfig);

    if (module.hot) {
    module.hot.accept();
}

new Vue({
    extends:App,
    router,
    el:'#app',
    // template:`<div id="app"><router-view></router-view></div>`
})