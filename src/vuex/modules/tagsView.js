// 此处可以import api
// 形如ADD_VISITED_VIEWS的方法默认为不经常改动的方法注意规范 如果需要添加请参考https://vuex.vuejs.org/zh-cn/mutations.html 使用常量替代 Mutation 事件类型
const tagsView = {
  state: {
    visitedViews: [{
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
    }], // 所有正在游览的页面
    cachedViews: [], // 需要做缓存的页面
    defaultViews: [
      // 数据格式
      {
        title: '首页', // 展示的标题
        name: '0', // tab对应的别名
        isClosable: false // welcome 页面不支持关闭
      }
    ]
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.routerPath === view.meta.routerPath) || state.defaultViews.some(v => v.routerPath === view.meta.routerPath)) return;
      state.visitedViews.push({
        routerPath: view.meta.routerPath,
        name: view.name,
        label: view.meta.label || 'no-name',
        isClosable: view.meta.closable,
        key: view.meta.key
      });
      if (view.meta.cache) {
        state.cachedViews.push(view.name);
      }
    },
    DEL_VISITED_VIEWS: (state, viewName) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.name === viewName) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
      for (const i of state.cachedViews) {
        if (i === viewName) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      if (state.defaultViews.findIndex(n => n.name === view.name) !== -1) {
        state.visitedViews = [];
        state.cachedViews = [];
        return;
      }
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.name === view.name) {
          state.visitedViews = state.visitedViews.slice(i, i + 1);
          break;
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews = state.cachedViews.slice(index, index + 1);
          break;
        }
      }
    },
    DEL_ALL_VIEWS: (state) => {
      state.visitedViews = [];
      state.cachedViews = [];
    }
  },
  actions: {
    addVisitedView ({ commit }, view) {
      if (view.meta.hideInTab) {
        commit('ADD_VISITED_VIEWS', view.matched[1]);
      } else {
        commit('ADD_VISITED_VIEWS', view);
      }
    },
    delVisitedView ({ commit, state }, viewName) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', viewName);
        resolve([...state.visitedViews]);
      });
    },
    delOthersViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_OTHERS_VIEWS', view);
        resolve([...state.visitedViews]);
      });
    },
    delAllViews ({ commit, state }) {
      return new Promise((resolve) => {
        commit('DEL_ALL_VIEWS');
        resolve([...state.visitedViews]);
      });
    }
  },
  getters: {
    getVisitedViews: state => {
      return state.visitedViews;
    },
    getCacheViews: state => {
      return state.cachedViews;
    },
    getDefaultViews: state => {
      return state.defaultViews;
    }
  }
};

export default tagsView;
