<template>
    <div id="app">
        <div v-if="loading==='ing'">
            <VLoading></VLoading>
        </div>
        <transition name="custom-classes-transition"
                    enter-active-class="animated slideInLeft">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import VLoading from './components/loading/index.vue'

    export default{
      data () {
        return {
          msg: 'road of vue'
        }
      },
      computed: {
        ...mapGetters(['loading'])
      },
      components: {
        VLoading
      }
    }
</script>
