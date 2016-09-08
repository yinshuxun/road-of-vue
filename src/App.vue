<template>
    <div>
        {{msg}}<br/>
        <a v-link="'home'">Home</a><br/>
        <a v-link="'blog'">Personal Blog</a><br/>
    </div>
</template>
<style>
    body {
        color: #fff;
        font-size: 40px;
        background-color: inherit;
        text-align: center;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'road of vue'
            }
        }
    }
</script>
