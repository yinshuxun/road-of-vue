<template>
    <div>
        <button @click='reduceCounter(parseInt(this.inputd)||0)'>-</button>
        <input type="number" @input="inputData"/>
        <button :value='' @click='incrementCounter(parseInt(this.inputd)||0)'>+</button>
    </div>
</template>
<style>
    body {
        background-color: #ddd;
    }
</style>
<script>
    import {incrementCounter, reduceCounter} from '../../store/actions';
    import Vuex from 'vuex';

    export default{
        vuex: {
            actions: {
                incrementCounter,
                reduceCounter
            }
        },
        methods: {
            inputData(e){
                this.inputd = e.target.value;
            }
        },
        components: {}
    }
</script>
