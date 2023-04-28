import { createRouter, createWebHashHistory } from 'vue-router'

// 页面配置
import routes from './config'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守护
export default router
