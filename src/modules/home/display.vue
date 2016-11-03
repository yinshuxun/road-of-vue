<template>
    <div>
        <div>当前总和为:{{count}}</div>
        <div>操作步骤:</div>
        <div class="steps">
            <div v-for="(step,index) in steps" :key='index'>
                {{step}}
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    body {
        background-color: #ff0000;
    }

    .steps
        height 200px;
        width: 500px;
        overflow scroll
</style>
<script>
    import {mapGetters,mapMutations} from 'vuex'
    import {getCount, getSteps} from '../../store/actions';

    export default{
        computed: {
            ...mapGetters(['count', 'steps'])
        },
        created:function(){
            console.log(mapMutations)
        },
        methods: {}
    }
</script>
