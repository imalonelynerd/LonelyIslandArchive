import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import Credits from '@/views/CreditsPage.vue'
import PixelPage from '@/views/PixelPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    }, {
      path: '/credits',
      name: 'credits',
      component: Credits
    }, {
      path: '/pixel',
      name: 'pixel',
      component: PixelPage
    }
  ]
})

export default router
