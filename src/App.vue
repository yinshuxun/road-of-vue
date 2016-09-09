<template>
    <div>
        {{msg}}<br/>
        <a v-link="{path:'/home'}">Home</a><br/>
        <a v-link="'blog'">Personal Blog</a><br/>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 'road of vue'
            }
        }
    }
</script>
