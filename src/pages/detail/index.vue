<template>
  <div class="detail-container">
    <div class="article">{{articleName}}</div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        articleName: ''
      }
    },

    created () {
      this.articleName = this.$route.query.name;
    }
  }
</script>

<style lang="less" scoped>
  .article {
    font-size: 36px;
    color: #333;
  }
</style>
