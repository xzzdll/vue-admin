<template>
  <div class="main-body">
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane :key="item.name" v-for="(item) in tabs" :label="item.title" :name="item.name" :closable="item.isClosable === false ? false : true">
      </el-tab-pane>
    </el-tabs>

    <water-mack></water-mack>
  </div>
</template>

<script>
import waterMack from './waterMack';
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {
      editableTabsValue: '0',
      tabIndex: 0
    };
  },
  computed: {
    ...mapGetters({
      visitedTabs: 'getVisitedViews', // 所有的tabs页面
      defaultTabs: 'getDefaultViews' // 默认标签为首页
    }),
    tabs: function () {
      return [...this.defaultTabs, ...this.visitedTabs];
    }
  },
  methods: {
    ...mapActions({
      addVisitedTab: 'addVisitedView',
      delVisitedTab: 'delVisitedView',
      delOthersTabs: 'delOthersViews',
      delAllTabs: 'delAllViews'
    }),
    handleTabsEdit (targetName, action) {
      if (action === 'remove') {
        this.delVisitedTab(targetName);
      }
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
  width: calc(100% - 200px);
  min-width: 800px;
  left: 200px;
  top: 32px;
  padding: 20px;
  padding-top: 0px;
}
</style>
