<template>
    <div>
        <h1>我是APP组件 - {{msg}}</h1>
        <h2> 这是一个 </h2>
        <!-- <login></login> -->
        <router-link to='/login'>登录</router-link>
        <router-link to='/register'>注册</router-link>
        <router-link to='/user'>用户</router-link>
        <router-link to='/article'>文章</router-link>

        <router-view></router-view>
        
    </div>
</template>

<script>

    export default {
        data(){
            return {
                msg:'第一个'
            }
        },
    }
</script>

<style lang="scss">

// 当前路由高亮显示：
.router-link-active {
    border-bottom: 2px solid red;
}

@import './assets/scss/common.scss'


</style>