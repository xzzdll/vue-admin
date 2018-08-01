<template>
  <div class="sidebar" :class="{'z-collapse-menu':isCollapse}">
    <h2 class="sidebar-header">
      <img src="../assets/img/logo_bg.png" v-if="!isCollapse" />
      <span v-else>
        <i class="el-icon-location"></i>
      </span>
    </h2>
    <div class="sidebar-body">
      <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#20252a" text-color="#fff" active-text-color="#ffd04b" style="border-right:none" router>
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
    </div>
    <div class="sidebar-footer" @click="toggleMenu">
      <i class="el-icon-location"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      defaultActive: '' // 默认激活的导航
    };
  },
  watch: {
    $route () {
      // console.log(this.$route.meta.key) 侧边栏的导航激活受routes中的数据影响
      this.defaultActive = this.$route.meta.routerPath;
    }
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse;
      this.$emit('collapse', this.isCollapse);
    }
  }
};
</script>

<style>
.sidebar .el-submenu__title {
  padding: 0 5px !important;
  padding: 0;
  margin-right: 0;
}

.sidebar .el-menu--collapse {
  width: 40px !important;
}
</style>

<style lang="scss" scoped>
.sidebar {
  color: #fff;
  width: 208px;
  position: fixed;
  top: 32px;
  height: calc(100% - 32px);
  -webkit-transition: width 0.28s linear 0s;
  transition: width 0.28s linear 0s;
  transition-property: width;
  transition-duration: 0.28s;
  transition-timing-function: linear;
  transition-delay: 0s;
  z-index: 100;

  .sidebar-header {
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #20252a;
    line-height: 50px;
    height: 50px;
  }

  .sidebar-body {
    overflow: auto;
    position: absolute;
    width: 100%;
    top: 50px;
    bottom: 35px;
    background-color: #20252a;
  }

  .sidebar-footer {
    height: 35px;
    line-height: 35px;
    background: #3a8eff;
    cursor: pointer;
    text-align: center;
    font-size: 1.4rem;
    position: absolute;
    width: 100%;
    bottom: 0px;
  }
}

.z-collapse-menu {
  width: 40px !important;
}
</style>
