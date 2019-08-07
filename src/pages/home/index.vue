<template>
  <div class="home-container">
    <h1>Home</h1>
    <div class="to-listpage" @click="toListPage">去列表页</div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },

    methods: {
      toListPage () {
        this.$router.push({
          path: '/list'
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .to-listpage {
    color: #f00;
  }
</style>
