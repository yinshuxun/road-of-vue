<template>
    <div :class="$style.waterFallArea">
        <Waterfall v-for="(item,index) in items"
                   :maxWidth='240'
                   :gapWidth='20'
                   :gapHeight='20'
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
        </Waterfall>
    </div>
</template>
<script>
//    import Waterfall from '../../components/waterfullflow';
    import Waterfall from 'v-waterfall';

    export default{
        data(){
            return {
                items: 100
            }
        },
        components: {
            Waterfall
        }
    }
</script>
<style src="./index.styl" lang="stylus" module/>