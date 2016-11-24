<template>
    <div>
        <div :class="$style.vLoading"></div>
        <div :class="$style.middle">加载中....</div>
    </div>

</template>
<style lang="stylus" module>
    .v-loading {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: grey;
        top: 0;
        opacity: .5;
        left: 0;
        z-index: 999;
    }
    .middle {
        color: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 1000;
    }
</style>
<script>
    export default{}
</script>