<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="blog">
        <div v-bind:class="{'blog-header':true}">123</div>
    </div>
</template>
<script>
    import './index.styl'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
