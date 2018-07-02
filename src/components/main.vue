<template>
  <div class="main-body">
    <el-tabs tab-position=top v-model="用户管理" style="height: 200px;" closable @tab-remove="removeTab">
      <el-tab-pane label="用户管理" name="用户管理">
        <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="定时任务补偿">定时任务补偿</el-tab-pane>
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
  methods: {
    removeTab (targetName) {
      document.getElementById('tab-' + targetName).remove();
      document.getElementById('pane-' + targetName).remove();
      if (document.getElementsByClassName('el-tabs__item').length > 0) {
        document.getElementsByClassName('el-tabs__item')[0].click();
      }
    }
  },
  components: {
    waterMack
  },
  mounted: function () {
    let loading = this.$loading({
      lock: true,
      text: '数据驾驶舱启动中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });

    setTimeout(() => {
      loading.close();
      document.getElementsByClassName('el-tabs__item')[0].click();
    }, 2000);

    fetch('/api/data')
      .then((res, rej) => {

      })
      .catch(rej => {

      });
  },
  updated: function () {

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
