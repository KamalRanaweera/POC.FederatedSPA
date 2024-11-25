import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/RoutingComponentMain.vue')
    },
    {
      path: '/app-component-c/sub-route-one',
      name: 'sub-route-one',
      component: () => import("../components/SubRouteOne.vue"),
    },
  ],
})

export default router
