import { createRouter, createWebHistory } from 'vue-router'

import MainAdminRoutes from './main.admin.routes'
import DefaultAdminRoutes from './default.admin.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/mainAdmin',
      meta: {},
    },
    ...MainAdminRoutes,
    ...DefaultAdminRoutes,
  ]
})

export default router
