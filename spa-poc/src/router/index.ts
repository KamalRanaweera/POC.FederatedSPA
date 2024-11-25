import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/app-component-a',
      name: 'app-component-a',
      component: () => import("module_simple/App"),
    },
    {
      path: '/app-component-b',
      name: 'app-component-b',
      component: () => import("module_pinia/App"),
    },
    {
      path: '/app-component-c',
      name: 'app-component-c',
      component: () => import("module_routing/App"),
    },
    {
      path: '/app-component-c/sub-route-one',
      name: 'sub-route-one',
      component: () => import("module_routing/SubRouteOne"),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
