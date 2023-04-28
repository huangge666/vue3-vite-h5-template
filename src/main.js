import { createApp } from 'vue'
import 'normalize.css/normalize.css'
// 全局样式
import "./assets/styles/index.less";
// tailwindcss
// import './assets/styles/tailwind.css'
// svg icon
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
