<template>
    <div>
        <div>我爱你111可是我发现111</div>
        <ol>
            <li>122</li>
            <li>2212111</li>
        </ol>
        <Header></Header>
    </div>
</template>
<style>
    body {
        background-color: #444;
        color: #fff;
        font-size: 20px;
    }
</style>
<script>
    import Header from "./components/Header.vue";
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            Header
        }
    }
</script>
