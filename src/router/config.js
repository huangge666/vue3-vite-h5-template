const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Model" */ '../pages/Index.vue')
  },
]

export default routes
