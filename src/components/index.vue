<template>
  <div class="index-container">
    <img src="static/images/logo.jpg" >
    <div>姓名：{{uname}}</div>
    <div v-if="skills.includes('js')">年龄：{{age}}</div>
    <Button type="primary" @click="toListPage">去列表页</Button>

    <div style="margin-top: 100px;">
      <RadioGroup v-model="checkedCity">
        <RadioButton label="上海"></RadioButton>
        <RadioButton label="北京"></RadioButton>
      </RadioGroup>
    </div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  import { RadioGroup, RadioButton } from 'element-ui';
  export default {
    data () {
      return {
        uname: 'zhaoyiming',
        age: 18,
        skills: ['html', 'css', 'js'],
        checkedCity: ''
      }
    },

    created () {
      console.log(this.skills.indexOf('css'));
    },

    components: {
      RadioGroup,
      RadioButton
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
  .index-container {
    background-color: #ccc;
  }
</style>
