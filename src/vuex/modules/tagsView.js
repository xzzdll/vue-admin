// 此处可以import api
// 形如ADD_VISITED_VIEWS的方法默认为不经常改动的方法注意规范 如果需要添加请参考https://vuex.vuejs.org/zh-cn/mutations.html 使用常量替代 Mutation 事件类型
const tagsView = {
  state: {
    visitedViews: [], // 所有正在游览的页面
    defaultViews: [
      // 数据格式
      {
        routerPath: '/index',
        title: '首页', // 展示的标题
        name: 'index', // tab对应的别名
        isClosable: 1 // welcome 页面不支持关闭
      }
    ]
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.name === view.name) || state.defaultViews.some(v => v.name === view.name) || view.name === 'layout') return;
      state.visitedViews.push({
        routerPath: view.meta.routerPath,
        title: view.meta.title,
        name: view.name
      });
    },
    DEL_VISITED_VIEWS: (state, viewName) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.name === viewName) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
    }
  },
  actions: {
    addVisitedView ({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view);
    },
    delVisitedView ({ commit, state }, viewName) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', viewName);
        resolve([...state.visitedViews]);
      });
    }
  },
  getters: {
    getVisitedViews: state => {
      return state.visitedViews;
    },
    getDefaultViews: state => {
      return state.defaultViews;
    }
  }
};

export default tagsView;
