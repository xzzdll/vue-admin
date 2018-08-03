<template>
  <el-container style="border: 1px solid #eee">
    <el-container>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" min-width="140" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" min-width="120" align="center">
          </el-table-column>
          <el-table-column prop="address" label="地址" min-width="150" align="center">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
