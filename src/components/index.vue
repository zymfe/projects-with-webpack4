<template>
  <div>
    <img src="static/images/logo.jpg" >
    <div>姓名：{{uname}}</div>
    <div v-if="skills.includes('js')">年龄：{{age}}</div>
    <Button type="primary" @click="toListPage">去列表页</Button>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        uname: 'zhaoyiming',
        age: 18,
        skills: ['html', 'css', 'js']
      }
    },

    created () {
      console.log(this.skills.indexOf('css'));
    },

    methods: {
      toListPage () {
        this.$router.push({
          name: 'List'
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
