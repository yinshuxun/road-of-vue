<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="blog">
        <div :class="{'navigation':true}">
            <a class='dot' @click="choose('region_1',$event)"></a>
            <a class='dot' @click="choose('region_2',$event)"></a>
            <a class='dot' @click="choose('region_3',$event)"></a>
        </div>
        <div v-bind:class="{'content':true}">
            <component :is="currentView"></component>
        </div>
    </div>
</template>
<script>
    import './index.styl'
    import region_1 from "./region_1.vue"
    import region_2 from "./region_2.vue"
    import region_3 from "./region_3.vue"

    export default{
        data(){
            return {
                msg: 'hello vue',
                currentView: "region_1"
            }
        },
        methods: {
            choose(path, event){
                this.currentView = path
            }
        },
        components: {
            region_1,
            region_2,
            region_3
        }
    }
</script>
