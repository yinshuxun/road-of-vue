<template>
    <div>
        <div v-for="item in items">
            {{waterPanel}}
        </div>
    </div>
</template>
<script>
    export default{
        props: ['items','item'],
        created(){
        },
        computed(){
        }
    }
</script>
<style lang="styl" module></style>