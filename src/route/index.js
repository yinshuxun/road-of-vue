import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './_base'
import axios, {interceptors} from 'axios';
import store  from '../store'
Vue.prototype.$http = axios;

Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

// Add a request interceptor
interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch('loading','ing')
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
interceptors.response.use(function (response) {
    // Do something with response data
    store.dispatch('loading','off')
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default router;



