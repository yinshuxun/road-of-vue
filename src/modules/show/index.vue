<template>
    <div :class="$style.container">
        <div :class="$style.searchCodeArea">
            <template>
                <div :class="$style.searchCode">
                    <span :class="$style.searchTitle">时间:</span>
                    <span :class="[$style.searchItem,$style.active]" class="time-all" data-search="time" data-value="">全部</span>
                    <span :class="$style.searchItem" class="time-newest " data-search="time" data-value="1">最新</span>
                </div>
                <div :class="[$style.searchCode,$style.borderBottom]">
                    <span :class="$style.searchTitle">类型:</span>
                    <span @click='changeShowType' :class="[$style.searchItem,type == '1000' ? $style.active :'']"
                          value="1000" data-search="type">全部</span>
                    <span @click='changeShowType' :class="[$style.searchItem,type == '1001' ? $style.active :'']"
                          value="1001" data-search="type">定制</span>
                    <span @click='changeShowType' :class="[$style.searchItem,type == '1002' ? $style.active :'']"
                          value="1002" data-search="type">电影</span>
                    <span @click='changeShowType' :class="[$style.searchItem,type == '1003' ? $style.active :'']"
                          value="1003" data-search="type">电视剧</span>
                </div>
            </template>
        </div>
        <div :class="$style.xiuListArea">
            <WaterFall v-for="(item,index) in items"
                       :maxWidth="200"
                       :gapWidth="20"
                       :gapHeight="20"
                       :resize="true"
                       :total="total"
                       :height="index === 0 ? 200 : item.height"
                       :item="item"
                       :items="items"
                       :index="index"
                       :moduleStyle="$style"
                       inline-template>
                <div>
                    <div v-if="index === 0" :class="[moduleStyle.xiuPanel,moduleStyle.createNewShow]" :style="style">
                        <div :class="">
                            <div :class="[moduleStyle.beCenter,moduleStyle.beMiddle]">
                                <i class="iconfont icon-tianjia"></i>
                            </div>
                            <div :class="[moduleStyle.beCenter,moduleStyle.beMiddle]">新建作品</div>
                        </div>
                    </div>
                    <div v-else :class="[moduleStyle.xiuPanel]" :style="style">
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
                            <img src="./image/default-scene.jpg">
                        </div>
                        <div style="position: absolute;top: 0;left: 0;font-size: 30px;">
                            {{index}}
                        </div>
                    </div>
                </div>
            </WaterFall>
        </div>
    </div>
</template>
<script>
  //    import WaterFall from "v-waterfall";
  import WaterFall from '../../components/waterfullflow'
  //    import xiuList from './data/xiu-list.js'
  import './mock.js'

  export default{
    data() {
      return {
        msg: 'hello vue',
        type: '1000',
        items: []
      }
    },
    created() {
      this.getShowList()
    },
    components: {
      WaterFall
    },
    methods: {
      changeShowType(e) {
        this.type = e.currentTarget.attributes['value'].value
        this.getShowList()
      },
      getShowList() {
        this.$http.get('/get-show-list/' + this.type).then((res) => {
          const data = res.data.data
          this.items = []
          this.$nextTick(function () {
            this.items = data
          })
        })
      }
    }
  }
</script>
<style src="./index.styl" lang="stylus" module/>
