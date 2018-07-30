<template>
  <el-row class="tac" style="position:fixed;width:210px;height:861px;top:32px">
    <el-col :span="24">
      <div style="height:61px;background-color:#20252a;position: relative;">
        <img src="../assets/img/logo_bg.png" class='logo' />
      </div>
      <el-menu default-active="2" class="el-menu-vertical-demo" v-bind:router="false" v-bind:unique-opened="true" background-color="#20252a" text-color="#fff" active-text-color="#ffd04b" style="height:861px;border-right:none">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="executeRouter('5','选项一')">选项1</el-menu-item>
            <el-menu-item index="1-2" @click="executeRouter('6','选项二')">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="executeRouter('7','选项三')">选项1</el-menu-item>
            <el-menu-item index="2-2" @click="executeRouter('8','选项四')">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions({
      addVisitedTab: 'addVisitedView' // 将 `this.addVisitedTab()` 映射为 `this.$store.dispatch('addVisitedViews')`
    }),
    executeRouter (router, menu) {
      this.addVisitedTab({
        title: menu,
        name: router
      });
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
