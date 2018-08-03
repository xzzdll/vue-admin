import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '首页',
            routerPath: 'index'
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
        },
        {
          path: '5',
          name: '5',
          meta: {
            title: '测试页面5',
            routerPath: '5'
          },
          component: resolve =>
            require(['@/views/list/list6.vue'], resolve)
        },
        {
          path: '6',
          name: '6',
          meta: {
            title: '测试页面6',
            routerPath: '6'
          },
          component: resolve =>
            require(['@/views/list/list7.vue'], resolve)
        },
        {
          path: '7',
          name: '7',
          meta: {
            title: '测试页面7',
            routerPath: '7'
          },
          component: resolve =>
            require(['@/views/list/list8.vue'], resolve)
        },
        {
          path: '8',
          name: '8',
          meta: {
            title: '测试页面8',
            routerPath: '8'
          },
          component: resolve =>
            require(['@/views/list/list9.vue'], resolve)
        },
        {
          path: '9',
          name: '9',
          meta: {
            title: '测试页面9',
            routerPath: '9'
          },
          component: resolve =>
            require(['@/views/list/list10.vue'], resolve)
        },
        {
          path: '10',
          name: '10',
          meta: {
            title: '测试页面10',
            routerPath: '10'
          },
          component: resolve =>
            require(['@/views/list/list11.vue'], resolve)
        },
        {
          path: '11',
          name: '11',
          meta: {
            title: '测试页面11',
            routerPath: '11'
          },
          component: resolve =>
            require(['@/views/list/list12.vue'], resolve)
        },
        {
          path: '12',
          name: '12',
          meta: {
            title: '测试页面12',
            routerPath: '12'
          },
          component: resolve =>
            require(['@/views/list/list13.vue'], resolve)
        }
      ]
    }
  ]
});
