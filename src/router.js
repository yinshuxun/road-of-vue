import Home from "./modules/home/index.vue"
import Blog from "./modules/blog/index.vue";
import Index from "./modules/index/index.vue";

export default (router)=> {
    router.map({
        "/": {
            name: "index",
            component: Index
        },
        "home": {
            name: "home",
            component: Home
        },
        "blog": {
            name: "blog",
            component: Blog
        }
    })
}