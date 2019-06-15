<template>
  <div class="list-container">
    <div>{{message}}</div>
    <Input v-model="num" placeholder="请输入number"></Input>
    <div>
      <Table :data="listData" stripe border height="250" style="width: 100%">
        <TableColumn fixed width="150" prop="date" label="时间"></TableColumn>
        <TableColumn width="150" prop="name" label="姓名"></TableColumn>
        <TableColumn width="150" prop="province" label="省份"></TableColumn>
        <TableColumn width="150" prop="city" label="城市"></TableColumn>
        <TableColumn width="150" prop="address" label="地址"></TableColumn>
        <TableColumn width="150" prop="zip" label="邮编"></TableColumn>
        <TableColumn width="150" label="概率">
          <template slot-scope="scope">
            <span>{{scope.row.a / scope.row.b}}</span>
          </template>
        </TableColumn>
        <TableColumn fixed="right" width="200" label="操作">
          <template slot-scope="scope">
            <Button size="mini">编辑</Button>
            <Button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</Button>
          </template>
        </TableColumn>
      </Table>
      <div>
        <Pagination
          @current-change="changePage"
          :current-page="currentPage"
          :page-size="2"
          layout="total, prev, pager, next, jumper"
          :total="7">
        </Pagination>
      </div>
    </div>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        message: 'this is list page',
        listData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            a: 1,
            b: 2
          }
        ],
        currentPage: 1,
        num: 1
      }
    },

    created () {
      this.initPage();
      this.$Message({
        type: 'success',
        message: '亲，成功了'
      });
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

      handleDelete (index, data) {
        console.log(index);
        console.log(data);
      },

      changePage (page) {
        console.log(page);
      }
    }
  }
</script>

<style lang="less" scoped>
  .list-container {
    background-color: #fff;
  }
</style>
