<template>
    <div class="home">
        road of vue!
        <Increment></Increment>
        <Display></Display>
        <div>当前数字:{{currentValue}}</div>
        <ol>
            <li v-for="item in items">
                {{item.id}}
            </li>
        </ol>
    </div>
</template>
<style lang="stylus" scoped>
    .home
        background-color: #dfdfdf;
        font-size: 30px;
        color: #fff;
</style>
<script>
    import Vue from 'vue';
    import Display from './display.vue';
    import Increment from './increment.vue'
    import './mock';
    import store from '../../store';
    import {getCount} from '../../store/actions';

    export default{
        el: ()=> {
            return "body";
        },
        data(){
            return {
                items: [11, 22, 33]
            }
        },
        vuex: {
            getters: {
                currentValue: getCount
            }
        },
        created(){
            Vue.http.get("/get-data-0").then((ret)=> {
                this.items = ret.data.json().list
            })
        },
        components: {
            Display,
            Increment
        },
        store
    }
</script>
