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
      component: () => import("remote_app/TestComponent")
    },
    {
      path: '/app-component-b',
      name: 'app-component-b',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/app-component-c',
      name: 'app-component-c',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/app-component-d',
      name: 'app-component-d',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
