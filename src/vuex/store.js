import Vue from 'vue';
import Vuex from 'vuex';
import tagsView from './modules/tagsView';

Vue.use(Vuex);

// const store = new Vuex.Store({
//   // 定义状态
//   state: {
//     author: 'Wise Wrong'
//   }
// });

const store = new Vuex.Store({
  // 定义状态
  modules: {
    tagsView
  }
});

export default store;
