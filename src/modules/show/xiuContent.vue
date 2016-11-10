<template>
    <div :class="[$style.xiuPanel]" :num="getNum" :style="style">
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
            <div v-if="id === 0" :class="[$style.xiuPanel,$style.createNewShow]" :style="style">
                <div :class="[$style.beCenter,$style.beMiddle]">
                    <i class="iconfont icon-tianjia"></i>
                </div>
                <div :class="[$style.beCenter,$style.beMiddle]">新建作品</div>
            </div>
            <div v-else :class="[$style.xiuPanel]" :style="style">
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
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>