import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
      meta: { transition: 'slide-left' }
    }
  ]
})

// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length
//   const fromDepth = from.path.split('/').length
//   to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
// })

export default router
