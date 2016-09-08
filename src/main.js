import Vue from "vue";
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();

if (module.hot) {
    module.hot.accept();
}

router.map({
    '/': {
        component: App
    }
})

router.start(App, '#app')