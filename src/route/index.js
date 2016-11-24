import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './_config'
import './_http'

Vue.use(VueRouter)

const router = new VueRouter(routerConfig)

export default router

