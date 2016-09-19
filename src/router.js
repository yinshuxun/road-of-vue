import Home from "./modules/home/index.vue"
import Blog from "./modules/blog/index.vue";
import Index from "./modules/index/index.vue";
import Region1 from "./modules/blog/region_1.vue";
import Region2 from "./modules/blog/region_2.vue";
import Region3 from "./modules/blog/region_3.vue";

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
            component: Blog,
        }
    })
}