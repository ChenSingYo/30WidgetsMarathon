import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlurringImageLoading from '../views/BlurringImageLoading.vue'
import Covid19Tracker from '../views/Covid19Tracker.vue'
import ExpandingCards from '../views/ExpandingCards.vue'
import SectionQA from '../views/SectionQA.vue'
import ScrollAnimation from '../views/ScrollAnimation.vue'

const routes = [
  {
    // 須先設定根路徑
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2',
    name: 'Blurring Image Loading',
    component: BlurringImageLoading
  },
  {
    path: '/3',
    name: 'Expanding Cards',
    component: ExpandingCards
  },
  {
    path: '/4',
    name: 'Covid 19 Tracker',
    component: Covid19Tracker
  },
  {
    path: '/5',
    name: 'Q&A Section',
    component: SectionQA
  },
  {
    path: '/6',
    name: 'Scroll Animation',
    component: ScrollAnimation
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router