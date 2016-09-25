<template>
    <div>
        <div>当前总和为:{{currentValue}}</div>
        <div>操作步骤:</div>
        <div class="steps">
            <div v-for="step in steps" track-by="$index">
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
    import {getCount, getSteps} from '../../store/actions';

    export default{
        vuex: {
            getters: {
                currentValue: getCount,
                steps: getSteps
            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>
