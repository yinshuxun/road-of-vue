<template>
    <ol>
        <router-link to="home">Home</router-link>
        <router-link to="blog">Blog</router-link>
        <router-link to="show">Show</router-link>
    </ol>
</template>
<style lang="stylus" scoped>
    body
        background-color: #eoeoeo;
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
