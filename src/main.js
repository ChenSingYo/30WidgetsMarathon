import { createApp } from 'vue'
import App from './App.vue'
// 新增這行
import router from './router'
import './assets/index.css'

createApp(App).use(router).mount('#app')
