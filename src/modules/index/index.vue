<template>
    <ol>
        <router-link to="home">Home</router-link>
        <router-link to="blog">Blog</router-link>
    </ol>
</template>
<style lang="stylus" scoped>
    body
        background-color: #ff0000;
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
