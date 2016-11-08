<template>
    <div :class="[$style.xiuPanel]" :num="getNum" :style="getStyle">
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
</template>
<script>
    export default{
        props: ['id'],
        data(){
            return {
                style: {
                    height: '170px',
                    position: "absolute",
                    width: '200px'
                },
                num: ''
            }
        },
        created(){
            console.log(this.$parent.panelHeights)
            const height = Math.random() * 200 + 200;
            const num = this.id - 1;
            this.$parent.panelHeights.push(height);
        },
        components: {},
        computed: {
            getStyle: function () {
                return {
                    height: Math.random() * 200 + 200 + 'px',
                    position: "absolute",
                    width: '200px',
                    left: this.id % 4 * (200 + 20) + 'px'
                }
            },
            getNum: function () {
                return this.id
            }
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>
