export default [
  {
    path: '/mainAdmin',
    name: 'Main Admin Layout',
    component: () => import('@/layouts/MainAdminLayout.vue'),
    redirect: '/mainAdmin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        meta: {},
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/Account.vue'),
        meta: {},
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/Admin.vue'),
        meta: {},
      },
    ]
  },
  
]