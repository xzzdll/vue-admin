import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/0',
      component: layout,
      children: [
        {
          path: '0',
          name: '0',
          meta: {
            title: '首页',
            routerPath: '0'
          },
          component: resolve =>
            require(['@/views/list/list1.vue'], resolve)
        },
        {
          path: '1',
          name: '1',
          meta: {
            title: '测试页面1',
            routerPath: '1'
          },
          component: resolve =>
            require(['@/views/list/list2.vue'], resolve)
        },
        {
          path: '2',
          name: '2',
          meta: {
            title: '测试页面2',
            routerPath: '2'
          },
          component: resolve =>
            require(['@/views/list/list3.vue'], resolve)
        },
        {
          path: '3',
          name: '3',
          meta: {
            title: '测试页面3',
            routerPath: '3'
          },
          component: resolve =>
            require(['@/views/list/list4.vue'], resolve)
        },
        {
          path: '4',
          name: '4',
          meta: {
            title: '测试页面4',
            routerPath: '4'
          },
          component: resolve =>
            require(['@/views/list/list5.vue'], resolve)
        }
      ]
    }
  ]
});
