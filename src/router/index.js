import Vue from 'vue';
import Router from 'vue-router';
import user from '@/vuex/modules/user';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: resolve =>
        require(['@/layout/layout'], resolve),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '首页',
            routerPath: 'index'
          },
          component: resolve =>
            require(['@/views/list/index.vue'], resolve)
        },
        {
          path: '1',
          name: '1',
          meta: {
            title: '文章列表',
            routerPath: '1'
          },
          component: resolve =>
            require(['@/views/list/list2.vue'], resolve)
        },
        {
          path: '2',
          name: '2',
          meta: {
            title: '新文章',
            routerPath: '2'
          },
          component: resolve =>
            require(['@/views/list/list3.vue'], resolve)
        },
        {
          path: '3',
          name: '3',
          meta: {
            title: '访问统计',
            routerPath: '3'
          },
          component: resolve =>
            require(['@/views/list/list4.vue'], resolve)
        },
        {
          path: '4',
          name: '4',
          meta: {
            title: '文章列表访问统计',
            routerPath: '4'
          },
          component: resolve =>
            require(['@/views/list/list5.vue'], resolve)
        },
        {
          path: '5',
          name: '5',
          meta: {
            title: '用户列表',
            routerPath: '5'
          },
          component: resolve =>
            require(['@/views/list/list6.vue'], resolve)
        },
        {
          path: '6',
          name: '6',
          meta: {
            title: '新建用户',
            routerPath: '6'
          },
          component: resolve =>
            require(['@/views/list/list7.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      meta: { auth: true },
      component: resolve =>
        require(['@/views/common/login'], resolve)
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => !m.meta.auth)) {
    // 对路由进行验证
    if (user.state.isLogin === 1) { // 已经登陆
      next(); // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({ path: '/login', query: { Rurl: to.fullPath } });
    }
  } else {
    next();
  }
});

export default router;
