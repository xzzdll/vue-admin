<template>
  <div>
    <el-container style="margin-top:30px">
      <el-header>新增用户</el-header>
      <el-main>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="文章标题">
            <el-input v-model="formInline.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="文章标签">
            <el-input type="password" v-model="formInline.passWord" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即添加</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <el-container>
      <el-header>用户列表</el-header>
      <el-main>
        <el-table :data="tableData">
          <el-table-column label="操作" min-width="40" align="center">
            <template slot-scope="scope">
              <el-button plain @click="handleDeleteClick(scope.row._id)" type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="_id" label="id" min-width="40" align="center">
          </el-table-column>
          <el-table-column prop="username" label="用户名" min-width="40" align="center">
          </el-table-column>
          <el-table-column prop="password" label="密码" min-width="40" align="center">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      formInline: {
        userName: null,
        passWord: null
      },
      tableData: []
    };
  },
  methods: {
    onSubmit () {
      fetch('user/create', this.formInline).then((data) => {
        if (data.status === 'true') {
          this.$message({
            message: data.message,
            type: 'success'
          });
          this.formInline = {
            userName: null,
            passWord: null
          };
          this.updateData();
        } else {
          this.$message.error(data.message);
        }
      });
    },
    handleSizeChange (val) {
      this.pageSize = val;
    },
    handleDeleteClick (val) {
      this.$confirm('确认删除该用户?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        fetch('user/delete', { id: val }).then((data) => {
          if (data.status === 'true') {
            this.$message({
              message: data.message,
              type: 'success'
            });
            this.updateData();
          } else {
            this.$message.error(data.message);
          }
        });
      });
    },
    updateData () {
      fetch('user/list').then((data) => {
        if (data.status === 'true') {
          this.tableData = data.list;
        } else {
          this.$message.error(data.message);
        }
      });
    }
  },
  activated () {
    this.updateData();
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  height: unset !important;
}
</style>
