import Home from "./modules/home/index.vue"
import Blog from "./modules/blog/index.vue";
import Index from "./modules/index/index.vue";

export default {
    routes: [
        {path: '/', component: Index},
        {path: '/home', component: Home},
        {path: '/blog', component: Blog}
    ]
}