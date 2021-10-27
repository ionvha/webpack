<template>
  <div>
    <h1>登录组件 -- {{ msg }}</h1>
    <button @click="onLoad">获取数据</button>
  </div>
</template>

<script>
import user from "@api/user.js";
console.log(user);
export default {
  data() {
    return {
      msg: "登录",
    };
  },
  methods: {
    onLoad(id) {
      this.$api.article
        .articleDetail(id, {
          api: 123,
        })
        .then((res) => {
            console.log(res)
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>