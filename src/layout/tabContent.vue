<template>
  <div class="main-body">
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane :key="item.name" v-for="(item) in editableTabs" :label="item.title" :name="item.name">
      </el-tab-pane>
    </el-tabs>

    <water-mack></water-mack>
  </div>
</template>

<script>
import waterMack from './waterMack';
export default {
  data () {
    return {
      editableTabsValue: '2',
      editableTabs: [{
        title: '测试导航1',
        name: '1'
      }, {
        title: '测试导航2',
        name: '2'
      },
      {
        title: '测试导航3',
        name: '3'
      },
      {
        title: '测试导航4',
        name: '4'
      }],
      tabIndex: 2
    };
  },
  methods: {
    handleTabsEdit (targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
  top: 50px;
  padding: 20px;
  padding-top: 0px;
}
</style>
