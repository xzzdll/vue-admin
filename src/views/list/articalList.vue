<template>
  <el-container style="border: 1px solid #eee">
    <el-container>
      <el-main>
        <el-table :data="tableData" height="400px">
          <el-table-column label="操作" min-width="40" align="center">
            <template slot-scope="scope">
              <el-button plain @click="handleShowClick(scope.row._id)" type="primary" size="mini">查看</el-button>
              <el-button plain @click="handleEditClick(scope.row._id)" type="primary" size="mini">编辑</el-button>
              <el-button plain @click="handleDeleteClick(scope.row._id)" type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="_id" label="id" min-width="40" align="center">
          </el-table-column>
          <el-table-column prop="title" label="标题" min-width="40" align="center">
          </el-table-column>
          <!-- <el-table-column prop="content" label="内容" min-width="150" align="center" show-overflow-tooltip>
          </el-table-column> -->
        </el-table>
        <div style="height:20px"> </div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" class="z-pagination" :current-page.sync="currentPage" :page-size="pageSize" layout="sizes, prev, pager, next, jumper,total" :total="totalRows">
        </el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      tableData: [],
      totalRows: 0,
      currentPage: 1,
      pageSize: 20
    };
  },
  computed: {

  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val;
      this.updateData();
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.updateData();
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
    handleEditClick (val) {
      this.$router.push({ path: '/editArtical', query: { id: val } });
    },
    handleShowClick (val) {
      window.open('http://47.98.115.136/blog/#/artical?id=' + val);
    },
    updateData () {
      fetch('artical/list', { currentPage: this.currentPage,
        pageSize: this.pageSize }).then((data) => {
        if (data.status === 'true') {
          this.tableData = data.list;
          this.totalRows = data.totalRows;
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
