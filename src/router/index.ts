import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/PageHome.vue")
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import("@/views/PageNotFound.vue")
    },
  ]
})

export default router
