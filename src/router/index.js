import Vue from 'vue';
import Router from 'vue-router';
import navbar from '@/components/navbar';
import main from '@/components/main';
import leftBar from '@/components/leftBar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      components: {
        default: navbar,
        a: main,
        b: leftBar
      }
    }
  ]
});
