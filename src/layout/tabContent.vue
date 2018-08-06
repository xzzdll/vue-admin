<template>
  <div class="main-body" :style="{'width':width}">
    <el-tabs v-model="editableTabsValue" type="card" @tab-remove="handleTabsEdit" @tab-click="clickTab" style="width:100%;background-color: white">
      <el-tab-pane :key="index" v-for="(item,index) in tabs" :label="item.title" :name="item.name" :closable="item.isClosable !== 1 ? true : false">
      </el-tab-pane>
    </el-tabs>
    <div style="height:15px"></div>
    <div style="margin-left:10px;overflow: auto;overflow-x: hidden;position:relative;" :style="{width:pageWidth,height:pageHeight}">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <water-mack></water-mack>
  </div>
</template>

<script>
import waterMack from '../components/waterMack';
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {
      editableTabsValue: '0',
      pageWidth: 'auto',
      pageHeight: 'auto'
    };
  },
  props: ['width'],
  computed: {
    ...mapGetters({
      visitedTabs: 'getVisitedViews', // 所有的tabs页面
      defaultTabs: 'getDefaultViews' // 默认标签为首页
    }),
    tabs: function () {
      return [...this.defaultTabs, ...this.visitedTabs];
    }
  },
  created () {
    this.pageHeight = (document.documentElement.clientHeight - 88) + 'px';
    window.addEventListener('resize', () => {
      this.pageHeight = (document.documentElement.clientHeight - 88) + 'px';
    }, false);
  },
  methods: {
    ...mapActions({
      addVisitedTab: 'addVisitedView',
      delVisitedTab: 'delVisitedView'
    }),
    clickTab (tab) {
      this.$router.push(tab.name);
    },
    handleTabsEdit (targetName) {
      this.delVisitedTab(targetName).then((views) => {
        if (views.length === 0) {
          this.$router.push('/index');
        } else {
          const latestView = views.slice(-1)[0];
          this.$router.push(latestView.routerPath);
          this.editableTabsValue = latestView.name;
        }
      });
    }
  },
  mounted () {
    this.addVisitedTab(this.$route);
    this.editableTabsValue = this.$route.name;
  },
  watch: {
    $route () {
      // console.log(this.$route)
      this.addVisitedTab(this.$route);
      this.editableTabsValue = this.$route.name;
    }
  },
  components: {
    waterMack
  }
};
</script>

<style lang="scss" scoped>
.main-body {
  height: 800px;
  margin: auto 0;
  position: fixed;
  min-width: 800px;
  top: 32px;
  padding: 0px;
  background-color: #edeff5;
}
</style>

<style>
.main-body .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0;
  border-bottom: 1px solid #edeff5;
}

.el-tabs__header .is-active {
  background-color: #edeff5;
  border-bottom-color: #edeff5 !important;
}
</style>
