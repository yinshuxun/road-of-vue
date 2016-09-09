<template>
    <div class="home">
        road of vue!
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
    import './mock';

    export default{
        el: ()=> {
            return "body";
        },
        data(){
            return {
                items: [11, 22, 33]
            }
        },
        created(){
            Vue.http.get("/get-data-0").then((ret)=> {
                this.items = ret.data.json().list
            })
        }
    }
</script>
