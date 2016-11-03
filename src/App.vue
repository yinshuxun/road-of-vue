<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style lang="stylus" scoped>
    html
        font-size 16px;
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
