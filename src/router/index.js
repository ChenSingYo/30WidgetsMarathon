import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
const routes = [
  {
    // 須先設定根路徑
    path: '/',
    name: 'Home',
    component: Home
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router