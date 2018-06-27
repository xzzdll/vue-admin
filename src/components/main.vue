<template>
  <div class="main-body">
    <el-tabs tab-position=top style="height: 200px;">
      <el-tab-pane label="用户管理">
        <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

    <water-mack></water-mack>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" :modal-append-to-body="false" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { fetch } from '../fetch/api.js';
import waterMack from '@/components/waterMack';
export default {
  data () {
    return {
      centerDialogVisible: false
    };
  },
  methods: {},
  components: {
    waterMack
  },
  mounted: function () {
    console.log('我被挂载了');
    let loading = this.$loading({
      lock: true,
      text: '数据驾驶舱努力加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });

    setTimeout(() => {
      loading.close();
    }, 2000);

    fetch('/api/data')
      .then((res, rej) => {
        console.log(res);
      })
      .catch(rej => {
        console.log(rej);
      });
  },
  beforeUpdate: function () {
    console.log('我将要被更新');
  },
  updated: function () {
    console.log('我被更新了');
  }
};
</script>

<style lang="scss" scoped>
.main-body {
  height: 800px;
  margin: auto 0;
  position: fixed;
  width: calc(100% - 200px);
  min-width: 800px;
  left: 200px;
  top: 61px;
  padding: 20px;
  padding-top: 10px;
}
</style>
