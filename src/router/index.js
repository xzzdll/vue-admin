import Vue from 'vue';
import Router from 'vue-router';
import navbar from '@/components/navbar';
import foot from '@/components/foot';
import main from '@/components/main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      components: {
        default: navbar,
        a: main,
        b: foot
      }
    }
  ]
});
