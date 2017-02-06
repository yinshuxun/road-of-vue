import Index from './modules/index/index.vue'
import Home from './modules/home'
import Blog from './modules/blog'
import Show from './modules/show'
import WaterFallFlow from './modules/waterfallflow'

export default {
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
        {path: '/', component: Index},
        {path: '/home', component: Home},
        {path: '/blog', component: Blog},
        {path: '/show', component: Show},
        {path: '/waterfallflow', component: WaterFallFlow}
  ]
}
