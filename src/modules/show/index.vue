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
            <XiuPanel v-if="num === 1" @summary="summary" :id="num" v-for="num in length" :key="num" inline-template>
                <div :class="[$style.xiuPanel,$style.createNewShow]" :num="id" :style="style">
                    <div :class="[$style.beCenter,$style.beMiddle]">
                        <i class="iconfont icon-tianjia"></i>
                    </div>
                    <div :class="[$style.beCenter,$style.beMiddle]">新建作品</div>
                </div>
            </XiuPanel>
            <XiuPanel :xiuList="xiuList" v-if="num !== 1" @summary="summary" :id="num" v-for="num in length" :key="num" inline-template>
                <div :class="[$style.xiuPanel]" :num="id" :style="style">
                    <div :class="$style.popRight">
                        <i class="iconfont icon-fuzhi" style="font-size: 20px;"
                           data-toggle="tooltip" data-placement="bottom" title="复制"></i>
                        <i class="iconfont icon-bianji" style="font-size: 19px;"
                           data-toggle="tooltip" data-placement="bottom" title="编辑"></i>
                        <i class="iconfont icon-shanchu" style="font-size: 20px;"
                           data-toggle="tooltip" data-placement="bottom" title="删除"></i>
                    </div>
                    <div class="xiu-panel-pop off">
                    </div>
                    <div :class="$style.sceneImg">
                        <img src="./image/default-scene.jpg">
                    </div>
                </div>
            </XiuPanel>

            <!--<XiuPanel v-for="item in getXiuList" :id="item.sceneId" inline-template>-->
                <!--<div :class="[$style.xiuPanel]" :num="id" :style="style">-->
                    <!--<div :class="$style.popRight">-->
                        <!--<i class="iconfont icon-fuzhi" style="font-size: 20px;"-->
                           <!--data-toggle="tooltip" data-placement="bottom" title="复制"></i>-->
                        <!--<i class="iconfont icon-bianji" style="font-size: 19px;"-->
                           <!--data-toggle="tooltip" data-placement="bottom" title="编辑"></i>-->
                        <!--<i class="iconfont icon-shanchu" style="font-size: 20px;"-->
                           <!--data-toggle="tooltip" data-placement="bottom" title="删除"></i>-->
                    <!--</div>-->
                    <!--<div class="xiu-panel-pop off">-->
                    <!--</div>-->
                    <!--<div :class="$style.sceneImg">-->
                        <!--<img src="./image/default-scene.jpg">-->
                    <!--</div>-->
                <!--</div>-->
            <!--</XiuPanel>-->
        </div>
    </div>
</template>
<script>
    import XiuPanel from './xiuPanel.vue';
    import xiuList from './data/xiu-list.js';

    export default{
        data(){
            return {
                msg: 'hello vue',
                length: 100,
                phonePanelHeights: []
            }
        },
        create(){

        },
        components: {
            XiuPanel
        },
        methods: {
            summary: function (phonePanel, index) {
                this.phonePanelHeights[index] = phonePanel;
            }
        },
        computed:{
            getXiuList:function(){
                console.log(xiuList.data)
                return xiuList.data
            }
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>
