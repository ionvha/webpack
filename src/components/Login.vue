<template>
    <div>
        <h1>登录组件 -- {{msg}}</h1>
    </div>
</template>

<script>
    import user from '@api/user.js'
    console.log(user)
    export default {
        data(){
            return {
                msg:"登录"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>