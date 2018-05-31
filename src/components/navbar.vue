<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">HTML</template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">CSS</template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Javascript</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">C# .NET</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">算法</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">Node</template>
        <el-menu-item index="6-1">选项1</el-menu-item>
        <el-menu-item index="6-2">选项2</el-menu-item>
        <el-menu-item index="6-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="9" style="float:right" disabled>
        <div style="fontSize:28px">John</div>
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
    handleSelect (key, keyPath) {

    }
  }
};
</script>
