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
          path: 'articalList',
          name: 'articalList',
          meta: {
            title: '文章列表',
            routerPath: 'articalList'
          },
          component: resolve =>
            require(['@/views/list/articalList.vue'], resolve)
        },
        {
          path: 'newArtical',
          name: 'newArtical',
          meta: {
            title: '新文章',
            routerPath: 'newArtical'
          },
          component: resolve =>
            require(['@/views/list/newArtical.vue'], resolve)
        },
        {
          path: 'sayList',
          name: 'sayList',
          meta: {
            title: '说说列表',
            routerPath: 'sayList'
          },
          component: resolve =>
            require(['@/views/list/sayList.vue'], resolve)
        },
        {
          path: 'newSay',
          name: 'newSay',
          meta: {
            title: '写说说',
            routerPath: 'newSay'
          },
          component: resolve =>
            require(['@/views/list/newSay.vue'], resolve)
        },
        {
          path: 'editArtical',
          name: 'editArtical',
          meta: {
            title: '编辑文章',
            routerPath: 'editArtical'
          },
          component: resolve =>
            require(['@/views/list/editArtical.vue'], resolve)
        },
        {
          path: 'userList',
          name: 'userList',
          meta: {
            title: '用户列表',
            routerPath: 'userList'
          },
          component: resolve =>
            require(['@/views/list/userList.vue'], resolve)
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
