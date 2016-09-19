<template>
    <div>
        <div>当前总和为:{{currentValue}}</div>
    </div>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    import {getCount} from '../../store/actions';

    export default{
        vuex: {
            getters: {
                currentValue: getCount
            }
        }
    }
</script>
