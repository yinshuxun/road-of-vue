import Vue from "vue";
import VueTouch from "vue-touch";
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from "./App.vue";
import routerConfig from "./router";
import "./utils";
import "./stylus/index.styl"

Vue.use(VueTouch);
Vue.use(VueRouter);
Vue.use(VueResource);

if (module.hot) {
    module.hot.accept();
}

const router = new VueRouter();
routerConfig(router);

router.start(App, '#app')
