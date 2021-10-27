<template>
    <div>
        <h2>文章列表</h2>
        <div>
            <h2>文章列表</h2>
            <div v-for="item in list " :key="item.sid">
                标题： {{item.name}} <br>
                发布时间：{{item.passtime}}
            </div>
        </div>
    </div>
</template>

<script>
    import { gettingArticle } from '@/api/article.js'
    console.log(gettingArticle)
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            async gettingData(){
                let data = await gettingArticle();
                this.list = data.result
            }
        },
        created(){
            console.log("article - created")
            this.gettingData()
        }
    }
</script>

<style lang="scss" scoped>

</style>