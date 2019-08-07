import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router(routes);

router.afterEach((to, from) => {
  const pageTitle = to.meta.pageTitle;
  if (pageTitle) {
    document.title = pageTitle;
  }
});

export default router;
