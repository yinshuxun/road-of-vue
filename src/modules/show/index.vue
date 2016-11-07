<template>
    <div :class="$style.container">
        <div :class="$style.searchCodeArea" id="search-code-area">
            <div>
                <div :class="$style.searchCode">
                    <span class="search-title">时间:</span>
                    <span class="search-item time-all active" data-search="time" data-value="">全部</span>
                    <span class="search-item time-newest " data-search="time" data-value="1">最新</span>
                </div>
                <div :class="[$style.searchCode,$style.borderBottom]">
                    <span class="search-title">类型:</span>
                    <span class="search-item active" data-value="" data-search="type">全部</span>
                    <span class="search-item " data-value="1001" data-search="type">定制</span>
                    <span class="search-item " data-value="1002" data-search="type">电影</span>
                    <span class="search-item " data-value="1003" data-search="type">电视剧</span>
                </div>
            </div>
        </div>
        <div :class="$style.xiuListArea">
            <div class="xiu-panel glo-radius create-new-show">
                <div class="be-center be-middle"><i class="iconfont icon-tianjia"></i></div>
                <div class="be-center be-middle">新建作品</div>
            </div>
            <div :class="$style.xiuPanelArea"  id="xiu-panel-area">
                <div class="xiu-panel glo-radius">
                    <div class="pop-right">
                        <i class="iconfont icon-fuzhi" style="font-size: 20px;"
                           data-toggle="tooltip" data-placement="bottom" title="复制"></i>
                        <i class="iconfont icon-bianji" style="font-size: 19px;"
                           data-toggle="tooltip" data-placement="bottom" title="编辑"></i>
                        <i class="iconfont icon-shanchu" style="font-size: 20px;"
                           data-toggle="tooltip" data-placement="bottom" title="删除"></i>
                    </div>
                    <div class="xiu-panel-pop off">
                    </div>
                    <div class="scene-img" id="scene-img">
                        <img width="100px" height="100px" src="./image/default-scene.jpg">
                    </div>
                    <div class="scene-title">
                        默认
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        created(){
            console.log(this.$style)
        },
        components: {}
    }
</script>
<style src="./index.styl" lang="styl" module/>
