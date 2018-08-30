<template>
  <el-container style="border: 1px solid #eee">
    <el-container>
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
  </el-container>
</template>

<script>
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      tableData: [],
      totalRows: 60,
      currentPage: 1,
      pageSize: 20
    };
  },
  computed: {

  },
  methods: {
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
