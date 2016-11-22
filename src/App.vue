<template>
    <div id="app">
        <div v-if="loading==='ing'">
            加载中..
        </div>
        <transition name="custom-classes-transition"
                    enter-active-class="animated slideInLeft">
            <router-view>

            </router-view>
        </transition>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';


    export default{
        data(){
            return {
                msg: 'road of vue',
            }
        },
        computed: {
            ...mapGetters(['loading'])
        }
    }
</script>
