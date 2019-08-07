export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/index'),
      meta: {
        pageTitle: '首页'
      }
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/pages/list/index'),
      meta: {
        pageTitle: '列表页'
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/pages/detail/index'),
      meta: {
        pageTitle: '详情页'
      }
    }
  ]
}