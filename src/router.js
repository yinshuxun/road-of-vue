import Home from "./modules/home/index.vue"
import Blog from "./modules/blog/index.vue";

export default (router)=> {
    router.map({
        "/home": {
            name: "home",
            component: Home
        },
        "/blog": {
            name: "blog",
            component: Blog
        }
    })
}