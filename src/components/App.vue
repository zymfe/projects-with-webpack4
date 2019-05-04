<template>
  <div class="app-container">
    <div>姓名：{{uname}}</div>
    <div>年龄：{{age}}</div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        uname: 'zhaoyiming',
        age: 18
      }
    }
  }
</script>

<style lang="less" scoped>
  .app-container {
    font-size: 30px;
  }
</style>
