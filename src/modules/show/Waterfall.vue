<template>
    <!--<WaterfalItem v-for="(item,index) in getXiuList" @summary="summary" :id="index">-->
    <div>
        <solt></solt>
    </div>
    <!--</WaterfalItem>-->
</template>
<script>
    import WaterfallItem from './WaterfallItem.vue';

    export default {
        props: ['items'],
        data(){
            return {
                phonePanelHeights: []
            }
        },
        components: {
            WaterfallItem
        },
        methods: {
//            summary: function (phonePanel, index) {
//                this.phonePanelHeights[index] = phonePanel;
//            }
        }

    }
</script>
<style src="./index.styl" lang="styl" module/>
