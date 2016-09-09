<template>
    <ol>
        <li><a v-link="'home'">Home</a></li>
        <li><a v-link="'blog'">Blog</a></li>
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
