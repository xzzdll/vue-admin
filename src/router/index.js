import Vue from 'vue';
import Router from 'vue-router';
import navbar from '@/components/navbar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar
    }
  ]
});
