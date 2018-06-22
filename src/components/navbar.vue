<template>
  <div style="margin:auto 0;position:fixed;width:calc(100% - 210px);min-width:800px;left:210px;top:0px">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#048cff" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <div>件量版块</div>
      </el-menu-item>
      <el-menu-item index="2">
        <div>营运分析</div>
      </el-menu-item>
      <el-menu-item index="3">
        <div>网络管理</div>
      </el-menu-item>
      <el-menu-item index="4">
        <div>财务报表</div>
      </el-menu-item>
      <el-menu-item index="5">
        <div>营销分析</div>
      </el-menu-item>
      <el-menu-item index="6">
        <div>服务质量</div>
      </el-menu-item>
      <el-menu-item index="7">
        <div>网点分析</div>
      </el-menu-item>
      <el-menu-item index="8" style="float:right" disabled>
        <div style="fontSize:28px;padding-right:10px">John</div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {}
  }
};
</script>
