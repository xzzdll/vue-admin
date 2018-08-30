<template>
  <div>
    <el-container style="margin-top:30px">
      <el-header>新增用户</el-header>
      <el-main>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="文章标题">
            <el-input v-model="formInline.title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="文章标签">
            <el-input v-model="formInline.tag" placeholder="请输入文章标签"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <el-container>
      <el-header>用户列表</el-header>
      <el-main>
        <el-table :data="tableData" height="400px">
          <el-table-column label="操作" min-width="40" align="center">
            <template slot-scope="scope">
              <el-button plain @click="handleDeleteClick(scope.row._id)" type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="_id" label="id" min-width="40" align="center">
          </el-table-column>
          <el-table-column prop="date" label="日期" min-width="40" align="center">
          </el-table-column>
          <el-table-column label="内容" min-width="40" align="center">
            <template slot-scope="scope">
              <span v-html="scope.row.content">{{ scope.row.content }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="content" label="内容" min-width="150" align="center" show-overflow-tooltip>
          </el-table-column> -->
        </el-table>
        <div style="height:20px"> </div>
        <el-pagination @size-change="handleSizeChange" class="z-pagination" :current-page.sync="currentPage" :page-size="pageSize" layout="sizes, prev, pager, next, jumper,total" :total="totalRows">
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      editorOption: {},
      formInline: {
        title: null,
        type: null,
        tag: null
      },
      tableData: [],
      totalRows: 60,
      currentPage: 1,
      pageSize: 20
    };
  },
  methods: {
    onSubmit () {
      fetch('artical/create', this.formInline).then((data) => {
        if (data.status === 'true') {
          this.$message({
            message: data.message,
            type: 'success'
          });
          this.formInline = {
            title: null,
            type: null,
            tag: null
          };
          this.$router.push('/articalList');
        } else {
          this.$message.error(data.message);
        }
      });
    },
    handleSizeChange (val) {
      this.pageSize = val;
    },
    handleDeleteClick (val) {
      this.$confirm('确认删除该文章?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        fetch('artical/delete', { id: val }).then((data) => {
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
      fetch('say/list').then((data) => {
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
