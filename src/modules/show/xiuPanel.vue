<script>
    export default {
        props: ['id','xiuList'],
        data(){
            return {
                style: {},
            }
        },
        mounted(){
            const cols = 4,
                    itemWidth = 200,
                    height = Math.random() * 600 + 200,
                    index = this.id - 1,
                    heights = this.$parent.phonePanelHeights,
                    colIndex = (index + 1) % cols,
                    $this = this;
            let top = 0, left = colIndex * (200 + 20);
            if (heights.length < cols) {
                this.$emit("summary", {left: left, top: top + height + 20}, heights.length);
            } else if (heights.length == cols) {
                let topList = [];
                heights.forEach(function (val) {
                    topList.push(val.top)
                })
                const topMax = Math.min(...topList);
                for (let index in heights) {
                    if (heights[index].top === topMax) {
                        top += heights[index].top;
                        left = heights[index].left;
                        $this.$emit("summary", {left: heights[index].left, top: top + height + 20}, index)
                        break;
                    }
                }
            }
            this.style = {
                height: height + 'px',
                position: "absolute",
                width: itemWidth,
                left: left + 'px',
                top: top + 'px'
            }
        }
    }
</script>
<style src="./index.styl" lang="styl" module/>
