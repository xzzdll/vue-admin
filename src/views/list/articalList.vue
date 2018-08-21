<template>
  <el-container style="border: 1px solid #eee">
    <el-container>
      <el-main>
        <el-table :data="tableData">
          <el-table-column label="操作" :show-overflow-tooltip="true" min-width="40" align="center">
            <template slot-scope="scope">
              <el-button plain @click="handleEditClick(scope.row.id)" type="primary" size="mini">编辑</el-button>
              <el-button plain @click="handleDeleteClick(scope.row.id)" type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="_id" label="id" min-width="40" align="center">
          </el-table-column>
          <el-table-column prop="title" label="标题" min-width="40" align="center">
          </el-table-column>
          <!-- <el-table-column prop="content" label="内容" min-width="150" align="center" show-overflow-tooltip>
          </el-table-column> -->
        </el-table>
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
    }
  },
  mounted () {
    fetch('artical/list').then((data) => {
      if (data.status === 'true') {
        this.$message({
          message: data.message,
          type: 'success'
        });
        this.tableData = data.list;
      } else {
        this.$message.error(data.message);
      }
    });
  }
};
</script>
