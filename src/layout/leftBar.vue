<template>
  <el-row class="tac" style="position:fixed;width:210px;height:861px;top:32px">
    <el-col :span="24">
      <div style="height:61px;background-color:#20252a;position: relative;">
        <img src="../assets/img/logo_bg.png" class='logo' />
      </div>
      <el-menu ref="sideBar" :default-active="defaultActive" class="el-menu-vertical-demo" :router="true" :unique-opened="true" background-color="#20252a" text-color="#fff" active-text-color="#ffd04b" style="height:861px;border-right:none">
        <el-submenu index="a">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1">选项1</el-menu-item>
            <el-menu-item index="2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="b">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3">选项1</el-menu-item>
            <el-menu-item index="4">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '' // 默认激活的导航
    };
  },
  watch: {
    $route () {
      // console.log(this.$route.meta.key) 侧边栏的导航激活受routes中的数据影响
      if (this.$route.meta.routerPath) { this.defaultActive = this.$route.meta.routerPath; } else {
        this.defaultActive = this.$route.meta.routerPath;
        this.$refs['sideBar'].close('a');
        this.$refs['sideBar'].close('b');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
