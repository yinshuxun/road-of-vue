<template>
    <div :class="$style.waterFallArea">
        <WaterFallFlow v-for="(item,index) in items"
                       width=200
                       gap=20
                       :resize="true"
                       :height='Math.random() * 200 + 200'
                       :item="item"
                       :index="index"
                       :moduleStyle="$style"
                       uniqueId="xyx"
                       inline-template>
            <div :class="moduleStyle.item" :style="style">
                {{index}}
            </div>
        </WaterFallFlow>
    </div>
</template>
<script>
    import WaterFallFlow from '../../components/waterfullflow';

    export default{
        data(){
            return {
                items: 100
            }
        },
        components: {
            WaterFallFlow
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>