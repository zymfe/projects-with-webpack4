<template>
  <div>
    {{msg}}
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: 'this is list page'
      }
    },

    created () {
      this.initPage();
    },

    methods: {
      async initPage () {
        const userInfo = await this.getUserInfo();
        const projectInfo = await this.getProjectInfo();
        console.log(userInfo);
        console.log(projectInfo);
        console.log([1, 2, 3].includes(1));
      },

      getUserInfo () {
        return new Promise((resolve, reject) => {
          this.$http.get('/api/user').then(res => resolve(res), err => reject(err));
        });
      },

      getProjectInfo () {
        return new Promise((resolve, reject) => {
          this.$http.get('/api/project').then(res => resolve(res), err => reject(err));
        });
      },


    }
  }
</script>

<style lang="less" scoped>

</style>
