<template>
    <div>
        <h2>我是一个用户组件</h2>
        <router-link to='/user/address'>地址</router-link>
        <router-link to='/user/order'>订单</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        
    }
    
</script>

<style lang="scss" scoped>

</style>