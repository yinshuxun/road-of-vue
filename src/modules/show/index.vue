<template>
    <div :class="$style.container">
        <div :class="$style.searchCodeArea">
            <div>
                <div :class="$style.searchCode">
                    <span :class="$style.searchTitle">时间:</span>
                    <span :class="[$style.searchItem,$style.active]" class="time-all" data-search="time" data-value="">全部</span>
                    <span :class="$style.searchItem" class="time-newest " data-search="time" data-value="1">最新</span>
                </div>
                <div :class="[$style.searchCode,$style.borderBottom]">
                    <span :class="$style.searchTitle">类型:</span>
                    <span :class="[$style.searchItem,$style.active]" data-value="" data-search="type">全部</span>
                    <span :class="$style.searchItem" data-value="1001" data-search="type">定制</span>
                    <span :class="$style.searchItem" data-value="1002" data-search="type">电影</span>
                    <span :class="$style.searchItem" data-value="1003" data-search="type">电视剧</span>
                </div>
            </div>
        </div>
        <div :class="$style.xiuListArea">
            <div :class="[$style.xiuPanel,$style.createNewShow]">
                <div :class="[$style.beCenter,$style.beMiddle]">
                    <i class="iconfont icon-tianjia"></i>
                </div>
                <div :class="[$style.beCenter,$style.beMiddle]">新建作品</div>
            </div>
            <XiuPanel @x="" :id="num" v-for="num in length" :key="num"></XiuPanel>
        </div>
    </div>
</template>
<script>
    import XiuPanel from './xiuPanel.vue';

    export default{
        data(){
            return {
                msg: 'hello vue',
                length: 10,
                panelHeights: []
            }
        },
        created(){

        },
        components: {
            XiuPanel
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>
