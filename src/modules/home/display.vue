<template>
    <div>
        <div>当前总和为:{{count}}</div>
        <div>操作步骤:</div>
        <div :class="$style.steps">
            <div v-for="(step,index) in steps" :key='index'>
                {{step}}
            </div>
        </div>
    </div>
</template>
<style module>
    .steps {
        height: 200px;
        width: 500px;
        overflow: scroll;
    }
</style>
<script>
    import {mapGetters, mapMutations} from 'vuex';
    import {getCount, getSteps} from '../../store/actions';

    export default{
        computed: {
            ...mapGetters(['count', 'steps'])
        },
        created: function () {},
        methods: {}
    }
</script>
