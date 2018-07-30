import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      meta: {
        title: '首页',
        routerPath: ''
      },
      children: [
        {
          path: '1',
          name: '1',
          meta: {
            title: '测试页面1',
            routerPath: '1'
          }
          // component: layout
        },
        {
          path: '2',
          name: '2',
          meta: {
            title: '测试页面2',
            routerPath: '2'
          }
          // component: layout
        },
        {
          path: '3',
          name: '3',
          meta: {
            title: '测试页面3',
            routerPath: '3'
          }
          // component: layout
        },
        {
          path: '4',
          name: '4',
          meta: {
            title: '测试页面4',
            routerPath: '4'
          }
          // component: layout
        }
      ]
    }
  ]
});
