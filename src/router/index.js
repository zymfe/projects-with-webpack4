import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const indexPage = () => import('@/components/index');
const listPage = () => import('@/components/list');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      name: 'Index',
			path: '/index',
			component: indexPage
    },
    {
      name: 'List',
      path: '/list',
      component: listPage
    }
  ]
});