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
            <WaterfallItem v-for="(item,index) in total"
                           cols="4"
                           :width="200"
                           :gap="20"
                           :height="Math.random() * 200 + 200"
                           :item="item"
                           :index="index"
                           :moduleStyle="$style"
                           uniqueId="xyx"
                           inline-template>
                <!--<div v-for=" ":class="[$style.xiuPanel,$style.createNewShow]" :style="style">-->
                <!--<div :class="[$style.beCenter,$style.beMiddle]">-->
                <!--<i class="iconfont icon-tianjia"></i>-->
                <!--</div>-->
                <!--<div :class="[$style.beCenter,$style.beMiddle]">新建作品</div>-->
                <!--</div>-->
                <div :class="[moduleStyle.xiuPanel]" :style="style">
                    <div :class="moduleStyle.popRight">
                        <i class="iconfont icon-fuzhi" style="font-size: 20px;"
                           data-toggle="tooltip" data-placement="bottom" title="复制"></i>
                        <i class="iconfont icon-bianji" style="font-size: 19px;"
                           data-toggle="tooltip" data-placement="bottom" title="编辑"></i>
                        <i class="iconfont icon-shanchu" style="font-size: 20px;"
                           data-toggle="tooltip" data-placement="bottom" title="删除"></i>
                    </div>
                    <div class="xiu-panel-pop off">
                    </div>
                    <div :class="moduleStyle.sceneImg">
                        <!--{{index}}-->
                        <img src="./image/default-scene.jpg">
                    </div>
                </div>
            </WaterfallItem>
        </div>
    </div>
</template>
<script>
    import WaterfallItem from "./WaterfallItem.vue";
    import xiuList from './data/xiu-list.js';

    export default{
        data(){
            return {
                msg: 'hello vue',
                total: 100
            }
        },
        mounted(){
            const $this = this;
        },
        components: {
            WaterfallItem
        },
        computed: {
            getXiuList: function () {
                return xiuList.data
            }
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>
