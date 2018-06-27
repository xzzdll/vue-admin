<template>
    <el-button type="primary" @click="openFullScreen">服务方式</el-button>
</template>

<script>
export default {
  methods: {
    openFullScreen () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>
