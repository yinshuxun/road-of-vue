<template>
    <div id="app">
        <transition name="custom-classes-transition"
                enter-active-class="animated slideInLeft">
            <router-view></router-view>
        </transition>
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
