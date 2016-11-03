<template>
    <div>
        <button @click='reduce(a)'>-</button>
        <input type="number" @input="inputData"/>
        <button @click='increment(a)'>+</button>
    </div>
</template>
<style>
    body {
        background-color: #ddd;
    }
</style>
<script>
    import {mapActions} from 'vuex';

    export default{
        data(){
            return {
                a: 0
            }
        },
        methods: {
            ...mapActions(['increment', 'reduce']),
            inputData(e){
                this.a = parseInt(e.target.value);
            }
        },
    }
</script>
