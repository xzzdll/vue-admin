<template>
  <div class="main-body" style="height:800px;margin:auto 0;position:fixed;width:calc(100% - 200px);min-width:800px;left:200px;top:61px;padding:20px">
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  beforeCreate: function () {
    console.log('我将要被创建');
  },
  created: function () {
    console.log('我被创建了');
  },
  beforeMount: function () {
    console.log('我将要被挂载');
  },
  mounted: function () {
    console.log('我被挂载了');
  },
  beforeUpdate: function () {
    console.log('我将要被更新');
  },
  updated: function () {
    console.log('我被更新了');
  },
  beforeDestroy: function () {
    console.log('我将要被摧毁');
  },
  destroyed: function () {
    console.log('我被摧毁了');
  }
};
</script>
