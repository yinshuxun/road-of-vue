<template>
    <div>
        {{msg}}
        <home></home>
    </div>
</template>
<style>
    body {
        background-color: #444;
        color: #fff;
        font-size: 20px;
    }
</style>
<script>
    import Home from "./modules/home/home.vue";


    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            Home
        }
    }
</script>
