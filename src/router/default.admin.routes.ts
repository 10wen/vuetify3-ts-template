export default [
  {
    path: "/defaultAdmin",
    name: "Default Admin Layout",
    component: () => import(
      /* webpackChunkName: "default-layout" */ "@/layouts/DefaultAdminLayout.vue"
    ),
    meta: {}
  }
]