import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlurringImageLoading from '../views/BlurringImageLoading.vue'
const routes = [
  {
    // 須先設定根路徑
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/1',
    name: 'Blurring Image Loading',
    component: BlurringImageLoading
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router