<template>
  <div class="list-container">
    <h1 style="margin-bottom: 10px;">List</h1>
    <div 
      v-for="(article, articleIndex) in articleList" 
      :key="articleIndex" 
      class="to-detailpage" 
      @click="toDetailPage(article.name)">{{article.name}}
    </div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        articleList: [
          {
            name: '松岛枫金额哦放假哦文件佛文件佛问'
          },
          {
            name: 'oiwjeofjweofnwoefjweofjwe'
          }
        ]
      }
    },

    methods: {
      toDetailPage (name) {
        this.$router.push({
          path: '/detail',
          query: {
            name
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .to-detailpage {
    margin-bottom: 20px;
    font-size: 36px;
    color: #333;
    cursor: pointer;
  }
</style>
