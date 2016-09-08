<template>
    <div>
        road of vue!
        <ol>
            <li v-for="item in items">
                {{item.id}}
            </li>
        </ol>
    </div>
</template>
<style>
    body {
        background-color: #dfdfdf;
        font-size: 30px;
        color: #fff;
    }
</style>
<script>
    import Vue from 'vue';
    import './mock';

    export default{
        data(){
            return {
                items: [11, 22, 33]
            }
        },
        created(){
            Vue.http.get("/get-data-0").then((res)=> {
                this.items = JSON.parse(res.data).list
            })
        }
    }
</script>
