<template>
    <div>
        road of vue!
        <Increment></Increment>
        <Display></Display>
        -----------------------
        <div>生成随机数:</div>
        <ol>
            <li v-for="item in items">
                {{item.id}}
            </li>
        </ol>
    </div>
</template>
<script>
    import Display from './display.vue';
    import Increment from './increment.vue'
    import axios from 'axios';
    import './mock';

    export default{
        data(){
            return {
                items: [11, 22, 33]
            }
        },
        created(){
            axios.get("/get-data-0").then((ret)=> {
                this.items = ret.data.list
            })
        },
        components: {
            Display,
            Increment
        }
    }
</script>
