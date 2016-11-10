<script>
    export default {
        props: ['moduleStyle', 'id', 'xiuList', 'width', 'gap', 'height', 'item', 'index', 'uniqueId','cols'],
        data(){
            return {
                style: {}
            }
        },
        methods: {
            initStyle: function (colss) {
                let uid = 'phonePanelHeights_' + this.uniqueId || 'init';
                if (this.index === 0) {
                    this.$root[uid] = []
                }

                const cols = colss,
                        itemWidth = this.width,
                        height = this.height,
                        gap = this.gap,
                        index = this.index - 1,
                        heights = this.$root[uid],
                        colIndex = (index + 1) % cols;
                let top = 0, left = colIndex * (itemWidth + gap);
                if (heights.length < cols) {
                    heights[heights.length] = {left: left, top: top + height + gap};
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
                            heights[index] = {left: heights[index].left, top: top + height + gap};
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
        },
        mounted(){
            const newCols = (document.body.clientWidth - 284) / 242;
            this.initStyle(this.cols || newCols)

            window.addEventListener('resize', ()=> {
                this.initStyle(parseInt((document.body.clientWidth - 284) / 242));
            })
        }
    }
</script>
