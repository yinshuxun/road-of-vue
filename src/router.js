import Home from "./modules/home"
import Blog from "./modules/blog";
import Index from "./modules/index";
import Show from "./modules/show";
import WaterFallFlow from "./modules/waterfallflow";

export default {
    routes: [
        {path: '/', component: Index},
        {path: '/home', component: Home},
        {path: '/blog', component: Blog},
        {path: '/show', component: Show},
        {path: '/waterfallflow', component: WaterFallFlow},

    ]
}