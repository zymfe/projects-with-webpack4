<template>
  <div>
    <div>姓名：{{uname}}</div>
    <div>年龄：{{age}}</div>
    <div @click="toListPage">去列表页</div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        uname: 'zhaoyiming',
        age: 18
      }
    },

    created () {
      this.getUserInfo();
    },

    methods: {
      toListPage () {
        this.$router.push({
          name: 'List'
        });
      },

      getUserInfo () {
        // 需 npm run server
        this.$http.get('/api/user').then(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
